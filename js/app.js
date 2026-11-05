/* ============================================================
 * app.js — 开发者导航站交互逻辑
 * 站点检索 / 标签筛选 / 收藏 / 登录注册 / 管理员增删站点 / 侧栏收缩
 * ============================================================ */
'use strict';

/* ---------------- 常量与工具 ---------------- */
const LS = {
  theme: 'devnav_theme',
  guest: 'devnav_guest_favs',
  collapsed: 'devnav_sidebar_collapsed',
  engine: 'devnav_engine',
  jumpSkip: 'devnav_jump_skip',
  likes: 'devnav_likes',
  clicks: 'devnav_clicks'
};
const HOME_PER_CAT = 12;                // 首页每个分类预览的站点数（桌面）
const MOBILE_PER_CAT = 4;               // 移动端（≤900px）每个分类展示数，方便快速滑到页脚
const HOME_CAT_LIMIT = 6;               // 首屏精选：默认展示的分类数，其余折叠

/* 移动端判定：≤900px 侧栏变顶部胶囊时启用 */
const isCompactCat = () => {
  try { return window.matchMedia ? window.matchMedia('(max-width: 900px)').matches : false; }
  catch (e) { return false; }
};

const CAT_MAP = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
const hostOf = u => { try { return new URL(u).hostname; } catch { return String(u).replace(/^https?:\/\//, '').split('/')[0]; } };
const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
const hueOf = str => { let h = 0; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360; return h; };

/* ---------------- 全局状态 ---------------- */
const state = {
  view: 'home',      // home | hot | fav | rank
  cat: null,
  tag: null,
  query: '',
  sort: 'default',
  engine: 'baidu',
  collapsed: load(LS.collapsed, false),
  catsExpanded: false,   // 首屏折叠：是否展开全部分类
  rankCat: 'all',        // 排行榜：当前分类
  rankSort: 'clicks',    // 排行榜：clicks | traffic | stars
  renderKey: ''          // 上次渲染的视图指纹，用于判断是否播放入场动效
};

/* 页面滚动：移动端禁用平滑动画——
   iOS/Android 上程序化 smooth 滚动无法被触摸打断，会产生拉锯抖动 */
const scrollPage = (top = 0) => {
  window.scrollTo({ top, behavior: isCompactCat() ? 'auto' : 'smooth' });
};
const scrollToContent = () => {
  const el = document.querySelector('.content');
  if (!el) return;
  try { el.scrollIntoView({ block: 'start', behavior: isCompactCat() ? 'auto' : 'smooth' }); }
  catch (e) { el.scrollIntoView(); }
};

let ALL = [];        // 生效站点（内置去重后）
let favSet = new Set();
let likedSet = new Set();
let clickMap = {};   // 站内真实点击计数 { 站点名: 次数 }

/* ---------------- 站点集合构建 ---------------- */
function rebuildSites() {
  const seen = new Set();
  ALL = [];
  for (const s of SITES) {
    if (seen.has(s.name)) continue;
    seen.add(s.name);
    ALL.push(s);
  }
}

/* ---------------- 收藏（固定在浏览器本地，无需账号） ---------------- */
function loadFavs() { favSet = new Set(load(LS.guest, [])); }
function persistFavs() { save(LS.guest, Array.from(favSet)); }
function toggleFav(name) {
  if (favSet.has(name)) { favSet.delete(name); toast(`已取消收藏「${name}」`); }
  else { favSet.add(name); toast(`已收藏「${name}」`); }
  persistFavs();
  render();
}

/* ---------------- 点赞投票 ---------------- */
function loadLikes() { likedSet = new Set(load(LS.likes, [])); }
function persistLikes() { save(LS.likes, Array.from(likedSet)); }
function likeCount(name) { return 3 + (hueOf(name) % 46) + (likedSet.has(name) ? 1 : 0); }
function toggleLike(name) {
  if (likedSet.has(name)) { likedSet.delete(name); toast(`已取消对「${name}」的点赞`); }
  else { likedSet.add(name); toast(`已为「${name}」点赞，感谢参与！`); }
  persistLikes();
  render();
}

/* ============================================================
 * 排行榜指标：点击热度 / 流量估算 / 推荐度
 * 基线由收录热度（stars/hot）决定，叠加站内真实点击计数
 * ============================================================ */
const fmtNum = n => n >= 1e8 ? (n / 1e8).toFixed(1).replace(/\.0$/, '') + ' 亿'
  : n >= 1e4 ? (n / 1e4).toFixed(1).replace(/\.0$/, '') + ' 万' : String(n);

function clicksOf(s) {
  return s.stars * 2400 + (hueOf(s.name) % 7000) + (s.hot ? 3600 : 0) + (clickMap[s.name] || 0);
}
function trafficOf(s) {
  return clicksOf(s) * 8 + s.stars * 2600 + (hueOf(s.name + '#t') % 6000);
}
function recBadge(s) {
  if (s.stars >= 5) return ['强烈推荐', 'r5'];
  if (s.stars >= 4) return ['优质推荐', 'r4'];
  if (s.stars >= 3) return ['良好', 'r3'];
  return ['一般', 'r2'];
}
function iconGrad(color) {
  const base = color || '#0e9fb2';
  return `linear-gradient(135deg, color-mix(in srgb, ${base} 68%, #fff), color-mix(in srgb, ${base} 86%, #000))`;
}

/* 站点官网图标：优先直取目标站 /favicon.ico（官网 logo 本体），
   失败降级 Google 图标服务，再失败移除图片露出首字母方块 */
function faviconImg(url) {
  const host = hostOf(url);
  return `<img alt="" loading="lazy" src="https://${esc(host)}/favicon.ico"\
 onload="this.style.opacity=1"\
 onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src='https://www.google.com/s2/favicons?sz=64&amp;domain=${esc(host)}';}else{this.remove();}"\
 style="opacity:0">`;
}

/* 记录站内真实点击（跳转确认框点「立即访问」或免确认直达时调用） */
function trackClick(rawName) {
  let s = ALL.find(x => x.name === rawName);
  if (!s && rawName.includes('：')) s = ALL.find(x => x.name === rawName.split('：').pop());
  if (!s) return;
  clickMap[s.name] = (clickMap[s.name] || 0) + 1;
  save(LS.clicks, clickMap);
}

/* ============================================================
 * 渲染：分类侧栏 / 热标签 / 引擎 / 底部
 * ============================================================ */
function renderSidebar() {
  const counts = {};
  ALL.forEach(s => counts[s.cat] = (counts[s.cat] || 0) + 1);
  $('#catList').innerHTML = `
    <li><button class="cat-item ${!state.cat ? 'is-active' : ''}" data-cat="" title="全部网站">
      <span class="ci-icon">🗂️</span><span class="ci-name">全部网站</span>
      <span class="ci-count">${ALL.length}</span></button></li>
    ${CATEGORIES.filter(c => counts[c.id]).map(c => `
      <li><button class="cat-item ${state.cat === c.id ? 'is-active' : ''}" data-cat="${c.id}" title="${esc(c.name)}">
        <span class="ci-icon">${c.icon}</span><span class="ci-name">${c.name}</span>
        <span class="ci-count">${counts[c.id] || 0}</span></button></li>`).join('')}`;
}

function renderHeroTags() {
  const freq = {};
  ALL.forEach(s => s.tags.forEach(t => freq[t] = (freq[t] || 0) + 1));
  const top = Object.entries(freq).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh')).slice(0, 14);
  $('#heroTags').innerHTML = top.map(([t]) => `<button class="htag" data-tag="${esc(t)}"># ${esc(t)}</button>`).join('');
}

function renderEngines() {
  const opts = ENGINES.map(e => `<option value="${e.id}">${e.name}</option>`).join('');
  $('#engineSelect').innerHTML = opts;
  $('#heroEngine').innerHTML = opts;
  state.engine = load(LS.engine, 'baidu');
  if (!ENGINES.some(e => e.id === state.engine)) state.engine = 'baidu';
  $('#engineSelect').value = state.engine;
  $('#heroEngine').value = state.engine;
}

function renderFooter() {
  $('#footSites').textContent = ALL.length;
  $('#footCats').textContent = CATEGORIES.length;
  $('#statSites').textContent = ALL.length;
  $('#statCats').textContent = CATEGORIES.length;
  const counts = {};
  ALL.forEach(s => counts[s.cat] = (counts[s.cat] || 0) + 1);
  const picks = CATEGORIES.filter(c => counts[c.id]).slice(0, 10);
  $('#footCatList').innerHTML = picks.map(c => `<li><a href="#" data-cat="${c.id}">${c.icon} ${c.name}</a></li>`).join('');
}

/* ============================================================
 * 渲染：站点卡片
 * ============================================================ */
function cardHTML(s) {
  const cat = CAT_MAP[s.cat] || {};
  // 图标兜底色统一用分类色系，避免满屏随机色
  const base = cat.color || '#0e9fb2';
  const grad = `linear-gradient(135deg, color-mix(in srgb, ${base} 68%, #fff), color-mix(in srgb, ${base} 86%, #000))`;
  const letter = /[a-zA-Z]/.test(s.name[0]) ? s.name[0].toUpperCase() : s.name[0];
  const fav = favSet.has(s.name);
  const liked = likedSet.has(s.name);
  const stars = '★'.repeat(s.stars) + '☆'.repeat(5 - s.stars);
  return `
  <article class="card" style="--card-accent:${cat.color || '#0e9fb2'}">
    <a class="card-link" href="${esc(s.url)}" data-jump-name="${esc(s.name)}" data-jump-url="${esc(s.url)}" title="打开 ${esc(s.name)}"></a>
    <div class="card-icon" style="background:${grad}">
      <span>${esc(letter)}</span>
      ${faviconImg(s.url)}
    </div>
    <div class="card-body">
      <div class="card-top">
        <div class="card-name">${esc(s.name)}</div>
      </div>
      <div class="card-desc">${esc(s.desc || hostOf(s.url))}</div>
      <div class="card-tags">
        <span class="ctag" title="热度 ${s.stars}/5" style="color:var(--star);background:transparent;padding-left:0">${stars}</span>
        ${s.tags.map(t => `<button class="ctag" data-tag="${esc(t)}">${esc(t)}</button>`).join('')}
      </div>
    </div>
    <button class="card-like ${liked ? 'is-liked' : ''}" data-like="${esc(s.name)}" title="${liked ? '取消点赞' : '点个赞'}">👍 <span>${likeCount(s.name)}</span></button>
    <button class="card-fav ${fav ? 'is-fav' : ''}" data-fav="${esc(s.name)}" title="${fav ? '取消收藏' : '收藏该网站'}">${fav ? '★' : '☆'}</button>
  </article>`;
}

/* 按当前状态过滤 */
function filtered() {
  let arr = ALL.slice();
  if (state.view === 'fav') arr = arr.filter(s => favSet.has(s.name));
  if (state.view === 'hot') arr = arr.filter(s => s.hot);
  if (state.cat) arr = arr.filter(s => s.cat === state.cat);
  if (state.tag) arr = arr.filter(s => s.tags.includes(state.tag));
  const q = state.query.trim().toLowerCase();
  if (q) arr = arr.filter(s =>
    s.name.toLowerCase().includes(q) ||
    (s.desc || '').toLowerCase().includes(q) ||
    s.tags.some(t => t.toLowerCase().includes(q)) ||
    (CAT_MAP[s.cat]?.name || '').toLowerCase().includes(q));

  if (state.sort === 'stars') arr.sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name, 'zh'));
  else if (state.sort === 'name') arr.sort((a, b) => a.name.localeCompare(b.name, 'zh'));
  else arr.sort((a, b) => (b.hot === true) - (a.hot === true) || b.stars - a.stars);
  return arr;
}

function render() {
  renderSidebar();
  renderFooter();
  if (state.view === 'rank') { renderRankView(); return; }
  const list = filtered();
  const box = $('#sections');
  const isFlat = !!(state.query || state.tag || state.cat || state.view !== 'home' || state.sort !== 'default');

  // 视图指纹：视图真正变化才播放入场动效（点赞/收藏等原地刷新不重播）
  const key = [state.view, state.cat, state.tag, state.query, state.sort, state.catsExpanded, isCompactCat() ? 'm' : 'd'].join('|');
  const viewChanged = key !== state.renderKey;
  state.renderKey = key;

  let title = '常用推荐';
  if (state.view === 'fav') title = '我的收藏';
  else if (state.view === 'hot') title = '热门发现';
  else if (state.query) title = `搜索：${state.query}`;
  else if (state.tag) title = `标签：${state.tag}`;
  else if (state.cat) title = CAT_MAP[state.cat]?.name || '分类';
  else if (state.sort !== 'default') title = '全部网站';
  $('#viewTitle').textContent = title;
  $('#viewCount').textContent = `共 ${list.length} 个网站`;

  $('#activeFilters').innerHTML = [
    state.query ? `<span class="af">关键词：${esc(state.query)}<button data-clear="query">✕</button></span>` : '',
    state.tag   ? `<span class="af">标签：${esc(state.tag)}<button data-clear="tag">✕</button></span>` : '',
    state.cat   ? `<span class="af">分类：${esc(CAT_MAP[state.cat]?.name || '')}<button data-clear="cat">✕</button></span>` : ''
  ].join('');

  $('#empty').classList.toggle('hide', list.length > 0);
  box.classList.toggle('animate', viewChanged);
  if (!list.length) { box.innerHTML = ''; box.classList.remove('is-limited'); syncChrome(); updateSpy(); return; }

  if (isFlat) {
    box.classList.remove('is-limited');
    box.innerHTML = `<section class="section"><div class="grid">${list.map(cardHTML).join('')}</div></section>`;
  } else {
    // 首页分组预览：首屏只展示前 6 个分类，其余折叠，可一键展开
    const activeCats = CATEGORIES.filter(c => list.some(s => s.cat === c.id));
    const perCat = isCompactCat() ? MOBILE_PER_CAT : HOME_PER_CAT;
    // 移动端不折叠：全部分类直接展示（每类 4 个），一滑到底看页脚宣传区
    const limited = !isCompactCat() && !state.catsExpanded && activeCats.length > HOME_CAT_LIMIT;
    box.classList.toggle('is-limited', limited);
    box.innerHTML = activeCats.map((c, idx) => {
      const items = list.filter(s => s.cat === c.id);
      const extra = limited && idx >= HOME_CAT_LIMIT ? ' sec-extra' : '';
      const show = items.slice(0, perCat);
      return `
      <section class="section${extra}" id="sec-${c.id}">
        <div class="section-head">
          <span class="sh-icon" style="background:color-mix(in srgb, ${c.color} 14%, transparent)">${c.icon}</span>
          <h3>${c.name}</h3>
          <span class="sh-count">${items.length} 个</span>
          ${c.desc ? `<span class="sh-desc" title="${esc(c.desc)}">${esc(c.desc)}</span>` : ''}
          <button class="sh-more" data-cat="${c.id}">查看全部 →</button>
        </div>
        <div class="grid">${show.map(cardHTML).join('')}</div>
      </section>`;
    }).join('') + (limited ? `
      <div class="more-cats-wrap"><button class="btn btn-ghost" id="moreCats">展开其余 ${activeCats.length - HOME_CAT_LIMIT} 个分类 ↓</button></div>` : '');
  }
  setupCards(viewChanged);
  syncChrome();
  updateSpy();
}

/* ============================================================
 * 网站排行榜：总榜 TOP50 + 分类榜，按点击热度 / 流量 / 推荐度排序
 * ============================================================ */
function rankHTML(cat, sort) {
  const pool = cat === 'all' ? ALL.slice() : ALL.filter(s => s.cat === cat);
  const metric = s => sort === 'traffic' ? trafficOf(s)
    : sort === 'stars' ? s.stars * 1e6 + clicksOf(s)
    : clicksOf(s);
  const sorted = pool.sort((a, b) => metric(b) - metric(a) || a.name.localeCompare(b.name, 'zh'));
  const list = cat === 'all' ? sorted.slice(0, 50) : sorted;
  const maxV = Math.max(1, ...list.map(clicksOf));

  const tabs = [`<button class="rank-tab ${cat === 'all' ? 'is-active' : ''}" data-rank-cat="all">🏆 总榜 TOP 50</button>`]
    .concat(CATEGORIES.filter(c => ALL.some(s => s.cat === c.id)).map(c =>
      `<button class="rank-tab ${cat === c.id ? 'is-active' : ''}" data-rank-cat="${c.id}">${c.icon} ${c.name}</button>`)).join('');
  const sorts = [['clicks', '按点击热度'], ['traffic', '按流量'], ['stars', '按推荐度']].map(([v, label]) =>
    `<button class="rank-chip ${sort === v ? 'is-active' : ''}" data-rank-sort="${v}">${label}</button>`).join('');

  const rows = list.map((s, i) => {
    const c = CAT_MAP[s.cat] || {};
    const no = i + 1;
    const medal = no <= 3 ? ` top${no}` : '';
    const [label, cls] = recBadge(s);
    const letter = /[a-zA-Z]/.test(s.name[0]) ? s.name[0].toUpperCase() : s.name[0];
    return `
    <li class="rank-row" data-jump-name="${esc(s.name)}" data-jump-url="${esc(s.url)}" title="访问 ${esc(s.name)}">
      <span class="rk-no${medal}">${no}</span>
      <span class="rk-icon" style="background:${iconGrad(c.color)}"><span>${esc(letter)}</span>${faviconImg(s.url)}</span>
      <div class="rk-main">
        <div class="rk-name">${esc(s.name)}${s.hot ? '<i class="rk-hot">HOT</i>' : ''}${favSet.has(s.name) ? '<i class="rk-favmark">★</i>' : ''}</div>
        <div class="rk-desc">${esc(s.desc || hostOf(s.url))}</div>
      </div>
      <span class="rk-cat" style="color:${c.color || 'var(--accent)'}">${c.icon || ''} ${c.name || ''}</span>
      <div class="rk-heat" title="点击热度（含站内真实点击）">
        <div class="rk-bar"><i style="width:${Math.round(clicksOf(s) / maxV * 100)}%"></i></div>
        <span>${fmtNum(clicksOf(s))} 次点击</span>
      </div>
      <span class="rk-traffic" title="月访问量估算">${fmtNum(trafficOf(s))}<em>月访问估算</em></span>
      <span class="rk-rec">
        <span class="rk-stars" title="推荐度 ${s.stars}/5">${'★'.repeat(s.stars)}${'☆'.repeat(5 - s.stars)}</span>
        <i class="rk-badge ${cls}">${label}</i>
      </span>
    </li>`;
  }).join('');

  return `
  <section class="section rank-wrap">
    <div class="rank-tabs">${tabs}</div>
    <div class="rank-sort"><span>排序：</span>${sorts}<span class="rank-note">点击热度含站内真实点击 · 流量为综合估算值</span></div>
    <ol class="rank-list">${rows}</ol>
  </section>`;
}

function renderRankView() {
  const box = $('#sections');
  const cat = state.rankCat || 'all';
  const sort = state.rankSort || 'clicks';
  const key = ['rank', cat, sort].join('|');
  const viewChanged = key !== state.renderKey;
  state.renderKey = key;

  const pool = cat === 'all' ? ALL : ALL.filter(s => s.cat === cat);
  $('#viewTitle').textContent = '网站排行榜';
  $('#viewCount').textContent = cat === 'all' ? `总榜 TOP 50 · 收录共 ${ALL.length} 个站点` : `共 ${pool.length} 个网站`;
  $('#activeFilters').innerHTML = '';
  $('#empty').classList.add('hide');
  box.classList.remove('is-limited');
  box.classList.toggle('animate', viewChanged);
  box.innerHTML = rankHTML(cat, sort);
  syncChrome();
  updateSpy();
}

/* 卡片入场动效：滚动进入视口时依次浮现；非视图切换时不重播 */
let cardObserver = null;
function setupCards(animate) {
  const cards = $$('#sections .card');
  if (!animate || !('IntersectionObserver' in window)) {
    cards.forEach(c => c.classList.add('in'));
    return;
  }
  if (cardObserver) cardObserver.disconnect();
  cardObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        cardObserver.unobserve(en.target);
      }
    });
  }, { rootMargin: '0px 0px -36px 0px', threshold: 0.05 });
  cards.forEach((c, i) => {
    if (c.classList.contains('in')) return;
    c.style.animationDelay = `${(i % 12) * 32}ms`;
    cardObserver.observe(c);
  });
}

/* 同步需要跟随状态变化的界面元素 */
function syncChrome() {
  $('#favBadge').textContent = favSet.size;
  applyCollapse(state.collapsed);
}

/* ============================================================
 * 跳转确认弹窗
 * ============================================================ */
let jumpUrl = '';

function openJump(name, url) {
  jumpUrl = url;
  $('#jumpName').textContent = name;
  $('#jumpUrl').textContent = url;
  $('#jumpMask').classList.remove('hide');
}
function closeJump() { $('#jumpMask').classList.add('hide'); }
function requestJump(name, url) {
  if (load(LS.jumpSkip, false)) { trackClick(name); window.open(url, '_blank', 'noopener'); return; }
  openJump(name, url);
}

/* ============================================================
 * 侧栏滚动同步（scrollspy）：主页分组浏览时，
 * 高亮项跟随当前滚动到的分类区块移动
 * ============================================================ */
let spyTick = false;

function spyActive() {
  // 仅在桌面首页分组模式（无筛选）下启用；移动端胶囊栏无需滚动同步
  return !isCompactCat() && state.view === 'home' && !state.cat && !state.tag && !state.query && state.sort === 'default';
}

function updateSpy() {
  spyTick = false;
  const items = $$('#catList .cat-item');
  if (!items.length) return;
  if (!spyActive()) {
    items.forEach(b => b.classList.toggle('is-spy', false));
    return;
  }
  const line = (window.innerHeight || 800) * 0.35;   // 视口上部判定线
  let current = '';                                   // 空串 = 「全部网站」
  $$('#sections .section[id^="sec-"]')
    .filter(sec => state.catsExpanded || !sec.classList.contains('sec-extra'))
    .forEach(sec => {
      if (sec.getBoundingClientRect().top <= line) current = sec.id.slice(4);
    });
  items.forEach(b => b.classList.toggle('is-spy', (b.dataset.cat || '') === current));
  const active = items.find(b => b.classList.contains('is-spy'));
  if (active) {
    // 只滚动侧栏容器自身居中，绝不能 scrollIntoView——移动端会与触摸滚动冲突导致整页抖动
    const list = $('#catList');
    try {
      if (list.scrollWidth > list.clientWidth + 1) {
        const left = active.offsetLeft - list.clientWidth / 2 + active.offsetWidth / 2;
        list.scrollTo ? list.scrollTo({ left, behavior: 'smooth' }) : (list.scrollLeft = left);
      } else if (list.scrollHeight > list.clientHeight + 1) {
        const top = active.offsetTop - list.clientHeight / 2 + active.offsetHeight / 2;
        list.scrollTo ? list.scrollTo({ top, behavior: 'smooth' }) : (list.scrollTop = top);
      }
    } catch (e) { /* 老浏览器无平滑滚动，忽略 */ }
  }
}

function queueSpy() {
  if (spyTick) return;
  spyTick = true;
  requestAnimationFrame ? requestAnimationFrame(updateSpy) : setTimeout(updateSpy, 16);
}

/* ============================================================
 * 搜索
 * ============================================================ */
function matchSites(q, n = 8) {
  q = q.trim().toLowerCase();
  if (!q) return [];
  return ALL
    .map(s => {
      let score = 0;
      if (s.name.toLowerCase().includes(q)) score += 10;
      if (s.tags.some(t => t.toLowerCase().includes(q))) score += 6;
      if ((s.desc || '').toLowerCase().includes(q)) score += 3;
      if ((CAT_MAP[s.cat]?.name || '').toLowerCase().includes(q)) score += 2;
      return { s, score: score > 0 ? score + s.stars * 0.1 : 0 };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map(x => x.s);
}

/* 即时搜索：输入防抖后直接过滤结果区 */
let liveTimer;
function liveQuery(raw) {
  clearTimeout(liveTimer);
  liveTimer = setTimeout(() => {
    const q = String(raw ?? '').trim();
    if (!q) {
      if (state.query || state.tag || state.cat || state.view !== 'home') {
        state.query = ''; state.tag = null; state.cat = null; setNav('home'); render();
      }
      return;
    }
    state.query = q; state.view = 'home'; state.tag = null; state.cat = null;
    setNav('home'); render();
  }, 160);
}

function runSearch(q) {
  if (!q) return;
  if (matchSites(q, 1).length) {
    state.query = q; state.view = 'home'; state.cat = null; state.tag = null;
    setNav('home'); render();
    document.querySelector('.content') ? scrollToContent() : null;
  } else {
    const e = ENGINES.find(x => x.id === state.engine) || ENGINES[0];
    window.open(e.url + encodeURIComponent(q), '_blank');
  }
}

/* ============================================================
 * 视图 / 侧栏收缩
 * ============================================================ */
function setNav(view) {
  state.view = view;
  $$('.topnav-item').forEach(b => b.classList.toggle('is-active', b.dataset.nav === view));
  if (view === 'fav') { state.query = ''; state.tag = null; state.cat = null; if ($('#heroInput')) $('#heroInput').value = ''; }
  if (view === 'rank') {
    state.query = ''; state.tag = null; state.cat = null; state.sort = 'default';
    if ($('#heroInput')) $('#heroInput').value = '';
    const ss = $('#sortSelect'); if (ss) ss.value = 'default';
  }
}
function goHome() {
  state.query = ''; state.tag = null; state.cat = null; state.sort = 'default';
  $('#sortSelect').value = 'default'; $('#heroInput').value = '';
  setNav('home'); render();
}
function applyCollapse(v) {
  state.collapsed = !!v;
  $('#layout').classList.toggle('is-collapsed', state.collapsed);
  const btn = $('#collapseBtn');
  btn.textContent = state.collapsed ? '⟩' : '⟨';
  btn.title = state.collapsed ? '展开侧边栏（快捷键 [ ）' : '收缩侧边栏（快捷键 [ ）';
  save(LS.collapsed, state.collapsed);
}
const toggleCollapse = () => applyCollapse(!state.collapsed);

/* ============================================================
 * 主题 / Toast
 * ============================================================ */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  $('#themeBtn').textContent = t === 'dark' ? '☀️' : '🌙';
  save(LS.theme, t);
}
let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2000);
}

/* ============================================================
 * 事件绑定
 * ============================================================ */
function bind() {
  /* 跳转确认弹窗元素存在性（防御） */
  if (typeof window.requestAnimationFrame !== 'function') window.requestAnimationFrame = fn => setTimeout(fn, 16);

  /* 统一的导航按钮（头部 / 底部） */
  document.addEventListener('click', e => {
    const nav = e.target.closest('[data-nav]');
    if (nav) {
      e.preventDefault();
      setNav(nav.dataset.nav);
      render();
      scrollPage(0);
      return;
    }
    const jump = e.target.closest('[data-cat]');
    if (jump && !jump.classList.contains('cat-item') && !jump.classList.contains('sh-more')) {
      e.preventDefault();
      state.cat = jump.dataset.cat; state.tag = null; state.query = ''; state.view = 'home';
      setNav('home'); render(); scrollPage(0);
    }
  });

  /* 头部搜索 */
  const hs = $('#headerSearch');
  const headerRun = () => { const q = hs.value.trim(); if (!q) return; $('#heroInput').value = q; runSearch(q); };
  hs.addEventListener('keydown', e => { if (e.key === 'Enter') headerRun(); });
  $('#headerSearchBtn').addEventListener('click', headerRun);
  hs.addEventListener('input', () => { $('#heroInput').value = hs.value; liveQuery(hs.value); });

  /* Hero 搜索：输入即搜 */
  const hi = $('#heroInput');
  hi.addEventListener('input', () => liveQuery(hi.value));
  hi.addEventListener('keydown', e => { if (e.key === 'Enter') runSearch(hi.value.trim()); });
  $('#heroBtn').addEventListener('click', () => runSearch(hi.value.trim()));

  /* 盲盒探索：随机抽一个好站 */
  $('#luckyBtn').addEventListener('click', () => {
    if (!ALL.length) return;
    const s = ALL[Math.floor(Math.random() * ALL.length)];
    openJump(`🎲 盲盒好站：${s.name}`, s.url);
  });

  /* 搜索引擎 */
  const setEngine = v => { state.engine = v; save(LS.engine, v); $('#engineSelect').value = v; $('#heroEngine').value = v; };
  $('#engineSelect').addEventListener('change', e => setEngine(e.target.value));
  $('#heroEngine').addEventListener('change', e => setEngine(e.target.value));

  /* 侧栏分类 */
  $('#catList').addEventListener('click', e => {
    const btn = e.target.closest('.cat-item'); if (!btn) return;
    state.cat = btn.dataset.cat || null; state.tag = null; state.view = 'home'; state.query = '';
    $('#heroInput').value = ''; setNav('home'); render();
    scrollPage(0);
  });

  /* Hero 标签 */
  $('#heroTags').addEventListener('click', e => {
    const b = e.target.closest('.htag'); if (!b) return;
    state.tag = b.dataset.tag; state.cat = null; state.query = ''; state.view = 'home';
    $('#heroInput').value = ''; setNav('home'); render();
    scrollToContent();
  });

  /* 内容区委托 */
  $('#sections').addEventListener('click', e => {
    const rrow = e.target.closest('.rank-row');
    if (rrow) { requestJump(rrow.dataset.jumpName, rrow.dataset.jumpUrl); return; }
    const rtab = e.target.closest('[data-rank-cat]');
    if (rtab) { state.rankCat = rtab.dataset.rankCat; render(); scrollPage(0); return; }
    const rchip = e.target.closest('[data-rank-sort]');
    if (rchip) { state.rankSort = rchip.dataset.rankSort; render(); return; }
    if (e.target.closest('#moreCats')) { state.catsExpanded = true; render(); return; }
    const link = e.target.closest('.card-link');
    if (link) {
      e.preventDefault();
      requestJump(link.dataset.jumpName, link.dataset.jumpUrl);
      return;
    }
    const like = e.target.closest('.card-like');
    if (like) { e.preventDefault(); return toggleLike(like.dataset.like); }
    const fav = e.target.closest('.card-fav');
    if (fav) { e.preventDefault(); return toggleFav(fav.dataset.fav); }
    const tag = e.target.closest('.ctag[data-tag]');
    if (tag) {
      e.preventDefault();
      state.tag = tag.dataset.tag; state.cat = null; state.query = ''; state.view = 'home';
      $('#heroInput').value = ''; setNav('home'); render();
      scrollPage(0);
      return;
    }
    const more = e.target.closest('.sh-more');
    if (more) {
      state.cat = more.dataset.cat; state.view = 'home'; state.tag = null; state.query = '';
      render(); scrollPage(0);
    }
  });

  /* 筛选清除 */
  $('#activeFilters').addEventListener('click', e => {
    const b = e.target.closest('[data-clear]'); if (!b) return;
    state[b.dataset.clear] = null;
    if (b.dataset.clear === 'query') $('#heroInput').value = '';
    render();
  });
  $('#clearFilter').addEventListener('click', goHome);
  $('#sortSelect').addEventListener('change', e => { state.sort = e.target.value; render(); });

  /* 跳转确认弹窗 */
  $('#jumpGo').addEventListener('click', () => {
    if ($('#jumpSkip').checked) save(LS.jumpSkip, true);
    trackClick($('#jumpName').textContent);
    const url = jumpUrl;
    closeJump();
    window.open(url, '_blank', 'noopener');
    if (state.view === 'rank') render();   // 排行榜内点击后立即反映热度变化
  });
  $('#jumpCancel').addEventListener('click', closeJump);
  $('#jumpClose').addEventListener('click', closeJump);
  $('#jumpMask').addEventListener('click', e => { if (e.target.id === 'jumpMask') closeJump(); });

  /* 侧栏收缩 / 主题 / 返回顶部 */
  $('#collapseBtn').addEventListener('click', toggleCollapse);
  $('#themeBtn').addEventListener('click', () => applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
  $('#toTop').addEventListener('click', () => scrollPage(0));
  $('#footTop').addEventListener('click', e => { e.preventDefault(); scrollPage(0); });

  /* 底部入口 */
  $('#footSubmit').addEventListener('click', () => toast('已收到！请通过公众号留言提交站点'));

  /* 快捷键 / 滚动 */
  document.addEventListener('keydown', e => {
    const typing = /input|textarea|select/i.test(document.activeElement.tagName);
    if (e.key === '/' && !typing) { e.preventDefault(); $('#heroInput').focus(); }
    if (e.key === '[' && !typing) { e.preventDefault(); toggleCollapse(); }
    if (e.key === 'Escape') { closeJump(); }
  });
  window.addEventListener('scroll', () => {
    $('#header').style.boxShadow = window.scrollY > 8 ? 'var(--shadow-sm)' : 'none';
    $('#toTop').classList.toggle('hide', window.scrollY < 500);
    queueSpy();
  });

  /* 视口跨过移动/桌面断点时重渲染首页分组（每类展示数不同） */
  let lastCompact = isCompactCat();
  window.addEventListener('resize', () => {
    const c = isCompactCat();
    if (c !== lastCompact) { lastCompact = c; render(); }
  });
}

/* ============================================================
 * 启动
 * ============================================================ */
let booted = false;
function init() {
  if (booted) return;   // 幂等守卫：防止 DOMContentLoaded 重复触发导致监听器双份注册
  booted = true;
  document.documentElement.classList.add('anim');
  applyTheme(load(LS.theme, 'light'));
  rebuildSites();
  loadFavs();
  loadLikes();
  clickMap = load(LS.clicks, {});
  renderEngines();
  renderHeroTags();
  bind();
  render();
  updateSpy();
  $('#statSites').textContent = ALL.length;
  $('#statCats').textContent = CATEGORIES.length;
}
document.addEventListener('DOMContentLoaded', init);
