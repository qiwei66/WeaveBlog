# WeaveBlog

WeaveBlog 是一个基于 GitHub OAuth 的现代博客平台，允许用户使用 GitHub 账号登录并将博客内容同步到 GitHub Gists。

![DeepBlog Preview](https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&h=400)

## 🌟 特性

- 📝 Markdown 编辑器支持
- 🔐 GitHub OAuth 认证
- 💾 文章自动同步到 GitHub Gists
- 🖼️ 支持图片上传
- 📱 响应式设计
- 🎨 美观的用户界面

## 🚀 快速开始

### 在线预览

访问演示网站：`https://your-domain.com`

### 本地开发

1. 克隆仓库
```bash
git clone https://github.com/yourusername/weave-blog.git
cd weave-blog
```

2. 安装依赖
```bash
npm install
# 或者使用淘宝镜像
anpm install
```

3. 配置环境变量
创建 `.env` 文件并添加以下内容：
```
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

4. 启动开发服务器
```bash
npm run dev
# 或者
anpm run dev
```

应用将在 http://localhost:3333 启动。

### 部署到生产环境

1. 构建项目
```bash
npm run build
```

2. 部署 `dist` 目录到你的服务器

## 🔧 配置 GitHub OAuth 应用

1. 访问 GitHub 开发者设置：https://github.com/settings/developers

2. 点击 "New OAuth App"

3. 填写应用信息：
   - Application name: WeaveBlog
   - Homepage URL: 你的应用URL（如 http://localhost:3333）
   - Authorization callback URL: 你的应用URL（如 http://localhost:3333）

4. 创建后，你会获得 Client ID 和 Client Secret

5. 更新 `.env` 文件中的认证信息

## 📝 使用指南

1. 登录：
   - 点击右上角的 "Login" 按钮
   - 使用 GitHub 账号授权登录

2. 创建博客：
   - 点击 "Write" 按钮
   - 使用 Markdown 编辑器撰写内容
   - 点击 "Save" 保存到 GitHub Gists

3. 管理内容：
   - 在个人主页查看所有文章
   - 编辑或删除已发布的内容
   - 管理个人资料设置

## 📄 许可证

[MIT License](LICENSE)
