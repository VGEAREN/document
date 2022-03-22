import{_ as n,a as s}from"./app.1ee13aa5.js";const a={},p=s(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u5982\u4F55\u628AGithub\u4ED3\u5E93\u4E2D\u7684Maven\u9879\u76EE\u901A\u8FC7Github Action\u8FDB\u884C\u81EA\u52A8\u5316\u6784\u5EFA\u540E\u751F\u6210Jar\u5305\uFF0C\u63A5\u7740\u62F7\u8D1D\u5230\u670D\u52A1\u5668\u8FDB\u884C\u90E8\u7F72\u3002</p><h2 id="\u670D\u52A1\u5668\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u811A\u672C" aria-hidden="true">#</a> \u670D\u52A1\u5668\u811A\u672C</h2><ul><li><p>\u811A\u672C<code>application.sh</code>\u7528\u4E8E\u542F\u505C\u5E94\u7528:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># application jar&#39;s name</span>
<span class="token assign-left variable">appDir</span><span class="token operator">=~</span>/java_deploy
<span class="token assign-left variable">application</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> $appDir -type f -name <span class="token string">&quot;*.jar&quot;</span><span class="token variable">)</span></span> 

<span class="token comment">## determine existence of processus of application</span>
<span class="token function-name function">isExist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">## check pid</span>
    <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> $<span class="token punctuation">{</span>application<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">grep</span> -v <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
    <span class="token comment">## if pid not exist return 0 else 1</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable">\${pid}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">return</span> <span class="token number">0</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">return</span> <span class="token number">1</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token assign-left variable">log</span><span class="token operator">=</span><span class="token variable">$appDir</span>/application.log

<span class="token comment">## start application in background and generate appDir/application.log</span>
<span class="token keyword">function</span> <span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">## deermine existence of processus</span>
    isExist
    <span class="token comment">## if not running</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Your <span class="token variable">\${application}</span> is not running&quot;</span>
        <span class="token function">nohup</span> java -jar <span class="token variable">$application</span> --spring.profiles.active<span class="token operator">=</span>test <span class="token operator">&gt;</span> <span class="token variable">$log</span> <span class="token operator">&amp;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${application}</span> startup success&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${application}</span> is running, pid=<span class="token variable">\${pid}</span> &quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">## stop the processus application</span>
<span class="token keyword">function</span> <span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    isExist
    <span class="token comment">## if not exist - ok</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${application}</span> is not running&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${application}</span> is running, pid=<span class="token variable">\${pid}</span>, prepare kill it &quot;</span>
        <span class="token comment"># if exist - kill the processus</span>
        <span class="token function">kill</span> -9 <span class="token variable">\${pid}</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${application}</span> has been successfully killed&quot;</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">## check status</span>
<span class="token keyword">function</span> <span class="token function-name function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token assign-left variable">appPid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef <span class="token operator">|</span><span class="token function">grep</span> java<span class="token operator">|</span><span class="token function">grep</span> $application <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token variable">$appPid</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;Not running &quot;</span> 
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;Running [<span class="token variable">$appPid</span>] &quot;</span> 
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token comment">## restart</span>
<span class="token keyword">function</span> <span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    stop
    start
<span class="token punctuation">}</span>

<span class="token comment">## arg</span>
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    <span class="token string">&quot;start&quot;</span><span class="token punctuation">)</span>
        start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;stop&quot;</span><span class="token punctuation">)</span>
        stop
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;restart&quot;</span><span class="token punctuation">)</span>
        restart
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">&quot;status&quot;</span><span class="token punctuation">)</span>
        status
        <span class="token punctuation">;</span><span class="token punctuation">;</span>	
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;please enter the correct commands: &quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;such as : sh application.sh [ start | stop | restart |status ]&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div></li></ul><h2 id="\u914D\u7F6E\u4ED3\u5E93setting-secrets" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4ED3\u5E93setting-secrets" aria-hidden="true">#</a> \u914D\u7F6E\u4ED3\u5E93Setting --&gt; Secrets</h2><table><thead><tr><th style="text-align:left;">Key</th><th style="text-align:left;">Value</th></tr></thead><tbody><tr><td style="text-align:left;">HOST</td><td style="text-align:left;">\u4F60\u7684\u670D\u52A1\u5668\u5730\u5740</td></tr><tr><td style="text-align:left;">USERNAME</td><td style="text-align:left;">SSH\u8FDE\u63A5\u7528\u6237\u540D</td></tr><tr><td style="text-align:left;">PASSWORD</td><td style="text-align:left;">SSH\u8FDE\u63A5\u5BC6\u7801</td></tr><tr><td style="text-align:left;">PORT</td><td style="text-align:left;">SSH\u7AEF\u53E3</td></tr></tbody></table><h2 id="github-action" tabindex="-1"><a class="header-anchor" href="#github-action" aria-hidden="true">#</a> Github Action</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Java CI with Maven &amp; Deploy

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup java
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>java@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">java-version</span><span class="token punctuation">:</span> <span class="token string">&#39;8&#39;</span>
          <span class="token key atrule">distribution</span><span class="token punctuation">:</span> <span class="token string">&#39;adopt&#39;</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build with Maven
        <span class="token key atrule">run</span><span class="token punctuation">:</span> mvn clean package <span class="token punctuation">-</span>Dmaven.test.skip=true
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Server
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> appleboy/scp<span class="token punctuation">-</span>action@master
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">host</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.HOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PORT <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">source</span><span class="token punctuation">:</span> <span class="token string">&quot;your project path/*.jar&quot;</span>
          <span class="token key atrule">target</span><span class="token punctuation">:</span> <span class="token string">&quot;target path&quot;</span>
          <span class="token key atrule">strip_components</span><span class="token punctuation">:</span> <span class="token number">2</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run SSH Command
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> appleboy/ssh<span class="token punctuation">-</span>action@master
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
            <span class="token key atrule">host</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.HOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PORT <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token string">&quot;your path/application.sh restart&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,8);function t(e,l){return p}var o=n(a,[["render",t]]);export{o as default};
