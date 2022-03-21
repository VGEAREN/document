import{_ as n,a as s}from"./app.911c58f6.js";var a="/document/assets/1.665b8778.png",p="/document/assets/2.2f95b34b.png",e="/document/assets/3.c7a8d730.png",c="/document/assets/4.fada7025.png",t="/document/assets/6.d4c170d5.png",l="/document/assets/5.8801b557.png";const o={},r=s(`<h3 id="\u5B9E\u73B0\u5173\u7CFB-realization" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5173\u7CFB-realization" aria-hidden="true">#</a> \u5B9E\u73B0\u5173\u7CFB(Realization)</h3><p>implements</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserImpl</span> <span class="token keyword">implements</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u6CDB\u5316\u5173\u7CFB-generalization" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u5316\u5173\u7CFB-generalization" aria-hidden="true">#</a> \u6CDB\u5316\u5173\u7CFB(Generalization)</h3><p>extends</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdminUser</span> <span class="token keyword">extends</span> <span class="token class-name">UserImpl</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+a+`" alt="\u5B9E\u73B0\u548C\u6CDB\u5316"></p><h3 id="\u4F9D\u8D56\u5173\u7CFB-dependency" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u5173\u7CFB-dependency" aria-hidden="true">#</a> \u4F9D\u8D56\u5173\u7CFB\uFF08Dependency\uFF09</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//A\u4F9D\u8D56\u4E8EB\u7684\u7B2C\u4E00\u79CD\u8868\u73B0\u5F62\u5F0F\uFF1AB\u4E3AA\u7684\u5C40\u90E8\u53D8\u91CF</span>
        <span class="token class-name">Person1</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person1<span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//A\u4F9D\u8D56\u4E8EB\u7684\u7B2C\u4E8C\u79CD\u8868\u73B0\u5F62\u5F0F\uFF1A \u8C03\u7528B\u7684\u9759\u6001\u65B9\u6CD5</span>
        <span class="token class-name">Person2</span><span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token class-name">Person3</span> person3<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
        <span class="token comment">//A\u4F9D\u8D56\u4E8EB\u7684\u7B2C\u4E09\u79CD\u8868\u73B0\u5F62\u5F0F\uFF1AB\u4F5C\u4E3AA\u7684\u65B9\u6CD5\u53C2\u6570</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> person3<span class="token punctuation">.</span>field1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//A\u4F9D\u8D56\u4E8EB\u7684\u7B2C\u56DB\u79CD\u8868\u73B0\u5F62\u5F0F\uFF1AB\u4F5C\u4E3AA\u7684\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C</span>
    <span class="token keyword">public</span> <span class="token class-name">Person5</span> <span class="token function">method4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person1</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> field1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person5</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p><img src="`+p+`" alt="\u4F9D\u8D56"></p><h3 id="\u5173\u8054\u5173\u7CFB-association" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u5173\u7CFB-association" aria-hidden="true">#</a> \u5173\u8054\u5173\u7CFB(Association)</h3><p><strong>\u5355\u5411\u5173\u8054</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">IDcard</span> iDcard<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IDcard</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="`+e+`" alt="\u5355\u5411\u5173\u8054"></p><p><strong>\u53CC\u5411\u5173\u8054</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">IDcard</span> iDcard<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IDcard</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Person</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="`+c+`" alt="\u53CC\u5411\u5173\u8054"></p><p>\u4E5F\u53EF\u4EE5\u4E00\u5BF9\u591A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">IDcard</span><span class="token punctuation">&gt;</span></span> iDcard<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IDcard</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="`+t+`" alt="\u4E00\u5BF9\u591A"></p><h3 id="\u805A\u5408\u5173\u7CFB-aggregation" tabindex="-1"><a class="header-anchor" href="#\u805A\u5408\u5173\u7CFB-aggregation" aria-hidden="true">#</a> \u805A\u5408\u5173\u7CFB (Aggregation)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Department</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Staff</span><span class="token punctuation">&gt;</span></span> staff<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Staff</span><span class="token punctuation">&gt;</span></span> <span class="token function">getStaff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> staff<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Staff</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><img src="`+l+'" alt="\u805A\u5408"></p>',23);function u(i,k){return r}var d=n(o,[["render",u]]);export{d as default};
