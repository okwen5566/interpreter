webpackJsonp([0x89509d6e8109],{608:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Dustin Schau - Blog",author:"Dustin Schau"}},markdownRemark:{id:"/Users/okwen/www/gatsbyblog/content/blog/110_2018-09-11/index.md absPath of file >>> MarkdownRemark",html:'<h3 id="定位position"><a href="#%E5%AE%9A%E4%BD%8Dposition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>定位position</h3>\n<ul>\n<li>\n<p><strong>概念</strong>  </p>\n<ul>\n<li>position 属性指定了元素的定位类型。</li>\n</ul>\n</li>\n<li>\n<p><strong>static 定位</strong></p>\n<ul>\n<li>HTML元素的默认值，即没有定位，元素出现在正常的流中</li>\n<li>\n<p>静态定位的元素不会受到 top, bottom, left, right影响。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">div.static</span> <span class="token punctuation">{</span>\n<span class="token property">position</span><span class="token punctuation">:</span> static<span class="token punctuation">;</span>\n<span class="token property">border</span><span class="token punctuation">:</span> 3px solid #73AD21<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n<li>\n<p>效果\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 583px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 6.689536878216123%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAADeko4lAAAACXBIWXMAAAsSAAALEgHS3X78AAAAQ0lEQVQI12O4eu/k/1MXD/4/d+Xw/9uPLv6/dPPk/xv3z/2/fOvU/1cfH/x/9/XJ/7dfHv9/C6JxYaA8SN2bLw//AwBW2UkkSdkFfAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/001-b18e542ca6c42f99d21e7aa3043c8b8a-70e4a.jpg"\n        srcset="/static/001-b18e542ca6c42f99d21e7aa3043c8b8a-bf3e8.jpg 163w,\n/static/001-b18e542ca6c42f99d21e7aa3043c8b8a-22692.jpg 325w,\n/static/001-b18e542ca6c42f99d21e7aa3043c8b8a-70e4a.jpg 583w"\n        sizes="(max-width: 583px) 100vw, 583px"\n      />\n    </span>\n  </span>\n   </p>\n</li>\n<li>\n<p><strong>fixed 定位</strong></p>\n<ul>\n<li>元素的位置相对于浏览器窗口是固定位置。</li>\n<li>\n<p>即使窗口是滚动的它也不会移动</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">p.pos_fixed</span> <span class="token punctuation">{</span>\n<span class="token property">position</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span>\n<span class="token property">top</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span>\n<span class="token property">right</span><span class="token punctuation">:</span>5px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n<li>\n<p>效果</p>\n<ul>\n<li>some more text一直相对于浏览器窗口是固定位置，滚动窗口它也还是原位\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 577px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 36.91507798960139%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAAiElEQVQoz62QyQrDMAxE9f/fmA0c6qVKcL3ePI0KvrWQpp2LJBieRiJnHbTWyLlA1FrDWb3zkr5pKKWQUjoNFE/3ee/hnMO+7xiGEbTxBmZGrfUSsJSCxwHNKWOaZpCkGw9yCOHnkyUUyQ+tsa9NVxL2vs/Ed4Yx5ivgp6RSaVUrlnlBjPEvwCfyDCbtf7D59QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/002-b67d930dc455d7e25113cb9ff3945b9c-f6e44.jpg"\n        srcset="/static/002-b67d930dc455d7e25113cb9ff3945b9c-29dcf.jpg 163w,\n/static/002-b67d930dc455d7e25113cb9ff3945b9c-2a089.jpg 325w,\n/static/002-b67d930dc455d7e25113cb9ff3945b9c-f6e44.jpg 577w"\n        sizes="(max-width: 577px) 100vw, 577px"\n      />\n    </span>\n  </span>\n  </li>\n</ul>\n</li>\n<li>\n<p><strong>relative 定位</strong></p>\n<ul>\n<li>相对定位元素的定位是相对其正常位置。</li>\n<li>\n<p>移动相对定位元素，但它原本所占的空间不会改变。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">h2.pos_left</span> <span class="token punctuation">{</span>\n<span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>\n<span class="token property">left</span><span class="token punctuation">:</span>-20px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">h2.pos_right</span> <span class="token punctuation">{</span>\n<span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>\n<span class="token property">left</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n<li>\n<p>效果\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 587px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 44.12265758091993%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABcklEQVQoz32ReW+CQBDF/f4fptXE/1qPqJR4AB4QYxEPQO6bxNRafJ3dpiZtrZNM5u2wvP3tTm0xm6HT6UKRZSy1JcQXEaIootlsotVuo/74AFXV8DsulwtuRS3PMsRxjCRJUOQ58ixHWRSkC96LoggZ7Tkejyioz2pVVdzwO38YTpUpZGmCRr0BcTDAaqVDIyJFVjAajyFJMoR+n6/7vR6Gw9FdyhprpmmKMAjhOg7PMIyQJiknD8OQr13XRUSaETP9djrdNK1V1Qcn0jQN3W4HradnzKZT7Pd7zIhemkiYz+cQBAEK0bJv7VYbAQHcNEyIwnFcIgzguR5/N4eRul89RseoAtK+H6Asy/tX9uhH0zRhWRancsl8ra957nY7qgYMprc7nqZp8aHgv6HEdHrE3izNrhN1Dg4/xLZtMt3DJGN2C9/3YZHh+/l8JfxjyIZwsA/cgFXf82jSr1AXKnRdh2EYWJBmxJvNFuu18a8Zi092YKCh3Ih1NwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/003-30683bf6f2270939b47cb94b9a3faeb0-5d3c0.jpg"\n        srcset="/static/003-30683bf6f2270939b47cb94b9a3faeb0-4ba7c.jpg 163w,\n/static/003-30683bf6f2270939b47cb94b9a3faeb0-2ae41.jpg 325w,\n/static/003-30683bf6f2270939b47cb94b9a3faeb0-5d3c0.jpg 587w"\n        sizes="(max-width: 587px) 100vw, 587px"\n      />\n    </span>\n  </span>\n       </p>\n</li>\n<li>\n<p><strong>absolute 定位</strong></p>\n<ul>\n<li>绝对定位的元素的位置相对于最近的已定位父元素</li>\n<li>如果元素没有已定位的父元素，那么它的位置相对于&#x3C;html></li>\n<li>\n<p>absolute 定位使元素的位置与文档流无关，因此不占据空间。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>\n<span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>\n<span class="token property">left</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>\n<span class="token property">top</span><span class="token punctuation">:</span>150px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n<li>\n<p>效果\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 27.346465816917732%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAkklEQVQY041Qyw7DIAzj/z+uu3ZHYBC2oLXQju6EV1LtoR22WrJkJZYVR+WcobXGNE2IzCBPICKEcIZzDjFGeO9hjFlpRRMF2WttcLJWfHxhMEcofKDWxip8zyr2onnVd8Av8z82qKe4LwvGccQ839bTWXRKea3oUErZHfoKzCnJj1rYse9h7favQ9dhuA676z8A9OuEw84ckDQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/004-cbd5c60dc4dca07e2ff57a1961e294d9-55338.jpg"\n        srcset="/static/004-cbd5c60dc4dca07e2ff57a1961e294d9-a21e6.jpg 163w,\n/static/004-cbd5c60dc4dca07e2ff57a1961e294d9-4ac53.jpg 325w,\n/static/004-cbd5c60dc4dca07e2ff57a1961e294d9-55338.jpg 650w,\n/static/004-cbd5c60dc4dca07e2ff57a1961e294d9-a86df.jpg 863w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n   </p>\n</li>\n</ul>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',excerpt:"定位position 概念    position 属性指定了元素的定位类型。 static 定位 HTML元素的默认值，即没有定位，元素出现在正常的流中 静态定位的元素不会受到 top, bottom, left, right影响。 效果\n   fixed…",timeToRead:1,frontmatter:{date:"2018年09月11日",rawDate:"2018-09-11T13:00:00.000Z",excerpt:"&nbsp",title:"110期 定位position",image:{childImageSharp:{resize:{src:"/static/preview-5f723809bab3539ca2b93d3ae17465c7-2c40b.png"}}}}}},pathContext:{prev:{excerpt:"渐变背景—径向 概念    径向渐变由它的中心定义 默认情况下，渐变的中心是 center（表示在中心点） 渐变的形状是 ellipse（表示椭圆形） 渐变的大小是 farthest-corner（表示到最远的角落） 基本使用    使用radial-gradient属性 颜色结点均匀分布 效果\n   颜色结点不均匀分布 效果\n 设置形状 效果\n      ",html:'<h3 id="渐变背景径向"><a href="#%E6%B8%90%E5%8F%98%E8%83%8C%E6%99%AF%E5%BE%84%E5%90%91" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>渐变背景—径向</h3>\n<ul>\n<li>\n<p><strong>概念</strong>  </p>\n<ul>\n<li>径向渐变由它的中心定义</li>\n<li>默认情况下，渐变的中心是 center（表示在中心点）</li>\n<li>渐变的形状是 ellipse（表示椭圆形）</li>\n<li>渐变的大小是 farthest-corner（表示到最远的角落）</li>\n</ul>\n</li>\n<li>\n<p><strong>基本使用</strong>  </p>\n<ul>\n<li>使用radial-gradient属性</li>\n</ul>\n</li>\n<li>\n<p>颜色结点均匀分布</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#grad1</span> <span class="token punctuation">{</span>\n<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>red, green, blue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>效果\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 554px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 35.74007220216606%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABI0lEQVQoz5XQzyvDcRjA8ceWHHZQipNSfuRGibAUB1YuLi6zdrHDymxzUEoppWb7C+Q8rZViN0nzI3MQYm1s+4oWc3BVLmzf79tnSDn5ep+fXj3PI6XHW7KXp+QzaZ5LT6TPL7jXchTvrinkM9zkClQqFaoZhsFfSfLwhWhCI5Y8I5Y6YePomPjeFdGtBzLZV4W8oetGVTMH9rt2kNEpxNdG7Ww9Vn8D4u1GegKE1rXPofeyjuIwk9iXlpGgjXGPEBoRFh1Cb1AQTzPhzd0v8D8nD4SC2AIKGrOQbrJw0GLF5VTgTB2rie1vsIzZxL4QUec20ucTvBOCe1Jon1egu5NwfP/XhqbAIWcKGZ5TfxvEEmilxt+BTDuQrhUia8WfH5rtA95+znvPKIq5AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/001-04b6139054e6c3d116dd6bd8f0d82b65-1fcf2.jpg"\n        srcset="/static/001-04b6139054e6c3d116dd6bd8f0d82b65-7cd88.jpg 163w,\n/static/001-04b6139054e6c3d116dd6bd8f0d82b65-19f7c.jpg 325w,\n/static/001-04b6139054e6c3d116dd6bd8f0d82b65-1fcf2.jpg 554w"\n        sizes="(max-width: 554px) 100vw, 554px"\n      />\n    </span>\n  </span>\n   </p>\n</li>\n<li>\n<p>颜色结点不均匀分布</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#grad2</span> <span class="token punctuation">{</span>\n<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>red 5%, green 15%, blue 60%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>效果\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 557px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 35.36804308797127%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABEklEQVQoz42QPUvDUBSGT2pL/QYX62C7VHRxEMTR0dEMLoLgJoqL/gp/hZu2NCGL6D/QQVxsGz+GYjXWQnFUBK03yeNtCnUQbF54z3Du5eHhyEOtTLV6Qb1epvFyw3XlHM9zaTbvubvVbxWXVqtFJ2EYRv0vcnrSpnj0hV0IsI9DrE6LilJB8fT4TRC2UcrvAftFspN6iO7QM5K5RCZcDPmIdnap+8n3f2F9DWdyemSuMMwdpjYXGN5YYWDpUAPfcKwIoQ3D+Ib5nI/MWsjuInumML81ipj7SMrDiQyDHjBOJD+tx1gNY/kAWV9DVrdJzp1pw88/hvGAWUjoe6XT7yTHG6RGXhlMBNENHbsLUio2jx+ebtduweMrpgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/002-ba1af007815d8f586821ac316f16774e-39fea.jpg"\n        srcset="/static/002-ba1af007815d8f586821ac316f16774e-3516d.jpg 163w,\n/static/002-ba1af007815d8f586821ac316f16774e-49231.jpg 325w,\n/static/002-ba1af007815d8f586821ac316f16774e-39fea.jpg 557w"\n        sizes="(max-width: 557px) 100vw, 557px"\n      />\n    </span>\n  </span>\n  </p>\n</li>\n<li>\n<p>设置形状</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#grad3</span> <span class="token punctuation">{</span>\n<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>red, yellow, green<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">/* 椭圆形*/</span>\n<span class="token punctuation">}</span>\n<span class="token selector">#grad4</span> <span class="token punctuation">{</span>\n<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle, red, yellow, green<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 圆形 */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>效果\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 529px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 82.41965973534971%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8UlEQVQ4y52Su2uTURjGT5Om/S/UwSGhQytOYgVBUbC1Lo4OoqC4OKmjgxcQ6aK0iCBWqF0ELV7oYIuXhNTGpk39EnNpoibpl5jE+OXS1CYp+X6+SnTulwMPnOHld87zPo/K6hnW0jq57Hcq5SqFXIGSUebfMU0TK0dpnzW0SIhQOEg4FmU1ERPFqdU32Nxq/IduF6yuuk8wtuRiPr+H+Ho/sWo/7uwAN9w7GZ0/3wa2tg8c9+1iUVc0UwrzrcitqGcU75KKx5+OWgd69T6aBQX3HJiHbJjHbDDZQ/Wn4mN2RGh/xiwAPWt9NIoCfOiAETucFD3ppWIofJkOgKPeHX/trYvNLb9oWVHNK17FFQ+WDlu3fN1zinH/PjyZg4SMQbTifuaSB7jlGeDuwiXrwFy6SD5TQ09WaWzStkjnPVxMeAmm3vBFn6PW9FM3Axi/Anwr+UmVE9Z7ePblbsZkd+mKYiOrqIlWJaRr7xVXZo9Yt3xnwUXkh6S8LCnflMrclpSjvfgEPBE4bh04qbkoSOd4ZKe1V9EalPu0g6/yyNPwcHvMAvC+30lKOsesHfNMF+aFLvjgICjVmdKGrf/w8msnz6KyO6MbVsRy0Eal1MPEipLqdAAcmnJycUYxk+gmVrITMew8jzk4Pa0492LIMvA3agdyqIzVDKQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/003-f3ed141744c1c7c3160160094ccaa2d9-d0522.jpg"\n        srcset="/static/003-f3ed141744c1c7c3160160094ccaa2d9-c693b.jpg 163w,\n/static/003-f3ed141744c1c7c3160160094ccaa2d9-ba0da.jpg 325w,\n/static/003-f3ed141744c1c7c3160160094ccaa2d9-d0522.jpg 529w"\n        sizes="(max-width: 529px) 100vw, 529px"\n      />\n    </span>\n  </span>\n       </p>\n</li>\n</ul>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',id:"/Users/okwen/www/gatsbyblog/content/blog/109_2018-09-11/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/109"},frontmatter:{date:"September 11, 2018",draft:!1,title:"109期 渐变背景--线性"}},next:{excerpt:"样式的继承与层叠 浏览器默认样式 浏览器会为元素设置默认样式 样式的继承 子元素可以继承父元素的样式 样式的重叠 用户声明样式>浏览器默认样式>继承的样式",html:' <div>\n<video class="responsive"  controls="controls" poster="https://data.mashangxiegang.com/image/videostart.jpg">\n  <source type="video/mp4" src="https://data.mashangxiegang.com/video/111_2018-09-11.mp4"></source>\n  <p>Your browser does not support the video element.</p>\n</video>\n</div>\n<h3 id="样式的继承与层叠"><a href="#%E6%A0%B7%E5%BC%8F%E7%9A%84%E7%BB%A7%E6%89%BF%E4%B8%8E%E5%B1%82%E5%8F%A0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>样式的继承与层叠</h3>\n<ul>\n<li>\n<p>浏览器默认样式</p>\n<ul>\n<li>浏览器会为元素设置默认样式</li>\n</ul>\n</li>\n<li>\n<p>样式的继承</p>\n<ul>\n<li>子元素可以继承父元素的样式</li>\n</ul>\n</li>\n<li>\n<p>样式的重叠</p>\n<ul>\n<li>用户声明样式>浏览器默认样式>继承的样式</li>\n</ul>\n</li>\n</ul>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',id:"/Users/okwen/www/gatsbyblog/content/blog/111_2018-09-11/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/111"},frontmatter:{date:"September 11, 2018",draft:!1,title:"111期 样式的继承与层叠"}},slug:"/videos/110"}}}});
//# sourceMappingURL=path---videos-110-28502e1d1e40e1eb4ea6.js.map