webpackJsonp([92334674109126],{701:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Dustin Schau - Blog",author:"Dustin Schau"}},markdownRemark:{id:"/Users/okwen/www/gatsbyblog/content/blog/092_2018-09-05/index.md absPath of file >>> MarkdownRemark",html:'<div>\n<video class="responsive"  controls="controls" poster="https://data.mashangxiegang.com/image/videostart.jpg">\n  <source type="video/mp4" src="https://data.mashangxiegang.com/video/092_2018-09-05.mp4"></source>\n  <p>Your browser does not support the video element.</p>\n</video>\n</div>\n<h3 id="table表格"><a href="#table%E8%A1%A8%E6%A0%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>table表格</h3>\n<ul>\n<li>\n<p>table在HTML中是一个很重要的概念，他的应用很广泛，很多网页都有使用表格来将数据呈现给用户</p>\n</li>\n<li>\n<p>index.html</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>caption</span><span class="token punctuation">></span></span>五险一金缴纳<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>caption</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- table 标题，table里面第一个元素 --></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 使用 thead 包裹表头行 --></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>缴纳项目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>个人缴纳<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>单位缴纳<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 使用 tbody 包裹内容 --></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>养老<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>8%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>14%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>医疗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>2%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>6.2%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>失业<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>1%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>2%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>工伤<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>0%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>0.4%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>生育<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>0%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>0.5%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>公积金<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>14%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>14%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',excerpt:"table表格 table在HTML中是一个很重要的概念，他的应用很广泛，很多网页都有使用表格来将数据呈现给用户 index.html",timeToRead:1,frontmatter:{date:"2018年09月05日",rawDate:"2018-09-05T16:00:00.000Z",excerpt:"&nbsp",title:"092期 table表格",image:{childImageSharp:{resize:{src:"/static/preview-5f723809bab3539ca2b93d3ae17465c7-2c40b.png"}}}}}},pathContext:{prev:{excerpt:"HTML树 index.html",html:'<div>\n<video class="responsive"  controls="controls" poster="https://data.mashangxiegang.com/image/videostart.jpg">\n  <source type="video/mp4" src="https://data.mashangxiegang.com/video/091_2018-09-05.mp4"></source>\n  <p>Your browser does not support the video element.</p>\n</video>\n</div>\n<h3 id="html树"><a href="#html%E6%A0%91" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HTML树</h3>\n<ul>\n<li>index.html</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>这是一级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>文本段落<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',id:"/Users/okwen/www/gatsbyblog/content/blog/091_2018-09-05/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/91"},frontmatter:{date:"September 05, 2018",draft:!1,title:"091期 HTML树"}},next:{excerpt:"input元素 input元素是一个应用很广泛的元素，我们可以提供文本框，选择框等等来收集用户的输入。 index.html",html:'<div>\n<video class="responsive"  controls="controls" poster="https://data.mashangxiegang.com/image/videostart.jpg">\n  <source type="video/mp4" src="https://data.mashangxiegang.com/video/093_2018-09-05.mp4"></source>\n  <p>Your browser does not support the video element.</p>\n</video>\n</div>\n<h3 id="input元素"><a href="#input%E5%85%83%E7%B4%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>input元素</h3>\n<ul>\n<li>\n<p>input元素是一个应用很广泛的元素，我们可以提供文本框，选择框等等来收集用户的输入。</p>\n</li>\n<li>\n<p>index.html</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token comment">&lt;!-- 文本输入框 --></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token comment">&lt;!-- 文本输入框提示信息 --></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>用户名<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token comment">&lt;!-- 密码输入框 --></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pwd<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>密码<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token comment">&lt;!-- 单选框 --></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sex<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>man<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男\n            <span class="token comment">&lt;!-- 复选框 --></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>music<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>音乐\n            <span class="token comment">&lt;!-- 隐藏域 --></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>other-data<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>用户不可见数据<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token comment">&lt;!-- 上传文件 --></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token comment">&lt;!-- 普通按钮 --></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>普通按钮<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token comment">&lt;!-- 提交按钮 --></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>立即加入<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token comment">&lt;!-- 重置按钮 --></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',
id:"/Users/okwen/www/gatsbyblog/content/blog/093_2018-09-05/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/93"},frontmatter:{date:"September 05, 2018",draft:!1,title:"093期 表单之input"}},slug:"/videos/92"}}}});
//# sourceMappingURL=path---videos-92-d7e5d78674619cb13902.js.map