webpackJsonp([0xdb25fdf3dead],{689:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Dustin Schau - Blog",author:"Dustin Schau"}},markdownRemark:{id:"/Users/okwen/www/gatsbyblog/content/blog/098_2018-09-07/index.md absPath of file >>> MarkdownRemark",html:'<h3 id="css选择器"><a href="#css%E9%80%89%E6%8B%A9%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CSS选择器</h3>\n<p>给以下HTML页面添加相应的样式</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Content-Type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/html; charset=utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token comment">&lt;!-- 引入css文件 --></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是段落1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>    \n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这是段落2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>    \n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fs16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这是段落3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fs16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>这是一级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fs16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>字体变成16px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p><strong>元素选择器</strong>  </p>\n<ul>\n<li>通过对应的HTML标签来选中</li>\n<li>选中页面中所有相同的HTML元素</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span> <span class="token comment">/*给所有p元素添加color为red的样式*/</span>                         \n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>id 选择器</strong><br>\nid 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#green</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span><span class="token comment">/*给id为green的元素添加color为red的样式*/</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>id是唯一的，相同的id一个页面只能用一次</li>\n</ul>\n<p><strong>类选择器</strong>  </p>\n<ul>\n<li>类选择器用于描述一组元素的样式</li>\n<li>类选择器有别于id选择器，class可以在多个元素中使用。</li>\n<li>在HTML中以class属性表示, 在 CSS 中，类选择器以一个点”.”号显示</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.fs16</span> <span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span><span class="token comment">/*给若干个class为fs16的元素字体变为16px*/</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>通用选择器</strong><br>\n匹配所有的html元素</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',excerpt:"CSS选择器 给以下HTML页面添加相应的样式 元素选择器    通过对应的HTML标签来选中 选中页面中所有相同的HTML元素 id 选择器 id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。 id是唯一的，相同的id…",timeToRead:1,frontmatter:{date:"2018年09月07日",rawDate:"2018-09-07T12:00:00.000Z",excerpt:"&nbsp",title:"098期 CSS选择器",image:{childImageSharp:{resize:{src:"/static/preview-5f723809bab3539ca2b93d3ae17465c7-2c40b.png"}}}}}},pathContext:{prev:{excerpt:"HTML中引入CSS 行内方式 \n通过给元素添加 style 属性来添加样式，如下： 缺点： 只能改变当前标签的样式，如果想要多个元素都使用同一种样式，每个元素都要添加一遍 这样不仅导致HTML代码冗长难以阅读，而且后期维护起来也非常艰难。 建议 所以我们一般不会大量使用这种方式添加样式，只有在少量使用 js 改变样式的时候使用。 内嵌方式 \n通过在 < head>元素中使用 < style…",html:'<h3 id="html中引入css"><a href="#html%E4%B8%AD%E5%BC%95%E5%85%A5css" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HTML中引入CSS</h3>\n<p><strong>行内方式</strong>\n通过给元素添加 style 属性来添加样式，如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>颜色为红色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>颜色为红色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p>缺点：</p>\n<ul>\n<li>只能改变当前标签的样式，如果想要多个元素都使用同一种样式，每个元素都要添加一遍</li>\n<li>这样不仅导致HTML代码冗长难以阅读，而且后期维护起来也非常艰难。</li>\n</ul>\n</li>\n<li>\n<p>建议</p>\n<ul>\n<li>所以我们一般不会大量使用这种方式添加样式，只有在少量使用 js 改变样式的时候使用。</li>\n</ul>\n</li>\n</ul>\n<p><strong>内嵌方式</strong>\n通过在&#x3C;head>元素中使用&#x3C;style>元素来定义：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style language-css">\n        <span class="token selector">div</span> <span class="token punctuation">{</span>\n            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p>优点</p>\n<ul>\n<li>该方法有效解决了第一个行内方式的带来的多元素不能重用同一个样式的问题</li>\n</ul>\n</li>\n<li>\n<p>缺点</p>\n<ul>\n<li>没有办法和其他页面共用，只能本页面使用。</li>\n<li>当多个页面需要引入相同的 CSS 代码时，这样写会导致代码冗余，也不利于维护。  </li>\n</ul>\n</li>\n<li>\n<p>建议：</p>\n<ul>\n<li>这种方式我们一般在写简单 demo 的时候或者在移动端追求性能优化时使用。</li>\n</ul>\n</li>\n</ul>\n<p><strong>外链方式</strong>\n通过在&#x3C;head>元素中使用&#x3C;link>元素来引入：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<ul>\n<li>\n<p>优点    </p>\n<ul>\n<li>这是我们网页最常见的也是最推荐的引入 CSS 的方式，具备良好的可维护性。</li>\n<li>如果多个页面共用一个 CSS 文件的话，一般只在第一次加载时需要下载，以后切换页面时根本不需要加载该文件（浏览器一般有缓存）。</li>\n</ul>\n</li>\n</ul>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',id:"/Users/okwen/www/gatsbyblog/content/blog/097_2018-09-06/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/97"},frontmatter:{date:"September 06, 2018",draft:!1,title:"097期 HTML中引入CSS"}},next:{excerpt:"后代选择器 概念   后代选择器可以选择作为某元素后代的元素 也称为包含选择器 给以下HTML页面添加相应的样式 后代关系 使用空格隔开 例如class为block的div内，里面嵌套的所有的元素都是他的后代 结果 第一跟第二个p元素被选中 父子关系 使用>表示   结果 第一个p元素被选中 兄弟关系    紧跟其后的一个兄弟 使用+表示 结果 class为bd的div被选中 后面所有的兄弟 使用～表示 结果 class为bd和ft的div都被选中",html:'<h3 id="后代选择器"><a href="#%E5%90%8E%E4%BB%A3%E9%80%89%E6%8B%A9%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>后代选择器</h3>\n<ul>\n<li>\n<p>概念  </p>\n<ul>\n<li>后代选择器可以选择作为某元素后代的元素</li>\n<li>也称为包含选择器</li>\n</ul>\n</li>\n<li>\n<p>给以下HTML页面添加相应的样式</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Content-Type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/html; charset=utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token comment">&lt;!-- 引入css文件 --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>第一个p元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>第二个p元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>第三个p元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>    \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p><strong>后代关系</strong></p>\n</li>\n<li>\n<p>使用空格隔开</p>\n</li>\n<li>\n<p>例如class为block的div内，里面嵌套的所有的元素都是他的后代</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.block p</span> <span class="token punctuation">{</span>\n<span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>结果<br>\n第一跟第二个p元素被选中</p>\n</li>\n</ul>\n<p><strong>父子关系</strong><br>\n使用>表示  </p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.block > p</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>结果<br>\n第一个p元素被选中</li>\n</ul>\n<p><strong>兄弟关系</strong>  </p>\n<ul>\n<li>\n<p>紧跟其后的一个兄弟</p>\n<ul>\n<li>\n<p>使用+表示</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">p + div</span> <span class="token punctuation">{</span>\n<span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>结果<br>\nclass为bd的div被选中</li>\n</ul>\n</li>\n<li>\n<p>后面所有的兄弟</p>\n<ul>\n<li>\n<p>使用～表示</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">p ~ div</span> <span class="token punctuation">{</span>\n<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>结果<br>\nclass为bd和ft的div都被选中</li>\n</ul>\n</li>\n</ul>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',id:"/Users/okwen/www/gatsbyblog/content/blog/099_2018-09-07/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/99"},frontmatter:{date:"September 07, 2018",draft:!1,title:"099期 后代选择器"}},slug:"/videos/98"}}}});
//# sourceMappingURL=path---videos-98-1702e88577a2327f47a4.js.map