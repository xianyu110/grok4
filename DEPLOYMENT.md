# 🚀 部署指南

本指南将帮助您快速部署和配置这个美观的 Grok AI 展示网站。

## 📋 部署前准备

### 系统要求
- GitHub 账户
- 现代化的网页浏览器（Chrome, Firefox, Safari, Edge）

### 可选工具
- Git 客户端
- 代码编辑器（VS Code 推荐）
- Node.js（仅用于本地开发）

## 🎯 快速部署（5分钟设置）

### 步骤 1: Fork 项目

1. 访问 [GitHub 项目地址](https://github.com/chinamanor/grok3.asia)
2. 点击右上角的 **Fork** 按钮
3. 选择您的账户进行 Fork

### 步骤 2: 重命名仓库（可选）

1. 在您的 Fork 仓库中，点击 **Settings**
2. 滚动到 **Repository name** 部分
3. 将仓库名改为您喜欢的名称，例如 `my-grok-site`

### 步骤 3: 启用 GitHub Pages

1. 在仓库设置中找到 **Pages** 选项
2. 在 **Source** 下拉菜单中选择 **GitHub Actions**
3. 点击 **Save** 保存设置

### 步骤 4: 配置域名信息

编辑 `_config.yml` 文件：

```yaml
url: "https://yourusername.github.io"  # 替换为您的 GitHub 用户名
baseurl: "/your-repo-name"             # 替换为您的仓库名称
```

### 步骤 5: 等待自动部署

- GitHub Actions 将自动开始构建和部署
- 第一次部署通常需要 3-5 分钟
- 部署完成后访问：`https://yourusername.github.io/your-repo-name`

## 🛠️ 自定义配置

### 修改网站内容

#### 基本信息
编辑 `index.html` 中的以下内容：

```html
<!-- 修改网站标题 -->
<title>您的网站标题</title>

<!-- 修改英雄区域标题 -->
<h1 class="hero-title">您的标题</h1>

<!-- 修改描述 -->
<p class="hero-description">您的网站描述</p>
```

#### 功能特色
在 `features-grid` 部分修改功能卡片：

```html
<div class="feature-card">
    <div class="feature-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3 class="feature-title">您的功能标题</h3>
    <p class="feature-description">功能描述</p>
</div>
```

#### 统计数据
修改统计数字：

```html
<h3 class="stat-number" data-count="您的数字">0</h3>
<p class="stat-label">您的标签</p>
```

#### 联系信息
更新页脚联系方式：

```html
<li><a href="mailto:your-email@example.com">your-email@example.com</a></li>
<li><a href="https://github.com/your-username">GitHub</a></li>
```

### 样式自定义

#### 颜色主题
在 `styles.css` 中的 `:root` 部分修改颜色：

```css
:root {
    --primary-gradient: linear-gradient(135deg, #您的颜色1 0%, #您的颜色2 100%);
    --secondary-gradient: linear-gradient(135deg, #您的颜色3 0%, #您的颜色4 100%);
    /* ... 其他颜色变量 */
}
```

#### 字体
修改字体系列：

```css
:root {
    --font-family: '您的字体', system-ui, -apple-system, sans-serif;
}
```

然后在 HTML 头部添加字体链接：

```html
<link href="https://fonts.googleapis.com/css2?family=您的字体:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 功能自定义

#### 修改按钮行为
在 `script.js` 的 `handleButtonClicks` 函数中：

```javascript
if (primaryBtn) {
    primaryBtn.addEventListener('click', () => {
        // 替换为您的操作
        window.open('https://your-app-url.com', '_blank');
    });
}
```

#### 添加 Google Analytics
在 `_config.yml` 中取消注释并配置：

```yaml
google_analytics: "G-XXXXXXXXXX"  # 替换为您的 GA ID
```

## 📈 自动更新配置

### 修改更新频率

编辑 `.github/workflows/update-site.yml` 中的 cron 表达式：

```yaml
schedule:
  # 每天上午 9:00 (UTC+8)
  - cron: '0 1 * * *'
  
  # 每周一上午 9:00
  # - cron: '0 1 * * 1'
  
  # 每月 1 号上午 9:00  
  # - cron: '0 1 1 * *'
```

### 自定义更新内容

在工作流文件中添加您的更新逻辑：

```yaml
- name: 自定义更新
  run: |
    # 添加您的更新脚本
    echo "执行自定义更新..."
    # 例如：更新特定内容
    sed -i "s/旧内容/新内容/g" index.html
```

## 🔍 故障排除

### 常见问题

#### 1. 页面无法访问

**原因**: GitHub Pages 未正确配置
**解决方案**: 
- 确认在 Settings > Pages 中选择了 "GitHub Actions"
- 检查 Actions 选项卡是否有构建错误

#### 2. 样式显示异常

**原因**: CSS 文件路径问题
**解决方案**:
- 检查 `_config.yml` 中的 `baseurl` 配置
- 确保所有资源路径正确

#### 3. 自动更新不工作

**原因**: GitHub Actions 权限不足
**解决方案**:
- 在仓库设置中检查 Actions 权限
- 确保工作流文件语法正确

#### 4. 移动端显示问题

**原因**: 响应式样式问题
**解决方案**:
- 检查 CSS 媒体查询
- 确保视口元标签正确设置

### 调试技巧

#### 本地测试
```bash
# 安装依赖
npm install

# 启动本地服务器
npm run dev
```

#### 查看构建日志
1. 访问仓库的 **Actions** 选项卡
2. 点击最近的工作流运行
3. 查看详细的构建日志

#### 浏览器开发者工具
- 按 F12 打开开发者工具
- 查看 Console 选项卡的错误信息
- 使用 Network 选项卡检查资源加载

## 📞 获取帮助

### 文档资源
- [GitHub Pages 文档](https://docs.github.com/pages)
- [GitHub Actions 文档](https://docs.github.com/actions)
- [Jekyll 文档](https://jekyllrb.com/docs/)

### 社区支持
- [GitHub Issues](https://github.com/chinamanor/grok3.asia/issues)
- [GitHub Discussions](https://github.com/chinamanor/grok3.asia/discussions)

### 联系方式
- 项目维护者: [@chinamanor](https://github.com/chinamanor)
- 邮箱: contact@grokai.com

---

🎉 **恭喜！您已成功部署了自己的 Grok AI 展示网站！**

如果您觉得这个项目有用，请给我们一个 ⭐ Star！ 