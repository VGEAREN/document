import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,a}from"./app.1ed3ff77.js";const t={},i=a(`<p>\u5BF9\u4E8E\u4F7F\u7528 systemd \u7684\u7CFB\u7EDF\uFF0C\u8BF7\u5728 /etc/docker/daemon.json \u4E2D\u5199\u5165\u5982\u4E0B\u5185\u5BB9\uFF08\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u8BF7\u65B0\u5EFA\u8BE5\u6587\u4EF6\uFF09</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://dockerhub.azk8s.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://reg-mirror.qiniu.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4B\u540E\u91CD\u65B0\u542F\u52A8\u670D\u52A1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl daemon-reload
$ <span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[i];function c(r,l){return n(),e("div",null,o)}var p=s(t,[["render",c],["__file","docker\u955C\u50CF\u52A0\u901F.html.vue"]]);export{p as default};
