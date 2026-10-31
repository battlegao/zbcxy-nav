/* ============================================================
 * data-sites-e.js — 追加站点（第七批）
 * 只调用 S(...)，不要在此定义其他逻辑
 * ============================================================ */
'use strict';

/* ---------------- AI 工具 ---------------- */
S('Sora',               'OpenAI 文生视频模型',             'https://sora.com',                          'ai', ['AI', '视频'], 5, 1);
S('NotebookLM',         'Google 笔记研究助手',             'https://notebooklm.google.com',             'ai', ['AI', '笔记'], 4, 0);
S('Grok',               'xAI 旗下 AI 助手',                'https://grok.com',                          'ai', ['AI', '助手'], 4, 0);
S('Mistral',            '欧洲开源大模型平台',               'https://mistral.ai',                        'ai', ['AI', '开源'], 4, 0);
S('LobeChat',           '开源 AI 对话聚合框架',            'https://lobechat.com',                      'ai', ['AI', '开源'], 4, 0);
S('Open WebUI',         '自托管大模型对话界面',             'https://openwebui.com',                     'ai', ['AI', '自托管'], 4, 0);
S('Krea AI',            'AI 图像实时生成工具',             'https://www.krea.ai',                       'ai', ['AI', '绘画'], 4, 0);
S('Genspark',           'AI Agent 搜索引擎',               'https://www.genspark.ai',                   'ai', ['AI', '搜索'], 4, 0);
S('海螺 AI',            'MiniMax 旗下 AI 助手',            'https://hailuoai.com',                      'ai', ['AI', '国产'], 4, 0);
S('Skywork AI',         '昆仑万维 AI 办公助手',            'https://skywork.ai',                        'ai', ['AI', '办公'], 3, 0);
S('FastGPT',            '开源知识库问答系统',               'https://fastgpt.in',                        'ai', ['AI', '知识库'], 4, 0);
S('LiblibAI',           '国内 AI 绘画模型社区',            'https://www.liblib.art',                    'ai', ['AI', '绘画'], 4, 0);
S('Civitai 模型库',     'SD 模型下载社区',                 'https://civitai.com/models',                'ai', ['AI', '模型'], 3, 0);
S('Poe',                '聚合多家大模型的对话平台',         'https://poe.com',                           'ai', ['AI', '聚合'], 4, 0);
S('Character.AI',       'AI 角色扮演对话平台',             'https://character.ai',                      'ai', ['AI', '娱乐'], 3, 0);

/* ---------------- 前端开发 ---------------- */
S('Lit',                'Google 轻量 Web 组件库',          'https://lit.dev',                           'frontend', ['框架', 'Web Components'], 4, 0);
S('Preact',             '轻量 React 替代方案',             'https://preactjs.com',                      'frontend', ['框架', '轻量'], 4, 0);
S('Ember.js',           '老牌前端全家桶框架',               'https://emberjs.com',                       'frontend', ['框架'], 3, 0);
S('SvelteKit',          'Svelte 官方应用框架',             'https://kit.svelte.dev',                    'frontend', ['框架', 'SSR'], 5, 1);
S('Qwik',               '可恢复性前端框架',                 'https://qwik.dev',                          'frontend', ['框架', '性能'], 3, 0);
S('Redux',              '可预测状态管理容器',               'https://redux.js.org',                      'frontend', ['状态管理'], 4, 0);
S('Zustand',            '轻量 React 状态管理',             'https://github.com/pmndrs/zustand',         'frontend', ['状态管理', '轻量'], 4, 0);
S('TanStack Query',     '异步数据请求管理库',               'https://tanstack.com/query',                'frontend', ['数据请求'], 5, 0);
S('RxJS',               '响应式编程库',                     'https://rxjs.dev',                          'frontend', ['响应式'], 4, 0);
S('GSAP',               '专业级网页动画库',                 'https://gsap.com',                          'frontend', ['动画'], 5, 1);
S('Framer Motion',      'React 声明式动画库',              'https://motion.dev',                        'frontend', ['动画', 'React'], 4, 0);
S('anime.js',           '轻量 JavaScript 动画引擎',        'https://animejs.com',                       'frontend', ['动画'], 4, 0);
S('Swiper',             '移动端触摸滑动组件',               'https://swiperjs.com',                      'frontend', ['组件', '轮播'], 4, 0);
S('Leaflet',            '开源交互地图库',                   'https://leafletjs.com',                     'frontend', ['地图', '开源'], 4, 0);
S('Mapbox',             '地图与位置数据平台',               'https://www.mapbox.com',                    'frontend', ['地图'], 4, 0);
S('Cesium',             '三维地球与地图引擎',               'https://cesium.com',                        'frontend', ['地图', '三维'], 4, 0);
S('PixiJS',             '2D WebGL 渲染引擎',               'https://pixijs.com',                        'frontend', ['游戏', '渲染'], 4, 0);
S('p5.js',              '创意编程 JavaScript 库',          'https://p5js.org',                          'frontend', ['创意编程'], 4, 0);
S('Howler.js',          '现代网页音频库',                   'https://howlerjs.com',                      'frontend', ['音频'], 4, 0);
S('ESLint',             '可配置 JS 代码检查工具',          'https://eslint.org',                        'frontend', ['规范', '工具'], 5, 0);
S('Stylelint',          'CSS 代码检查工具',                'https://stylelint.io',                      'frontend', ['规范'], 3, 0);
S('Husky',              'Git 钩子管理工具',                 'https://typicode.github.io/husky',          'frontend', ['Git', '工程化'], 4, 0);
S('Turborepo',          '高性能 Monorepo 构建系统',        'https://turbo.build',                       'frontend', ['工程化', 'Monorepo'], 4, 0);
S('Nx',                 '智能 Monorepo 构建框架',          'https://nx.dev',                            'frontend', ['工程化', 'Monorepo'], 4, 0);
S('Rspack',             'Rust 高性能打包器',               'https://rspack.dev',                        'frontend', ['构建', '国产'], 4, 0);
S('Rsbuild',            'Rspack 高性能构建方案',           'https://rsbuild.dev',                       'frontend', ['构建', '国产'], 4, 0);
S('VitePress',          'Vite 驱动的静态站点生成器',       'https://vitepress.dev',                     'frontend', ['文档', '静态站'], 4, 0);
S('Storybook',          'UI 组件开发与文档环境',            'https://storybook.js.org',                  'frontend', ['组件', '文档'], 5, 0);
S('Radix UI',           '无样式可访问组件库',               'https://www.radix-ui.com',                  'frontend', ['组件', '无障碍'], 4, 0);
S('Headless UI',        'Tailwind 官方无样式组件',         'https://headlessui.com',                    'frontend', ['组件', 'Tailwind'], 4, 0);
S('DaisyUI',            'Tailwind 组件类库',               'https://daisyui.com',                       'frontend', ['组件', 'Tailwind'], 4, 0);

/* ---------------- 后端开发 ---------------- */
S('Vert.x',             'JVM 响应式应用工具包',            'https://vertx.io',                          'backend', ['Java', '响应式'], 4, 0);
S('Play Framework',     '高生产力 Web 框架（Scala/Java）', 'https://www.playframework.com',             'backend', ['Java', 'Scala'], 3, 0);
S('Scala',              '融合面向对象与函数式的 JVM 语言', 'https://www.scala-lang.org',                'backend', ['JVM', '语言'], 4, 0);
S('Hono',               '轻量跨运行时 Web 框架',           'https://hono.dev',                          'backend', ['Node', '轻量'], 4, 0);
S('tRPC',               '端到端类型安全 RPC 框架',         'https://trpc.io',                           'backend', ['TypeScript'], 4, 0);
S('Prisma',             '下一代 Node.js ORM',              'https://www.prisma.io',                     'backend', ['ORM', 'Node'], 5, 0);
S('Drizzle ORM',        '轻量类型安全 TypeScript ORM',     'https://orm.drizzle.team',                  'backend', ['ORM', 'TypeScript'], 4, 0);
S('Sequelize',          '经典 Node.js ORM',                'https://sequelize.org',                     'backend', ['ORM', 'Node'], 4, 0);
S('TypeORM',            'TypeScript 多数据库 ORM',         'https://typeorm.io',                        'backend', ['ORM', 'TypeScript'], 4, 0);
S('SQLAlchemy',         'Python 最流行 ORM',               'https://www.sqlalchemy.org',                'backend', ['Python', 'ORM'], 5, 0);
S('httpx',              'Python 下一代 HTTP 客户端',       'https://www.python-httpx.org',              'backend', ['Python'], 4, 0);
S('GORM',               'Go 语言最受欢迎 ORM',             'https://gorm.io',                           'backend', ['Go', 'ORM'], 4, 0);
S('Chi',                '轻量 Go HTTP 路由器',             'https://go-chi.io',                         'backend', ['Go'], 4, 0);
S('Appwrite',           '开源自托管后端服务平台',           'https://appwrite.io',                       'backend', ['BaaS', '开源'], 4, 0);
S('PocketBase',         '单文件开源后端服务',               'https://pocketbase.io',                     'backend', ['BaaS', '开源'], 4, 0);
S('Strapi',             '领先的开源 Headless CMS',         'https://strapi.io',                         'backend', ['CMS', '开源'], 4, 0);
S('Directus',           '数据即服务的开源 CMS',            'https://directus.io',                       'backend', ['CMS', '开源'], 4, 0);
S('Hasura',             '自动生成 GraphQL 后端',           'https://hasura.io',                         'backend', ['GraphQL'], 4, 0);
S('Traefik',            '云原生反向代理与网关',             'https://traefik.io',                        'backend', ['网关', '云原生'], 4, 0);
S('Envoy',              'CNCF 边缘与服务代理',             'https://www.envoyproxy.io',                 'backend', ['代理', '云原生'], 4, 0);
S('Istio',              '领先的服务网格平台',               'https://istio.io',                          'backend', ['服务网格', '云原生'], 4, 0);
S('Gitea Actions',      'Gitea 内置 CI/CD',                'https://docs.gitea.com/usage/actions',      'backend', ['CI', '开源'], 4, 0);

/* ---------------- 移动开发 ---------------- */
S('FlutterFlow',        '低代码 Flutter 应用构建器',       'https://flutterflow.io',                    'mobile', ['低代码', 'Flutter'], 4, 0);
S('Workbox',            'Google PWA 工具集',               'https://developer.chrome.com/docs/workbox', 'mobile', ['PWA'], 4, 0);
S('Lighthouse',         'Google 网页质量审计工具',         'https://developer.chrome.com/docs/lighthouse', 'mobile', ['性能', 'PWA'], 5, 0);
S('PageSpeed Insights', 'Google 页面速度检测',             'https://pagespeed.web.dev',                 'mobile', ['性能'], 5, 0);
S('WebPageTest',        '专业网页性能测试',                 'https://www.webpagetest.org',               'mobile', ['性能', '测试'], 4, 0);
S('GTmetrix',           '网页加载速度分析',                 'https://gtmetrix.com',                      'mobile', ['性能'], 3, 0);
S('AppetizeIO',         '浏览器内运行移动应用',             'https://appetize.io',                       'mobile', ['模拟器'], 3, 0);

/* ---------------- Python 生态 ---------------- */
S('Ruff',               'Rust 极速 Python Linter',         'https://docs.astral.sh/ruff',               'python', ['工具', '性能'], 5, 1);
S('Typer',              'FastAPI 同门 CLI 框架',           'https://typer.tiangolo.com',                'python', ['CLI'], 4, 0);
S('Pillow',             'Python 图像处理标准库',           'https://python-pillow.org',                 'python', ['图像'], 4, 0);
S('Polars',             'Rust 驱动的高性能 DataFrame',     'https://pola.rs',                           'python', ['数据', '性能'], 4, 0);
S('DuckDB',             '进程内分析型 SQL 数据库',         'https://duckdb.org',                        'python', ['数据库', '分析'], 5, 1);
S('Rich',               '终端富文本与进度条库',             'https://github.com/Textualize/rich',        'python', ['终端'], 4, 0);
S('Textual',            'Python TUI 应用框架',             'https://textual.textualize.io',             'python', ['终端'], 3, 0);
S('Loguru',             '优雅的 Python 日志库',            'https://loguru.readthedocs.io',             'python', ['日志'], 4, 0);
S('Hatch',              '现代 Python 项目管理',            'https://hatch.pypa.io',                     'python', ['工具'], 3, 0);

/* ---------------- Java 生态 ---------------- */
S('Akka',               'JVM 高并发 Actor 模型框架',       'https://akka.io',                           'java', ['并发'], 4, 0);
S('Guava 缓存',         'Google Java 核心工具集',          'https://github.com/google/guava',           'java', ['工具'], 4, 0);
S('EasyPOI',            'Java Excel 导入导出工具',         'https://opensource.afterturn.cn',           'java', ['工具'], 3, 0);
S('HikariCP',           '高性能 JDBC 连接池',              'https://github.com/brettwooldridge/HikariCP', 'java', ['数据库'], 4, 0);
S('GraalVM 原生镜像',   'Java 原生编译加速启动',           'https://www.graalvm.org/native-image/',     'java', ['性能'], 4, 0);

/* ---------------- 数据库 ---------------- */
S('TimescaleDB',        'PostgreSQL 时序扩展',             'https://www.timescale.com',                 'database', ['时序', 'PostgreSQL'], 4, 0);
S('QuestDB',            '高性能开源时序数据库',             'https://questdb.io',                        'database', ['时序'], 3, 0);
S('Milvus',             '开源向量数据库',                   'https://milvus.io',                         'database', ['向量', 'AI'], 5, 1);
S('Qdrant',             'Rust 向量搜索引擎',               'https://qdrant.tech',                       'database', ['向量', 'AI'], 4, 0);
S('Weaviate',           '开源 AI 原生向量数据库',          'https://weaviate.io',                       'database', ['向量', 'AI'], 4, 0);
S('Chroma',             '开源 AI 应用向量数据库',          'https://www.trychroma.com',                 'database', ['向量', 'AI'], 4, 0);
S('pgvector',           'PostgreSQL 向量检索扩展',         'https://github.com/pgvector/pgvector',      'database', ['向量', 'PostgreSQL'], 4, 0);
S('Dragonfly',          'Redis 兼容内存数据库',            'https://www.dragonflydb.io',                'database', ['缓存', '性能'], 4, 0);
S('CouchDB',            'Apache 文档型数据库',             'https://couchdb.apache.org',                'database', ['文档', '开源'], 3, 0);
S('SurrealDB',          '多模型云原生数据库',               'https://surrealdb.com',                     'database', ['多模型'], 3, 0);
S('Valkey',             'Linux 基金会 Redis 分支',         'https://valkey.io',                         'database', ['缓存', '开源'], 4, 0);

/* ---------------- 云计算 / 运维 ---------------- */
S('K3s',                '轻量级 Kubernetes 发行版',        'https://k3s.io',                            'cloud', ['K8s', '轻量'], 4, 0);
S('Minikube',           '本地 Kubernetes 环境',            'https://minikube.sigs.k8s.io',              'cloud', ['K8s', '本地'], 4, 0);
S('kind',               'Docker 容器内跑 K8s',             'https://kind.sigs.k8s.io',                  'cloud', ['K8s', '测试'], 4, 0);
S('k9s',                '终端 Kubernetes 管理台',          'https://k9scli.io',                         'cloud', ['K8s', 'CLI'], 4, 0);
S('Lens',               'Kubernetes 图形化管理 IDE',       'https://k8slens.dev',                       'cloud', ['K8s', 'GUI'], 4, 0);
S('Harbor',             'CNCF 云原生镜像仓库',             'https://goharbor.io',                       'cloud', ['镜像', '开源'], 4, 0);
S('Dagger',             '代码化 CI/CD 流水线引擎',         'https://dagger.io',                         'cloud', ['CI', '开源'], 4, 0);
S('Pulumi',             '通用语言基础设施即代码',           'https://www.pulumi.com',                    'cloud', ['IaC'], 4, 0);
S('OpenTofu',           'Terraform 开源分支',              'https://opentofu.org',                      'cloud', ['IaC', '开源'], 4, 0);
S('Ansible Galaxy',     'Ansible 角色共享平台',            'https://galaxy.ansible.com',                'cloud', ['自动化'], 3, 0);
S('SaltStack',          '大规模基础设施自动化',             'https://saltproject.io',                    'cloud', ['自动化'], 3, 0);
S('Zerotier',           '虚拟组网异地互联工具',             'https://www.zerotier.com',                  'cloud', ['组网'], 4, 0);
S('Tailscale',          '零配置 WireGuard 组网',           'https://tailscale.com',                     'cloud', ['组网', 'VPN'], 5, 1);
S('Frp',                '开源内网穿透工具',                 'https://github.com/fatedier/frp',           'cloud', ['内网穿透', '开源'], 4, 0);
S('Nginx Proxy Manager', '可视化 Nginx 反代管理',          'https://nginxproxymanager.com',             'cloud', ['网关', '自托管'], 4, 0);
S('Coolify',            '开源自托管应用平台',               'https://coolify.io',                        'cloud', ['自托管', 'PaaS'], 4, 0);
S('Dokploy',            '开源部署自动化平台',               'https://dokploy.com',                       'cloud', ['自托管'], 3, 0);
S('Uptime Kuma',        '开源服务可用性监控',               'https://uptime.kuma.pet',                   'cloud', ['监控', '开源'], 5, 1);
S('Netdata',            '实时基础设施监控',                 'https://www.netdata.cloud',                 'cloud', ['监控'], 4, 0);
S('Ntfy',               'HTTP 推送通知服务',               'https://ntfy.sh',                           'cloud', ['通知', '开源'], 4, 0);

/* ---------------- 网络安全 ---------------- */
S('CTF Wiki',           '中文 CTF 知识百科',               'https://ctf-wiki.org',                      'security', ['CTF', '学习'], 4, 0);
S('CTFtime',            '全球 CFT 赛事日历',               'https://ctftime.org',                       'security', ['CTF'], 3, 0);
S('Hack The Box',       '在线渗透实战平台',                 'https://www.hackthebox.com',                'security', ['渗透', '实战'], 5, 1);
S('TryHackMe',          '互动式网络安全学习',               'https://tryhackme.com',                     'security', ['学习', '实战'], 4, 0);
S('Vulhub',             '开源漏洞复现环境集',               'https://vulhub.org',                        'security', ['漏洞', '复现'], 4, 0);
S('Shodan',             '互联网设备搜索引擎',               'https://www.shodan.io',                     'security', ['测绘'], 4, 0);
S('ZoomEye',            '知道创宇网络空间测绘',             'https://www.zoomeye.hk',                    'security', ['测绘', '国产'], 4, 0);
S('FOFA',               '白帽汇网络空间测绘',               'https://fofa.info',                         'security', ['测绘', '国产'], 4, 0);
S('Censys',             '互联网资产搜索平台',               'https://search.censys.io',                  'security', ['测绘'], 3, 0);
S('CyberChef',          '网络瑞士军刀编解码工具',           'https://gchq.github.io/CyberChef/',         'security', ['编解码', '开源'], 5, 1);
S('Hashcat',            '世界最快密码恢复工具',             'https://hashcat.net/hashcat/',              'security', ['密码'], 4, 0);
S('Nuclei',             '基于模板的漏洞扫描器',             'https://github.com/projectdiscovery/nuclei', 'security', ['扫描', '开源'], 4, 0);
S('OSINT Framework',    '开源情报收集工具索引',             'https://osintframework.com',                'security', ['情报'], 3, 0);
S('Privacy Guides',     '数字隐私防护指南',                 'https://www.privacyguides.org',             'security', ['隐私'], 3, 0);

/* ---------------- 测试工具 ---------------- */
S('Testing Library',    '以用户行为为核心的测试库',         'https://testing-library.com',               'test', ['前端', '测试'], 5, 0);
S('MSW',                'Mock Service Worker 接口模拟',    'https://mswjs.io',                          'test', ['Mock'], 4, 0);
S('Sinon.JS',           '独立测试 Spy/Stub/Mock 库',       'https://sinonjs.org',                       'test', ['Mock'], 4, 0);
S('Chai',               'BDD/TDD 断言库',                  'https://www.chaijs.com',                    'test', ['断言'], 3, 0);
S('HttpRunner',         '开源 HTTP 接口测试框架',          'https://httprunner.com',                    'test', ['接口', '国产'], 3, 0);
S('Keploy',             '自动化接口用例生成',               'https://keploy.io',                         'test', ['接口', 'AI'], 3, 0);
S('Qodo',               'AI 测试用例生成工具',             'https://www.qodo.ai',                       'test', ['AI', '测试'], 3, 0);

/* ---------------- 算法 / 刷题 ---------------- */
S('Exercism',           '免费多语言编程练习',               'https://exercism.org',                      'algo', ['练习', '开源'], 4, 0);
S('Tech Interview Handbook', '技术面试免费手册',           'https://www.techinterviewhandbook.org',     'algo', ['面试'], 4, 0);
S('Interviewing.io',    '匿名模拟技术面试',                 'https://interviewing.io',                   'algo', ['面试'], 3, 0);
S('AlgoExpert',         '算法面试系统课程',                 'https://www.algoexpert.io',                 'algo', ['面试', '付费'], 3, 0);
S('二分搜索题单',       '代码随想录专题题单',               'https://programmercarl.com',                'algo', ['算法', '题解'], 4, 0);

/* ---------------- 设计资源 ---------------- */
S('Awwwards',           '全球优秀网页设计评选',             'https://www.awwwards.com',                  'design', ['灵感', '网页'], 5, 1);
S('Land-book',          '落地页设计灵感库',                 'https://land-book.com',                     'design', ['灵感', '落地页'], 4, 0);
S('Lapa Ninja',         '落地页与 App 设计灵感',           'https://www.lapa.ninja',                    'design', ['灵感'], 4, 0);
S('Godly',              '精选高质量网页灵感',               'https://godly.website',                     'design', ['灵感'], 3, 0);
S('Lunacy',             'Icons8 免费设计工具',             'https://icons8.com/lunacy',                 'design', ['工具'], 4, 0);
S('Affinity Designer',  '专业矢量图形设计软件',             'https://affinity.serif.com/designer/',      'design', ['矢量', '买断'], 4, 0);
S('Affinity Photo',     '专业图像编辑软件',                 'https://affinity.serif.com/photo/',         'design', ['修图', '买断'], 4, 0);
S('Krita',              '开源数字绘画软件',                 'https://krita.org',                         'design', ['绘画', '开源'], 4, 0);
S('Inkscape',           '开源矢量图编辑器',                 'https://inkscape.org',                      'design', ['矢量', '开源'], 4, 0);
S('Blender',            '开源三维创作套件',                 'https://www.blender.org',                   'design', ['三维', '开源'], 5, 1);
S('Pixlr',              '在线图片编辑器',                   'https://pixlr.com',                         'design', ['修图', '在线'], 3, 0);
S('猫啃网',             '免费商用中文字体',                 'https://www.maokenziti.com',                'design', ['字体', '免费'], 4, 0);
S('Favicon.io',         '网站图标在线生成',                 'https://favicon.io',                        'design', ['图标', '生成'], 4, 0);
S('Logo.xyz',           'AI Logo 在线生成',                'https://logo.xyz',                          'design', ['Logo', 'AI'], 3, 0);

/* ---------------- 学习平台 ---------------- */
S('Skillshare',         '创意技能在线课程',                 'https://www.skillshare.com',                'edu', ['课程', '创意'], 3, 0);
S('Epic React',         'Kent C. Dodds React 进阶课',      'https://www.epicreact.dev',                 'edu', ['React', '付费'], 4, 0);
S('Linux 中国',         '中文 Linux 技术社区',             'https://linux.cn',                          'edu', ['Linux', '社区'], 4, 0);
S('鸟哥的 Linux 私房菜', '经典 Linux 中文入门书',           'https://linux.vbird.org',                   'edu', ['Linux', '入门'], 4, 0);
S('数据结构与算法之美', '极客时间经典算法专栏',             'https://time.geekbang.org',                 'edu', ['算法', '课程'], 4, 0);
S('Frontend Mentor',    '真实项目前端挑战',                 'https://www.frontendmentor.io',             'edu', ['前端', '练习'], 4, 0);
S('Codewars 中文社区',  'Codewars 中文导航',                'https://www.codewars.com/?language=javascript', 'edu', ['练习'], 3, 0);

/* ---------------- 社区 / 资讯 ---------------- */
S('Hacker Noon',        '科技博客写作社区',                 'https://hackernoon.com',                    'news', ['博客', '英文'], 3, 0);
S('JavaScript Weekly',  'JS 周刊邮件订阅',                 'https://javascriptweekly.com',              'news', ['周刊', 'JS'], 4, 0);
S('Changelog',          '开源软件周报与播客',               'https://changelog.com',                     'news', ['播客', '开源'], 3, 0);
S('Linux Toy',          '优秀开源软件推荐',                 'https://www.linuxtoy.org',                  'news', ['开源', '博客'], 3, 0);
S('AppSay 少数派矩阵',  '数字生活指南聚合',                 'https://www.sspai.com/tag/矩阵',            'news', ['数码'], 3, 0);
S('APPSO',             'AppSo 数字生活指南',               'https://www.ifanr.com/appso',               'news', ['数码', '资讯'], 4, 0);
S('The Atlantic',       '美国大西洋月刊',                   'https://www.theatlantic.com',               'news', ['英文', '深度'], 3, 0);

/* ---------------- 在线工具 ---------------- */
S('Bing 翻译',          '微软必应翻译',                     'https://www.bing.com/translator',           'online', ['翻译'], 4, 0);
S('彩云小译',           '中英对照网页翻译',                 'https://fanyi.caiyunapp.com',               'online', ['翻译', '国产'], 4, 0);
S('火山翻译',           '字节跳动机器翻译',                 'https://translate.volcengine.com',          'online', ['翻译', '国产'], 3, 0);
S('EZGIF',              'GIF 制作编辑一站式工具',           'https://ezgif.com',                         'online', ['GIF', '编辑'], 4, 0);
S('GIPHY',              '全球最大 GIF 图库',                'https://giphy.com',                         'online', ['GIF', '素材'], 4, 0);
S('Soogif',             '中文动图制作与素材',               'https://www.soogif.com',                    'online', ['GIF', '国产'], 3, 0);
S('Speedtest',          'Ookla 网速测试',                  'https://www.speedtest.net',                 'online', ['测速'], 5, 0);
S('Fast.com',           'Netflix 网速快测',                'https://fast.com',                          'online', ['测速'], 4, 0);
S('ITDog 多地 Ping',    '全国多节点网络测试',               'https://www.itdog.cn/ping',                 'online', ['测速', '国产'], 4, 0);
S('JSON Crack',         'JSON 可视化结构图工具',           'https://jsoncrack.com',                     'online', ['JSON', '可视化'], 4, 0);
S('Diffchecker',        '文本差异对比工具',                 'https://www.diffchecker.com',               'online', ['对比'], 4, 0);
S('Crontab.guru',       'Cron 表达式解释器',               'https://crontab.guru',                      'online', ['Cron', '运维'], 4, 0);
S('Temp Mail',          '一次性临时邮箱',                   'https://temp-mail.org',                     'online', ['邮箱', '临时'], 4, 0);
S('Webhook.site',       '在线 Webhook 调试',               'https://webhook.site',                      'online', ['调试', '开发'], 4, 0);
S('Beeceptor',          'HTTP Mock 服务',                  'https://beeceptor.com',                     'online', ['Mock'], 3, 0);
S('Oh My Zsh',          'Zsh 配置管理框架',                'https://ohmyz.sh',                          'online', ['终端', '开源'], 5, 1);
S('Starship',           '极快跨 Shell 提示符',             'https://starship.rs',                       'online', ['终端', '开源'], 4, 0);
S('TypeLit',            '打字速度在线练习',                 'https://www.typelit.io',                    'online', ['打字', '练习'], 3, 0);
S('Protocol 在线手册',  '多语言 API 文档聚合',              'https://overapi.com',                       'online', ['文档'], 3, 0);

/* ---------------- 办公效率 ---------------- */
S('Cubox',              '跨端稍后读与收藏',                 'https://cubox.pro',                         'office', ['收藏', '阅读'], 4, 0);
S('Readwise',           '阅读标注同步回顾',                 'https://readwise.io',                       'office', ['阅读', '笔记'], 4, 0);
S('Otter 转写',         '实时语音转写会议助手',             'https://otter.ai',                          'office', ['转写', '会议'], 3, 0);
S('Flomo 浮墨笔记',     '卡片式碎片笔记',                   'https://flomoapp.com',                      'office', ['笔记', '国产'], 4, 0);
S('Doocs 技术文档',     '开源技术文档集合',                 'https://doocs.github.io',                   'office', ['文档', '开源'], 3, 0);
S('Raycast',            'Mac 效率启动器',                  'https://www.raycast.com',                   'office', ['效率', 'Mac'], 5, 1);
S('Alfred',             '经典 Mac 效率工具',               'https://www.alfredapp.com',                 'office', ['效率', 'Mac'], 4, 0);
S('PowerToys',          '微软 Windows 效率套件',           'https://learn.microsoft.com/windows/powertoys/', 'office', ['效率', 'Windows'], 5, 1);
S('Ditto 剪贴板',       'Windows 开源剪贴板历史',          'https://ditto-cp.sourceforge.io',           'office', ['剪贴板', '开源'], 4, 0);
S('Caffeine',           '防止电脑休眠小工具',               'https://www.zhornsoftware.co.uk/caffeine/', 'office', ['工具'], 3, 0);
S('Toggl Track',        '轻量时间追踪工具',                 'https://toggl.com/track/',                  'office', ['时间管理'], 4, 0);
S('RescueTime',         '自动时间使用分析',                 'https://www.rescuetime.com',                'office', ['时间管理'], 3, 0);
S('Agenda 会议纪要',  'AI 会议纪要助手',                 'https://www.agendas.com',                   'office', ['会议'], 3, 0);
S('Calendly 中文替代',  '在线约时间工具聚合',               'https://cal.com',                           'office', ['日程'], 4, 0);
S('Focusmate',          '线上互相监督专注',                 'https://www.focusmate.com',                 'office', ['专注'], 3, 0);
S('Ear Trumpet',        'Windows 音量分应用管理',          'https://eartrumpet.app',                    'office', ['工具', 'Windows'], 4, 0);
S('LocalSend',          '开源跨设备文件互传',               'https://localsend.org',                     'office', ['传输', '开源'], 5, 1);
S('Rustdesk',           '开源自托管远程桌面',               'https://rustdesk.com',                      'office', ['远程', '开源'], 5, 1);
S('Restic',             '开源增量备份工具',                 'https://restic.net',                        'office', ['备份', '开源'], 4, 0);
S('Kopia',              '开源加密备份工具',                 'https://kopia.io',                          'office', ['备份', '开源'], 4, 0);

/* ---------------- 影音娱乐 ---------------- */
S('Letterboxd',         '电影社交与评分平台',               'https://letterboxd.com',                    'media', ['电影', '评分'], 4, 0);
S('Metacritic',         '游戏影视媒体评分聚合',             'https://www.metacritic.com',                'media', ['评分'], 3, 0);
S('IGN 中国',           '游戏娱乐媒体',                     'https://www.ignx.cn',                       'media', ['游戏', '资讯'], 3, 0);
S('机核 GCORES',        '游戏文化内容社区',                 'https://www.gcores.com',                    'media', ['游戏', '播客'], 4, 0);
S('游研社',             '游戏研究社',                       'https://www.yystv.cn',                      'media', ['游戏', '资讯'], 3, 0);
S('小宇宙',             '中文播客 App 官网',               'https://xiaoyuzhoufm.com',                  'media', ['播客'], 4, 0);
S('Apple Podcasts',     '苹果播客网页版',                   'https://podcasts.apple.com',                'media', ['播客'], 3, 0);
S('Deezer',             '法国流媒体音乐平台',               'https://www.deezer.com',                    'media', ['音乐'], 3, 0);
S('汽水音乐',           '字节旗下潮流音乐',                 'https://www.qishui.com',                    'media', ['音乐', '国产'], 3, 0);
S('Yikm 怀旧游戏',      '网页街机 FC 怀旧游戏合集',        'https://www.yikm.net',                      'fun', ['游戏', '怀旧'], 3, 0);
S('贪玩蓝月官网',       '经典网页游戏入口',                 'https://www.tanwan.com',                    'fun', ['游戏', '网页'], 3, 0);

/* ---------------- 生活服务 ---------------- */
S('春雨医生',           '在线问诊平台',                     'https://www.chunyuyisheng.com',             'life', ['医疗', '问诊'], 3, 0);
S('薄荷健康',           '饮食记录与健康管理',               'https://www.boohee.com',                    'life', ['健康'], 3, 0);
S('Keep',               '运动健身课程平台',                 'https://www.gotokeep.com',                  'life', ['健身', '运动'], 4, 0);
S('咕咚',               '跑步骑行记录社区',                 'https://www.codoon.com',                    'life', ['跑步', '运动'], 3, 0);
S('悦跑圈',             '跑步记录与赛事',                   'https://www.joyrun.com',                    'life', ['跑步'], 3, 0);
S('Skyscanner',         '全球机票比价',                     'https://www.tianxun.com',                   'life', ['旅行', '比价'], 4, 0);
S('Kayak',              '旅行综合比价搜索',                 'https://www.kayak.com',                     'life', ['旅行', '比价'], 3, 0);
S('国家移民管理局',     '出入境证件预约办理',               'https://www.nia.gov.cn',                    'gov', ['政务', '出入境'], 4, 0);
S('全国住房公积金',     '公积金查询服务入口',               'https://www.12329.com.cn',                  'gov', ['政务', '公积金'], 3, 0);

/* ---------------- 电商购物 ---------------- */
S('孔夫子旧书网',       '古旧书在线交易平台',               'https://www.kongfz.com',                    'shop', ['图书', '二手'], 4, 0);
S('敦煌网',             '跨境 B2B 电商平台',               'https://www.dhgate.com',                    'shop', ['跨境', 'B2B'], 3, 0);
S('Lazada',             '东南亚电商平台',                   'https://www.lazada.com',                    'shop', ['跨境', '东南亚'], 3, 0);
S('Shopee',             '东南亚与台湾电商平台',             'https://shopee.com',                        'shop', ['跨境'], 3, 0);
S('Rakuten',            '日本乐天市场',                     'https://www.rakuten.com',                   'shop', ['跨境', '日本'], 3, 0);
S('京东读书',           '京东电子书平台',                   'https://e.jd.com',                          'shop', ['图书', '电子书'], 3, 0);

/* ---------------- 开发者社区 ---------------- */
S('GOTC 开源峰会',      '全球开源技术峰会',                 'https://gotc.oschina.net',                  'community', ['会议', '开源'], 3, 0);
S('FRAMEWORK 少数派',   '效率工具评测社区',                 'https://www.sspai.com',                     'community', ['效率'], 4, 0);
S('电玩巴士',           '主机游戏资讯社区',                 'https://www.tgbus.com',                     'community', ['游戏', '主机'], 3, 0);
S('Chiphell',           '数码硬件发烧论坛',                 'https://www.chiphell.com',                  'community', ['硬件', '论坛'], 3, 0);
S('52pojie 汇编区',     '吾爱破解软件安全区',               'https://www.52pojie.cn',                    'community', ['安全', '论坛'], 4, 0);

/* ---------------- 文档手册 ---------------- */
S('Docker Compose 文档', '容器编排官方文档',                'https://docs.docker.com/compose/',          'docs', ['Docker', '文档'], 4, 0);
S('Git Book 中文',      'Pro Git 中文版',                   'https://git-scm.com/book/zh/v2',            'docs', ['Git', '文档'], 5, 0);
S('Markdown 官方指南',  'Markdown 语法入门与规范',          'https://markdown.com.cn',                   'docs', ['Markdown', '文档'], 4, 0);
S('HTTP 权威指南',      'MDN HTTP 文档中文',               'https://developer.mozilla.org/zh-CN/docs/Web/HTTP', 'docs', ['HTTP', '文档'], 5, 0);
S('Unicode 字符百科',   '全 Unicode 字符查询',             'https://unicode-table.com/cn/',             'docs', ['字符', '查询'], 4, 0);
S('正则表达式 30 分钟', '经典正则入门教程',                 'https://deerchao.cn/tutorials/regex/regex.htm', 'docs', ['正则', '教程'], 4, 0);
S('Vue Router 文档',    'Vue 官方路由器文档',              'https://router.vuejs.org/zh/',              'docs', ['Vue', '文档'], 5, 0);
S('Pinia 文档',         'Vue 官方状态管理文档',            'https://pinia.vuejs.org/zh/',               'docs', ['Vue', '状态管理'], 5, 0);
S('UnoCSS 文档',        '原子化 CSS 引擎文档',             'https://unocss.dev',                        'docs', ['CSS', '文档'], 4, 0);
S('Recoil 文档',        'React 状态管理库文档',            'https://recoiljs.org',                      'docs', ['React', '状态管理'], 3, 0);
S('SwiftUI 中文文档',   'SwiftUI 社区中文文档',            'https://swiftui.pl',                        'docs', ['Swift', '文档'], 3, 0);
S('Compose 文档',       'Jetpack Compose 官方文档',        'https://developer.android.com/jetpack/compose?hl=zh-cn', 'docs', ['Android', '文档'], 4, 0);

/* ============================================================
 * 💼 求职招聘
 * ============================================================ */
S('BOSS直聘',      '在线直聊招聘平台',       'https://www.zhipin.com',        'job', ['求职', '招聘'], 5, 1);
S('智联招聘',      '综合招聘服务平台',       'https://www.zhaopin.com',       'job', ['求职', '招聘'], 4, 1);
S('前程无忧',      '老牌综合招聘网站',       'https://www.51job.com',         'job', ['求职', '招聘'], 4, 1);
S('猎聘',          '中高端人才招聘平台',     'https://www.liepin.com',        'job', ['猎头', '中高端'], 4, 0);
S('拉勾网',        '互联网行业招聘平台',     'https://www.lagou.com',         'job', ['互联网', '招聘'], 4, 0);
S('脉脉',          '职场社交与人脉平台',     'https://maimai.cn',             'job', ['职场', '社交'], 4, 1);
S('实习僧',        '大学生实习招聘平台',     'https://www.shixiseng.com',     'job', ['实习', '校招'], 4, 0);
S('应届生求职网',  '应届生求职信息门户',     'https://www.yingjiesheng.com',  'job', ['校招', '应届生'], 4, 0);
S('国聘',          '国央企官方招聘平台',     'https://www.iguopin.com',       'job', ['国企', '央企'], 4, 0);
S('海投网',        '校招宣讲会与网申聚合',   'https://www.haitou.cc',         'job', ['校招', '网申'], 3, 0);
S('高校人才网',    '高校与科研机构招聘',     'https://www.gaoxiaojob.com',    'job', ['高校', '科研'], 3, 0);
S('中国人才热线',  '华南地区综合招聘',       'https://www.cjol.com',          'job', ['招聘', '华南'], 3, 0);
S('鱼泡网',        '蓝领工人找工作平台',     'https://www.yupao.com',         'job', ['蓝领', '工地'], 3, 0);
S('青团社',        '大学生灵活兼职平台',     'https://www.qingyuanshe.com',   'job', ['兼职', '学生'], 3, 0);

/* ============================================================
 * 🚀 职场进阶
 * ============================================================ */
S('超级简历',          '专业在线简历制作工具',   'https://www.wondercv.com',    'career', ['简历', '求职'], 4, 1);
S('五百丁',            '简历模板与求职攻略',     'https://www.500d.me',         'career', ['简历', '模板'], 3, 0);
S('OfficePlus',        '微软官方免费模板库',     'https://www.officeplus.cn',   'career', ['PPT', '模板'], 5, 1);
S('演界网',            '高端 PPT 模板与动效',    'https://www.yanj.cn',         'career', ['PPT', '演示'], 3, 0);
S('第一PPT',           '免费 PPT 模板下载',      'https://www.1ppt.com',        'career', ['PPT', '免费'], 4, 0);
S('优品PPT',           '免费精品 PPT 模板',      'https://www.ypppt.com',       'career', ['PPT', '免费'], 4, 0);
S('秀米',              '新媒体图文排版工具',     'https://xiumi.us',            'career', ['排版', '新媒体'], 4, 0);
S('简书',              '创作社区与写作平台',     'https://www.jianshu.com',     'career', ['写作', '创作'], 3, 0);
S('美篇',              '图文创作与分享平台',     'https://www.meipian.cn',      'career', ['图文', '创作'], 3, 0);
S('虎嗅',              '商业科技深度报道',       'https://www.huxiu.com',       'career', ['商业', '科技'], 4, 0);
S('混沌学园',          '商业思维与创新课程',     'https://www.hundun.cn',       'career', ['思维', '课程'], 3, 0);
S('人人都是产品经理',  '产品运营学习社区',       'https://www.woshipm.com',     'career', ['产品', '运营'], 4, 1);
S('壹伴助手',          '新媒体运营效率插件',     'https://yiban.io',            'career', ['新媒体', '运营'], 4, 0);
S('新榜',              '新媒体内容行业数据',     'https://www.newrank.cn',      'career', ['新媒体', '数据'], 4, 0);
