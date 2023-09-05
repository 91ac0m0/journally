document.querySelector("article.markdown-body").querySelectorAll("img").forEach(img => {
    img.setAttribute('data-action', 'zoom')
})