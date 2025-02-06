# 部署指南

## 1. 准备工作

### 1.1 创建 GitHub 仓库
1. 访问 https://github.com/new
2. 创建名为 `weave-blog` 的新仓库
3. 保持仓库为公开状态

### 1.2 配置 GitHub OAuth 应用
1. 访问 https://github.com/settings/developers
2. 点击 "New OAuth App"
3. 填写应用信息：
   - Application name: WeaveBlog
   - Homepage URL: https://yourusername.github.io/weave-blog
   - Authorization callback URL: https://yourusername.github.io/weave-blog
4. 点击 "Register application"
5. 保存生成的 Client ID 和 Client Secret

### 1.3 配置环境变量
1. 创建生产环境配置文件 `.env.production`：
```
GITHUB_CLIENT_ID=你的客户端ID
GITHUB_CLIENT_SECRET=你的客户端密钥
```

## 2. 部署步骤

### 2.1 初始化 Git 仓库
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/weave-blog.git
git push -u origin main
```

### 2.2 安装依赖
```bash
anpm install
```

### 2.3 部署到 GitHub Pages
```bash
anpm run deploy
```

### 2.4 设置 GitHub Pages
1. 访问仓库设置页面 Settings > Pages
2. Source 选择 "gh-pages" 分支
3. 点击 Save

## 3. 验证部署

1. 访问 https://yourusername.github.io/weave-blog
2. 确认网站正常加载
3. 测试 GitHub 登录功能
4. 验证所有功能是否正常工作

## 4. 自动部署（可选）

### 4.1 创建 GitHub Actions 工作流

1. 在仓库中创建 `.github/workflows/deploy.yml` 文件
2. 配置自动部署流程：
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
          
      - name: Install Dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        env:
          GITHUB_CLIENT_ID: ${{ secrets.GITHUB_CLIENT_ID }}
          GITHUB_CLIENT_SECRET: ${{ secrets.GITHUB_CLIENT_SECRET }}
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 4.2 配置 GitHub Secrets
1. 访问仓库设置 Settings > Secrets
2. 添加以下 secrets：
   - GITHUB_CLIENT_ID
   - GITHUB_CLIENT_SECRET

## 5. 错误排查

### 5.1 白屏问题
- 检查 webpack.config.js 中的 publicPath 设置
- 确认所有资源路径正确
- 检查浏览器控制台错误

### 5.2 登录问题
- 验证 OAuth 应用配置
- 检查回调 URL 设置
- 确认环境变量正确配置

### 5.3 资源加载问题
- 确保所有静态资源使用正确的相对路径
- 检查 GitHub Pages URL 结构

## 6. 更新网站

1. 本地修改代码
2. 提交更改：
```bash
git add .
git commit -m "Update website"
git push origin main
```
3. 运行部署命令：
```bash
anpm run deploy
```

## 7. 自定义域名（可选）

1. 购买域名
2. 在 DNS 设置中添加 CNAME 记录指向 yourusername.github.io
3. 在仓库中添加 CNAME 文件
4. 在 GitHub Pages 设置中配置自定义域名
