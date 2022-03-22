import{_ as s,a as n}from"./app.f83d96fd.js";const a={},e=n(`<p>\u5BF9\u4E8E\u4F7F\u7528 systemd \u7684\u7CFB\u7EDF\uFF0C\u8BF7\u5728 /etc/docker/daemon.json \u4E2D\u5199\u5165\u5982\u4E0B\u5185\u5BB9\uFF08\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u8BF7\u65B0\u5EFA\u8BE5\u6587\u4EF6\uFF09</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://dockerhub.azk8s.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://reg-mirror.qiniu.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E4B\u540E\u91CD\u65B0\u542F\u52A8\u670D\u52A1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl daemon-reload
$ <span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,4);function r(t,p){return e}var o=s(a,[["render",r]]);export{o as default};
