import{_ as s,a as n}from"./app.85490237.js";const a={},e=n(`<h3 id="mysql\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#mysql\u6743\u9650" aria-hidden="true">#</a> Mysql\u6743\u9650</h3><table><thead><tr><th style="text-align:left;">\u6743\u9650\u5206\u5E03</th><th style="text-align:left;">\u53EF\u8BBE\u7F6E\u6743\u9650</th></tr></thead><tbody><tr><td style="text-align:left;">\u8868\u6743\u9650</td><td style="text-align:left;">&#39;Select&#39;, &#39;Insert&#39;, &#39;Update&#39;, &#39;Delete&#39;, &#39;Create&#39;, &#39;Drop&#39;, &#39;Grant&#39;, &#39;References&#39;, &#39;Index&#39;, &#39;Alter&#39;</td></tr><tr><td style="text-align:left;">\u5217\u6743\u9650</td><td style="text-align:left;">&#39;Select&#39;, &#39;Insert&#39;, &#39;Update&#39;, &#39;References&#39;</td></tr><tr><td style="text-align:left;">\u8FC7\u7A0B\u6743\u9650</td><td style="text-align:left;">&#39;Execute&#39;, &#39;Alter Routine&#39;, &#39;Grant&#39;</td></tr></tbody></table><h4 id="\u7528\u6237\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u64CD\u4F5C" aria-hidden="true">#</a> \u7528\u6237\u64CD\u4F5C</h4><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># \u65B0\u589E\u7528\u6237
CREATE USER &#39;zhangsan&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;password&#39;;
CREATE USER &#39;zhangsan&#39;@&#39;%&#39; IDENTIFIED BY &#39;password2&#39;;
CREATE USER &#39;zhangsan&#39;@&#39;192.168.10.1&#39; IDENTIFIED BY &#39;password3&#39;;

# \u5220\u9664\u7528\u6237
drop user zhangsan@&#39;localhost&#39;;

# \u4FEE\u6539\u7528\u6237\u5BC6\u7801
-- \u7B2C\u4E00\u79CD
ALTER USER &#39;zhangsan&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;mypassword&#39;;
-- \u7B2C\u4E8C\u79CD
SET PASSWORD FOR &#39;zhangsan&#39;@&#39;localhost&#39; = PASSWORD(&#39;mypassword&#39;);
-- \u7B2C\u4E09\u79CD
GRANT USAGE ON *.* TO &#39;zhangsan&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;mypassword&#39;;

# list\u6240\u6709\u7528\u6237
select * from mysql.user\\G;
# \u540C\u7406\u53EF\u4EE5\u901A\u8FC7sql\u8BED\u53E5\u4FEE\u6539\u7528\u6237\u4FE1\u606F\u6216\u8005\u5220\u9664\u7528\u6237
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#\u6388\u6743" aria-hidden="true">#</a> \u6388\u6743</h4><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># \u67E5\u770B\u5F53\u524D\u7528\u6237\u6743\u9650
show grants;
# \u67E5\u770B\u6307\u5B9A\u7528\u6237\u6743\u9650
show grants for &#39;zhangsan&#39;@&#39;%&#39;; 

# \u8D4B\u4E88\u6240\u6709\u6743\u9650
grant all privileges on *.* to &#39;zhangsan&#39;@&#39;%&#39; with grant option;
# \u8D4B\u4E88\u6570\u636E\u5E93\u6743\u9650
grant all privileges on test_db.* to &#39;zhangsan&#39;@&#39;%&#39; with grant option;

# \u56DE\u6536\u6743\u9650
revoke all privileges ON *.* FROM admin@&#39;localhost&#39;;
revoke insert,select,update,delete,drop,create,alter on test_db.* from admin@&#39;%&#39;;

# \u5237\u65B0\u6743\u9650
flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li><code>with grant option</code> : \u5141\u8BB8\u88AB\u6388\u6743\u7684\u7528\u6237\u628A\u5F97\u5230\u7684\u6743\u9650\u7EE7\u7EED\u6388\u7ED9\u5176\u5B83\u7528\u6237</li></ul><h4 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h4><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># \u67E5\u770B\u4E3B\u8282\u70B9\u72B6\u6001
show master status\\G;
# \u67E5\u770B\u4ECE\u8282\u70B9\u72B6\u6001
show slave status\\G;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u5BFC\u51FAsql" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FAsql" aria-hidden="true">#</a> \u5BFC\u51FASQL</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5BFC\u51FA\u6574\u4E2A\u6570\u636E\u5E93\u7ED3\u6784\u548C\u6570\u636E</span>
mysqldump -h localhost -P3306 -uroot -p123456 database <span class="token operator">&gt;</span> dump.sql

<span class="token comment">#\u5BFC\u51FA\u5355\u4E2A\u6570\u636E\u8868\u7ED3\u6784\u548C\u6570\u636E</span>
mysqldump -h localhost -P3306 -uroot -p123456  database table <span class="token operator">&gt;</span> dump.sql

<span class="token comment">#\u5BFC\u51FA\u6574\u4E2A\u6570\u636E\u5E93\u7ED3\u6784\uFF08\u4E0D\u5305\u542B\u6570\u636E\uFF09</span>
mysqldump -h localhost -P3306 -uroot -p123456  -d database <span class="token operator">&gt;</span> dump.sql

<span class="token comment">#\u5BFC\u51FA\u5355\u4E2A\u6570\u636E\u8868\u7ED3\u6784\uFF08\u4E0D\u5305\u542B\u6570\u636E\uFF09</span>
mysqldump -h localhost -P3306 -uroot -p123456  -d database table <span class="token operator">&gt;</span> dump.sql

<span class="token comment">#mysqldump \u5907\u4EFD\u5BFC\u51FA\u6570\u636E\u6392\u9664\u67D0\u5F20\u8868</span>
mysqldump -h localhost -P3306 -uroot -p123456  -d database table --ignore-table<span class="token operator">=</span>dbname.tablename <span class="token operator">&gt;</span> dump.sql

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>mysql 8.0\u9700\u8981\u6DFB\u52A0\u8FD9\u4E00\u53E5 <code>--column-statistics=0</code> \uFF0C\u4E0D\u7136\u4F1A\u62A5\u9519\u3002</p>`,12);function l(r,t){return e}var i=s(a,[["render",l]]);export{i as default};
