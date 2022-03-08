import{_ as l,r,o as i,b as t,d as e,e as a,F as p,a as c,f as n}from"./app.f59e1607.js";var o="/document/assets/fencing-tokens.db9c439d.png",d="/document/assets/fencing-tokens.db9c439d.png";const m={},h=c(`<h1 id="\u5206\u5E03\u5F0F\u9501" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u9501" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u9501</h1><h2 id="redis-\u9501" tabindex="-1"><a class="header-anchor" href="#redis-\u9501" aria-hidden="true">#</a> Redis \u9501</h2><h3 id="\u5355\u8282\u70B9-redis-\u9501" tabindex="-1"><a class="header-anchor" href="#\u5355\u8282\u70B9-redis-\u9501" aria-hidden="true">#</a> \u5355\u8282\u70B9 Redis \u9501</h3><p>\u9501\u7684\u83B7\u53D6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SET resource_name my_random_value NX PX 30000
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u9501\u91CA\u653E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if redis.call(&quot;get&quot;,KEYS[1]) == ARGV[1] then
    return redis.call(&quot;del&quot;,KEYS[1])
else
    return 0
end
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u7F3A\u9677" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u9677" aria-hidden="true">#</a> \u7F3A\u9677</h4><p>\u7531\u4E8E\u8D85\u65F6\u65F6\u95F4\u5BFC\u81F4\u9501\u88AB\u591A Client \u540C\u65F6\u83B7\u53D6\uFF1A</p><ol><li>C1 \u83B7\u53D6\u9501 A \u6210\u529F\uFF0C\u4F46\u7531\u4E8E GC \u7B49\u539F\u56E0\u7EBF\u7A0B\u6302\u8D77\uFF0C\u9501 A \u8FC7\u671F</li><li>C2 \u83B7\u53D6\u9501 A \u6210\u529F</li><li>C1 &amp; C2 \u540C\u65F6\u8BA4\u4E3A\u81EA\u5DF1\u52A0\u9501\u6210\u529F</li></ol><p>\u5F02\u6B65\u7684\u4E3B\u4ECE\u590D\u5236 &amp; Master \u5B95\u673A\uFF0C\u5BFC\u81F4\u9501\u4E22\u5931\uFF1A</p><ol><li>C1 \u83B7\u53D6\u9501 A \u6210\u529F\uFF0CMaster \u5B95\u673A\uFF0CSlave \u672A\u540C\u6B65\u5230\u9501 A</li><li>C2 \u83B7\u53D6\u9501 A \u6210\u529F</li><li>C1 &amp; C2 \u540C\u65F6\u8BA4\u4E3A\u81EA\u5DF1\u52A0\u9501\u6210\u529F</li></ol><h3 id="redlock" tabindex="-1"><a class="header-anchor" href="#redlock" aria-hidden="true">#</a> RedLock</h3><p>\u4E3A\u4E86\u89E3\u51B3 Redis \u5355\u70B9\u7684\u95EE\u9898\u3002 Redis \u7684\u4F5C\u8005\u63D0\u51FA\u4E86 RedLock \u7684\u89E3\u51B3\u65B9\u6848\u3002\u65B9\u6848\u975E\u5E38\u7684\u5DE7\u5999\u548C\u7B80\u6D01\u3002 RedLock \u7684\u6838\u5FC3\u601D\u60F3\u5C31\u662F\uFF0C<strong>\u540C\u65F6\u4F7F\u7528\u591A\u4E2A Redis Master \u6765\u5197\u4F59\uFF0C\u4E14\u8FD9\u4E9B\u8282\u70B9\u90FD\u662F\u5B8C\u5168\u7684\u72EC\u7ACB\u7684\uFF0C\u4E5F\u4E0D\u9700\u8981\u5BF9\u8FD9\u4E9B\u8282\u70B9\u4E4B\u95F4\u7684\u6570\u636E\u8FDB\u884C\u540C\u6B65</strong>\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u6709N\u4E2ARedis\u8282\u70B9\uFF0CN\u5E94\u8BE5\u662F\u4E00\u4E2A\u5927\u4E8E2\u7684\u5947\u6570\u3002RedLock\u7684\u5B9E\u73B0\u6B65\u9AA4:</p><ol><li>\u53D6\u5F97\u5F53\u524D\u65F6\u95F4</li><li>\u4F7F\u7528\u5355\u8282\u70B9\u83B7\u53D6\u9501\u7684\u65B9\u5F0F\uFF0C\u4F9D\u6B21\u83B7\u53D6 N \u4E2A\u8282\u70B9\u7684 Redis \u9501\u3002</li><li>\u5982\u679C\u83B7\u53D6\u5230\u7684\u9501\u7684\u6570\u91CF\u5927\u4E8E <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mord">/2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> \u4E2A\uFF0C\u4E14\u83B7\u53D6\u7684\u65F6\u95F4\u5C0F\u4E8E\u9501\u7684\u6709\u6548\u65F6\u95F4(lock validity time)\u5C31\u8BA4\u4E3A\u83B7\u53D6\u5230\u4E86\u4E00\u4E2A\u6709\u6548\u7684\u9501\uFF0C\u9501\u81EA\u52A8\u91CA\u653E\u65F6\u95F4\u5C31\u662F\u6700\u521D\u7684\u9501\u91CA\u653E\u65F6\u95F4\u51CF\u53BB\u4E4B\u524D\u83B7\u53D6\u9501\u6240\u6D88\u8017\u7684\u65F6\u95F4\u3002</li><li>\u5982\u679C\u83B7\u53D6\u9501\u7684\u6570\u91CF\u5C0F\u4E8E <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mord">/2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>\uFF0C\u6216\u8005\u5728\u9501\u7684\u6709\u6548\u65F6\u95F4(lock validity time)\u5185\u6CA1\u6709\u83B7\u53D6\u5230\u8DB3\u591F\u7684\u9501\uFF0C\u5C31\u8BA4\u4E3A\u83B7\u53D6\u9501\u5931\u8D25\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u5411\u6240\u6709\u8282\u70B9\u53D1\u9001\u91CA\u653E\u9501\u7684\u6D88\u606F\u3002</li></ol><p>\u5BF9\u4E8E\u91CA\u653E\u9501\u7684\u5B9E\u73B0\u5C31\u5F88\u7B80\u5355\u4E86\uFF0C\u5411\u6240\u6709\u7684 Redis \u8282\u70B9\u53D1\u8D77\u91CA\u653E\u7684\u64CD\u4F5C\uFF0C\u65E0\u8BBA\u4E4B\u524D\u662F\u5426\u83B7\u53D6\u9501\u6210\u529F\u3002</p><h3 id="\u7F3A\u9677-1" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u9677-1" aria-hidden="true">#</a> \u7F3A\u9677</h3><p><img src="`+o+'" alt=""></p><p>RedLock\u4E2D\uFF0C\u4E3A\u4E86\u9632\u6B62\u6B7B\u9501\uFF0C\u9501\u662F\u5177\u6709\u8FC7\u671F\u65F6\u95F4\u7684\u3002</p><ul><li>\u5982\u679C Client 1 \u5728\u6301\u6709\u9501\u7684\u65F6\u5019\uFF0C\u53D1\u751F\u4E86\u4E00\u6B21\u5F88\u957F\u65F6\u95F4\u7684 FGC \u8D85\u8FC7\u4E86\u9501\u7684\u8FC7\u671F\u65F6\u95F4\u3002\u9501\u5C31\u88AB\u91CA\u653E\u4E86\u3002</li><li>\u8FD9\u4E2A\u65F6\u5019 Client 2 \u53C8\u83B7\u5F97\u4E86\u4E00\u628A\u9501\uFF0C\u63D0\u4EA4\u6570\u636E\u3002</li><li>\u8FD9\u4E2A\u65F6\u5019 Client 1 \u4ECE FGC \u4E2D\u82CF\u9192\u8FC7\u6765\u4E86\uFF0C\u53C8\u4E00\u6B21\u63D0\u4EA4\u6570\u636E\u3002</li></ul><p>\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6570\u636E\u5C31\u53D1\u751F\u4E86\u9519\u8BEF\u3002RedLock \u53EA\u662F\u4FDD\u8BC1\u4E86\u9501\u7684\u9AD8\u53EF\u7528\u6027\uFF0C\u5E76\u6CA1\u6709\u4FDD\u8BC1\u9501\u7684\u6B63\u786E\u6027\u3002</p><p>\u89E3\u51B3\u65B9\u6848\u53EF\u4EE5\u4E3A\u9501\u589E\u52A0\u4E00\u4E2A\u81EA\u589E\u6807\u8BC6\uFF0C\u7C7B\u4F3C\u4E8E Kafka \u8111\u88C2\u7684\u5904\u7406\u65B9\u5F0F\uFF1A</p><p><img src="'+d+`" alt=""></p><p>\u540C\u65F6 RedLock \u662F\u4E25\u91CD\u4F9D\u8D56\u7CFB\u7EDF\u65F6\u949F\u7684\u4E00\u81F4\u6027\u3002\u5982\u679C\u67D0\u4E2A Redis Master\u7684\u7CFB\u7EDF\u65F6\u95F4\u53D1\u751F\u4E86\u9519\u8BEF\uFF0C\u9020\u6210\u4E86\u5B83\u6301\u6709\u7684\u9501\u63D0\u524D\u8FC7\u671F\u88AB\u91CA\u653E\u3002</p><blockquote><p>\u6BCF\u4E00\u4E2A\u7CFB\u7EDF\u8BBE\u8BA1\u90FD\u6709\u81EA\u5DF1\u7684\u4FA7\u91CD\u6216\u8005\u5C40\u9650\u3002\u5DE5\u7A0B\u4E5F\u4E0D\u662F\u5B8C\u7F8E\u7684\u3002\u5728\u73B0\u5B9E\u4E2D\u5DE5\u7A0B\u4E2D\u4E0D\u5B58\u5728\u5B8C\u7F8E\u7684\u89E3\u51B3\u65B9\u6848\u3002\u6211\u4EEC\u5E94\u5F53\u6DF1\u5165\u4E86\u89E3\u5176\u4E2D\u7684\u539F\u7406\uFF0C\u4E86\u89E3\u89E3\u51B3\u65B9\u6848\u7684\u4F18\u7F3A\u70B9\u3002\u660E\u767D\u9009\u7528\u65B9\u6848\u7684\u5C40\u9650\u6027\u3002\u662F\u5426\u53EF\u4EE5\u63A5\u53D7\u65B9\u6848\u7684\u5C40\u9650\u5E26\u6765\u7684\u540E\u679C\u3002\u67B6\u6784\u672C\u6765\u5C31\u662F\u4E00\u95E8\u5E73\u8861\u7684\u827A\u672F\u3002</p></blockquote><h2 id="\u5B9E\u73B0\u57FA\u4E8E\u6570\u636E\u5E93\u7684\u4E50\u89C2\u9501" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u57FA\u4E8E\u6570\u636E\u5E93\u7684\u4E50\u89C2\u9501" aria-hidden="true">#</a> \u5B9E\u73B0\u57FA\u4E8E\u6570\u636E\u5E93\u7684\u4E50\u89C2\u9501</h2><p>\u63D0\u4EA4\u6570\u636E\u66F4\u65B0\u4E4B\u524D\uFF0C\u6BCF\u4E2A\u4E8B\u52A1\u4F1A\u5148\u68C0\u67E5\u5728\u8BE5\u4E8B\u52A1\u8BFB\u53D6\u6570\u636E\u540E\uFF0C\u6709\u6CA1\u6709\u5176\u4ED6\u4E8B\u52A1\u53C8\u4FEE\u6539\u4E86\u8BE5\u6570\u636E\u3002\u5982\u679C\u5176\u4ED6\u4E8B\u52A1\u6709\u66F4\u65B0\u7684\u8BDD\uFF0C\u6B63\u5728\u63D0\u4EA4\u7684\u4E8B\u52A1\u4F1A\u8FDB\u884C\u56DE\u6EDA\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Connection conn = DriverManager.getConnection(url, user, password);
conn.setAutoCommit(false);
Statement stmt = conn.createStatement();
// step 1
int oldVersion = getOldVersion(stmt);

// step 2
// \u7528\u8FD9\u4E2A\u6570\u636E\u5E93\u8FDE\u63A5\u505A\u5176\u4ED6\u7684\u903B\u8F91

// step 3 \u53EF\u7528\u9884\u7F16\u8BD1\u8BED\u53E5
int i = stmt.executeUpdate(
        &quot;update optimistic_lock set version = &quot; + (oldVersion + 1) + &quot; where version = &quot; + oldVersion);

// step 4
if (i &gt; 0) {
    conn.commit(); // \u66F4\u65B0\u6210\u529F\u8868\u660E\u6570\u636E\u6CA1\u6709\u88AB\u4FEE\u6539\uFF0C\u63D0\u4EA4\u4E8B\u52A1\u3002
} else {
    conn.rollback(); // \u66F4\u65B0\u5931\u8D25\uFF0C\u6570\u636E\u88AB\u4FEE\u6539\uFF0C\u56DE\u6EDA\u3002
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4E50\u89C2\u9501\u7684\u7F3A\u70B9\uFF1A</p><ul><li>\u4F1A\u5E26\u6765\u5927\u6570\u91CF\u7684\u65E0\u6548\u66F4\u65B0\u8BF7\u6C42\u3001\u4E8B\u52A1\u56DE\u6EDA\uFF0C\u7ED9DB\u9020\u6210\u4E0D\u5FC5\u8981\u7684\u989D\u5916\u538B\u529B\u3002</li><li>\u65E0\u6CD5\u4FDD\u8BC1\u5148\u5230\u5148\u5F97\uFF0C\u540E\u9762\u7684\u8BF7\u6C42\u53EF\u80FD\u7531\u4E8E\u5E76\u53D1\u538B\u529B\u5C0F\u4E86\u53CD\u800C\u6709\u53EF\u80FD\u5904\u7406\u6210\u529F\u3002</li></ul><h2 id="\u57FA\u4E8E-zookeeper-\u7684\u5206\u5E03\u5F0F\u9501" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E-zookeeper-\u7684\u5206\u5E03\u5F0F\u9501" aria-hidden="true">#</a> \u57FA\u4E8E ZooKeeper \u7684\u5206\u5E03\u5F0F\u9501</h2><p>\u57FA\u4E8E ZK \u7684\u7279\u6027\uFF0C\u5F88\u5BB9\u6613\u5F97\u51FA\u4F7F\u7528 ZK \u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\u7684\u843D\u5730\u65B9\u6848\uFF1A</p><ol><li>\u4F7F\u7528 ZK \u7684\u4E34\u65F6\u8282\u70B9\u548C\u6709\u5E8F\u8282\u70B9\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u83B7\u53D6\u9501\u5C31\u662F\u5728 ZK \u521B\u5EFA\u4E00\u4E2A\u4E34\u65F6\u6709\u5E8F\u7684\u8282\u70B9\uFF0C\u6BD4\u5982\u5728 <code>/lock/</code> \u76EE\u5F55\u4E0B\u3002</li><li>\u521B\u5EFA\u8282\u70B9\u6210\u529F\u540E\uFF0C\u83B7\u53D6 <code>/lock</code> \u76EE\u5F55\u4E0B\u7684\u6240\u6709\u4E34\u65F6\u8282\u70B9\uFF0C\u518D\u5224\u65AD\u5F53\u524D\u7EBF\u7A0B\u521B\u5EFA\u7684\u8282\u70B9\u662F\u5426\u662F\u6240\u6709\u7684\u8282\u70B9\u7684\u5E8F\u53F7\u6700\u5C0F\u7684\u8282\u70B9\u3002</li><li>\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u521B\u5EFA\u7684\u8282\u70B9\u662F\u6240\u6709\u8282\u70B9\u5E8F\u53F7\u6700\u5C0F\u7684\u8282\u70B9\uFF0C\u5219\u8BA4\u4E3A\u83B7\u53D6\u9501\u6210\u529F\u3002</li><li>\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u521B\u5EFA\u7684\u8282\u70B9\u4E0D\u662F\u6240\u6709\u8282\u70B9\u5E8F\u53F7\u6700\u5C0F\u7684\u8282\u70B9\uFF0C\u5219\u5BF9\u8282\u70B9\u5E8F\u53F7\u7684 <strong>\u524D\u4E00\u4E2A\u8282\u70B9</strong> \u6DFB\u52A0\u4E00\u4E2A\u4E8B\u4EF6\u76D1\u542C\u3002</li></ol><h3 id="\u7F3A\u9677-2" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u9677-2" aria-hidden="true">#</a> \u7F3A\u9677</h3><ol><li><strong>\u7F8A\u7FA4\u6548\u5E94</strong>\uFF1A\u5F53\u4E00\u4E2A\u8282\u70B9\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5927\u91CF\u7684 <code>watches</code> \u4E8B\u4EF6\uFF0C\u5BFC\u81F4\u96C6\u7FA4\u54CD\u5E94\u53D8\u6162\u3002\u6BCF\u4E2A\u8282\u70B9\u5C3D\u91CF\u5C11\u7684 <code>watches</code>\uFF0C\u8FD9\u91CC\u5C31\u53EA\u6CE8\u518C <strong>\u524D\u4E00\u4E2A\u8282\u70B9</strong> \u7684\u76D1\u542C</li><li>ZK \u96C6\u7FA4\u7684\u8BFB\u5199\u541E\u5410\u91CF\u4E0D\u9AD8</li><li>\u7F51\u7EDC\u6296\u52A8\u53EF\u80FD\u5BFC\u81F4 Session \u79BB\u7EBF\uFF0C\u9501\u88AB\u91CA\u653E</li></ol><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,37),u={href:"https://www.xilidou.com/2017/10/23/Redis%E5%AE%9E%E7%8E%B0%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81/",target:"_blank",rel:"noopener noreferrer"},b=n("Redis\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501"),g={href:"https://www.xilidou.com/2017/10/29/Redis-RedLock-%E5%AE%8C%E7%BE%8E%E7%9A%84%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%E4%B9%88%EF%BC%9F/",target:"_blank",rel:"noopener noreferrer"},k=n("Redis RedLock \u5B8C\u7F8E\u7684\u5206\u5E03\u5F0F\u9501\u4E48\uFF1F");function x(_,f){const s=r("ExternalLinkIcon");return i(),t(p,null,[h,e("ul",null,[e("li",null,[e("a",u,[b,a(s)])]),e("li",null,[e("a",g,[k,a(s)])])])],64)}var v=l(m,[["render",x]]);export{v as default};
