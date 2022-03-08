import{_ as e,a}from"./app.f59e1607.js";var o="/document/assets/dispatcher.cfffb8aa.jpg";const c={},i=a('<h1 id="java\u5206\u6D3E\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#java\u5206\u6D3E\u673A\u5236" aria-hidden="true">#</a> Java\u5206\u6D3E\u673A\u5236</h1><p>\u5728Java\u4E2D\uFF0C\u7B26\u5408\u201C\u7F16\u8BD1\u65F6\u53EF\u77E5\uFF0C\u8FD0\u884C\u65F6\u4E0D\u53EF\u53D8\u201D\u8FD9\u4E2A\u8981\u6C42\u7684\u65B9\u6CD5\u4E3B\u8981\u662F\u9759\u6001\u65B9\u6CD5\u548C\u79C1\u6709\u65B9\u6CD5\u3002\u8FD9\u4E24\u79CD\u65B9\u6CD5\u90FD\u4E0D\u80FD\u901A\u8FC7\u7EE7\u627F\u6216\u522B\u7684\u65B9\u6CD5\u91CD\u5199\uFF0C\u56E0\u6B64\u5B83\u4EEC\u9002\u5408\u5728\u7C7B\u52A0\u8F7D\u65F6\u8FDB\u884C\u89E3\u6790\u3002</p><p>Java\u865A\u62DF\u673A\u4E2D\u6709\u56DB\u79CD\u65B9\u6CD5\u8C03\u7528\u6307\u4EE4\uFF1A</p><ul><li><code>invokestatic</code>\uFF1A\u8C03\u7528\u9759\u6001\u65B9\u6CD5\u3002</li><li><code>invokespecial</code>\uFF1A\u8C03\u7528\u5B9E\u4F8B\u6784\u9020\u5668<code>&lt;init&gt;</code>\u65B9\u6CD5\uFF0C\u79C1\u6709\u65B9\u6CD5\u548Csuper\u3002</li><li><code>invokeinterface</code>\uFF1A\u8C03\u7528\u63A5\u53E3\u65B9\u6CD5\u3002</li><li><code>invokevirtual</code>\uFF1A\u8C03\u7528\u4EE5\u4E0A\u6307\u4EE4\u4E0D\u80FD\u8C03\u7528\u7684\u65B9\u6CD5\uFF08\u865A\u65B9\u6CD5\uFF09\u3002</li></ul><p>\u53EA\u8981\u80FD\u88AB<code>invokestatic</code>\u548C<code>invokespecial</code>\u6307\u4EE4\u8C03\u7528\u7684\u65B9\u6CD5\uFF0C\u90FD\u53EF\u4EE5\u5728\u89E3\u6790\u9636\u6BB5\u786E\u5B9A\u552F\u4E00\u7684\u8C03\u7528\u7248\u672C\uFF0C\u7B26\u5408\u8FD9\u4E2A\u6761\u4EF6\u7684\u6709\uFF1A\u9759\u6001\u65B9\u6CD5\u3001\u79C1\u6709\u65B9\u6CD5\u3001\u5B9E\u4F8B\u6784\u9020\u5668\u3001\u7236\u7C7B\u65B9\u6CD5\uFF0C\u4ED6\u4EEC\u5728\u7C7B\u52A0\u8F7D\u7684\u65F6\u5019\u5C31\u4F1A\u628A\u7B26\u53F7\u5F15\u7528\u89E3\u6790\u4E3A\u6539\u65B9\u6CD5\u7684\u76F4\u63A5\u5F15\u7528\u3002\u8FD9\u4E9B\u65B9\u6CD5\u88AB\u79F0\u4E3A\u975E\u865A\u65B9\u6CD5\uFF0C\u53CD\u4E4B\u5176\u4ED6\u65B9\u6CD5\u79F0\u4E3A\u865A\u65B9\u6CD5\uFF08final\u65B9\u6CD5\u9664\u5916\uFF09\u3002</p><blockquote><p>\u867D\u7136final\u65B9\u6CD5\u662F\u4F7F\u7528<code>invokevirtual </code>\u6307\u4EE4\u6765\u8C03\u7528\u7684\uFF0C\u4F46\u662F\u7531\u4E8E\u5B83\u65E0\u6CD5\u88AB\u8986\u76D6\uFF0C\u591A\u6001\u7684\u9009\u62E9\u662F\u552F\u4E00\u7684\uFF0C\u6240\u4EE5\u662F\u4E00\u79CD\u975E\u865A\u65B9\u6CD5\u3002</p></blockquote><h2 id="\u9759\u6001\u5206\u6D3E" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5206\u6D3E" aria-hidden="true">#</a> \u9759\u6001\u5206\u6D3E</h2><blockquote><p>\u5BF9\u4E8E\u7C7B\u5B57\u6BB5\u7684\u8BBF\u95EE\u4E5F\u662F\u91C7\u7528\u9759\u6001\u5206\u6D3E</p></blockquote><p><code>People man = new Man()</code></p><p><strong>\u9759\u6001\u5206\u6D3E\u4E3B\u8981\u9488\u5BF9\u91CD\u8F7D</strong>\uFF0C\u65B9\u6CD5\u8C03\u7528\u65F6\u5982\u4F55\u9009\u62E9\u3002\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C<code>People</code>\u88AB\u79F0\u4E3A\u53D8\u91CF\u7684\u5F15\u7528\u7C7B\u578B\uFF0C<code>Man</code>\u88AB\u79F0\u4E3A\u53D8\u91CF\u7684\u5B9E\u9645\u7C7B\u578B\u3002<strong>\u9759\u6001\u7C7B\u578B\u662F\u5728\u7F16\u8BD1\u65F6\u53EF\u77E5\u7684\uFF0C\u800C\u52A8\u6001\u7C7B\u578B\u662F\u5728\u8FD0\u884C\u65F6\u53EF\u77E5\u7684</strong>\uFF0C\u7F16\u8BD1\u5668\u4E0D\u80FD\u77E5\u9053\u4E00\u4E2A\u53D8\u91CF\u7684\u5B9E\u9645\u7C7B\u578B\u662F\u4EC0\u4E48\u3002</p><p><strong>\u7F16\u8BD1\u5668\u5728\u91CD\u8F7D\u65F6\u5019\u901A\u8FC7\u53C2\u6570\u7684\u9759\u6001\u7C7B\u578B\u800C\u4E0D\u662F\u5B9E\u9645\u7C7B\u578B\u4F5C\u4E3A\u5224\u65AD\u4F9D\u636E</strong>\u3002\u5E76\u4E14\u9759\u6001\u7C7B\u578B\u5728\u7F16\u8BD1\u65F6\u662F\u53EF\u77E5\u7684\uFF0C\u6240\u4EE5\u7F16\u8BD1\u5668\u6839\u636E\u91CD\u8F7D\u7684\u53C2\u6570\u7684\u9759\u6001\u7C7B\u578B\u8FDB\u884C\u65B9\u6CD5\u9009\u62E9\u3002</p><blockquote><p>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u6709\u591A\u4E2A\u91CD\u8F7D\uFF0C\u90A3\u7F16\u8BD1\u5668\u5982\u4F55\u9009\u62E9\u5462\uFF1F \u7F16\u8BD1\u5668\u4F1A\u9009\u62E9&quot;\u6700\u5408\u9002&quot;\u7684\u51FD\u6570\u7248\u672C\uFF0C\u90A3\u4E48\u600E\u4E48\u5224\u65AD&quot;\u6700\u5408\u9002\u201C\u5462\uFF1F\u8D8A\u63A5\u8FD1\u4F20\u5165\u53C2\u6570\u7684\u7C7B\u578B\uFF0C\u8D8A\u5BB9\u6613\u88AB\u8C03\u7528\u3002</p></blockquote><h2 id="\u52A8\u6001\u5206\u6D3E" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u5206\u6D3E" aria-hidden="true">#</a> \u52A8\u6001\u5206\u6D3E</h2><p>\u52A8\u6001\u5206\u6D3E\u4E3B\u8981\u9488\u5BF9\u91CD\u5199\uFF0C\u4F7F\u7528<code>invokevirtual</code>\u6307\u4EE4\u8C03\u7528\u3002<code>invokevirtual</code>\u6307\u4EE4\u591A\u6001\u67E5\u627E\u8FC7\u7A0B\uFF1A</p><ul><li>\u627E\u5230\u64CD\u4F5C\u6570\u6808\u9876\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u6240\u6307\u5411\u7684\u5BF9\u8C61\u7684\u5B9E\u9645\u7C7B\u578B\uFF0C\u8BB0\u4E3AC\u3002</li><li>\u5982\u679C\u5728\u7C7B\u578BC\u4E2D\u627E\u5230\u4E0E\u5E38\u91CF\u4E2D\u7684\u63CF\u8FF0\u7B26\u5408\u7B80\u5355\u540D\u79F0\u90FD\u76F8\u7B26\u7684\u65B9\u6CD5\uFF0C\u5219\u8FDB\u884C\u8BBF\u95EE\u6743\u9650\u6821\u9A8C\uFF0C\u5982\u679C\u901A\u8FC7\u5219\u8FD4\u56DE\u8FD9\u4E2A\u65B9\u6CD5\u7684\u76F4\u63A5\u5F15\u7528\uFF0C\u67E5\u627E\u8FC7\u7A0B\u7ED3\u675F\uFF1B\u5982\u679C\u6743\u9650\u6821\u9A8C\u4E0D\u901A\u8FC7\uFF0C\u8FD4\u56DEjava.lang.IllegalAccessError\u5F02\u5E38\u3002</li><li>\u5426\u5219\uFF0C\u6309\u7167\u7EE7\u627F\u5173\u7CFB\u4ECE\u4E0B\u5F80\u4E0A\u4E00\u6B21\u5BF9C\u7684\u5404\u4E2A\u7236\u7C7B\u8FDB\u884C\u7B2C2\u6B65\u7684\u641C\u7D22\u548C\u9A8C\u8BC1\u8FC7\u7A0B\u3002</li><li>\u5982\u679C\u59CB\u7EC8\u6CA1\u6709\u627E\u5230\u5408\u9002\u7684\u65B9\u6CD5\uFF0C\u5219\u629B\u51FA java.lang.AbstractMethodError\u5F02\u5E38\u3002</li></ul><h2 id="\u865A\u62DF\u673A\u52A8\u6001\u5206\u6D3E\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u673A\u52A8\u6001\u5206\u6D3E\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u865A\u62DF\u673A\u52A8\u6001\u5206\u6D3E\u7684\u5B9E\u73B0</h2><p>\u7531\u4E8E\u52A8\u6001\u5206\u6D3E\u662F\u975E\u5E38\u7E41\u7410\u7684\u52A8\u4F5C\uFF0C\u800C\u4E14\u52A8\u6001\u5206\u6D3E\u7684\u65B9\u6CD5\u7248\u672C\u9009\u62E9\u9700\u8981\u8003\u8651\u8FD0\u884C\u65F6\u5728\u7C7B\u7684\u65B9\u6CD5\u5143\u6570\u636E\u4E2D\u641C\u7D22\u5408\u9002\u7684\u76EE\u6807\u65B9\u6CD5\uFF0C<strong>\u56E0\u6B64\u5728\u865A\u62DF\u673A\u7684\u5B9E\u73B0\u4E2D\u57FA\u4E8E\u6027\u80FD\u7684\u8003\u8651\uFF0C\u5728\u65B9\u6CD5\u533A\u4E2D\u5EFA\u7ACB\u4E00\u4E2A\u865A\u65B9\u6CD5\u8868</strong>\uFF08<code>invokeinterface </code>\u6709\u63A5\u53E3\u65B9\u6CD5\u8868\uFF09\uFF0C\u6765\u63D0\u9AD8\u6027\u80FD\u3002</p><p><img src="'+o+'" alt=""></p><p>\u865A\u65B9\u6CD5\u8868\u4E2D\u5B58\u653E\u5404\u4E2A\u65B9\u6CD5\u7684\u5B9E\u9645\u5165\u53E3\u5730\u5740\u3002\u5982\u679C\u67D0\u4E2A\u65B9\u6CD5\u5728\u5B50\u7C7B\u6CA1\u6709\u91CD\u5199\uFF0C\u90A3\u4E48\u5B50\u7C7B\u7684\u865A\u65B9\u6CD5\u8868\u91CC\u7684\u5165\u53E3\u548C\u7236\u7C7B\u5165\u53E3\u4E00\u81F4\uFF0C\u5982\u679C\u5B50\u7C7B\u91CD\u5199\u4E86\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u90A3\u4E48\u5B50\u7C7B\u65B9\u6CD5\u8868\u4E2D\u7684\u5730\u5740\u4F1A\u88AB\u66FF\u6362\u4E3A\u5B50\u7C7B\u5B9E\u73B0\u7248\u672C\u7684\u5165\u53E3\u5730\u5740\u3002</p>',19);function t(r,d){return i}var l=e(c,[["render",t]]);export{l as default};
