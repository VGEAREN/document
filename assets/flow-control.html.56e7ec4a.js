import{_ as e,a as d}from"./app.f59e1607.js";var c="/document/assets/cee6a24bae2f1146d8f905a9ede12c23.6c1865e8.png",o="/document/assets/cc2bf6c40bcccedb3e6bb2471ef36e53.ea471b24.png";const a={},r=d('<h1 id="\u9AD8\u5E76\u53D1\u4E0B\u7684\u6D41\u91CF\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u5E76\u53D1\u4E0B\u7684\u6D41\u91CF\u63A7\u5236" aria-hidden="true">#</a> \u9AD8\u5E76\u53D1\u4E0B\u7684\u6D41\u91CF\u63A7\u5236</h1><p>\u8FD9\u4E2A\u65F6\u5019\u5982\u679C\u4E0D\u505A\u4EFB\u4F55\u4FDD\u62A4\u63AA\u65BD\uFF0C\u670D\u52A1\u5668\u5C31\u4F1A\u627F\u53D7\u5F88\u5927\u7684\u5904\u7406\u538B\u529B\uFF0C\u8BF7\u6C42\u91CF\u5F88\u9AD8\uFF0C\u670D\u52A1\u5668\u8D1F\u8F7D\u4E5F\u5F88\u9AD8\uFF0C\u5E76\u4E14\u5F53\u8BF7\u6C42\u8D85\u8FC7\u670D\u52A1\u5668\u627F\u8F7D\u6781\u9650\u7684\u65F6\u5019\uFF0C\u7CFB\u7EDF\u5C31\u4F1A\u5D29\u6E83\uFF0C\u5BFC\u81F4\u6240\u6709\u4EBA\u90FD\u4E0D\u80FD\u8BBF\u95EE\u3002</p><p>\u4E3A\u4E86\u5E94\u7528\u670D\u52A1\u7684\u9AD8\u53EF\u7528\uFF0C\u4E00\u4E2A\u5E38\u7528\u7684\u529E\u6CD5\u662F\u5BF9\u5927\u6D41\u91CF\u7684\u8BF7\u6C42\uFF08\u79D2\u6740/\u62A2\u8D2D\uFF09\u8FDB\u884C\u9650\u6D41\uFF0C\u62E6\u622A\u6389\u5927\u90E8\u5206\u8BF7\u6C42\uFF0C\u53EA\u5141\u8BB8\u4E00\u90E8\u5206\u8BF7\u6C42\u771F\u6B63\u8FDB\u5165\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u9632\u6B62\u5927\u91CF\u8BF7\u6C42\u9020\u6210\u7CFB\u7EDF\u538B\u529B\u8FC7\u5927\u5BFC\u81F4\u7684\u7CFB\u7EDF\u5D29\u6E83\uFF0C\u4ECE\u800C\u4FDD\u62A4\u670D\u52A1\u6B63\u5E38\u53EF\u7528\u3002</p><p><code>\u4EE4\u724C\u6876(Token Bucket)</code>\u3001<code>\u6F0F\u6876(leaky bucket)</code>\u548C <code>\u8BA1\u6570\u5668</code> \u7B97\u6CD5\u662F\u6700\u5E38\u7528\u7684\u4E09\u79CD\u9650\u6D41\u7684\u7B97\u6CD5\u3002</p><h2 id="\u9650\u6D41\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9650\u6D41\u7B97\u6CD5" aria-hidden="true">#</a> \u9650\u6D41\u7B97\u6CD5</h2><h3 id="\u8BA1\u6570\u5668" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u6570\u5668" aria-hidden="true">#</a> \u8BA1\u6570\u5668</h3><p>\u8BA1\u6570\u5668\u9650\u6D41\u7B97\u6CD5\u4E5F\u662F\u6BD4\u8F83\u5E38\u7528\u7684\uFF0C\u4E3B\u8981\u7528\u6765\u9650\u5236\u603B\u5E76\u53D1\u6570\u3002\u6BD4\u5982\u9650\u6D41 <code>qps</code> \u4E3A <code>100</code> \uFF0C\u7B97\u6CD5\u7684\u5B9E\u73B0\u601D\u8DEF\u5C31\u662F\u4ECE\u7B2C\u4E00\u4E2A\u8BF7\u6C42\u8FDB\u6765\u5F00\u59CB\u8BA1\u65F6\uFF0C\u5728\u63A5\u4E0B\u53BB\u7684 <code>1s</code> \u5185\uFF0C\u6BCF\u6765\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5C31\u628A\u8BA1\u6570\u52A0 <code>1</code> \uFF0C\u5982\u679C\u7D2F\u52A0\u7684\u6570\u5B57\u8FBE\u5230\u4E86 <code>100</code> \uFF0C\u90A3\u4E48\u540E\u7EED\u7684\u8BF7\u6C42\u5C31\u4F1A\u88AB\u5168\u90E8\u62D2\u7EDD\u3002\u7B49\u5230 <code>1s</code> \u7ED3\u675F\u540E\uFF0C\u628A\u8BA1\u6570\u6062\u590D\u6210 <code>0</code> \uFF0C\u91CD\u65B0\u5F00\u59CB\u8BA1\u6570\u3002</p><p>\u8FD9\u79CD\u5B9E\u73B0\u65B9\u5F0F\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF1A\u5982\u679C\u6211\u5728\u5355\u4F4D\u65F6\u95F4 <code>1s</code> \u5185\u7684\u524D <code>10ms</code> \uFF0C\u5DF2\u7ECF\u901A\u8FC7\u4E86 <code>100</code> \u4E2A\u8BF7\u6C42\uFF0C\u90A3\u540E\u9762\u7684 <code>990ms</code> \uFF0C\u53EA\u80FD\u773C\u5DF4\u5DF4\u7684\u628A\u8BF7\u6C42\u62D2\u7EDD\uFF0C\u8FD9\u79CD\u73B0\u8C61\u79F0\u4E3A <strong>\u7A81\u523A\u73B0\u8C61</strong>\u3002</p><h3 id="\u6F0F\u6876" tabindex="-1"><a class="header-anchor" href="#\u6F0F\u6876" aria-hidden="true">#</a> \u6F0F\u6876</h3><p>\u4E3A\u4E86\u6D88\u9664 <strong>\u7A81\u523A\u73B0\u8C61</strong>\uFF0C\u53EF\u4EE5\u91C7\u7528\u6F0F\u6876\u7B97\u6CD5\u5B9E\u73B0\u9650\u6D41\uFF0C\u6F0F\u6876\u7B97\u6CD5\u8FD9\u4E2A\u540D\u5B57\u5C31\u5F88\u5F62\u8C61\uFF0C\u7B97\u6CD5\u5185\u90E8\u6709\u4E00\u4E2A\u5BB9\u5668\uFF0C\u7C7B\u4F3C\u751F\u6D3B\u7528\u5230\u7684\u6F0F\u6597\uFF0C\u5F53\u8BF7\u6C42\u8FDB\u6765\u65F6\uFF0C\u76F8\u5F53\u4E8E\u6C34\u5012\u5165\u6F0F\u6597\uFF0C\u7136\u540E\u4ECE\u4E0B\u7AEF\u5C0F\u53E3\u6162\u6162\u5300\u901F\u7684\u6D41\u51FA\u3002\u4E0D\u7BA1\u4E0A\u9762\u6D41\u91CF\u591A\u5927\uFF0C\u4E0B\u9762\u6D41\u51FA\u7684\u901F\u5EA6\u59CB\u7EC8\u4FDD\u6301\u4E0D\u53D8\u3002</p><p>\u4E0D\u7BA1\u670D\u52A1\u8C03\u7528\u65B9\u591A\u4E48\u4E0D\u7A33\u5B9A\uFF0C\u901A\u8FC7\u6F0F\u6876\u7B97\u6CD5\u8FDB\u884C\u9650\u6D41\uFF0C\u6BCF <code>10</code> \u6BEB\u79D2\u5904\u7406\u4E00\u6B21\u8BF7\u6C42\u3002\u56E0\u4E3A\u5904\u7406\u7684\u901F\u5EA6\u662F\u56FA\u5B9A\u7684\uFF0C\u8BF7\u6C42\u8FDB\u6765\u7684\u901F\u5EA6\u662F\u672A\u77E5\u7684\uFF0C\u53EF\u80FD\u7A81\u7136\u8FDB\u6765\u5F88\u591A\u8BF7\u6C42\uFF0C\u6CA1\u6765\u5F97\u53CA\u5904\u7406\u7684\u8BF7\u6C42\u5C31\u5148\u653E\u5728\u6876\u91CC\uFF0C\u65E2\u7136\u662F\u4E2A\u6876\uFF0C\u80AF\u5B9A\u662F\u6709\u5BB9\u91CF\u4E0A\u9650\uFF0C\u5982\u679C\u6876\u6EE1\u4E86\uFF0C\u90A3\u4E48\u65B0\u8FDB\u6765\u7684\u8BF7\u6C42\u5C31\u4E22\u5F03\u3002</p><p><img src="'+c+'" alt=""></p><p>\u5728\u7B97\u6CD5\u5B9E\u73B0\u65B9\u9762\uFF0C\u53EF\u4EE5 <strong>\u51C6\u5907\u4E00\u4E2A\u961F\u5217\uFF0C\u7528\u6765\u4FDD\u5B58\u8BF7\u6C42\uFF0C\u53E6\u5916\u901A\u8FC7\u4E00\u4E2A\u7EBF\u7A0B\u6C60\u5B9A\u671F\u4ECE\u961F\u5217\u4E2D\u83B7\u53D6\u8BF7\u6C42\u5E76\u6267\u884C\uFF0C\u53EF\u4EE5\u4E00\u6B21\u6027\u83B7\u53D6\u591A\u4E2A\u5E76\u53D1\u6267\u884C</strong>\u3002</p><p>\u8FD9\u79CD\u7B97\u6CD5\uFF0C\u5728\u4F7F\u7528\u8FC7\u540E\u4E5F\u5B58\u5728\u5F0A\u7AEF\uFF1A<strong>\u65E0\u6CD5\u5E94\u5BF9\u77ED\u65F6\u95F4\u7684\u7A81\u53D1\u6D41\u91CF</strong>\uFF0C\u540C\u65F6\u5B83\u7684\u4F18\u70B9\u4E5F\u662F\u53EF\u4EE5\u5E73\u6ED1\u7F51\u7EDC\u4E0A\u7684\u7A81\u53D1\u6D41\u91CF\uFF0C\u8BF7\u6C42\u53EF\u4EE5\u88AB\u6574\u5F62\u6210\u7A33\u5B9A\u7684\u6D41\u91CF\u3002</p><h3 id="\u4EE4\u724C\u6876" tabindex="-1"><a class="header-anchor" href="#\u4EE4\u724C\u6876" aria-hidden="true">#</a> \u4EE4\u724C\u6876</h3><p>\u4ECE\u67D0\u79CD\u610F\u4E49\u4E0A\u8BB2\uFF0C<strong>\u4EE4\u724C\u6876\u7B97\u6CD5\u662F\u5BF9\u6F0F\u6876\u7B97\u6CD5\u7684\u4E00\u79CD\u6539\u8FDB\uFF0C\u6876\u7B97\u6CD5\u80FD\u591F\u9650\u5236\u8BF7\u6C42\u8C03\u7528\u7684\u901F\u7387\uFF0C\u800C\u4EE4\u724C\u6876\u7B97\u6CD5\u80FD\u591F\u5728\u9650\u5236\u8C03\u7528\u7684\u5E73\u5747\u901F\u7387\u7684\u540C\u65F6\u8FD8\u5141\u8BB8\u4E00\u5B9A\u7A0B\u5EA6\u7684\u7A81\u53D1\u8C03\u7528</strong>\u3002</p><p>\u5728\u4EE4\u724C\u6876\u7B97\u6CD5\u4E2D\uFF0C\u5B58\u5728\u4E00\u4E2A\u6876\uFF0C\u7528\u6765\u5B58\u653E\u56FA\u5B9A\u6570\u91CF\u7684\u4EE4\u724C\u3002\u7B97\u6CD5\u4E2D\u5B58\u5728\u4E00\u79CD\u673A\u5236\uFF0C\u4EE5\u4E00\u5B9A\u7684\u901F\u7387\u5F80\u6876\u4E2D\u653E\u4EE4\u724C\u3002\u6BCF\u6B21\u8BF7\u6C42\u8C03\u7528\u9700\u8981\u5148\u83B7\u53D6\u4EE4\u724C\uFF0C\u53EA\u6709\u62FF\u5230\u4EE4\u724C\uFF0C\u624D\u6709\u673A\u4F1A\u7EE7\u7EED\u6267\u884C\uFF0C\u5426\u5219\u9009\u62E9\u9009\u62E9\u7B49\u5F85\u53EF\u7528\u7684\u4EE4\u724C\u3001\u6216\u8005\u76F4\u63A5\u62D2\u7EDD\u3002</p><p>\u653E\u4EE4\u724C\u8FD9\u4E2A\u52A8\u4F5C\u662F\u6301\u7EED\u4E0D\u65AD\u7684\u8FDB\u884C\uFF0C\u5982\u679C\u6876\u4E2D\u4EE4\u724C\u6570\u8FBE\u5230\u4E0A\u9650\uFF0C\u5C31\u4E22\u5F03\u4EE4\u724C\uFF0C\u6240\u4EE5\u5C31\u5B58\u5728\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6876\u4E2D\u4E00\u76F4\u6709\u5927\u91CF\u7684\u53EF\u7528\u4EE4\u724C\uFF0C\u8FD9\u65F6\u8FDB\u6765\u7684\u8BF7\u6C42\u5C31\u53EF\u4EE5\u76F4\u63A5\u62FF\u5230\u4EE4\u724C\u6267\u884C\uFF0C\u6BD4\u5982\u8BBE\u7F6E <code>qps</code> \u4E3A <code>100</code> \uFF0C\u90A3\u4E48\u9650\u6D41\u5668\u521D\u59CB\u5316\u5B8C\u6210\u4E00\u79D2\u540E\uFF0C\u6876\u4E2D\u5C31\u5DF2\u7ECF\u6709 100 \u4E2A\u4EE4\u724C\u4E86\uFF0C\u8FD9\u65F6\u670D\u52A1\u8FD8\u6CA1\u5B8C\u5168\u542F\u52A8\u597D\uFF0C\u7B49\u542F\u52A8\u5B8C\u6210\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u65F6\uFF0C\u8BE5\u9650\u6D41\u5668\u53EF\u4EE5\u62B5\u6321\u77AC\u65F6\u7684 <code>100</code> \u4E2A\u8BF7\u6C42\u3002\u6240\u4EE5\uFF0C\u53EA\u6709\u6876\u4E2D\u6CA1\u6709\u4EE4\u724C\u65F6\uFF0C\u8BF7\u6C42\u624D\u4F1A\u8FDB\u884C\u7B49\u5F85\uFF0C\u6700\u540E\u76F8\u5F53\u4E8E\u4EE5\u4E00\u5B9A\u7684\u901F\u7387\u6267\u884C\u3002</p><p><img src="'+o+'" alt=""></p><p>\u5B9E\u73B0\u601D\u8DEF\uFF1A\u53EF\u4EE5 <strong>\u51C6\u5907\u4E00\u4E2A\u961F\u5217\uFF0C\u7528\u6765\u4FDD\u5B58\u4EE4\u724C\uFF0C\u53E6\u5916\u901A\u8FC7\u4E00\u4E2A\u7EBF\u7A0B\u6C60\u5B9A\u671F\u751F\u6210\u4EE4\u724C\u653E\u5230\u961F\u5217\u4E2D\uFF0C\u6BCF\u6765\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5C31\u4ECE\u961F\u5217\u4E2D\u83B7\u53D6\u4E00\u4E2A\u4EE4\u724C\uFF0C\u5E76\u7EE7\u7EED\u6267\u884C</strong>\u3002</p><blockquote><p>\u6F0F\u6876 VS \u4EE4\u724C\u6876\uFF1A\u4E24\u8005\u4E3B\u8981\u533A\u522B\u5728\u4E8E\u201C\u6F0F\u6876\u7B97\u6CD5\u201D\u80FD\u591F\u5F3A\u884C\u9650\u5236\u6570\u636E\u7684\u4F20\u8F93\u901F\u7387\uFF0C\u800C\u201C\u4EE4\u724C\u6876\u7B97\u6CD5\u201D\u5728\u80FD\u591F\u9650\u5236\u6570\u636E\u7684\u5E73\u5747\u4F20\u8F93\u901F\u7387\u5916\uFF0C\u8FD8\u5141\u8BB8\u67D0\u79CD\u7A0B\u5EA6\u7684\u7A81\u53D1\u4F20\u8F93\u3002\u5728\u201C\u4EE4\u724C\u6876\u7B97\u6CD5\u201D\u4E2D\uFF0C\u53EA\u8981\u4EE4\u724C\u6876\u4E2D\u5B58\u5728\u4EE4\u724C\uFF0C\u90A3\u4E48\u5C31\u5141\u8BB8\u7A81\u53D1\u5730\u4F20\u8F93\u6570\u636E\u76F4\u5230\u8FBE\u5230\u7528\u6237\u914D\u7F6E\u7684\u95E8\u9650\uFF0C\u6240\u4EE5\u5B83\u9002\u5408\u4E8E\u5177\u6709\u7A81\u53D1\u7279\u6027\u7684\u6D41\u91CF\u3002</p></blockquote><h2 id="\u96C6\u7FA4\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u9650\u6D41" aria-hidden="true">#</a> \u96C6\u7FA4\u9650\u6D41</h2><h3 id="redis-\u8BF7\u6C42\u7A97\u53E3" tabindex="-1"><a class="header-anchor" href="#redis-\u8BF7\u6C42\u7A97\u53E3" aria-hidden="true">#</a> Redis \u8BF7\u6C42\u7A97\u53E3</h3><blockquote><p>\u91C7\u7528redis \u7684\u8BA1\u65F6\u548C\u8BA1\u6570\u65B9\u5F0F,\u5728\u89C4\u5B9A\u7684\u65F6\u95F4\u7A97\u53E3\u671F,\u5141\u8BB8\u901A\u8FC7\u7684\u6700\u5927\u8BF7\u6C42\u6570\u91CF</p></blockquote><p>\u6BD4\u5982\u4E3A\u4E86\u9650\u5236\u67D0\u4E2A\u8D44\u6E90\u88AB\u6BCF\u4E2A\u7528\u6237\u6216\u8005\u5546\u6237\u7684\u8BBF\u95EE\u6B21\u6570\uFF0C5s \u53EA\u80FD\u8BBF\u95EE 2 \u6B21\uFF0C\u6216\u8005\u4E00\u5929\u53EA\u80FD\u8C03\u7528 1000 \u6B21\uFF0C\u8FD9\u79CD\u9700\u6C42\uFF0C\u5355\u673A\u9650\u6D41\u662F\u65E0\u6CD5\u5B9E\u73B0\u7684\uFF0C\u8FD9\u65F6\u5C31\u9700\u8981\u901A\u8FC7\u96C6\u7FA4\u9650\u6D41\u8FDB\u884C\u5B9E\u73B0\u3002</p><p>\u5982\u4F55\u5B9E\u73B0\uFF1F\u4E3A\u4E86\u63A7\u5236\u8BBF\u95EE\u6B21\u6570\uFF0C\u80AF\u5B9A\u9700\u8981\u4E00\u4E2A\u8BA1\u6570\u5668\uFF0C\u800C\u4E14\u8FD9\u4E2A\u8BA1\u6570\u5668\u53EA\u80FD\u4FDD\u5B58\u5728\u7B2C\u4E09\u65B9\u670D\u52A1\uFF0C\u6BD4\u5982redis\u3002</p><p>\u5927\u6982\u601D\u8DEF\uFF1A\u6BCF\u6B21\u6709\u76F8\u5173\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u5C31\u5411 <code>redis</code> \u670D\u52A1\u5668\u53D1\u9001\u4E00\u4E2A <code>incr</code> \u547D\u4EE4\uFF0C\u6BD4\u5982\u9700\u8981\u9650\u5236\u67D0\u4E2A\u7528\u6237\u8BBF\u95EE <code>/index</code> \u63A5\u53E3\u7684\u6B21\u6570\uFF0C\u53EA\u9700\u8981\u62FC\u63A5\u7528\u6237 id \u548C\u63A5\u53E3\u540D\u751F\u6210 <code>redis</code> \u7684 <code>key</code> \uFF0C\u6BCF\u6B21\u8BE5\u7528\u6237\u8BBF\u95EE\u6B64\u63A5\u53E3\u65F6\uFF0C\u53EA\u9700\u8981\u5BF9\u8FD9\u4E2A <code>key</code> \u6267\u884C <code>incr</code> \u547D\u4EE4\uFF0C\u5728\u8FD9\u4E2A <code>key</code> \u5E26\u4E0A\u8FC7\u671F\u65F6\u95F4\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6307\u5B9A\u65F6\u95F4\u7684\u8BBF\u95EE\u9891\u7387\u3002</p><h3 id="nginx-\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#nginx-\u9650\u6D41" aria-hidden="true">#</a> Nginx \u9650\u6D41</h3><p>Nginx\u6309\u8BF7\u6C42\u901F\u7387\u9650\u901F\u6A21\u5757\u4F7F\u7528\u7684\u662F\u6F0F\u6876\u7B97\u6CD5\uFF0C\u5373\u80FD\u591F\u5F3A\u884C\u4FDD\u8BC1\u8BF7\u6C42\u7684\u5B9E\u65F6\u5904\u7406\u901F\u5EA6\u4E0D\u4F1A\u8D85\u8FC7\u8BBE\u7F6E\u7684\u9608\u503C\u3002</p><p>Nginx\u5B98\u65B9\u7248\u672C\u9650\u5236IP\u7684\u8FDE\u63A5\u548C\u5E76\u53D1\u5206\u522B\u6709\u4E24\u4E2A\u6A21\u5757\uFF1A</p><ul><li><code>limit_req_zone</code> \u7528\u6765\u9650\u5236\u5355\u4F4D\u65F6\u95F4\u5185\u7684\u8BF7\u6C42\u6570\uFF0C\u5373\u901F\u7387\u9650\u5236,\u91C7\u7528\u7684\u6F0F\u6876\u7B97\u6CD5 &quot;leaky bucket&quot;\u3002</li><li><code>limit_req_conn</code> \u7528\u6765\u9650\u5236\u540C\u4E00\u65F6\u95F4\u8FDE\u63A5\u6570\uFF0C\u5373\u5E76\u53D1\u9650\u5236\u3002</li></ul>',31);function i(n,s){return r}var p=e(a,[["render",i]]);export{p as default};
