webpackJsonp([41030797436195],{629:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Dustin Schau - Blog",author:"Dustin Schau"}},markdownRemark:{id:"/Users/okwen/www/gatsbyblog/content/blog/070_2018-08-27/index.md absPath of file >>> MarkdownRemark",html:'<div>\n<video class="responsive"  controls="controls" poster="https://data.mashangxiegang.com/image/videostart.jpg">\n  <source type="video/mp4" src="https://data.mashangxiegang.com/video/070_2018-08-27.mp4"></source>\n  <p>Your browser does not support the video element.</p>\n</video>\n</div>\n<h3 id="代码片段"><a href="#%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>代码片段</h3>\n<ul>\n<li>Main.java</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>UnsupportedEncodingException<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * 异常\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n\n\t<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"ABC"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span>String encoding<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Test encoding "</span> <span class="token operator">+</span> encoding <span class="token operator">+</span> <span class="token string">"..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">try</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token string">"test"</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span>encoding<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">" ok."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnsupportedEncodingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">" failed."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',excerpt:"代码片段 Main.java",timeToRead:1,frontmatter:{date:"2018年08月27日",rawDate:"2018-08-27T15:00:00.000Z",excerpt:"&nbsp",title:"070期 异常的使用",image:{childImageSharp:{resize:{src:"/static/preview-5f723809bab3539ca2b93d3ae17465c7-2c40b.png"}}}}}},pathContext:{prev:{excerpt:"代码片段 Main.java Range.java Person.java NotNull.java",html:'<div>\n<video class="responsive"  controls="controls" poster="https://data.mashangxiegang.com/image/videostart.jpg">\n  <source type="video/mp4" src="https://data.mashangxiegang.com/video/069_2018-08-27.mp4"></source>\n  <p>Your browser does not support the video element.</p>\n</video>\n</div>\n<h3 id="代码片段"><a href="#%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>代码片段</h3>\n<ul>\n<li>Main.java</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">import</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span>Field<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * 处理注解\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n\n\t<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n\t\tPerson p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Xiao Ming"</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tPerson p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>null<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token function">checkPerson</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token function">checkPerson</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">checkPerson</span><span class="token punctuation">(</span>Person p<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"check "</span> <span class="token operator">+</span> p <span class="token operator">+</span> <span class="token string">"..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tClass <span class="token class-name">c</span> <span class="token operator">=</span> Person<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">for</span> <span class="token punctuation">(</span>Field f <span class="token operator">:</span> c<span class="token punctuation">.</span><span class="token function">getFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token function">checkField</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">checkField</span><span class="token punctuation">(</span>Field f<span class="token punctuation">,</span> Person p<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span>NotNull<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tObject r <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">==</span> null<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Error: field "</span> <span class="token operator">+</span> f<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" is null."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span>Range<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tRange range <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span>Range<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token punctuation">(</span>Integer<span class="token punctuation">)</span> f<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> range<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> n <span class="token operator">></span> range<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Error: field "</span> <span class="token operator">+</span> f<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" is out of range."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>Range.java</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">import</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>ElementType<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>Retention<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>RetentionPolicy<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>Target<span class="token punctuation">;</span>\n\n<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span>RetentionPolicy<span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span>ElementType<span class="token punctuation">.</span>FIELD<span class="token punctuation">)</span>\n<span class="token keyword">public</span> @<span class="token keyword">interface</span> <span class="token class-name">Range</span> <span class="token punctuation">{</span>\n\n\t<span class="token keyword">int</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>Person.java</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n\n\t<span class="token annotation punctuation">@NotNull</span>\n\t<span class="token keyword">public</span> String name<span class="token punctuation">;</span>\n\n\t<span class="token annotation punctuation">@Range</span><span class="token punctuation">(</span>max <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">)</span>\n\t<span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>\n\n\t<span class="token keyword">public</span> <span class="token function">Person</span><span class="token punctuation">(</span>String name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">public</span> String <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token string">"Person(name="</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">")"</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<ul>\n<li>NotNull.java</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">import</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>ElementType<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>Retention<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>RetentionPolicy<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>Target<span class="token punctuation">;</span>\n\n<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span>RetentionPolicy<span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span>ElementType<span class="token punctuation">.</span>FIELD<span class="token punctuation">,</span> ElementType<span class="token punctuation">.</span>PARAMETER<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> @<span class="token keyword">interface</span> <span class="token class-name">NotNull</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',id:"/Users/okwen/www/gatsbyblog/content/blog/069_2018-08-27/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/69"},frontmatter:{date:"August 27, 2018",draft:!1,title:"069期 处理注解"}},next:{excerpt:"代码片段 Main.java",html:'<div>\n<video class="responsive"  controls="controls" poster="https://data.mashangxiegang.com/image/videostart.jpg">\n  <source type="video/mp4" src="https://data.mashangxiegang.com/video/071_2018-08-27.mp4"></source>\n  <p>Your browser does not support the video element.</p>\n</video>\n</div>\n<h3 id="代码片段"><a href="#%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>代码片段</h3>\n<ul>\n<li>Main.java</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token comment">/**\n * 捕获异常\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n\n\t<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n\t    <span class="token function">process</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">process</span><span class="token punctuation">(</span><span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span>String s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">try</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">int</span> n <span class="token operator">=</span> Integer<span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">/</span> n<span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NumberFormatException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Bad input."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ArithmeticException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Bad input."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',
id:"/Users/okwen/www/gatsbyblog/content/blog/071_2018-08-27/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/71"},frontmatter:{date:"August 27, 2018",draft:!1,title:"071期 捕获异常"}},slug:"/videos/70"}}}});
//# sourceMappingURL=path---videos-70-2e13d69a22be86698206.js.map