# journally

一个用来给无聊的人写日记的 hexo 主题。

## 预览



## 设置

头像放在 your_site/source/img 目录下

设置 your_site/_config.yml 中的 highlight 为无效
```text
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  enable: false
  preprocess: false
  line_number: false
  tab_replace: ''
```

分页的数量可以在 your_site/_config.yml 中调整
```
# Pagination
## Set per_page to 0 to disable pagination
per_page: 8
pagination_dir: page
```

## 借(chao)鉴(xi)

### 相关文档

[hexo helper](https://hexo.io/docs/helpers.html)

[ejs](https://ejs.bootcss.com/#docs)

[hexo 变量](https://hexo.io/zh-cn/docs/variables#%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F)

[Style](https://github.com/hexojs/hexo-theme-phase/blob/master/source/css/style.styl)

[highlight js](http://highlight.cndoc.wiki/doc) 主题在 css 里面更改

[markdown 渲染](https://github.com/sindresorhus/github-markdown-css) 没有 highlight

### 参考主题

[butterfly](https://butterfly.zhheo.com/Introduction.html)

[phase](https://github.com/hexojs/hexo-theme-phase/)

[paperwhite](https://github.com/aeilot/hexo-theme-paperwhite/)

[next](https://yuuichung.github.io/2018/06/06/hexo-next-4/)

### 组件

[paginator](https://www.cnblogs.com/linfangnan/?page=2)

[img zoom up](https://github.com/fat/zoom.js)



## todos
- [x] markdown 渲染
- [x] toc 滚动，navbar 固定
- [x] 代码点击复制，高亮渲染主题
- [x] 分页跳转的样式
- [x] 主页也太丑了
- [x] 图片点击放大  
- [ ] firefox头像很歪
- [x] 代码块滚轮条鬼畜
- [x] 代码块复制按钮看不清
- [ ] archieve 