# 智博程序园（ZBCXY）完整部署建议

> 站点规模：1558 个站点 / 29 个分类，纯静态、零依赖、零构建。
> 独立部署包：`C:/Users/Administrator/WorkBuddy/zbcxy-nav-deploy/`（目录）与同级 `zbcxy-nav-deploy.zip`（可直接拖拽上传）。

---

## 一、当前方案（已上线，零成本）

**WorkBuddy 内置发布**
- 线上地址：https://zbcxy-nav.app.workbuddy.host/
- 更新方式：改完代码后说「更新上线」，同链接覆盖
- 管理：设置 → 数据管理 → 应用
- 适合：个人使用、朋友间分享、快速验证

---

## 二、进阶免费方案（推荐：Cloudflare Pages）

三款平台都免费、全球 CDN、自动 HTTPS，部署包已含全部配置文件：

| 平台 | 用到的配置 | 特点 |
|---|---|---|
| **Cloudflare Pages** ⭐推荐 | `_headers`（安全头+缓存） | 速度快、免费额度最宽裕、可绑自定义域名 |
| Vercel | `vercel.json`（headers+cleanUrls） | 部署体验最好，国内访问偶有波动 |
| GitHub Pages | `.nojekyll` | 与代码仓库一体，适合开源展示 |

### Cloudflare Pages 部署步骤（约 10 分钟）
1. 注册 [pages.cloudflare.com](https://pages.cloudflare.com)（免费）
2. 控制台 → **Workers & Pages → Create → Pages → Upload assets**
3. 把 `zbcxy-nav-deploy.zip` 直接拖进去，项目名填 `zbcxy-nav`
4. 部署完成后获得 `xxx.pages.dev` 免费域名，即可访问
5. （可选）绑自己域名：项目 → Custom domains → 添加，按提示加 CNAME 解析

### 后续更新
- 本地改完 → 我同步 `zbcxy-nav-deploy/` 并重打 zip → Cloudflare 控制台重新拖拽上传
- 更进一步：把代码推到 GitHub 仓库，Cloudflare 连接仓库后 **git push 即自动上线**（推荐长期方案）

---

## 三、域名与备案（面向国内网友）

| 事项 | 建议 |
|---|---|
| 域名注册 | 腾讯云 / 阿里云 / Cloudflare Registrar，`.com` 约 ¥60-80/年 |
| 备案 | 面向国内用户建议做 **ICP 备案**（免费，约 1-2 周）；备案号拿到后取消 `index.html` 页脚的注释填入 |
| 解析 | 用 Cloudflare 托管 DNS 最省心：A 记录/CNAME 指向 Pages 即可 |
| 未备案情况 | 用 pages.dev / vercel.app 等平台域名可正常访问，无需备案 |

---

## 四、访问统计（不蒜子）

- 页脚「本站总访问量 / 访客数」由不蒜子驱动，**公网域名下自动开始计数**，无需注册
- 若不蒜子服务不稳定（偶发），统计行会自动隐藏，不影响页面
- 想要更详细的流量分析（来源、地域、留存），可免费接入 [Cloudflare Web Analytics](https://dash.cloudflare.com/?to=/:account/web-analytics)（无 Cookie、免费、一行脚本）

---

## 五、长期运维建议

1. **代码托管**：在 GitHub 建仓库（如 `battlegao/zbcxy-nav`），工作区文件全部提交——既是备份，又能配合 Pages/Actions 自动部署
2. **数据更新流程**：公众号新推文 → 告诉我站点清单 → 追加 `js/data-sites-f.js` → 测试通过 → 同步 deploy 目录 + zip → 重新部署
3. **缓存策略**（已配好，勿改）：
   - `index.html`：不缓存（保证更新即时生效）
   - `assets/*`：一年强缓存（带 immutable）
   - `css/`：一周；`js/`：一小时
4. **已知限制**：收藏/点赞/点击统计存浏览器 localStorage，仅本机生效、访客间不共享；要跨设备同步需接后端（可用 WorkBuddy 云服务或 Supabase 免费层）
5. **合规**：页脚保留「仅供学习交流」；站点均第三方链接，建议定期抽查死链（我可以写个批量检测脚本）

---

## 六、推荐路线图

```
现在：WorkBuddy 发布（零成本，已上线 ✅）
  ↓ 想要独立域名/更稳访问
第 1 步：Cloudflare Pages 拖 zip 上线（免费，10 分钟）
  ↓ 想要长期自动化
第 2 步：GitHub 建仓 + 连接 Pages → git push 自动部署
  ↓ 想要品牌独立
第 3 步：注册域名 + ICP 备案 + 绑定 Pages
```

任何一步需要操作指引，直接说即可。
