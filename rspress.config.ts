import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'mrk-doc',
  description: 'This is a technical documentation for the Magicrepokit management system.',
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  lang:'zh',
  themeConfig: {
    locales :[
      {
        lang: 'en',
        // 导航栏切换语言的标签
        label: 'English',
        title: 'MRK-DOC',
        description: 'MKR System Technical Documentation',
      },
      {
        lang: 'zh',
        // 导航栏切换语言的标签
        label: '简体中文',
        title: 'MRK-文档',
        description: 'MKR系统技术文档',
      },
    ],
    footer :{
      message: 'Made with ❤️ by AuroraPixel from Magic-Repo-Kit'
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Magic-Repo-Kit'
      }
    ]
  },
  markdown: {
    // checkDeadLinks: true,
    showLineNumbers: true,
    highlightLanguages: [
      'js',
      'jsx',
      'ts',
      'tsx',
      'json',
      'css',
      'scss',
      'bash',
      'md',
      'mdx',
      'toml',
      'diff'
    ]
  }
});
