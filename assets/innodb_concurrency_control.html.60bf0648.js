import{_ as a,r as d,o,b as s,d as e,e as t,F as c,a as r,f as l}from"./app.94c7f4d3.js";var i="/document/assets/e86d2bb63f9ecf327e588f352bb26d3b.353ee0d0.png";const p={},b=r('<h2 id="innodb-\u9501\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#innodb-\u9501\u673A\u5236" aria-hidden="true">#</a> InnoDB \u9501\u673A\u5236</h2><p><img src="'+i+`" alt=""></p><p>InnoDB\u9ED8\u8BA4\u4F7F\u7528\u884C\u9501\uFF0C\u5B9E\u73B0\u4E86\u4E24\u79CD\u6807\u51C6\u7684\u884C\u9501\u2014\u2014\u5171\u4EAB\u9501\u4E0E\u6392\u4ED6\u9501\uFF1B</p><table><thead><tr><th style="text-align:left;">\u884C\u9501\u7C7B\u578B</th><th style="text-align:left;">\u9501\u529F\u80FD</th><th style="text-align:left;">\u9501\u517C\u5BB9\u6027</th><th style="text-align:left;">\u52A0\u9501</th><th style="text-align:left;">\u91CA\u653E\u9501</th></tr></thead><tbody><tr><td style="text-align:left;">\u5171\u4EAB\u9501\uFF08\u8BFB\u9501\u3001S\u9501\uFF09</td><td style="text-align:left;">\u5141\u8BB8\u83B7\u53D6\u5171\u4EAB\u9501\u7684\u4E8A\u52A1\u8BFB\u6570\u636E</td><td style="text-align:left;">\u4E0E\u5171\u4EAB\u9501\u517C\u5BB9\uFF0C\u4E0E\u6392\u5B83\u9501\u4E0D\u517C\u5BB9</td><td style="text-align:left;">\u53EA\u6709 <code>SerializaWe</code> \u9694\u79BB\u7EA7\u522B\u4F1A\u9ED8\u8BA4\u4E3A\uFF1A\u8BFB\u52A0\u5171\u4EAB\u9501\uFF1B\u5176\u4ED6\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u53EF\u663E\u793A\u4F7F\u7528 <code>select...lock in share model</code> \u4E3A\u8BFB\u52A0\u5171\u4EAB\u9501</td><td style="text-align:left;">\u5728\u4E8B\u52A1\u63D0\u4EA4\u6216\u56DE\u6EDA\u540E\u4F1A\u81EA\u52A8\u540C\u65F6\u91CA\u653E\u9501\uFF1B\u9664\u4E86\u4F7F\u7528 <code>start transaction</code> \u7684\u65B9\u5F0F\u663E\u5F0F\u5F00\u542F\u4E8B\u52A1\uFF0CInnoDB \u4E5F\u4F1A\u81EA\u52A8\u4E3A\u589E\u5220\u6539\u67FB\u8BED\u53E5\u5F00\u542F\u4E8B\u52A1\uFF0C\u5E76\u81EA\u52A8\u63D0\u4EA4\u6216\u56DE\u6EDA\uFF1B(<code>autocommit=1</code>)</td></tr><tr><td style="text-align:left;">\u6392\u5B83\u9501\uFF08\u5199\u9501\u3001X\u9501\uFF09</td><td style="text-align:left;">\u5141\u8BB8\u83B7\u53D6\u6392\u5B83\u9501\u7684\u4E8B\u52A1\u66F4\u65B0\u6216\u5220\u9664\u6570\u636E</td><td style="text-align:left;">\u4E0E\u5171\u4EAB\u9501\u4E0D\u517C\u5BB9\uFF0C\u4E0E\u6392\u5B83\u9501\u4E0D\u517C\u5BB9</td><td style="text-align:left;">\u5728\u9ED8\u8BA4\u7684 <code>Reapeatable Read</code> \u9694\u79BB\u7EA7\u522B\u4E0B\uFF0CInnoDB \u4F1A\u81EA\u52A8\u4E3A\u589E\u5220\u6539\u64CD\u4F5C\u7684\u884C\u52A0\u6392\u5B83\u9501\uFF1B\u4E5F\u53EF\u663E\u5F0F\u4F7F\u7528 <code>select...for update</code> \u4E3A\u8BFB\u52A0\u6392\u5B83\u9501</td><td style="text-align:left;">\u2026</td></tr></tbody></table><blockquote><ol><li>\u9664\u4E86\u663E\u5F0F\u52A0\u9501\u7684\u60C5\u51B5\uFF0C\u5176\u4ED6\u60C5\u51B5\u4E0B\u7684\u52A0\u9501\u4E0E\u89E3\u9501\u90FD\u65E0\u9700\u4EBA\u5DE5\u5E72\u9884</li><li>InnoDB \u6240\u6709\u7684\u884C\u9501\u7B97\u6CD5\u90FD\u662F\u57FA\u4E8E\u7D22\u5F15\u5B9E\u73B0\u7684\uFF0C\u9501\u5B9A\u7684\u4E5F\u90FD\u662F\u7D22\u5F15\u6216\u7D22\u5F15\u533A\u95F4</li></ol></blockquote><h3 id="\u5F53\u524D\u8BFB-\u5FEB\u7167\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u5F53\u524D\u8BFB-\u5FEB\u7167\u8BFB" aria-hidden="true">#</a> \u5F53\u524D\u8BFB &amp; \u5FEB\u7167\u8BFB</h3><p><strong>\u5F53\u524D\u8BFB</strong>\uFF1A\u5373\u52A0\u9501\u8BFB\uFF0C\u8BFB\u53D6\u8BB0\u5F55\u7684\u6700\u65B0\u7248\u672C\uFF0C\u4F1A\u52A0\u9501\u4FDD\u8BC1\u5176\u4ED6\u5E76\u53D1\u4E8B\u52A1\u4E0D\u80FD\u4FEE\u6539\u5F53\u524D\u8BB0\u5F55\uFF0C\u76F4\u81F3\u83B7\u53D6\u9501\u7684\u4E8B\u52A1\u91CA\u653E\u9501\uFF1B\u4F7F\u7528\u5F53\u524D\u8BFB\u7684\u64CD\u4F5C\u4E3B\u8981\u5305\u62EC\uFF1A<strong>\u663E\u5F0F\u52A0\u9501\u7684\u8BFB\u64CD\u4F5C\u4E0E\u63D2\u5165/\u66F4\u65B0/\u5220\u9664\u7B49\u5199\u64CD\u4F5C</strong>\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select * from table where ? lock in share mode;
select * from table where ? for update;
insert into table values (\u2026);
update table set ? where ?;
delete from table where ?;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>\u6CE8\uFF1A\u5F53 <code>Update</code> SQL \u88AB\u53D1\u7ED9 <code>MySQL</code> \u540E\uFF0C <code>MySQL Server</code> \u4F1A\u6839\u636Ewhere\u6761\u4EF6\uFF0C\u8BFB\u53D6\u7B2C\u4E00\u6761\u6EE1\u8DB3\u6761\u4EF6\u7684\u8BB0\u5F55\uFF0C\u7136\u540E InnoDB \u5F15\u64CE\u4F1A\u5C06\u7B2C\u4E00\u6761\u8BB0\u5F55\u8FD4\u56DE\uFF0C\u5E76\u52A0\u9501\uFF0C\u5F85 <code>MySQL Server</code> \u6536\u5230\u8FD9\u6761\u52A0\u9501\u7684\u8BB0\u5F55\u4E4B\u540E\uFF0C\u4F1A\u518D\u53D1\u8D77\u4E00\u4E2A <code>Update</code> \u8BF7\u6C42\uFF0C\u66F4\u65B0\u8FD9\u6761\u8BB0\u5F55\u3002\u4E00\u6761\u8BB0\u5F55\u64CD\u4F5C\u5B8C\u6210\uFF0C\u518D\u8BFB\u53D6\u4E0B\u4E00\u6761\u8BB0\u5F55\uFF0C\u76F4\u81F3\u6CA1\u6709\u6EE1\u8DB3\u6761\u4EF6\u7684\u8BB0\u5F55\u4E3A\u6B62\u3002\u56E0\u6B64\uFF0C <code>Update</code> \u64CD\u4F5C\u5185\u90E8\uFF0C\u5C31\u5305\u542B\u4E86\u5F53\u524D\u8BFB\u3002\u540C\u7406\uFF0C <code>Delete</code> \u64CD\u4F5C\u4E5F\u4E00\u6837\u3002 <code>Insert</code> \u64CD\u4F5C\u4F1A\u7A0D\u5FAE\u6709\u4E9B\u4E0D\u540C\uFF0C\u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F <code>Insert</code> \u64CD\u4F5C\u53EF\u80FD\u4F1A\u89E6\u53D1 <code>Unique Key</code> \u7684\u51B2\u7A81\u68C0\u67E5\uFF0C\u4E5F\u4F1A\u8FDB\u884C\u4E00\u4E2A\u5F53\u524D\u8BFB\u3002</p></blockquote><p><strong>\u5FEB\u7167\u8BFB\uFF1A\u5373\u4E0D\u52A0\u9501\u8BFB\uFF0C\u8BFB\u53D6\u8BB0\u5F55\u7684\u5FEB\u7167\u7248\u672C\u800C\u975E\u6700\u65B0\u7248\u672C\uFF0C\u901A\u8FC7MVCC\u5B9E\u73B0</strong>\uFF1B</p><p>InnoDB \u9ED8\u8BA4\u7684 <code>RR</code> \u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u4E0D\u663E\u5F0F\u52A0<code>lock in share mode</code>\u4E0E<code>for update</code>\u7684 <code>select</code> \u64CD\u4F5C\u90FD\u5C5E\u4E8E\u5FEB\u7167\u8BFB\uFF0C\u4FDD\u8BC1\u4E8B\u52A1\u6267\u884C\u8FC7\u7A0B\u4E2D\u53EA\u6709\u7B2C\u4E00\u6B21\u8BFB\u4E4B\u524D\u63D0\u4EA4\u7684\u4FEE\u6539\u548C\u81EA\u5DF1\u7684\u4FEE\u6539\u53EF\u89C1\uFF0C\u5176\u4ED6\u7684\u5747\u4E0D\u53EF\u89C1\uFF1B</p><h3 id="\u5171\u4EAB\u9501\u4E0E\u72EC\u5360\u9501" tabindex="-1"><a class="header-anchor" href="#\u5171\u4EAB\u9501\u4E0E\u72EC\u5360\u9501" aria-hidden="true">#</a> \u5171\u4EAB\u9501\u4E0E\u72EC\u5360\u9501</h3><h3 id="\u610F\u5411\u9501" tabindex="-1"><a class="header-anchor" href="#\u610F\u5411\u9501" aria-hidden="true">#</a> \u610F\u5411\u9501</h3><p>InnoDB \u652F\u6301\u591A\u7C92\u5EA6\u7684\u9501\uFF0C\u5141\u8BB8\u8868\u7EA7\u9501\u548C\u884C\u7EA7\u9501\u5171\u5B58\u3002\u4E00\u4E2A\u7C7B\u4F3C\u4E8E <code>LOCK TABLES ... WRITE</code> \u7684\u8BED\u53E5\u4F1A\u83B7\u5F97\u8FD9\u4E2A\u8868\u7684 <code>x</code> \u9501\u3002\u4E3A\u4E86\u5B9E\u73B0\u591A\u7C92\u5EA6\u9501\uFF0CInnoDB \u4F7F\u7528\u4E86\u610F\u5411\u9501\uFF08\u7B80\u79F0 I \u9501\uFF09\u3002I \u9501\u662F\u8868\u660E\u4E00\u4E2A\u4E8B\u52A1\u7A0D\u540E\u8981\u83B7\u5F97\u9488\u5BF9\u4E00\u884C\u8BB0\u5F55\u7684\u67D0\u79CD\u9501\uFF08<code>s or x</code>\uFF09\u7684\u5BF9\u5E94\u8868\u7684\u8868\u7EA7\u9501\uFF0C\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u610F\u5411\u6392\u5B83\u9501\uFF08\u7B80\u79F0 IX \u9501\uFF09\u8868\u660E\u4E00\u4E2A\u4E8B\u52A1\u610F\u56FE\u5728\u67D0\u4E2A\u8868\u4E2D\u8BBE\u7F6E\u67D0\u4E9B\u884C\u7684 x \u9501</li><li>\u610F\u5411\u5171\u4EAB\u9501\uFF08\u7B80\u79F0 IS \u9501\uFF09\u8868\u660E\u4E00\u4E2A\u4E8B\u52A1\u610F\u56FE\u5728\u67D0\u4E2A\u8868\u4E2D\u8BBE\u7F6E\u67D0\u4E9B\u884C\u7684 s \u9501</li></ul><p><code>SELECT ... LOCK IN SHARE MODE</code> \u8BBE\u7F6E\u4E00\u4E2A <code>IS</code> \u9501, <code>SELECT ... FOR UPDATE</code> \u8BBE\u7F6E\u4E00\u4E2A <code>IX</code> \u9501\u3002\u610F\u5411\u9501\u7684\u539F\u5219\u5982\u4E0B\uFF1A</p><ul><li>\u4E00\u4E2A\u4E8B\u52A1\u5FC5\u987B\u5148\u6301\u6709\u8BE5\u8868\u4E0A\u7684 IS \u6216\u8005\u66F4\u5F3A\u7684\u9501\u624D\u80FD\u6301\u6709\u8BE5\u8868\u4E2D\u67D0\u884C\u7684 S \u9501</li><li>\u4E00\u4E2A\u4E8B\u52A1\u5FC5\u987B\u5148\u6301\u6709\u8BE5\u8868\u4E0A\u7684 IX \u9501\u624D\u80FD\u6301\u6709\u8BE5\u8868\u4E2D\u67D0\u884C\u7684 X \u9501</li></ul><p>\u65B0\u8BF7\u6C42\u7684\u9501\u53EA\u6709\u517C\u5BB9\u5DF2\u6709\u9501\u624D\u80FD\u88AB\u5141\u8BB8\uFF0C\u5426\u5219\u5FC5\u987B\u7B49\u5F85\u4E0D\u517C\u5BB9\u7684\u5DF2\u6709\u9501\u88AB\u91CA\u653E\u3002<strong>\u4E00\u4E2A\u4E0D\u517C\u5BB9\u7684\u9501\u8BF7\u6C42\u4E0D\u88AB\u5141\u8BB8\u662F\u56E0\u4E3A\u5B83\u4F1A\u5F15\u8D77\u6B7B\u9501\uFF0C\u9519\u8BEF\u4F1A\u53D1\u751F</strong>\u3002\u610F\u5411\u9501\u53EA\u4F1A\u963B\u585E\u5168\u8868\u8BF7\u6C42\uFF08\u6BD4\u5982 <code>LOCK TABLES ... WRITE</code> \uFF09\u3002<strong>\u610F\u5411\u9501\u7684\u4E3B\u8981\u76EE\u7684\u662F\u5C55\u793A\u67D0\u4EBA\u6B63\u5728\u9501\u5B9A\u8868\u4E2D\u4E00\u884C\uFF0C\u6216\u8005\u5C06\u8981\u9501\u5B9A\u4E00\u884C</strong>\u3002</p><h3 id="record-lock" tabindex="-1"><a class="header-anchor" href="#record-lock" aria-hidden="true">#</a> Record Lock</h3><p>\u8BB0\u5F55\u9501\uFF08Record Lock\uFF09\u662F\u52A0\u5230<strong>\u7D22\u5F15\u8BB0\u5F55</strong>\u4E0A\u7684\u9501\uFF0C\u5047\u8BBE\u6211\u4EEC\u5B58\u5728\u4E0B\u9762\u7684\u4E00\u5F20\u8868 <code>users</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    CREATE TABLE users(
        id INT NOT NULL AUTO_INCREMENT,
        last_name VARCHAR(255) NOT NULL,
        first_name VARCHAR(255),
        age INT,
        PRIMARY KEY(id),
        KEY(last_name),
        KEY(age)
    );
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u6211\u4EEC\u4F7F\u7528 <code>id</code> \u6216\u8005 <code>last_name</code> \u4F5C\u4E3A SQL \u4E2D <code>WHERE</code> \u8BED\u53E5\u7684\u8FC7\u6EE4\u6761\u4EF6\uFF0C\u90A3\u4E48 InnoDB \u5C31\u53EF\u4EE5\u901A\u8FC7\u7D22\u5F15\u5EFA\u7ACB\u7684 B+ \u6811\u627E\u5230\u884C\u8BB0\u5F55\u5E76\u6DFB\u52A0\u7D22\u5F15\uFF0C\u4F46\u662F\u5982\u679C\u4F7F\u7528 <code>first_name</code> \u4F5C\u4E3A\u8FC7\u6EE4\u6761\u4EF6\u65F6\uFF0C\u7531\u4E8E InnoDB \u4E0D\u77E5\u9053\u5F85\u4FEE\u6539\u7684\u8BB0\u5F55\u5177\u4F53\u5B58\u653E\u7684\u4F4D\u7F6E\uFF0C\u4E5F\u65E0\u6CD5\u5BF9\u5C06\u8981\u4FEE\u6539\u54EA\u6761\u8BB0\u5F55\u63D0\u524D\u505A\u51FA\u5224\u65AD\u5C31\u4F1A\u9501\u5B9A\u6574\u4E2A\u8868\u3002</p><h3 id="gap-lock" tabindex="-1"><a class="header-anchor" href="#gap-lock" aria-hidden="true">#</a> Gap Lock</h3><p>\u8BB0\u5F55\u9501\u662F\u5728\u5B58\u50A8\u5F15\u64CE\u4E2D\u6700\u4E3A\u5E38\u89C1\u7684\u9501\uFF0C\u9664\u4E86\u8BB0\u5F55\u9501\u4E4B\u5916\uFF0CInnoDB \u4E2D\u8FD8\u5B58\u5728\u95F4\u9699\u9501\uFF08Gap Lock\uFF09\uFF0C\u95F4\u9699\u9501\u662F\u5BF9\u7D22\u5F15\u8BB0\u5F55\u4E2D\u7684\u4E00\u6BB5\u8FDE\u7EED\u533A\u57DF\u7684\u9501\uFF1B\u5F53\u4F7F\u7528\u7C7B\u4F3C <code>SELECT * FROM users WHERE id BETWEEN 10 AND 20 FOR UPDATE;</code> \u7684 SQL \u8BED\u53E5\u65F6\uFF0C\u5C31\u4F1A\u963B\u6B62\u5176\u4ED6\u4E8B\u52A1\u5411\u8868\u4E2D\u63D2\u5165 <code>id = 15</code> \u7684\u8BB0\u5F55\uFF0C\u56E0\u4E3A\u6574\u4E2A\u8303\u56F4\u90FD\u88AB\u95F4\u9699\u9501\u9501\u5B9A\u4E86\u3002</p><blockquote><p>\u95F4\u9699\u9501\u662F\u5B58\u50A8\u5F15\u64CE\u5BF9\u4E8E\u6027\u80FD\u548C\u5E76\u53D1\u505A\u51FA\u7684\u6743\u8861\uFF0C\u5E76\u4E14\u53EA\u7528\u4E8E\u67D0\u4E9B\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u3002</p></blockquote><p>\u867D\u7136\u95F4\u9699\u9501\u4E2D\u4E5F\u5206\u4E3A\u5171\u4EAB\u9501\u548C\u4E92\u65A5\u9501\uFF0C\u4E0D\u8FC7\u5B83\u4EEC\u4E4B\u95F4\u5E76\u4E0D\u662F\u4E92\u65A5\u7684\uFF0C\u4E5F\u5C31\u662F\u4E0D\u540C\u7684\u4E8B\u52A1\u53EF\u4EE5\u540C\u65F6\u6301\u6709\u4E00\u6BB5\u76F8\u540C\u8303\u56F4\u7684\u5171\u4EAB\u9501\u548C\u4E92\u65A5\u9501\uFF0C\u5B83\u552F\u4E00\u963B\u6B62\u7684\u5C31\u662F<strong>\u5176\u4ED6\u4E8B\u52A1\u5411\u8FD9\u4E2A\u8303\u56F4\u4E2D\u6DFB\u52A0\u65B0\u7684\u8BB0\u5F55</strong>\u3002</p><h4 id="\u95F4\u9699\u9501\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u95F4\u9699\u9501\u7684\u7F3A\u70B9" aria-hidden="true">#</a> \u95F4\u9699\u9501\u7684\u7F3A\u70B9</h4><ul><li>\u95F4\u9699\u9501\u6709\u4E00\u4E2A\u6BD4\u8F83\u81F4\u547D\u7684\u5F31\u70B9\uFF0C\u5C31\u662F\u5F53\u9501\u5B9A\u4E00\u4E2A\u8303\u56F4\u952E\u503C\u4E4B\u540E\uFF0C\u5373\u4F7F\u67D0\u4E9B\u4E0D\u5B58\u5728\u7684\u952E\u503C\u4E5F\u4F1A\u88AB\u65E0\u8F9C\u7684\u9501\u5B9A\uFF0C\u800C\u9020\u6210\u5728\u9501\u5B9A\u7684\u65F6\u5019\u65E0\u6CD5\u63D2\u5165\u9501\u5B9A\u952E\u503C\u8303\u56F4\u5185\u7684\u4EFB\u4F55\u6570\u636E\u3002\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u8FD9\u53EF\u80FD\u4F1A\u5BF9\u6027\u80FD\u9020\u6210\u5F88\u5927\u7684\u5371\u5BB3</li><li>\u5F53Query\u65E0\u6CD5\u5229\u7528\u7D22\u5F15\u7684\u65F6\u5019\uFF0C InnoDB\u4F1A\u653E\u5F03\u4F7F\u7528\u884C\u7EA7\u522B\u9501\u5B9A\u800C\u6539\u7528\u8868\u7EA7\u522B\u7684\u9501\u5B9A\uFF0C\u9020\u6210\u5E76\u53D1\u6027\u80FD\u7684\u964D\u4F4E\uFF1B</li><li>\u5F53Quuery\u4F7F\u7528\u7684\u7D22\u5F15\u5E76\u4E0D\u5305\u542B\u6240\u6709\u8FC7\u6EE4\u6761\u4EF6\u7684\u65F6\u5019\uFF0C\u6570\u636E\u68C0\u7D22\u4F7F\u7528\u5230\u7684\u7D22\u5F15\u952E\u6240\u6307\u5411\u7684\u6570\u636E\u53EF\u80FD\u6709\u90E8\u5206\u5E76\u4E0D\u5C5E\u4E8E\u8BE5Query\u7684\u7ED3\u679C\u96C6\u7684\u884C\u5217\uFF0C\u4F46\u662F\u4E5F\u4F1A\u88AB\u9501\u5B9A\uFF0C\u56E0\u4E3A\u95F4\u9699\u9501\u9501\u5B9A\u7684\u662F\u4E00\u4E2A\u8303\u56F4\uFF0C\u800C\u4E0D\u662F\u5177\u4F53\u7684\u7D22\u5F15\u952E\uFF1B</li><li>\u5F53Query\u5728\u4F7F\u7528\u7D22\u5F15\u5B9A\u4F4D\u6570\u636E\u7684\u65F6\u5019\uFF0C\u5982\u679C\u4F7F\u7528\u7684\u7D22\u5F15\u952E\u4E00\u6837\u4F46\u8BBF\u95EE\u7684\u6570\u636E\u884C\u4E0D\u540C\u7684\u65F6\u5019\uFF08\u7D22\u5F15\u53EA\u662F\u8FC7\u6EE4\u6761\u4EF6\u7684\u4E00\u90E8\u5206\uFF09\uFF0C\u4E00\u6837\u4F1A\u88AB\u9501\u5B9A</li></ul><h4 id="next-key-lock" tabindex="-1"><a class="header-anchor" href="#next-key-lock" aria-hidden="true">#</a> Next-Key Lock</h4><p>Next-Key \u9501\u76F8\u6BD4\u524D\u4E24\u8005\u5C31\u7A0D\u5FAE\u6709\u4E00\u4E9B\u590D\u6742\uFF0C\u5B83\u662F\u8BB0\u5F55\u9501\u548C\u8BB0\u5F55\u524D\u7684\u95F4\u9699\u9501\u7684\u7ED3\u5408\uFF0C\u5728 <code>users</code> \u8868\u4E2D\u6709\u4EE5\u4E0B\u8BB0\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    +------|-------------|--------------|-------+
    |   id | last_name   | first_name   |   age |
    |------|-------------|--------------|-------|
    |    4 | stark       | tony         |    21 |
    |    1 | tom         | hiddleston   |    30 |
    |    3 | morgan      | freeman      |    40 |
    |    5 | jeff        | dean         |    50 |
    |    2 | donald      | trump        |    80 |
    +------|-------------|--------------|-------+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u4F7F\u7528 Next-Key \u9501\uFF0C\u90A3\u4E48 Next-Key \u9501\u5C31\u53EF\u4EE5\u5728\u9700\u8981\u7684\u65F6\u5019\u9501\u5B9A\u4EE5\u4E0B\u7684\u8303\u56F4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    (-\u221E, 21]
    (21, 30]
    (30, 40]
    (40, 50]
    (50, 80]
    (80, \u221E)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>\u65E2\u7136\u53EB Next-Key \u9501\uFF0C\u9501\u5B9A\u7684\u5E94\u8BE5\u662F\u5F53\u524D\u503C\u548C\u540E\u9762\u7684\u8303\u56F4\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u5374\u4E0D\u662F\uFF0CNext-Key \u9501\u9501\u5B9A\u7684\u662F\u5F53\u524D\u503C\u548C\u524D\u9762\u7684\u8303\u56F4\u3002</p></blockquote><p>\u5F53\u6211\u4EEC\u66F4\u65B0\u4E00\u6761\u8BB0\u5F55\uFF0C\u6BD4\u5982 <code>SELECT * FROM users WHERE age = 30 FOR UPDATE;</code>\uFF0CInnoDB \u4E0D\u4EC5\u4F1A\u5728\u8303\u56F4 <code>(21, 30]</code> \u4E0A\u52A0 Next-Key \u9501\uFF0C\u8FD8\u4F1A\u5728\u8FD9\u6761\u8BE5\u8BB0\u5F55\u7D22\u5F15\u589E\u957F\u65B9\u5411\u7684\u8303\u56F4 <code>(30, 40]</code> \u52A0\u95F4\u9699\u9501\uFF0C\u6240\u4EE5\u63D2\u5165 <code>(21, 40]</code> \u8303\u56F4\u5185\u7684\u8BB0\u5F55\u90FD\u4F1A\u88AB\u9501\u5B9A\u3002</p><blockquote><p>Next-Key \u9501\u7684\u4F5C\u7528\u5176\u5B9E\u662F\u4E3A\u4E86\u89E3\u51B3\u5E7B\u8BFB\u7684\u95EE\u9898\u3002</p></blockquote><h3 id="\u63D2\u5165\u610F\u5411\u9501" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u610F\u5411\u9501" aria-hidden="true">#</a> \u63D2\u5165\u610F\u5411\u9501</h3><p>\u63D2\u5165\u610F\u5411\u9501\u662F\u5728\u63D2\u5165\u4E00\u884C\u8BB0\u5F55\u64CD\u4F5C\u4E4B\u524D\u8BBE\u7F6E\u7684\u4E00\u79CD\u95F4\u9699\u9501\uFF0C\u8FD9\u4E2A\u9501\u91CA\u653E\u4E86\u4E00\u79CD\u63D2\u5165\u65B9\u5F0F\u7684\u4FE1\u53F7\uFF0C\u4EA6\u5373\u591A\u4E2A\u4E8B\u52A1\u5728\u76F8\u540C\u7684\u7D22\u5F15\u95F4\u9699\u63D2\u5165\u65F6\u5982\u679C\u4E0D\u662F\u63D2\u5165\u95F4\u9699\u4E2D\u76F8\u540C\u7684\u4F4D\u7F6E\u5C31\u4E0D\u9700\u8981\u4E92\u76F8\u7B49\u5F85\u3002\u5047\u8BBE\u6709\u7D22\u5F15\u503C<code>4\u30017</code>\uFF0C\u51E0\u4E2A\u4E0D\u540C\u7684\u4E8B\u52A1\u51C6\u5907\u63D2\u5165<code>5\u30016</code>\uFF0C\u6BCF\u4E2A\u9501\u90FD\u5728\u83B7\u5F97\u63D2\u5165\u884C\u7684\u72EC\u5360\u9501\u4E4B\u524D\u7528\u63D2\u5165\u610F\u5411\u9501\u5404\u81EA\u9501\u4F4F\u4E86<code>4\u30017</code>\u4E4B\u95F4\u7684\u95F4\u9699\uFF0C\u4F46\u662F\u4E0D\u963B\u585E\u5BF9\u65B9\u56E0\u4E3A\u63D2\u5165\u884C\u4E0D\u51B2\u7A81\u3002</p><h3 id="\u81EA\u589E\u9501" tabindex="-1"><a class="header-anchor" href="#\u81EA\u589E\u9501" aria-hidden="true">#</a> \u81EA\u589E\u9501</h3><p>\u81EA\u589E\u9501\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u8868\u7EA7\u9501\uFF0C\u4E8B\u52A1\u63D2\u5165\u81EA\u589E\u5217\u7684\u65F6\u5019\u9700\u8981\u83B7\u53D6\uFF0C\u6700\u7B80\u5355\u60C5\u51B5\u4E0B\u5982\u679C\u4E00\u4E2A\u4E8B\u52A1\u63D2\u5165\u4E00\u4E2A\u503C\u5230\u8868\u4E2D\uFF0C\u4EFB\u4F55\u5176\u4ED6\u4E8B\u52A1\u90FD\u8981\u7B49\u5F85\uFF0C\u8FD9\u6837\u7B2C\u4E00\u4E2A\u4E8B\u7269\u624D\u80FD\u83B7\u5F97\u8FDE\u7EED\u7684\u4E3B\u952E\u503C\u3002</p><h3 id="\u9501\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u9501\u9009\u62E9" aria-hidden="true">#</a> \u9501\u9009\u62E9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>+\u2014\u2014-+\u2014\u2014\u2014\u2014-+
| id | name |
+\u2014\u2014-+\u2014\u2014\u2014\u2014-+
| 1 | title1 |
+\u2014\u2014-+\u2014\u2014\u2014\u2014-+
| 2 | title2 |
+\u2014\u2014-+\u2014\u2014\u2014\u2014-+
| 3 | title3 |
+\u2014\u2014-+\u2014\u2014\u2014\u2014-+
| 9 | title9 |
+\u2014\u2014-+\u2014\u2014\u2014\u2014-+
| 10 | title10 |
+\u2014\u2014-+\u2014\u2014\u2014\u2014-+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6309\u7167\u539F\u7406\u6765\u8BF4\uFF0C<code>id&gt;5 and id&lt;7</code>\u8FD9\u4E2A\u67E5\u8BE2\u6761\u4EF6\uFF0C\u5728\u8868\u4E2D\u627E\u4E0D\u5230\u6EE1\u8DB3\u6761\u4EF6\u7684\u9879\uFF0C\u56E0\u6B64\u4F1A\u5BF9\u7B2C\u4E00\u4E2A\u4E0D\u6EE1\u8DB3\u6761\u4EF6\u7684\u9879(<code>id = 9</code>)\u4E0A\u52A0GAP\u9501\uFF0C\u9632\u6B62\u540E\u7EED\u5176\u4ED6\u4E8B\u52A1\u63D2\u5165\u6EE1\u8DB3\u6761\u4EF6\u7684\u8BB0\u5F55\u3002</p><p>\u800C <strong>GAP \u9501\u4E0EGAP \u9501\u662F\u4E0D\u51B2\u7A81\u7684</strong>\uFF0C\u90A3\u4E48\u4E3A\u4EC0\u4E48\u4E24\u4E2A\u540C\u65F6\u6267\u884C<code>id&gt;5 and id&lt;7</code>\u67E5\u8BE2\u7684\u4E8B\u52A1\u4F1A\u51B2\u7A81\u5462\uFF1F</p><p>\u539F\u56E0\u5728\u4E8E\uFF0C<code>MySQL Server</code>\u5E76\u6CA1\u6709\u5C06<code>id&lt;7</code>\u8FD9\u4E2A\u67E5\u8BE2\u6761\u4EF6\u4E0B\u964D\u5230<code>InnoDB</code>\u5F15\u64CE\u5C42\uFF0C\u56E0\u6B64<code>InnoDB</code>\u770B\u5230\u7684\u67E5\u8BE2\uFF0C\u662F<code>id&gt;5</code>\uFF0C\u6B63\u5411\u626B\u63CF\u3002\u8BFB\u51FA\u7684\u8BB0\u5F55<code>id=9</code>\uFF0C\u5148\u52A0\u4E0A<code>next key\u9501</code>(Lock X + GAP lock)\uFF0C\u7136\u540E\u8FD4\u56DE\u7ED9 MySQL Server \u8FDB\u884C\u5224\u65AD\u3002 MySQL Server \u6B64\u65F6\u624D\u4F1A\u5224\u65AD\u8FD4\u56DE\u7684\u8BB0\u5F55\u662F\u5426\u6EE1\u8DB3<code>id&lt;7</code>\u7684\u67E5\u8BE2\u6761\u4EF6\u3002\u6B64\u5904\u4E0D\u6EE1\u8DB3\uFF0C\u67E5\u8BE2\u7ED3\u675F\u3002</p><p>\u56E0\u6B64\uFF0C<code>id=9</code>\u8BB0\u5F55\u4E0A\uFF0C\u771F\u6B63\u6301\u6709\u7684\u9501\u662F<code>next key</code>\u9501\uFF0C<strong>\u800C<code>next key</code>\u9501\u4E4B\u95F4\u662F\u76F8\u4E92\u51B2\u7A81\u7684</strong>\uFF0C\u8FD9\u4E5F\u8BF4\u660E\u4E86\u4E3A\u4EC0\u4E48\u4E24\u4E2A<code>id&gt;5 and id&lt;7</code>\u67E5\u8BE2\u7684\u4E8B\u52A1\u4F1A\u51B2\u7A81\u7684\u539F\u56E0\u3002</p><h2 id="mvcc" tabindex="-1"><a class="header-anchor" href="#mvcc" aria-hidden="true">#</a> MVCC</h2><p>InnoDB \u5F15\u64CE\u652F\u6301 MVCC(Multiversion Concurrency Control)\uFF1AInnoDB \u4FDD\u5B58\u4E86\u884C\u7684\u5386\u53F2\u7248\u672C\uFF0C\u4EE5\u652F\u6301\u4E8B\u52A1\u7684\u5E76\u53D1\u63A7\u5236\u548C\u56DE\u6EDA\u3002\u8FD9\u4E9B\u5386\u53F2\u4FE1\u606F\u4FDD\u5B58\u5728\u8868\u7A7A\u95F4\u7684 <strong>\u56DE\u6EDA\u6BB5\uFF08Rollback Segment\uFF09</strong> \u91CC\uFF0C\u56DE\u6EDA\u6BB5\u4E2D\u5B58\u50A8\u7740 <strong>Undo Log</strong>\u3002\u5F53\u4E8B\u52A1\u9700\u8981\u8FDB\u884C\u56DE\u6EDA\u65F6\uFF0CInnoDB \u5C31\u4F1A\u4F7F\u7528\u8FD9\u4E9B\u4FE1\u606F\u6765\u8FDB\u884C Undo \u64CD\u4F5C\uFF0C\u540C\u65F6\u8FD9\u4E9B\u4FE1\u606F\u4E5F\u53EF\u7528\u6765\u5B9E\u73B0 <strong>\u4E00\u81F4\u6027\u8BFB</strong>\u3002</p><p>InnoDB \u5728\u5B58\u50A8\u7684\u6BCF\u884C\u6570\u636E\u4E2D\u90FD\u589E\u52A0\u4E86\u4E09\u5217\u9690\u85CF\u5C5E\u6027\uFF1A</p><ul><li><code>DB_TRX_ID</code>\uFF1A\u6700\u540E\u4E00\u6B21\u63D2\u5165\u6216\u66F4\u65B0\u7684\u4E8B\u52A1ID</li><li><code>DB_ROLL_PTR</code>\uFF1A\u6307\u5411\u5DF2\u5199\u5165\u56DE\u6EDA\u6BB5\u7684 Undo Log \u8BB0\u5F55\u3002\u5982\u679C\u8FD9\u884C\u8BB0\u5F55\u662F\u66F4\u65B0\u7684\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u6839\u636E\u8FD9\u4E2A Undo Log \u8BB0\u5F55\u91CD\u5EFA\u4E4B\u95F4\u7684\u6570\u636E</li><li><code>DB_ROW_ID</code>\uFF1A\u81EA\u589E\u5E8F\u5217\uFF0C\u5982\u679C\u8868\u672A\u6307\u5B9A\u4E3B\u952E\uFF0C\u5219\u7531\u8BE5\u5217\u4F5C\u4E3A\u4E3B\u952E</li></ul><p>\u5728\u56DE\u6EDA\u6BB5\u7684 Undo Log \u88AB\u5206\u4E3A <code>Insert Undo Log</code> \u548C <code>Update Undo Log</code>\u3002Insert Undo Log \u53EA\u662F\u5728\u4E8B\u52A1\u56DE\u6EDA\u7684\u65F6\u5019\u9700\u8981\uFF0C\u5728\u4E8B\u52A1\u63D0\u4EA4\u540E\u5C31\u53EF\u4E22\u5F03\u3002Update Undo Log \u4E0D\u4EC5\u4EC5\u5728\u56DE\u6EDA\u7684\u65F6\u5019\u9700\u8981\uFF0C\u8FD8\u8981\u63D0\u4F9B\u4E00\u81F4\u6027\u8BFB\uFF0C\u6240\u4EE5\u53EA\u6709\u5728\u6240\u6709\u9700\u8981\u8BE5 Update Undo Log \u6784\u5EFA\u5386\u53F2\u7248\u672C\u6570\u636E\u7684\u4E8B\u52A1\u90FD\u63D0\u4EA4\u540E\u624D\u80FD\u4E22\u5F03\u3002MySQL \u5EFA\u8BAE\u5C3D\u91CF\u9891\u7E41\u7684\u63D0\u4EA4\u4E8B\u52A1\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1 InnoDB \u5FEB\u901F\u7684\u4E22\u5F03 Update Undo Log\uFF0C\u9632\u6B62\u5176\u8FC7\u5927\u3002</p><p>\u5728 InnoDB \u4E2D\uFF0C\u884C\u6570\u636E\u7684\u7269\u7406\u5220\u9664\u4E0D\u662F\u7ACB\u523B\u6267\u884C\uFF0CInnoDB \u4F1A\u5728\u884C\u5220\u9664\u7684 Undo Log \u88AB\u4E22\u5F03\u65F6\u624D\u4F1A\u8FDB\u884C\u7269\u7406\u5220\u9664\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u88AB\u79F0\u4E4B\u4E3A <strong>\u6E05\u7406\uFF08Purge\uFF09</strong>\uFF0C\u5176\u6267\u884C\u8FC7\u7A0B\u5341\u5206\u8FC5\u901F\u3002</p><h3 id="mvcc-\u4E8C\u7EA7\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#mvcc-\u4E8C\u7EA7\u7D22\u5F15" aria-hidden="true">#</a> MVCC \u4E8C\u7EA7\u7D22\u5F15</h3><p>InnoDB \u5728\u66F4\u65B0\u65F6\u5BF9 \u4E8C\u7EA7\u7D22\u5F15 \u548C \u805A\u96C6\u7D22\u5F15\u7684\u5904\u7406\u65B9\u5F0F\u4E0D\u4E00\u6837\u3002\u5728\u805A\u96C6\u7D22\u5F15\u4E0A\u7684\u66F4\u65B0\u662F\u539F\u5730\u66F4\u65B0\uFF08in-place\uFF09\uFF0C\u5176\u4E2D\u7684\u9690\u85CF\u5C5E\u6027 <code>DB_ROLL_PTR</code> \u6307\u5411\u7684 Undo Log \u53EF\u4EE5\u91CD\u5EFA\u5386\u53F2\u6570\u636E\u3002\u4F46\u662F\u4E8C\u7EA7\u7D22\u5F15\u6CA1\u6709\u9690\u85CF\u5C5E\u6027\uFF0C\u6240\u4EE5\u4E0D\u80FD\u539F\u5730\u66F4\u65B0\u3002</p><p>\u5F53\u4E8C\u7EA7\u7D22\u5F15\u7684\u6570\u636E\u88AB\u66F4\u65B0\u65F6\uFF0C\u65E7\u7684\u4E8C\u7EA7\u7D22\u5F15\u8BB0\u5F55\u6807\u8BB0\u4E3A <strong>\u6807\u8BB0\u5220\u9664\uFF08delete-marked\uFF09</strong>\uFF0C\u7136\u540E\u63D2\u5165\u4E00\u6761\u65B0\u7684\u7D22\u5F15\u8BB0\u5F55\uFF0C\u6700\u7EC8\u6807\u8BB0\u5220\u9664\u7684\u7D22\u5F15\u8BB0\u5F55\u4F1A\u88AB\u6E05\u9664\u3002\u5F53\u4E8C\u7EA7\u7D22\u5F15\u8BB0\u5F55\u88AB\u6807\u8BB0\u4E3A delete-marked \u6216\u8005\u6709\u66F4\u65B0\u7684\u4E8B\u52A1\u66F4\u65B0\u65F6\uFF0CInnoDB \u4F1A\u67E5\u627E\u805A\u96C6\u7D22\u5F15\u3002\u5728\u805A\u96C6\u7D22\u5F15\u4E2D\u68C0\u67E5\u884C\u7684 <code>DB_TRX_ID</code>\uFF0C\u5982\u679C\u4E8B\u52A1\u4FEE\u6539\u4E86\u8BB0\u5F55\uFF0C\u5219\u4ECE Undo Log \u4E2D\u6784\u5EFA\u884C\u6570\u636E\u7684\u6B63\u786E\u7248\u672C\u3002\u5982\u679C\u4E8C\u7EA7\u7D22\u5F15\u8BB0\u5F55\u88AB\u6807\u8BB0\u4E3A delete-marked \u6216\u8005 \u4E8C\u7EA7\u7D22\u5F15\u6709\u66F4\u65B0\u7684\u4E8B\u52A1\u66F4\u65B0\uFF0C\u8986\u76D6\u7D22\u5F15\u6280\u672F\u4E0D\u4F1A\u88AB\u4F7F\u7528\uFF08\u83B7\u53D6\u884C\u4EFB\u610F\u6570\u636E\u5747\u9700\u8981\u56DE\u8868\uFF09\u3002</p><h3 id="mvcc-vs-\u4E50\u89C2\u9501" tabindex="-1"><a class="header-anchor" href="#mvcc-vs-\u4E50\u89C2\u9501" aria-hidden="true">#</a> MVCC vs \u4E50\u89C2\u9501</h3><p><strong>MVCC \u5E76\u4E0D\u662F\u4E00\u4E2A\u4E0E\u4E50\u89C2\u548C\u60B2\u89C2\u5E76\u53D1\u63A7\u5236\u5BF9\u7ACB\u7684\u4E1C\u897F\uFF0C\u5B83\u80FD\u591F\u4E0E\u4E24\u8005\u5F88\u597D\u7684\u7ED3\u5408\u4EE5\u589E\u52A0\u4E8B\u52A1\u7684\u5E76\u53D1\u91CF</strong>\uFF0C\u5728\u76EE\u524D\u6700\u6D41\u884C\u7684 SQL \u6570\u636E\u5E93 MySQL \u548C PostgreSQL \u4E2D\u90FD\u5BF9 MVCC \u8FDB\u884C\u4E86\u5B9E\u73B0\uFF1B\u4F46\u662F\u7531\u4E8E\u5B83\u4EEC\u5206\u522B\u5B9E\u73B0\u4E86\u60B2\u89C2\u9501\u548C\u4E50\u89C2\u9501\uFF0C\u6240\u4EE5 MVCC \u5B9E\u73B0\u7684\u65B9\u5F0F\u4E5F\u4E0D\u540C\u3002</p><p>MVCC \u53EF\u4EE5\u4FDD\u8BC1\u4E0D\u963B\u585E\u5730\u8BFB\u5230\u4E00\u81F4\u7684\u6570\u636E\u3002\u4F46\u662F\uFF0CMVCC \u5E76\u6CA1\u6709\u5BF9\u5B9E\u73B0\u7EC6\u8282\u505A\u7EA6\u675F\uFF0C\u4E3A\u6B64\u4E0D\u540C\u7684\u6570\u636E\u5E93\u7684\u8BED\u4E49\u6709\u6240\u4E0D\u540C\uFF0C\u6BD4\u5982\uFF1A</p><ul><li><p><code>postgres</code> \u5BF9\u5199\u64CD\u4F5C\u4E5F\u662F\u4E50\u89C2\u5E76\u53D1\u63A7\u5236\uFF1B\u5728\u8868\u4E2D\u4FDD\u5B58\u540C\u4E00\u884C\u6570\u636E\u8BB0\u5F55\u7684\u591A\u4E2A\u4E0D\u540C\u7248\u672C\uFF0C\u6BCF\u6B21\u5199\u64CD\u4F5C\uFF0C\u90FD\u662F\u521B\u5EFA\uFF0C\u800C\u56DE\u907F\u66F4\u65B0\uFF1B\u5728\u4E8B\u52A1\u63D0\u4EA4\u65F6\uFF0C\u6309\u7248\u672C\u53F7\u68C0\u67E5\u5F53\u524D\u4E8B\u52A1\u63D0\u4EA4\u7684\u6570\u636E\u662F\u5426\u5B58\u5728\u5199\u51B2\u7A81\uFF0C\u5219\u629B\u5F02\u5E38\u544A\u77E5\u7528\u6237\uFF0C\u56DE\u6EDA\u4E8B\u52A1\uFF1B</p></li><li><p><code>innodb</code> \u5219\u53EA\u5BF9\u8BFB\u65E0\u9501\uFF0C\u5199\u64CD\u4F5C\u4ECD\u662F\u4E0A\u9501\u7684\u60B2\u89C2\u5E76\u53D1\u63A7\u5236\uFF0C\u8FD9\u4E5F\u610F\u5473\u7740\uFF0C<code>innodb</code> \u4E2D\u53EA\u80FD\u89C1\u5230\u56E0\u6B7B\u9501\u548C\u4E0D\u53D8\u6027\u7EA6\u675F\u800C\u56DE\u6EDA\uFF0C\u800C\u89C1\u4E0D\u5230\u56E0\u4E3A\u5199\u51B2\u7A81\u800C\u56DE\u6EDA\uFF0C\u4E0D\u50CF postgres \u90A3\u6837\u5BF9\u6570\u636E\u4FEE\u6539\u5728\u8868\u4E2D\u521B\u5EFA\u65B0\u7EAA\u5F55\uFF0C\u800C\u662F\u6BCF\u884C\u6570\u636E\u53EA\u5728\u8868\u4E2D\u4FDD\u7559\u4E00\u4EFD\uFF0C\u5728\u66F4\u65B0\u6570\u636E\u65F6\u4E0A\u884C\u9501\uFF0C\u540C\u65F6\u5C06\u65E7\u7248\u6570\u636E\u5199\u5165 <code>undo log</code>\u3002\u8868\u548C undo log \u4E2D\u884C\u6570\u636E\u90FD\u8BB0\u5F55\u7740\u4E8B\u52A1ID\uFF0C\u5728\u68C0\u7D22\u65F6\uFF0C\u53EA\u8BFB\u53D6\u6765\u81EA\u5F53\u524D\u5DF2\u63D0\u4EA4\u7684\u4E8B\u52A1\u7684\u884C\u6570\u636E\u3002</p></li></ul><p>\u53EF\u89C1 MVCC \u4E2D\u7684\u5199\u64CD\u4F5C\u4ECD\u53EF\u4EE5\u6309\u60B2\u89C2\u5E76\u53D1\u63A7\u5236\u5B9E\u73B0\uFF0C\u800C <code>CAS</code> \u7684\u5199\u64CD\u4F5C\u53EA\u80FD\u662F\u4E50\u89C2\u5E76\u53D1\u63A7\u5236\u3002\u8FD8\u6709\u4E00\u4E2A\u4E0D\u540C\u5728\u4E8E\uFF0CMVCC \u5728\u8BED\u5883\u4E2D\u503E\u5411\u4E8E \u201C\u5BF9\u591A\u884C\u6570\u636E\u6253\u5FEB\u7167\u9020\u5E73\u884C\u5B87\u5B99\u201D\uFF0C\u7136\u800C <code>CAS</code> \u4E00\u822C\u53EA\u662F\u4FDD\u62A4\u5355\u884C\u6570\u636E\u800C\u5DF2\u3002\u6BD4\u5982 mongodb \u6709 CAS \u7684\u652F\u6301\uFF0C\u4F46\u4E0D\u80FD\u8BF4\u8FD9\u662F MVCC\u3002</p><h2 id="\u51FA\u5904" tabindex="-1"><a class="header-anchor" href="#\u51FA\u5904" aria-hidden="true">#</a> \u51FA\u5904</h2>`,61),u={href:"https://hadyang.com/interview/docs/basic/database/mysql/innodb/concurrent/",target:"_blank",rel:"noopener noreferrer"},h=l("https://hadyang.com/interview/docs/basic/database/mysql/innodb/concurrent/");function m(g,x){const n=d("ExternalLinkIcon");return o(),s(c,null,[b,e("p",null,[e("a",u,[h,t(n)])])],64)}var L=a(p,[["render",m]]);export{L as default};