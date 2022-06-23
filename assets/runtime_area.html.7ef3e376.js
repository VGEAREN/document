import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as n,c as i,b as e,d as s,a as d,e as a}from"./app.1ed3ff77.js";var c="/document/assets/runtime_data_area.60d1369e.svg";const h={},l=d('<h1 id="\u8FD0\u884C\u65F6\u6570\u636E\u533A" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u65F6\u6570\u636E\u533A" aria-hidden="true">#</a> \u8FD0\u884C\u65F6\u6570\u636E\u533A</h1><p>\u8FD0\u884C\u65F6\u6570\u636E\u533A\u7528\u4E8E\u4FDD\u5B58 JVM \u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u6570\u636E\uFF0C\u7ED3\u6784\u5982\u56FE\u6240\u793A\uFF1A</p><p><img src="'+c+'" alt=""></p><h2 id="heap" tabindex="-1"><a class="header-anchor" href="#heap" aria-hidden="true">#</a> Heap</h2><p>Java \u5806\u662F\u53EF\u4F9B\u5404\u7EBF\u7A0B\u5171\u4EAB\u7684\u8FD0\u884C\u65F6\u5185\u5B58\u533A\u57DF\uFF0C\u662F Java \u865A\u62DF\u673A\u6240\u7BA1\u7406\u7684\u5185\u5B58\u533A\u57DF\u4E2D\u6700\u5927\u7684\u4E00\u5757\u3002\u6B64\u533A\u57DF\u975E\u5E38\u91CD\u8981\uFF0C\u51E0\u4E4E\u6240\u6709\u7684\u5BF9\u8C61\u5B9E\u4F8B\u548C\u6570\u7EC4\u5B9E\u4F8B\u90FD\u8981\u5728 Java \u5806\u4E0A\u5206\u914D\uFF0C\u4F46\u968F\u7740 JIT \u7F16\u8BD1\u5668\u53CA\u9003\u9038\u5206\u6790\u6280\u672F\u7684\u53D1\u5C55\uFF0C<strong>\u4E5F\u53EF\u80FD\u4F1A\u88AB\u4F18\u5316\u4E3A\u6808\u4E0A\u5206\u914D</strong>\u3002</p><p>Heap \u4E2D\u9664\u4E86\u4F5C\u4E3A\u5BF9\u8C61\u5206\u914D\u4F7F\u7528\uFF0C\u8FD8\u5305\u542B\u5B57\u7B26\u4E32\u5B57\u9762\u91CF <strong>\u5E38\u91CF\u6C60\uFF08Internd Strings\uFF09</strong> \u3002 \u9664\u6B64\u4E4B\u5916 Heap \u4E2D\u8FD8\u5305\u542B\u4E00\u4E2A <strong>\u65B0\u751F\u4EE3\uFF08Yong Generation\uFF09</strong>\u3001\u4E00\u4E2A <strong>\u8001\u5E74\u4EE3\uFF08Old Generation\uFF09</strong>\u3002</p><p>\u65B0\u751F\u4EE3\u5206\u4E09\u4E2A\u533A\uFF0C\u4E00\u4E2AEden\u533A\uFF0C\u4E24\u4E2ASurvivor\u533A\uFF0C<strong>\u5927\u90E8\u5206\u5BF9\u8C61\u5728Eden\u533A\u4E2D\u751F\u6210</strong>\u3002Survivor \u533A\u603B\u6709\u4E00\u4E2A\u662F\u7A7A\u7684\u3002</p><p>\u8001\u5E74\u4EE3\u4E2D\u4FDD\u5B58\u4E00\u4E9B\u751F\u547D\u5468\u671F\u8F83\u957F\u7684\u5BF9\u8C61\uFF0C\u5F53\u4E00\u4E2A\u5BF9\u8C61\u7ECF\u8FC7\u591A\u6B21\u7684 GC \u540E\u8FD8\u6CA1\u6709\u88AB\u56DE\u6536\uFF0C\u90A3\u4E48\u5B83\u5C06\u88AB\u79FB\u52A8\u5230\u8001\u5E74\u4EE3\u3002</p><h2 id="methoad-area" tabindex="-1"><a class="header-anchor" href="#methoad-area" aria-hidden="true">#</a> Methoad Area</h2><p>\u65B9\u6CD5\u533A\u7684\u6570\u636E\u7531\u6240\u6709\u7EBF\u7A0B\u5171\u4EAB\uFF0C\u56E0\u6B64\u4E3A\u5B89\u5168\u7684\u4F7F\u7528\u65B9\u6CD5\u533A\u7684\u6570\u636E\uFF0C\u9700\u8981\u6CE8\u610F\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\u3002</p><p>\u65B9\u6CD5\u533A\u4E3B\u8981\u4FDD\u5B58\u7C7B\u7EA7\u522B\u7684\u6570\u636E\uFF0C\u5305\u62EC\uFF1A</p><ul><li>ClassLoader Reference</li><li>Runtime Constant Pool <ul><li>\u6570\u5B57\u5E38\u91CF</li><li>\u7C7B\u5C5E\u6027\u5F15\u7528</li><li>\u65B9\u6CD5\u5F15\u7528</li></ul></li><li>Field Data\uFF1A\u6BCF\u4E2A\u7C7B\u5C5E\u6027\u7684\u540D\u79F0\u3001\u7C7B\u578B\u7B49</li><li>Methoad Data\uFF1A\u6BCF\u4E2A\u65B9\u6CD5\u7684\u540D\u79F0\u3001\u8FD4\u56DE\u503C\u7C7B\u578B\u3001\u53C2\u6570\u5217\u8868\u7B49</li><li>Methoad Code\uFF1A\u6BCF\u4E2A\u65B9\u6CD5\u7684\u5B57\u8282\u7801\u3001\u672C\u5730\u53D8\u91CF\u8868\u7B49</li></ul><p>\u65B9\u6CD5\u533A\u7684\u5B9E\u73B0\u5728\u4E0D\u540C\u7684 JVM \u7248\u672C\u6709\u4E0D\u540C\uFF0C\u5728 JVM 1.8 \u4E4B\u524D\uFF0C\u65B9\u6CD5\u533A\u7684\u5B9E\u73B0\u4E3A <strong>\u6C38\u4E45\u4EE3\uFF08PermGen\uFF09</strong>\uFF0C\u4F46\u662F\u7531\u4E8E\u6C38\u4E45\u4EE3\u7684\u5927\u5C0F\u9650\u5236\uFF0C \u7ECF\u5E38\u4F1A\u51FA\u73B0\u5185\u5B58\u6EA2\u51FA\u3002\u4E8E\u662F\u5728 JVM 1.8 \u65B9\u6CD5\u533A\u7684\u5B9E\u73B0\u6539\u4E3A <strong>\u5143\u7A7A\u95F4\uFF08Metaspace\uFF09</strong>\uFF0C\u5143\u7A7A\u95F4\u662F\u5728 Native \u7684\u4E00\u5757\u5185\u5B58\u7A7A\u95F4\u3002</p><h2 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> Stack</h2><p>\u5BF9\u4E8E\u6BCF\u4E2A JVM \u7EBF\u7A0B\uFF0C\u5F53\u7EBF\u7A0B\u542F\u52A8\u65F6\uFF0C\u90FD\u4F1A\u5206\u914D\u4E00\u4E2A\u72EC\u7ACB\u7684\u8FD0\u884C\u65F6\u6808\uFF0C\u7528\u4EE5\u4FDD\u5B58\u65B9\u6CD5\u8C03\u7528\u3002\u6BCF\u4E2A\u65B9\u6CD5\u8C03\u7528\uFF0C\u90FD\u4F1A\u5728\u6808\u9876\u589E\u52A0\u4E00\u4E2A\u6808\u5E27\uFF08Stack Frame\uFF09\u3002</p><p>\u6BCF\u4E2A\u6808\u5E27\u90FD\u4FDD\u5B58\u4E09\u4E2A\u5F15\u7528\uFF1A<strong>\u672C\u5730\u53D8\u91CF\u8868\uFF08Local Variable Array\uFF09</strong>\u3001 <strong>\u64CD\u4F5C\u6570\u6808\uFF08Operand Stack\uFF09</strong> \u548C <strong>\u5F53\u524D\u65B9\u6CD5\u6240\u5C5E\u7C7B\u7684\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60\uFF08Runtime Constant Pool\uFF09</strong>\u3002\u7531\u4E8E\u672C\u5730\u53D8\u91CF\u8868\u548C\u64CD\u4F5C\u6570\u6808\u7684\u5927\u5C0F\u90FD\u5728\u7F16\u8BD1\u65F6\u786E\u5B9A\uFF0C\u6240\u4EE5\u6808\u5E27\u7684\u5927\u5C0F\u662F\u56FA\u5B9A\u7684\u3002</p><p>\u5F53\u88AB\u8C03\u7528\u7684\u65B9\u6CD5\u8FD4\u56DE\u6216\u629B\u51FA\u5F02\u5E38\uFF0C\u6808\u5E27\u4F1A\u88AB\u5F39\u51FA\u3002\u5728\u629B\u51FA\u5F02\u5E38\u65F6 <code>printStackTrace()</code> \u6253\u5370\u7684\u6BCF\u4E00\u884C\u5C31\u662F\u4E00\u4E2A\u6808\u5E27\u3002\u540C\u65F6\u5F97\u76CA\u4E8E\u6808\u5E27\u7684\u7279\u70B9\uFF0C\u6808\u5E27\u5185\u7684\u6570\u636E\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\u3002</p><p>\u6808\u7684\u5927\u5C0F\u53EF\u4EE5\u52A8\u6001\u6269\u5C55\uFF0C\u4F46\u662F\u5982\u679C\u4E00\u4E2A\u7EBF\u7A0B\u9700\u8981\u7684\u6808\u5927\u5C0F\u8D85\u8FC7\u4E86\u5141\u8BB8\u7684\u5927\u5C0F\uFF0C\u5C31\u4F1A\u629B\u51FA <code>StackOverflowError</code>\u3002</p><h2 id="pc-register" tabindex="-1"><a class="header-anchor" href="#pc-register" aria-hidden="true">#</a> PC Register</h2><p>\u5BF9\u4E8E\u6BCF\u4E2A JVM \u7EBF\u7A0B\uFF0C\u5F53\u7EBF\u7A0B\u542F\u52A8\u65F6\uFF0C\u90FD\u4F1A\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684 <strong>PC\uFF08Program Counter\uFF09 \u8BA1\u6570\u5668</strong>\uFF0C\u7528\u6765\u4FDD\u5B58\u5F53\u524D\u6267\u884C\u7684\u4EE3\u7801\u5730\u5740\uFF08\u65B9\u6CD5\u533A\u4E2D\u7684\u5185\u5B58\u5730\u5740\uFF09\u3002\u5982\u679C\u5F53\u524D\u65B9\u6CD5\u662F Native \u65B9\u6CD5\uFF0CPC \u7684\u503C\u4E3A NULL\u3002\u4E00\u65E6\u6267\u884C\u5B8C\u6210\uFF0CPC \u8BA1\u6570\u5668\u4F1A\u88AB\u66F4\u65B0\u4E3A\u4E0B\u4E00\u4E2A\u9700\u8981\u6267\u884C\u4EE3\u7801\u7684\u5730\u5740\u3002</p><h2 id="native-method-stack" tabindex="-1"><a class="header-anchor" href="#native-method-stack" aria-hidden="true">#</a> Native Method Stack</h2><p>\u672C\u5730\u65B9\u6CD5\u6808\u548C Java \u865A\u62DF\u673A\u6808\u7684\u4F5C\u7528\u76F8\u4F3C\uFF0CJava \u865A\u62DF\u673A\u6808\u6267\u884C\u7684\u662F\u5B57\u8282\u7801\uFF0C\u800C\u672C\u5730\u65B9\u6CD5\u6808\u6267\u884C\u7684\u662F <code>native</code> \u65B9\u6CD5\u3002\u672C\u5730\u65B9\u6CD5\u6808\u4F7F\u7528\u4F20\u7EDF\u7684\u6808\uFF08C Stack\uFF09\u6765\u652F\u6301 <code>native</code> \u65B9\u6CD5\u3002</p><h2 id="direct-memory" tabindex="-1"><a class="header-anchor" href="#direct-memory" aria-hidden="true">#</a> Direct Memory</h2>',23),p={href:"https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/tooldescr007.html",target:"_blank",rel:"noopener noreferrer"},g=a("Native Memory Tracking"),m=e("p",null,[a("\u5728 JDK 1.4 \u4E2D\u65B0\u52A0\u5165\u4E86 NIO \u7C7B\uFF0C\u5B83\u53EF\u4EE5\u4F7F\u7528 Native \u51FD\u6570\u5E93\u76F4\u63A5\u5206\u914D\u5806\u5916\u5185\u5B58\uFF0C\u7136\u540E\u901A\u8FC7\u4E00\u4E2A\u5B58\u50A8\u5728 Java \u5806\u91CC\u7684 "),e("code",null,"DirectByteBuffer"),a(" \u5BF9\u8C61\u4F5C\u4E3A\u8FD9\u5757\u5185\u5B58\u7684\u5F15\u7528\u8FDB\u884C\u64CD\u4F5C\u3002\u8FD9\u6837\u80FD\u5728\u4E00\u4E9B\u573A\u666F\u4E2D\u663E\u8457\u63D0\u9AD8\u6027\u80FD\uFF0C\u56E0\u4E3A "),e("strong",null,"\u907F\u514D\u4E86\u5728 Java \u5806\u548C Native \u5806\u4E2D\u6765\u56DE\u590D\u5236\u6570\u636E"),a("\u3002")],-1);function u(v,_){const r=o("ExternalLinkIcon");return n(),i("div",null,[l,e("p",null,[e("a",p,[g,s(r)])]),m])}var J=t(h,[["render",u],["__file","runtime_area.html.vue"]]);export{J as default};
