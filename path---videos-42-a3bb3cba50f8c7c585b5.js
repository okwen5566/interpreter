webpackJsonp([0x855250e1a1ad],{654:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Dustin Schau - Blog",author:"Dustin Schau"}},markdownRemark:{id:"/Users/okwen/www/gatsbyblog/content/blog/042_2018-08-20/index.md absPath of file >>> MarkdownRemark",html:'<div>\n<video class="responsive"  controls="controls" poster="https://data.mashangxiegang.com/image/videostart.jpg">\n  <source type="video/mp4" src="https://data.mashangxiegang.com/video/042_2018-08-20.mp4"></source>\n  <p>Your browser does not support the video element.</p>\n</video>\n</div>\n<h3 id="代码片段"><a href="#%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>代码片段</h3>\n<ul>\n<li>Main.java</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>BufferedReader<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>InputStreamReader<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>URL<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>URLConnection<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>Callable<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>ExecutorService<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>Executors<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>Future<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * Future：表示一个未来可能会返回的结果\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">DownloadTask</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">></span></span> <span class="token punctuation">{</span>\n\tString url<span class="token punctuation">;</span>\n\n\t<span class="token keyword">public</span> <span class="token function">DownloadTask</span><span class="token punctuation">(</span>String url<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n\t    <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">public</span> String <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Start download "</span> <span class="token operator">+</span> url <span class="token operator">+</span> <span class="token string">"..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tURLConnection conn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">openConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tconn<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">try</span> <span class="token punctuation">(</span>BufferedReader reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>\n\t\t        <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>conn<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tString s <span class="token operator">=</span> null<span class="token punctuation">;</span>\n\t\t\tStringBuilder sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>s <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> null<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\tsb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"\\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n\n\t<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n\n\t\tExecutorService executor <span class="token operator">=</span> Executors<span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tDownloadTask task <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DownloadTask</span><span class="token punctuation">(</span><span class="token string">"https://www.baidu.com/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tFuture<span class="token generics function"><span class="token punctuation">&lt;</span>String<span class="token punctuation">></span></span> future <span class="token operator">=</span> executor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tString html <span class="token operator">=</span> future<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\texecutor<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',excerpt:"代码片段 Main.java",timeToRead:1,frontmatter:{date:"2018年08月20日",rawDate:"2018-08-20T17:00:00.000Z",excerpt:"&nbsp",title:"042期 高级concurrent包之Future",image:{childImageSharp:{resize:{src:"/static/preview-5f723809bab3539ca2b93d3ae17465c7-2c40b.png"}}}}}},pathContext:{prev:{excerpt:"代码片段 ThreadPool.java",html:'<div>\n<video class="responsive"  controls="controls" poster="https://data.mashangxiegang.com/image/videostart.jpg">\n  <source type="video/mp4" src="https://data.mashangxiegang.com/video/041_2018-08-20.mp4"></source>\n  <p>Your browser does not support the video element.</p>\n</video>\n</div>\n<h3 id="代码片段"><a href="#%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>代码片段</h3>\n<ul>\n<li>ThreadPool.java</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>ExecutorService<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>Executors<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * ExecutorService实现了线程池功能(三)\n * SingleThreadExecutor:可以创建一个仅单线程执行的线程池\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">PrintTask</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>\n\tString name<span class="token punctuation">;</span>\n\n\t<span class="token keyword">public</span> <span class="token function">PrintTask</span><span class="token punctuation">(</span>String name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n\n\t<span class="token punctuation">}</span>\n\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">try</span> <span class="token punctuation">{</span>\n\t\t\t\tThread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPool</span> <span class="token punctuation">{</span>\n\n\t<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n\n\t\tExecutorService executor <span class="token operator">=</span> Executors<span class="token punctuation">.</span><span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\texecutor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PrintTask</span><span class="token punctuation">(</span><span class="token string">"Bob"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\texecutor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PrintTask</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\texecutor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PrintTask</span><span class="token punctuation">(</span><span class="token string">"Tim"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tThread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\texecutor<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',id:"/Users/okwen/www/gatsbyblog/content/blog/041_2018-08-20/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/41"},frontmatter:{date:"August 20, 2018",draft:!1,title:"041期 ExecutorService实现线程池功能(三)"}},next:{excerpt:"代码片段 CompletableFutureSample.java",html:'<div>\n<video class="responsive"  controls="controls" poster="https://data.mashangxiegang.com/image/videostart.jpg">\n  <source type="video/mp4" src="https://data.mashangxiegang.com/video/043_2018-08-20.mp4"></source>\n  <p>Your browser does not support the video element.</p>\n</video>\n</div>\n<h3 id="代码片段"><a href="#%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>代码片段</h3>\n<ul>\n<li>CompletableFutureSample.java</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>CompletableFuture<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span>Consumer<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span>Function<span class="token punctuation">;</span>\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span>Supplier<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * CompletableFuture是Future的升级版\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">StockSupplier</span> <span class="token keyword">implements</span> <span class="token class-name">Supplier</span><span class="token generics function"><span class="token punctuation">&lt;</span>Float<span class="token punctuation">></span></span> <span class="token punctuation">{</span>\n\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> Float <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tString url <span class="token operator">=</span> <span class="token string">"http://hq.sinajs.cn/list=sh000001"</span><span class="token punctuation">;</span>\n\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"GET: "</span> <span class="token operator">+</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">try</span> <span class="token punctuation">{</span>\n\t\t\tString result <span class="token operator">=</span> DownloadUtil<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\tString<span class="token punctuation">[</span><span class="token punctuation">]</span> ss <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">return</span> Float<span class="token punctuation">.</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>ss<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CompletableFutureSample</span> <span class="token punctuation">{</span>\n\n\t<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n\n\t\tCompletableFuture<span class="token generics function"><span class="token punctuation">&lt;</span>Float<span class="token punctuation">></span></span> getStockFuture <span class="token operator">=</span> CompletableFuture<span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span>\n\t\t        <span class="token keyword">new</span> <span class="token class-name">StockSupplier</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\tgetStockFuture<span class="token punctuation">.</span><span class="token function">thenAccept</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Consumer</span><span class="token generics function"><span class="token punctuation">&lt;</span>Float<span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token annotation punctuation">@Override</span>\n\t\t\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span>Float price<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n\t\t\t    System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Current price: "</span> <span class="token operator">+</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t\tgetStockFuture<span class="token punctuation">.</span><span class="token function">exceptionally</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token generics function"><span class="token punctuation">&lt;</span>Throwable<span class="token punctuation">,</span> Float<span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token annotation punctuation">@Override</span>\n\t\t\t<span class="token keyword">public</span> Float <span class="token function">apply</span><span class="token punctuation">(</span>Throwable t<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Error: "</span> <span class="token operator">+</span> t<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t<span class="token keyword">return</span> Float<span class="token punctuation">.</span>NaN<span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tgetStockFuture<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 335px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 129.55223880597012%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVRIx41WW1daRxTmH7dr9aGrl4despIs2z4kartqaoyGRButqDFRUCPeEIgV5S5yCwgCwgEOHC5yZr7uORwQI1Bnsc/M7Nnzzbf3XDaGVCqlyuUyq1dLrFYtM0kqspqisEqlwhSqhcjlEisWi0OlVCrxbDarGsqlEgMV5ycFnqQimohEYyAjxONxakdRbqq4T6nVasygyEUWKrQwsnbB/96/5KTndoeTu1wufnh4SG0HP8tXucoHF8aYmIdqtcoMhYKkMZzZTvERcxrhQgNg1yA9ZFm+WZ5z8etbBOgNIMVMdLzJCg9f1TWD61YLzWYTjUYDtDp4e5L46vUQQBHQjl4fvMOkC8J5F1g3HwyoMhGLW0b3koGABKYpi5UGVvbONUPG7y7QdYazXv0QwFIVC3uxrkPEHL3MhdtiQrMnFEMBs8UqVpet2LEcwObP4jxZwO5JEptHccxtBfFqM4R58wnmJ2bhj+fbnvQemxvAtjKSq2F72oigaRa/Lvrww6QN/+yEMLHixtxmANunKWxsHcHyzZfwRnPDADsuV2B1pzG65MHrjQAmV714Mn+M8cUTTL33Yt0egWkvjINADum8jN65twH1ONRqdcxu+PHztB2m3XNs/RvH93/ZML99hlVbBOOmU4wuHMPmTkKpXw+OYfsKtc/X8n5YYyUYfTW+hz/JXaEbW3ThzYcgXpr9+GX2IzGsDGaoX0uw1jUszhgeEMNnb914ZHRqTCffefDb3BF+nLJjiVx+TfG8yMnDAUXdajbw4fiTxlBsxNSaDw8JdHrdpy300wsHHr50YsF6htTVPQDFHbb7Upght8ZoI8wE8vYg3AanEDw2fsS3z2x0hPzISMr/77JcqVHwaRc9STwiJoLRH0sneGUJ0MYEYbTQQs838PXvu8jkivSS1LV7MwCQIyE1sD7xHFtjYxh9F4LR7MPTBRcezDjwxdMdfEfsRl7sY9oaR+D9MrIrM5272O/YcEiygsW1I5hIggkJNs8FrK4EHBSGNXsM++4UzhIFOENXiJx6UY8Fui9V313mauvm2qp0zrjoixTAdEG7z1pgui0duMGbwtvuayI0IhJd0fWdfs8zNoThoHe+/9N/F1CSpO7j0DFQVVV7+kXdkRalhY6+0+7Y3zo2ZcrJvSlAlHq9ruUTyrWgcWGIXC4HytXaWD6fv53A9Lk0xgzRaJRlMhmk02lOgl6hPwF9+5/rxdzLy0skEgn2H0zZmRDXMO6jAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="personalcode"\n        title=""\n        src="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png"\n        srcset="/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-3788e.png 163w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-d32ed.png 325w,\n/static/personalcode-e31e640cabbccf9fc3e88c38c6d89055-a05a7.png 335w"\n        sizes="(max-width: 335px) 100vw, 335px"\n      />\n    </span>\n  </span>\n  </p>',
id:"/Users/okwen/www/gatsbyblog/content/blog/043_2018-08-20/index.md absPath of file >>> MarkdownRemark",timeToRead:1,fields:{slug:"/videos/43"},frontmatter:{date:"August 20, 2018",draft:!1,title:"043期 CompletableFuture"}},slug:"/videos/42"}}}});
//# sourceMappingURL=path---videos-42-a3bb3cba50f8c7c585b5.js.map