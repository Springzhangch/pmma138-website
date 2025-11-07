# 香港粤丰展示用品有限公司官网

这是一个使用 Cloudflare Pages 部署的静态网站。

## 网站结构

- `index.html` - 首页
- `products.html` - 产品与加工能力
- `about.html` - 关于我们
- `contact.html` - 联系我们（含表单）
- `privacy.html` - 隐私政策
- `robots.txt` - 搜索引擎爬虫规则
- `sitemap.xml` - 网站地图

## 部署说明

### 1. 创建 GitHub 仓库

1. 登录 GitHub，创建新仓库（名称如 `pmma138-website`）
2. 将所有文件上传到仓库

### 2. 部署到 Cloudflare Pages

1. 登录 Cloudflare 控制台
2. 进入 Pages → Create a project
3. 连接 GitHub 仓库
4. 构建设置：
   - 框架预设：None
   - 构建命令：留空
   - 构建输出目录：留空
5. 点击 Save and Deploy

### 3. 绑定自定义域名

1. 在 Pages 项目设置中，进入 Custom domains
2. 添加域名：`www.pmma138.com`
3. Cloudflare 会自动配置 DNS 和 HTTPS

### 4. 配置联系表单（无需注册）

当前已集成 **FormSubmit**，已将表单直接投递到邮箱：`display01@displayinchina.com`。

如需修改收件邮箱：
1. 打开 `contact.html`
2. 将 `<form action="https://formsubmit.co/display01@displayinchina.com" method="POST">` 中的邮箱替换为你的目标邮箱
3. 保存并提交后自动部署

FormSubmit 文档：`https://formsubmit.co/`

## 联系方式

- 电话：19525653434
- 邮箱：display01@displayinchina.com

