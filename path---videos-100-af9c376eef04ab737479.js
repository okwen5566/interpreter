webpackJsonp([91729006752145],{601:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Dustin Schau - Blog",author:"Dustin Schau"}},markdownRemark:{id:"/Users/okwen/www/gatsbyblog/content/blog/100_2018-09-07/index.md absPath of file >>> MarkdownRemark",html:'<h3 id="使用单位"><a href="#%E4%BD%BF%E7%94%A8%E5%8D%95%E4%BD%8D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>使用单位</h3>\n<ul>\n<li>\n<p><strong>px</strong>    </p>\n<ul>\n<li>px是pixels（像素的缩写,是一种绝对单位。</li>\n<li>用于屏幕显示器上，传统上一个像素对应于计算机屏幕上的一个点，而对于高清屏则对应更多。</li>\n<li>\n<p>任何现代显示屏，不管是手机，平板，笔记本还是电视都是由成千上万的像素组成的，所以我们可以使用这些像素来定义长度。  </p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/*使用 px 单位设置下元素的大小*/</span>\n<span class="token selector">.box</span> <span class="token punctuation">{</span>\n<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n<li>\n<p><strong>%</strong></p>\n<ul>\n<li>百分比</li>\n<li>如果对 html 元素设置 font-size 为百分比值，则是以浏览器默认的字体大小16px为参照计算的（所有浏览器的默认字体大小都为 16px），如62.5%即等于10px（62.5% * 16px = 10px）。</li>\n</ul>\n</li>\n<li>\n<p><strong>em</strong></p>\n<ul>\n<li>em 也是一种相对单位，既然是相对单位，那么肯定有一个参照值。</li>\n<li>不过其参照值并不是固定不变的，而是不同的属性有不同的参照值。</li>\n</ul>\n</li>\n<li>\n<p><strong>rem</strong></p>\n<ul>\n<li>和 em 一样，rem 也是一种相对单位。</li>\n<li>不过rem 是相对于根元素 html 的 font-size 来计算的，所以其参照物是固定的。</li>\n<li>\n<p>rem的r就是表示root，虽然rem相对em进步了很多，但是由于是新技术，不支持IE8以下（包括IE8）,不过幸喜的是移动端可以放心使用</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>\n<span class="token property">font-size</span><span class="token punctuation">:</span> 625%<span class="token punctuation">;</span> <span class="token comment">/* 相当于100px = 625% * 16px */</span>\n<span class="token punctuation">}</span>\n<span class="token selector">div</span> <span class="token punctuation">{</span>\n<span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> \n<span class="token property">width</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span> <span class="token comment">/* 2rem = 2 * 100px(根元素的font-size) */</span>\n<span class="token property">height</span><span class="token punctuation">:</span> 4rem<span class="token punctuation">;</span> <span class="token comment">/* 4rem = 4 * 100px(根元素的font-size) */</span>\n<span class="token property">padding</span><span class="token punctuation">:</span> 0.1rem<span class="token punctuation">;</span> <span class="token comment">/* 0.1rem = 0.1 * 100px(根元素的font-size) */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n<li>\n<p><strong>vw, vh, vmin, vmax</strong></p>\n<ul>\n<li>它们也是相对单位，是基于视窗大小（浏览器用来显示内容的区域大小）来计算的。</li>\n<li>vw：基于视窗的宽度计算，1vw 等于视窗宽度的百分之一</li>\n<li>vh：基于视窗的高度计算，1vh 等于视窗高度的百分之一</li>\n<li>vmin：基于vw和vh中的最小值来计算，1vmin 等于最小值的百分之一</li>\n<li>vmax：基于vw和vh中的最大值来计算，1vmax 等于最大值的百分之一</li>\n<li>\n<p>由于是新技术，还是有些浏览器不兼容，哪怕在移动端安卓4.3 以下也是不兼容</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/*实现一个宽度为视窗宽度的 25%，高度为视窗高度 50% 的一个盒子*/</span>\n<span class="token selector">.box</span> <span class="token punctuation">{</span>\n<span class="token property">height</span><span class="token punctuation">:</span> 50vh<span class="token punctuation">;</span> <span class="token comment">/* 视窗高度的50% */</span>\n<span class="token property">width</span><span class="token punctuation">:</span> 25vw<span class="token punctuation">;</span> <span class="token comment">/* 视窗宽度的25% */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n</ul>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',excerpt:"使用单位 px      px是pixels（像素的缩写,是一种绝对单位。 用于屏幕显示器上，传统上一个像素对应于计算机屏幕上的一个点，而对于高清屏则对应更多。 任何现代显示屏，不管是手机，平板，笔记本还是电视都是由成千上万的像素组成的，所以我们可以使用这些像素来定义长度。   % 百分比 如果对 html…",timeToRead:1,frontmatter:{date:"2018年09月07日",rawDate:"2018-09-07T14:00:00.000Z",excerpt:"&nbsp",title:"100期 使用单位",image:{childImageSharp:{resize:{src:"/static/preview-5f723809bab3539ca2b93d3ae17465c7-2c40b.png"}}}}}},pathContext:{prev:{excerpt:"后代选择器 概念   后代选择器可以选择作为某元素后代的元素 也称为包含选择器 给以下HTML页面添加相应的样式 后代关系 使用空格隔开 例如class为block的div内，里面嵌套的所有的元素都是他的后代 结果 第一跟第二个p元素被选中 父子关系 使用>表示   结果 第一个p元素被选中 兄弟关系    紧跟其后的一个兄弟 使用+表示 结果 class为bd的div被选中 后面所有的兄弟 使用～表示 结果 class为bd和ft的div都被选中",html:'<h3 id="后代选择器"><a href="#%E5%90%8E%E4%BB%A3%E9%80%89%E6%8B%A9%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>后代选择器</h3>\n<ul>\n<li>\n<p>概念  </p>\n<ul>\n<li>后代选择器可以选择作为某元素后代的元素</li>\n<li>也称为包含选择器</li>\n</ul>\n</li>\n<li>\n<p>给以下HTML页面添加相应的样式</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Content-Type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/html; charset=utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token comment">&lt;!-- 引入css文件 --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>第一个p元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>第二个p元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>第三个p元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>    \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p><strong>后代关系</strong></p>\n</li>\n<li>\n<p>使用空格隔开</p>\n</li>\n<li>\n<p>例如class为block的div内，里面嵌套的所有的元素都是他的后代</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.block p</span> <span class="token punctuation">{</span>\n<span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>结果<br>\n第一跟第二个p元素被选中</p>\n</li>\n</ul>\n<p><strong>父子关系</strong><br>\n使用>表示  </p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.block > p</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>结果<br>\n第一个p元素被选中</li>\n</ul>\n<p><strong>兄弟关系</strong>  </p>\n<ul>\n<li>\n<p>紧跟其后的一个兄弟</p>\n<ul>\n<li>\n<p>使用+表示</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">p + div</span> <span class="token punctuation">{</span>\n<span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>结果<br>\nclass为bd的div被选中</li>\n</ul>\n</li>\n<li>\n<p>后面所有的兄弟</p>\n<ul>\n<li>\n<p>使用～表示</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">p ~ div</span> <span class="token punctuation">{</span>\n<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>结果<br>\nclass为bd和ft的div都被选中</li>\n</ul>\n</li>\n</ul>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',id:"/Users/okwen/www/gatsbyblog/content/blog/099_2018-09-07/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/99"},frontmatter:{date:"September 07, 2018",draft:!1,title:"099期 后代选择器"}},next:{excerpt:"颜色 别名 \n使用颜色的英文名 RGB \n红绿蓝颜色值 十六进制表示法 \n十六进制值使用三个双位数来编写，并以 # 符号开头。",html:'<h3 id="颜色"><a href="#%E9%A2%9C%E8%89%B2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>颜色</h3>\n<ul>\n<li>\n<p><strong>别名</strong>\n使用颜色的英文名</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>\n<span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p><strong>RGB</strong>\n红绿蓝颜色值</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>\n<span class="token property">color</span><span class="token punctuation">:</span><span class="token function">rgb</span><span class="token punctuation">(</span>255,0,0<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/*顺序依次表示红绿蓝的程度*/</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p><strong>十六进制表示法</strong>\n十六进制值使用三个双位数来编写，并以 # 符号开头。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">.hex</span> <span class="token punctuation">{</span>\n<span class="token property">color</span><span class="token punctuation">:</span> #0e7ab9<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',id:"/Users/okwen/www/gatsbyblog/content/blog/101_2018-09-07/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/101"},frontmatter:{date:"September 07, 2018",draft:!1,title:"101期 使用颜色"}},slug:"/videos/100"}}}});
//# sourceMappingURL=path---videos-100-af9c376eef04ab737479.js.map