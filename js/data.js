/* ============================================================
 * data.js — 分类体系 / 搜索引擎 / 站点数据（主文件）
 * 站点通过 S(name, desc, url, cat, tags, stars, hot) 注册
 * ============================================================ */

/* 分类定义：id 与站点 cat 对应，顺序即页面展示顺序
   排版逻辑：大众/职场向在前，技术开发类在后 */
const CATEGORIES = [
  { id: 'rank',     name: '全网热门',     icon: '🏆', color: '#f59e0b' },
  { id: 'hot',      name: '常用推荐',     icon: '🔥', color: '#ff6b35' },
  { id: 'mp',       name: '公众号精选',   icon: '🌟', color: '#9a7fd1',
    desc: '「智博程序园」公众号历期推文精选的宝藏网站：网盘资源、影音壁纸、办公工具、学习古籍一站收录，持续更新' },
  { id: 'ai',       name: 'AI 工具',      icon: '🤖', color: '#7c3aed' },
  { id: 'office',   name: '办公效率',     icon: '📈', color: '#0891b2' },
  { id: 'online',   name: '在线工具',     icon: '🧰', color: '#14b8a6' },
  { id: 'job',      name: '求职招聘',     icon: '💼', color: '#0d6e63' },
  { id: 'career',   name: '职场进阶',     icon: '🚀', color: '#b45309' },
  { id: 'edu',      name: '学习平台',     icon: '🎓', color: '#6d28d9' },
  { id: 'design',   name: '设计创意',     icon: '🖌️', color: '#e11d48' },
  { id: 'news',     name: '资讯媒体',     icon: '📰', color: '#64748b' },
  { id: 'life',     name: '生活服务',     icon: '🏠', color: '#f97316' },
  { id: 'shop',     name: '电商购物',     icon: '🛒', color: '#059669' },
  { id: 'media',    name: '影音娱乐',     icon: '🎬', color: '#a21caf' },
  { id: 'fun',      name: '轻松摸鱼',     icon: '🎮', color: '#9333ea' },
  { id: 'gov',      name: '便民查询',     icon: '🏛️', color: '#475569' },
  { id: 'dev',      name: '开发工具',     icon: '🛠️', color: '#0e7490' },
  { id: 'community',name: '技术社区',     icon: '👥', color: '#2563eb' },
  { id: 'docs',     name: '文档手册',     icon: '📚', color: '#0d9488' },
  { id: 'frontend', name: '前端开发',     icon: '🎨', color: '#db2777' },
  { id: 'backend',  name: '后端开发',     icon: '⚙️', color: '#4f46e5' },
  { id: 'mobile',   name: '移动开发',     icon: '📱', color: '#0284c7' },
  { id: 'python',   name: 'Python',       icon: '🐍', color: '#16a34a' },
  { id: 'java',     name: 'Java',         icon: '☕', color: '#ea580c' },
  { id: 'database', name: '数据库',       icon: '💾', color: '#0369a1' },
  { id: 'cloud',    name: '云计算 & 运维', icon: '☁️', color: '#0ea5e9' },
  { id: 'security', name: '网络安全',     icon: '🔐', color: '#dc2626' },
  { id: 'test',     name: '测试工具',     icon: '🧪', color: '#65a30d' },
  { id: 'algo',     name: '算法面试',     icon: '📊', color: '#ca8a04' }
];

/* 搜索引擎（顶部可切换） */
const ENGINES = [
  { id: 'baidu',  name: '百度',   url: 'https://www.baidu.com/s?wd=' },
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=' },
  { id: 'bing',   name: '必应',   url: 'https://www.bing.com/search?q=' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/search?q=' },
  { id: 'zhihu',  name: '知乎',   url: 'https://www.zhihu.com/search?q=' },
  { id: 'bili',   name: 'B 站',   url: 'https://search.bilibili.com/all?keyword=' },
  { id: 'juejin', name: '掘金',   url: 'https://juejin.cn/search?query=' },
  { id: 'npm',    name: 'npm',    url: 'https://www.npmjs.com/search?q=' }
];

/* 站点容器与注册函数 */
const SITES = [];
const S = (name, desc, url, cat, tags, stars = 4, hot = 0) =>
  SITES.push({ name, desc, url, cat, tags, stars, hot: !!hot });

/* ============================================================
 * 🏆 全网热门排行
 * ============================================================ */
S('Google',       '全球最大搜索引擎',        'https://www.google.com',        'rank', ['搜索', '国际'], 5, 1);
S('YouTube',      '全球最大视频平台',        'https://www.youtube.com',       'rank', ['视频', '国际'], 5, 1);
S('Facebook',     '全球最大社交平台',        'https://www.facebook.com',      'rank', ['社交', '国际'], 5, 1);
S('百度',         '中文搜索引擎',            'https://www.baidu.com',         'rank', ['搜索', '常用'], 5, 1);
S('Wikipedia',    '自由的百科全书',          'https://zh.wikipedia.org',      'rank', ['百科', '知识'], 5, 1);
S('X (Twitter)',  '全球实时短消息平台',      'https://x.com',                 'rank', ['社交', '国际'], 5, 1);
S('Instagram',    '图片社交平台',            'https://www.instagram.com',     'rank', ['社交', '图片'], 5, 0);
S('Reddit',       '全球最大兴趣社区',        'https://www.reddit.com',        'rank', ['社区', '国际'], 5, 0);
S('Amazon',       '全球最大电商平台',        'https://www.amazon.com',        'rank', ['电商', '国际'], 5, 0);
S('Yahoo',        '美国门户与搜索',          'https://www.yahoo.com',         'rank', ['门户', '国际'], 4, 0);
S('淘宝',         '中国最大电商平台',        'https://www.taobao.com',        'rank', ['电商', '常用'], 5, 1);
S('京东',         '自营式电商平台',          'https://www.jd.com',            'rank', ['电商', '常用'], 5, 1);
S('微博',         '中文社交媒体平台',        'https://weibo.com',             'rank', ['社交', '资讯'], 5, 1);
S('知乎',         '中文问答社区',            'https://www.zhihu.com',         'rank', ['问答', '社区'], 5, 1);
S('哔哩哔哩',     '国内知名视频社区',        'https://www.bilibili.com',      'rank', ['视频', '学习'], 5, 1);
S('TikTok',       '全球短视频平台',          'https://www.tiktok.com',        'rank', ['视频', '短视频'], 5, 0);
S('抖音',         '国内短视频平台',          'https://www.douyin.com',        'rank', ['视频', '短视频'], 5, 1);
S('Netflix',      '全球流媒体影视平台',      'https://www.netflix.com',       'rank', ['影视', '国际'], 5, 0);
S('WhatsApp',     '全球即时通讯应用',        'https://www.whatsapp.com',      'rank', ['通讯', '国际'], 5, 0);
S('WeChat',       '微信官方网站',            'https://weixin.qq.com',         'rank', ['通讯', '常用'], 5, 1);
S('LinkedIn',     '职场社交平台',            'https://www.linkedin.com',      'rank', ['职场', '社交'], 4, 0);
S('Twitch',       '游戏直播平台',            'https://www.twitch.tv',         'rank', ['直播', '游戏'], 4, 0);
S('Spotify',      '全球音乐流媒体',          'https://www.spotify.com',       'rank', ['音乐', '国际'], 5, 0);
S('Pinterest',    '图片灵感采集平台',        'https://www.pinterest.com',     'rank', ['图片', '灵感'], 4, 0);
S('eBay',         '全球拍卖购物平台',        'https://www.ebay.com',          'rank', ['电商', '国际'], 4, 0);
S('天猫',         '品牌电商平台',            'https://www.tmall.com',         'rank', ['电商', '常用'], 5, 0);
S('拼多多',       '社交电商平台',            'https://www.pinduoduo.com',     'rank', ['电商', '购物'], 4, 0);
S('小红书',       '生活方式社区',            'https://www.xiaohongshu.com',   'rank', ['社区', '生活'], 5, 1);
S('豆瓣',         '书影音评分社区',          'https://www.douban.com',        'rank', ['影评', '社区'], 4, 1);
S('腾讯网',       '腾讯门户资讯',            'https://www.qq.com',            'rank', ['门户', '资讯'], 4, 0);
S('新浪网',       '新浪门户资讯',            'https://www.sina.com.cn',       'rank', ['门户', '资讯'], 4, 0);
S('网易',         '网易门户资讯',            'https://www.163.com',           'rank', ['门户', '资讯'], 4, 0);
S('搜狐',         '搜狐门户资讯',            'https://www.sohu.com',          'rank', ['门户', '资讯'], 3, 0);
S('凤凰网',       '凤凰卫视资讯门户',        'https://www.ifeng.com',         'rank', ['门户', '资讯'], 3, 0);
S('澎湃新闻',     '严肃时政新闻平台',        'https://www.thepaper.cn',       'rank', ['新闻', '时政'], 4, 0);
S('GitHub',       '全球最大代码托管平台',    'https://github.com',            'rank', ['代码托管', '开源'], 5, 1);
S('Stack Overflow','全球最大程序员问答',     'https://stackoverflow.com',     'rank', ['问答', '排错'], 5, 1);
S('ChatGPT',      'OpenAI 对话式 AI',        'https://chatgpt.com',           'rank', ['AI', '对话'], 5, 1);
S('CSDN',         '中国软件开发者社区',      'https://www.csdn.net',          'rank', ['博客', '中文'], 4, 0);
S('掘金',         '中文开发者技术社区',      'https://juejin.cn',             'rank', ['社区', '博客'], 5, 1);
S('Quora',        '全球问答社区',            'https://www.quora.com',         'rank', ['问答', '国际'], 4, 0);
S('Medium',       '优质长文写作平台',        'https://medium.com',            'rank', ['博客', '写作'], 4, 0);
S('Discord',      '语音社群平台',            'https://discord.com',           'rank', ['社群', '语音'], 4, 0);
S('Telegram',     '跨平台即时通讯',          'https://telegram.org',          'rank', ['通讯', '国际'], 4, 0);
S('BBC',          '英国广播公司新闻',        'https://www.bbc.com',           'rank', ['新闻', '国际'], 4, 0);
S('CNN',          '美国有线电视新闻网',      'https://www.cnn.com',           'rank', ['新闻', '国际'], 4, 0);
S('纽约时报',     '美国主流媒体',            'https://www.nytimes.com',       'rank', ['新闻', '国际'], 4, 0);
S('The Guardian', '英国卫报',                'https://www.theguardian.com',   'rank', ['新闻', '国际'], 4, 0);
S('Reuters',      '路透社新闻',              'https://www.reuters.com',       'rank', ['新闻', '国际'], 4, 0);
S('Bloomberg',    '彭博商业财经',            'https://www.bloomberg.com',     'rank', ['财经', '国际'], 4, 0);
S('谷歌学术',     '全球学术文献检索',        'https://scholar.google.com',    'rank', ['学术', '检索'], 5, 0);
S('百度百科',     '中文百科',                'https://baike.baidu.com',       'rank', ['百科', '中文'], 4, 0);
S('天气网',       '全国天气预报查询',        'https://www.tianqi.com',        'rank', ['天气', '查询'], 3, 0);
S('高德地图',     '国内地图导航',            'https://www.amap.com',          'rank', ['地图', '出行'], 5, 0);
S('百度地图',     '国内地图导航',            'https://map.baidu.com',         'rank', ['地图', '出行'], 4, 0);
S('携程旅行',     '在线旅行服务',            'https://www.ctrip.com',         'rank', ['旅行', '出行'], 4, 0);
S('12306',        '中国铁路客运服务',        'https://www.12306.cn',          'rank', ['出行', '官方'], 5, 0);
S('大众点评',     '本地生活消费指南',        'https://www.dianping.com',      'rank', ['生活', '点评'], 4, 0);
S('美团',         '本地生活服务平台',        'https://www.meituan.com',       'rank', ['生活', '外卖'], 4, 0);
S('饿了么',       '在线外卖平台',            'https://www.ele.me',            'rank', ['外卖', '生活'], 4, 0);
S('58同城',       '分类信息服务平台',        'https://www.58.com',            'rank', ['生活', '分类信息'], 3, 0);
S('支付宝',       '第三方支付平台',          'https://www.alipay.com',        'rank', ['支付', '常用'], 5, 0);
S('QQ邮箱',       '腾讯邮箱服务',            'https://mail.qq.com',           'rank', ['邮箱', '常用'], 4, 0);
S('网易邮箱',     '网易邮箱服务',            'https://mail.163.com',          'rank', ['邮箱', '常用'], 4, 0);
S('Gmail',        'Google 邮箱',             'https://mail.google.com',       'rank', ['邮箱', '国际'], 5, 0);
S('Outlook',      '微软邮箱与日历',          'https://outlook.live.com',      'rank', ['邮箱', '日历'], 4, 0);
S('Notion',       '全球流行全能工作台',      'https://www.notion.so',         'rank', ['笔记', '协作'], 5, 1);
S('Canva',        '在线平面设计工具',        'https://www.canva.com',         'rank', ['设计', '在线'], 5, 0);
S('Coursera',     '国际名校在线课程',        'https://www.coursera.org',      'rank', ['课程', '学习'], 5, 0);
S('Khan Academy', '免费教育平台',            'https://www.khanacademy.org',   'rank', ['教育', '免费'], 4, 0);
S('W3Schools',    'Web 技术在线教程',        'https://www.w3schools.com',     'rank', ['教程', '入门'], 4, 0);
S('Figma',        '协作设计工具',            'https://www.figma.com',         'rank', ['设计', '协作'], 5, 0);
S('Dribbble',     '设计师作品社区',          'https://dribbble.com',          'rank', ['设计', '灵感'], 5, 0);
S('Unsplash',     '免费高清图库',            'https://unsplash.com',          'rank', ['图片', '素材'], 5, 0);
S('Steam',        '全球游戏平台',            'https://store.steampowered.com','rank', ['游戏', '平台'], 5, 0);
S('Product Hunt', '新产品发现平台',          'https://www.producthunt.com',   'rank', ['产品', '发现'], 4, 0);
S('Hacker News',  '极客技术新闻',            'https://news.ycombinator.com',  'rank', ['新闻', '极客'], 5, 0);
S('Airbnb',       '全球民宿短租平台',        'https://www.airbnb.com',        'rank', ['旅行', '住宿'], 4, 0);
S('Booking',      '全球酒店预订',            'https://www.booking.com',       'rank', ['旅行', '酒店'], 4, 0);
S('Uber',         '全球网约车服务',          'https://www.uber.com',          'rank', ['出行', '国际'], 4, 0);
S('NASA',         '美国航空航天局',          'https://www.nasa.gov',          'rank', ['科学', '航天'], 4, 0);

/* ============================================================
 * 🔥 常用推荐
 * ============================================================ */
S('GitHub Trending', 'GitHub 热门项目榜',    'https://github.com/trending',            'hot', ['开源', '榜单'], 5, 1);
S('Gitee 码云',      '国内代码托管平台',     'https://gitee.com',                      'hot', ['代码托管', '国产'], 5, 1);
S('语雀',            '专业的云端知识库',     'https://www.yuque.com',                  'hot', ['文档', '笔记'], 4, 1);
S('飞书',            '一站式协同办公',       'https://www.feishu.cn',                  'hot', ['办公', '协作'], 5, 1);
S('钉钉',            '企业协同办公平台',     'https://www.dingtalk.com',               'hot', ['办公', '协作'], 4, 1);
S('腾讯文档',        '在线协作文档',         'https://docs.qq.com',                    'hot', ['文档', '协作'], 5, 1);
S('WPS',             '金山办公套件',         'https://www.wps.cn',                     'hot', ['办公', '文档'], 5, 1);
S('Iconfont',        '阿里矢量图标库',       'https://www.iconfont.cn',                'hot', ['图标', '设计'], 4, 1);
S('菜鸟教程',        '中文入门教程大全',     'https://www.runoob.com',                 'hot', ['教程', '入门'], 4, 1);
S('MDN Web Docs',    'Web 开发权威文档',     'https://developer.mozilla.org',          'hot', ['文档', '前端'], 5, 1);
S('ProcessOn',       '在线流程图思维导图',   'https://www.processon.com',              'hot', ['流程图', '导图'], 4, 0);
S('Xmind',           '专业思维导图软件',     'https://xmind.cn',                       'hot', ['导图', '效率'], 4, 0);
S('幕布',            '大纲笔记与思维导图',   'https://mubu.com',                       'hot', ['笔记', '导图'], 4, 0);
S('石墨文档',        '云端协作文档',         'https://shimo.im',                       'hot', ['文档', '协作'], 4, 0);
S('Postman',         'API 开发测试工具',     'https://www.postman.com',                'hot', ['API', '测试'], 5, 0);
S('Apifox',          '国产一体化 API 工具',  'https://apifox.com',                     'hot', ['API', '国产'], 5, 0);
S('Docker',          '容器化平台',           'https://www.docker.com',                 'hot', ['容器', '运维'], 5, 0);
S('VS Code',         '微软开源代码编辑器',   'https://code.visualstudio.com',          'hot', ['编辑器', '必备'], 5, 0);
S('Snipaste',        '截图贴图神器',         'https://www.snipaste.com',               'hot', ['截图', '效率'], 4, 0);
S('uTools',          '新一代效率工具平台',   'https://u.tools',                        'hot', ['效率', '国产'], 4, 0);
S('Everything',      '极速本地文件搜索',     'https://www.voidtools.com',              'hot', ['搜索', '效率'], 4, 0);
S('Typora',          '极简 Markdown 编辑器', 'https://typora.io',                      'hot', ['Markdown', '写作'], 4, 0);
S('Draw.io',         '免费在线绘图工具',     'https://app.diagrams.net',               'hot', ['绘图', '免费'], 4, 0);
S('Excalidraw',      '手绘风白板工具',       'https://excalidraw.com',                 'hot', ['白板', '绘图'], 4, 0);
S('TinyPNG',         '在线图片压缩',         'https://tinypng.com',                    'hot', ['图片', '压缩'], 4, 0);
S('草料二维码',      '二维码生成与管理',     'https://cli.im',                         'hot', ['二维码', '国产'], 4, 0);
S('DeepL 翻译',      '高质量 AI 翻译',       'https://www.deepl.com/translator',       'hot', ['翻译', 'AI'], 5, 0);
S('Google 翻译',     '全球翻译服务',         'https://translate.google.com',           'hot', ['翻译', '国际'], 4, 0);
S('有道翻译',        '国产在线翻译',         'https://fanyi.youdao.com',               'hot', ['翻译', '国产'], 4, 0);
S('阿里云盘',        '不限速网盘',           'https://www.alipan.com',                 'hot', ['网盘', '存储'], 4, 0);
S('百度网盘',        '国内主流网盘',         'https://pan.baidu.com',                  'hot', ['网盘', '存储'], 4, 0);
S('夸克浏览器',      '阿里旗下浏览器',       'https://www.quark.cn',                   'hot', ['浏览器', '国产'], 4, 0);
S('金山词霸',        '在线词典翻译',         'https://www.iciba.com',                  'hot', ['词典', '翻译'], 3, 0);
S('有道词典',        '在线词典',             'https://dict.youdao.com',                'hot', ['词典', '翻译'], 4, 0);
S('w3cschool',       '编程入门教程',         'https://www.w3cschool.cn',               'hot', ['教程', '入门'], 3, 0);
S('菜鸟工具',        '在线工具集合',         'https://c.runoob.com',                   'hot', ['在线工具', '集合'], 4, 0);
S('阮一峰的网络日志','知名技术博客',         'https://www.ruanyifeng.com/blog',        'hot', ['博客', '中文'], 5, 0);
S('科技爱好者周刊',  '阮一峰技术资讯周刊',   'https://www.ruanyifeng.com/blog/weekly', 'hot', ['周刊', '资讯'], 4, 0);
S('HelloGitHub',     '开源项目月刊',         'https://hellogithub.com',                'hot', ['开源', '月刊'], 4, 0);
S('Chrome 应用商店', 'Chrome 扩展商店',      'https://chromewebstore.google.com',      'hot', ['浏览器', '插件'], 5, 0);
S('Edge 扩展',       'Edge 浏览器扩展',      'https://microsoftedge.microsoft.com/addons','hot', ['浏览器', '插件'], 4, 0);
S('Tampermonkey',    '油猴脚本管理器',       'https://www.tampermonkey.net',           'hot', ['插件', '脚本'], 4, 0);
S('Listary',         'Windows 文件搜索',     'https://www.listary.com',                'hot', ['搜索', '效率'], 3, 0);
S('Quicker',         'Windows 效率启动器',   'https://getquicker.net',                 'hot', ['效率', '国产'], 4, 0);
S('PotPlayer',       '全能本地视频播放器',   'https://potplayer.daum.net',             'hot', ['播放器', '影音'], 4, 0);
