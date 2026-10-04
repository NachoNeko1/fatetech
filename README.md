# Fate‘s blog-Fatetech命运科技

一个适配 GitHub Pages 的静态个人博客模板，采用简洁、卡片化、轻玻璃质感的视觉风格。

## 功能
- HarmonyOS 风格字体栈（设备安装鸿蒙字体时优先使用，其他设备自动回退）\n- 统一线性 SVG 图标与圆角控件\n- 响应式布局，适配手机、平板和桌面
- 深色 / 浅色主题切换（记住用户选择）
- 首页文章卡片与前端搜索
- 关于页、文章页和 404 页面
- GitHub Actions 自动部署到 GitHub Pages
- 无需数据库、无需构建步骤

## 部署到 GitHub Pages
1. 在 GitHub 新建仓库。若想使用 `https://用户名.github.io/`，仓库名应为 `用户名.github.io`；否则项目站点地址通常为 `https://用户名.github.io/仓库名/`。
2. 将本项目文件上传到仓库根目录，并推送到 `main` 分支。
3. 打开仓库 **Settings → Pages**，在 **Build and deployment → Source** 中选择 **GitHub Actions**。
4. 等待 **Actions** 中的 `Deploy to GitHub Pages` 工作流完成。
5. 在 Settings → Pages 中打开生成的网站地址。

## 修改内容
- 网站标题：编辑各 HTML 文件的 `<title>`。
- 头部品牌：将各页面 header 中的 `Fatetech命运科技` 替换为你的名称。
- 首页文章：编辑 `index.html` 中的 `.article-card` 卡片。
- 文章内容：编辑 `posts/` 下对应 HTML 文件；新增文章时复制一个现有文章页，并在首页添加卡片。
- 关于页面：编辑 `about.html`。
- 主题与样式：编辑 `assets/css/style.css`。
- 网站图标：替换 `assets/favicon.svg`。

## 本地预览
可直接用浏览器打开 `index.html`。如果浏览器限制本地资源，可使用任意静态文件服务器预览。

## 说明
此模板为独立实现的博客页面，借鉴现代极简博客常见的布局与交互，不包含 Helo 的原始代码或素材。
