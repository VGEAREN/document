import{_ as s,r as o,o as a,b as c,d as e,e as r,F as d,a as t,f as i}from"./app.f59e1607.js";var l="/document/assets/2019-04-12-09-49-38.ba763eaf.png",p="/document/assets/2019-04-12-10-01-01.4133ceed.png",u="/document/assets/2019-04-12-10-06-01.1ae740b2.png";const b={},m=t(`<h1 id="string-\u5E38\u91CF\u6C60" tabindex="-1"><a class="header-anchor" href="#string-\u5E38\u91CF\u6C60" aria-hidden="true">#</a> String \u5E38\u91CF\u6C60</h1><p>\u5728 <code>JAVA</code> \u8BED\u8A00\u4E2D\u6709 8 \u4E2D\u57FA\u672C\u7C7B\u578B\u548C\u4E00\u79CD\u6BD4\u8F83\u7279\u6B8A\u7684\u7C7B\u578B <code>String</code> \u3002\u8FD9\u4E9B\u7C7B\u578B\u4E3A\u4E86\u4F7F\u4ED6\u4EEC\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u901F\u5EA6\u66F4\u5FEB\uFF0C\u66F4\u8282\u7701\u5185\u5B58\uFF0C\u90FD\u63D0\u4F9B\u4E86\u4E00\u79CD\u5E38\u91CF\u6C60\u7684\u6982\u5FF5\u3002\u5E38\u91CF\u6C60\u5C31\u7C7B\u4F3C\u4E00\u4E2A JAVA \u7CFB\u7EDF\u7EA7\u522B\u63D0\u4F9B\u7684\u7F13\u5B58\u3002</p><p><code>String</code> \u7C7B\u578B\u7684\u5E38\u91CF\u6C60\u6BD4\u8F83\u7279\u6B8A\u3002\u5B83\u7684\u4E3B\u8981\u4F7F\u7528\u65B9\u6CD5\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u76F4\u63A5\u4F7F\u7528\u53CC\u5F15\u53F7\u58F0\u660E\u51FA\u6765\u7684 <code>String</code> \u5BF9\u8C61\u4F1A\u76F4\u63A5\u5B58\u50A8\u5728\u5E38\u91CF\u6C60\u4E2D</li><li>\u5982\u679C\u4E0D\u662F\u7528\u53CC\u5F15\u53F7\u58F0\u660E\u7684 <code>String</code> \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>String</code> \u63D0\u4F9B\u7684 <code>intern</code> \u65B9\u6CD5\u3002 <code>intern</code> \u65B9\u6CD5\u4F1A\u4ECE\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u67E5\u8BE2\u5F53\u524D\u5B57\u7B26\u4E32\u662F\u5426\u5B58\u5728\uFF0C\u82E5\u4E0D\u5B58\u5728\u5C31\u4F1A\u5C06\u5F53\u524D\u5B57\u7B26\u4E32\u653E\u5165\u5E38\u91CF\u6C60\u4E2D</li></ul><h2 id="intern" tabindex="-1"><a class="header-anchor" href="#intern" aria-hidden="true">#</a> intern</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    /**
     * Returns a canonical representation for the string object.
     * &lt;p&gt;
     * A pool of strings, initially empty, is maintained privately by the
     * class {@code String}.
     * &lt;p&gt;
     * When the intern method is invoked, if the pool already contains a
     * string equal to this {@code String} object as determined by
     * the {@link #equals(Object)} method, then the string from the pool is
     * returned. Otherwise, this {@code String} object is added to the
     * pool and a reference to this {@code String} object is returned.
     * &lt;p&gt;
     * It follows that for any two strings {@code s} and {@code t},
     * {@code s.intern() == t.intern()} is {@code true}
     * if and only if {@code s.equals(t)} is {@code true}.
     * &lt;p&gt;
     * All literal strings and string-valued constant expressions are
     * interned. String literals are defined in section 3.10.5 of the
     * &lt;cite&gt;The Java&amp;trade; Language Specification&lt;/cite&gt;.
     *
     * @return  a string that has the same contents as this string, but is
     *          guaranteed to be from a pool of unique strings.
     */
    public native String intern();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>JAVA \u4F7F\u7528 <code>jni</code> \u8C03\u7528 <code>c++</code> \u5B9E\u73B0\u7684 <code>StringTable</code> \u7684 <code>intern</code> \u65B9\u6CD5, <code>StringTable</code> \u8DDF Java \u4E2D\u7684 <code>HashMap</code> \u7684\u5B9E\u73B0\u662F\u5DEE\u4E0D\u591A\u7684, \u53EA\u662F <strong>\u4E0D\u80FD\u81EA\u52A8\u6269\u5BB9</strong>\u3002\u9ED8\u8BA4\u5927\u5C0F\u662F <code>1009</code> \u3002</p><p>\u8981\u6CE8\u610F\u7684\u662F\uFF0C <code>String</code> \u7684 <code>String Pool</code> \u662F\u4E00\u4E2A\u56FA\u5B9A\u5927\u5C0F\u7684 <code>Hashtable</code> \uFF0C\u9ED8\u8BA4\u503C\u5927\u5C0F\u957F\u5EA6\u662F <code>1009</code> \uFF0C\u5982\u679C\u653E\u8FDB <code>String Pool</code> \u7684 <code>String</code> \u975E\u5E38\u591A\uFF0C\u5C31\u4F1A\u9020\u6210 Hash \u51B2\u7A81\u4E25\u91CD\uFF0C\u4ECE\u800C\u5BFC\u81F4\u94FE\u8868\u4F1A\u5F88\u957F\uFF0C\u800C\u94FE\u8868\u957F\u4E86\u540E\u76F4\u63A5\u4F1A\u9020\u6210\u7684\u5F71\u54CD\u5C31\u662F\u5F53\u8C03\u7528 <code>String.intern</code> \u65F6\u6027\u80FD\u4F1A\u5927\u5E45\u4E0B\u964D\u3002</p><p>\u5728 JDK6 \u4E2D <code>StringTable</code> \u662F\u56FA\u5B9A\u7684\uFF0C\u5C31\u662F <code>1009</code> \u7684\u957F\u5EA6\uFF0C\u6240\u4EE5\u5982\u679C\u5E38\u91CF\u6C60\u4E2D\u7684\u5B57\u7B26\u4E32\u8FC7\u591A\u5C31\u4F1A\u5BFC\u81F4\u6548\u7387\u4E0B\u964D\u5F88\u5FEB\u3002\u5728 <code>jdk7</code> \u4E2D\uFF0C <code>StringTable</code> \u7684\u957F\u5EA6\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E2A\u53C2\u6570\u6307\u5B9A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-XX:StringTableSize=99991
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u5728 JDK6 \u4EE5\u53CA\u4EE5\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u5B57\u7B26\u4E32\u7684\u5E38\u91CF\u6C60\u662F\u653E\u5728\u5806\u7684 Perm \u533A\u3002\u5728 JDK7 \u7684\u7248\u672C\u4E2D\uFF0C\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u5DF2\u7ECF\u4ECE Perm \u533A\u79FB\u5230\u6B63\u5E38\u7684 Java Heap \u533A\u57DF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static void main(String[] args) {
    String s = new String(&quot;1&quot;);
    s.intern();
    String s2 = &quot;1&quot;;
    System.out.println(s == s2);

    String s3 = new String(&quot;1&quot;) + new String(&quot;1&quot;);
    s3.intern();
    String s4 = &quot;11&quot;;
    System.out.println(s3 == s4);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u7684\u6267\u884C\u7ED3\u679C\uFF1A</p><ul><li>JDK6: <code>false false</code></li><li>JDK7: <code>false true</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static void main(String[] args) {
    String s = new String(&quot;1&quot;);
    String s2 = &quot;1&quot;;
    s.intern();
    System.out.println(s == s2);

    String s3 = new String(&quot;1&quot;) + new String(&quot;1&quot;);
    String s4 = &quot;11&quot;;
    s3.intern();
    System.out.println(s3 == s4);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u7684\u6267\u884C\u7ED3\u679C\uFF1A</p><ul><li>JDK6: <code>false false</code></li><li>JDK7: <code>false false</code></li></ul><p>\u7531\u4E8E JDK7 \u5C06\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u79FB\u52A8\u5230 Heap \u4E2D\uFF0C\u5BFC\u81F4\u4E0A\u8FF0\u7248\u672C\u5DEE\u5F02\uFF0C\u4E0B\u9762\u5177\u4F53\u6765\u5206\u6790\u4E0B\u3002</p><h3 id="jdk6" tabindex="-1"><a class="header-anchor" href="#jdk6" aria-hidden="true">#</a> JDK6</h3><p><img src="`+l+'" alt=""></p><blockquote><p>\u56FE\u4E2D\u7EFF\u8272\u7EBF\u6761\u4EE3\u8868 string \u5BF9\u8C61\u7684\u5185\u5BB9\u6307\u5411\uFF0C\u9ED1\u8272\u7EBF\u6761\u4EE3\u8868\u5730\u5740\u6307\u5411</p></blockquote><p>\u5728 <code>jdk6</code> \u4E2D\u4E0A\u8FF0\u7684\u6240\u6709\u6253\u5370\u90FD\u662F <code>false</code> \uFF0C\u56E0\u4E3A <code>jdk6</code> \u4E2D\u7684\u5E38\u91CF\u6C60\u662F\u653E\u5728 <code>Perm</code> \u533A\u4E2D\u7684\uFF0C <code>Perm</code> \u533A\u548C\u6B63\u5E38\u7684 <code>JAVA Heap</code> \u533A\u57DF\u662F\u5B8C\u5168\u5206\u5F00\u7684\u3002\u4E0A\u9762\u8BF4\u8FC7\u5982\u679C\u662F\u4F7F\u7528\u5F15\u53F7\u58F0\u660E\u7684\u5B57\u7B26\u4E32\u90FD\u662F\u4F1A\u76F4\u63A5\u5728\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u751F\u6210\uFF0C\u800C <code>new</code> \u51FA\u6765\u7684 <code>String</code> \u5BF9\u8C61\u662F\u653E\u5728 <code>JAVA Heap</code> \u533A\u57DF\u3002\u6240\u4EE5\u62FF\u4E00\u4E2A <code>JAVA Heap</code> \u533A\u57DF\u7684\u5BF9\u8C61\u5730\u5740\u548C\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u7684\u5BF9\u8C61\u5730\u5740\u8FDB\u884C\u6BD4\u8F83\u80AF\u5B9A\u662F\u4E0D\u76F8\u540C\u7684\uFF0C<strong>\u5373\u4F7F\u8C03\u7528 <code>String.intern</code> \u65B9\u6CD5\u4E5F\u662F\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u7684</strong>\u3002</p><h3 id="jdk7" tabindex="-1"><a class="header-anchor" href="#jdk7" aria-hidden="true">#</a> JDK7</h3><p>\u56E0\u4E3A\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u79FB\u52A8\u5230 JAVA Heap \u533A\u57DF\u540E\uFF0C\u518D\u6765\u89E3\u91CA\u4E3A\u4EC0\u4E48\u4F1A\u6709\u4E0A\u8FF0\u7684\u6253\u5370\u7ED3\u679C\u3002</p><p><img src="'+p+'" alt=""></p><ul><li>\u5728\u7B2C\u4E00\u6BB5\u4EE3\u7801\u4E2D\uFF0C\u5148\u770B <code>s3</code> \u548C <code>s4</code> \u5B57\u7B26\u4E32\u3002<code>String s3 = new String(&quot;1&quot;) + new String(&quot;1&quot;);</code>\uFF0C\u8FD9\u53E5\u4EE3\u7801\u4E2D\u73B0\u5728\u751F\u6210\u4E86 2\u4E2A \u6700\u7EC8\u5BF9\u8C61\uFF0C\u662F\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u7684 <code>\u201C1\u201D</code> \u548C <code>JAVA Heap</code> \u4E2D\u7684 <code>s3</code> \u5F15\u7528\u6307\u5411\u7684\u5BF9\u8C61\u3002\u4E2D\u95F4\u8FD8\u6709 2\u4E2A \u533F\u540D\u7684 <code>new String(&quot;1&quot;)</code> \u6211\u4EEC\u4E0D\u53BB\u8BA8\u8BBA\u5B83\u4EEC\u3002\u6B64\u65F6 <code>s3</code> \u5F15\u7528\u5BF9\u8C61\u5185\u5BB9\u662F <code>\u201D11\u201D</code> \uFF0C\u4F46\u6B64\u65F6\u5E38\u91CF\u6C60\u4E2D\u662F\u6CA1\u6709 <code>\u201C11\u201D</code> \u5BF9\u8C61\u7684\u3002</li><li>\u63A5\u4E0B\u6765 <code>s3.intern();</code> \u8FD9\u4E00\u53E5\u4EE3\u7801\uFF0C\u662F\u5C06 <code>s3</code> \u4E2D\u7684 <code>\u201C11\u201D</code> \u5B57\u7B26\u4E32\u653E\u5165 <code>String</code> \u5E38\u91CF\u6C60\u4E2D\uFF0C\u56E0\u4E3A\u6B64\u65F6\u5E38\u91CF\u6C60\u4E2D\u4E0D\u5B58\u5728 <code>\u201C11\u201D</code> \u5B57\u7B26\u4E32\uFF0C\u56E0\u6B64\u5E38\u89C4\u505A\u6CD5\u662F\u8DDF <code>jdk6</code> \u56FE\u4E2D\u8868\u793A\u7684\u90A3\u6837\uFF0C\u5728\u5E38\u91CF\u6C60\u4E2D\u751F\u6210\u4E00\u4E2A <code>\u201C11\u201D</code> \u7684\u5BF9\u8C61\uFF0C\u5173\u952E\u70B9\u662F <code>jdk7</code> \u4E2D\u5E38\u91CF\u6C60\u4E0D\u5728 <code>Perm</code> \u533A\u57DF\u4E86\uFF0C\u8FD9\u5757\u505A\u4E86\u8C03\u6574\u3002<strong>\u5E38\u91CF\u6C60\u4E2D\u4E0D\u9700\u8981\u518D\u5B58\u50A8\u4E00\u4EFD\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5B58\u50A8\u5806\u4E2D\u7684\u5F15\u7528</strong>\u3002\u8FD9\u4EFD\u5F15\u7528\u6307\u5411 <code>s3</code> \u5F15\u7528\u7684\u5BF9\u8C61\u3002 \u4E5F\u5C31\u662F\u8BF4\u5F15\u7528\u5730\u5740\u662F\u76F8\u540C\u7684\u3002</li><li>\u6700\u540E <code>String s4 = &quot;11&quot;;</code> \u8FD9\u53E5\u4EE3\u7801\u4E2D <code>\u201D11\u201D</code> \u662F\u663E\u793A\u58F0\u660E\u7684\uFF0C\u56E0\u6B64\u4F1A\u76F4\u63A5\u53BB\u5E38\u91CF\u6C60\u4E2D\u521B\u5EFA\uFF0C\u521B\u5EFA\u7684\u65F6\u5019\u53D1\u73B0\u5DF2\u7ECF\u6709\u8FD9\u4E2A\u5BF9\u8C61\u4E86\uFF0C\u6B64\u65F6\u4E5F\u5C31\u662F\u6307\u5411 <code>s3</code> \u5F15\u7528\u5BF9\u8C61\u7684\u4E00\u4E2A\u5F15\u7528\u3002\u6240\u4EE5 <code>s4</code> \u5F15\u7528\u5C31\u6307\u5411\u548C <code>s3</code> \u4E00\u6837\u4E86\u3002\u56E0\u6B64\u6700\u540E\u7684\u6BD4\u8F83 <code>s3 == s4</code> \u662F <code>true</code> \u3002</li><li>\u518D\u770B <code>s</code> \u548C <code>s2</code> \u5BF9\u8C61\u3002 <code>String s = new String(&quot;1&quot;);</code> \u7B2C\u4E00\u53E5\u4EE3\u7801\uFF0C\u751F\u6210\u4E862\u4E2A\u5BF9\u8C61\u3002\u5E38\u91CF\u6C60\u4E2D\u7684 <code>\u201C1\u201D</code> \u548C <code>JAVA Heap</code> \u4E2D\u7684\u5B57\u7B26\u4E32\u5BF9\u8C61\u3002<code>s.intern();</code> \u8FD9\u4E00\u53E5\u662F <code>s</code> \u5BF9\u8C61\u53BB\u5E38\u91CF\u6C60\u4E2D\u5BFB\u627E\u540E\u53D1\u73B0 <code>\u201C1\u201D</code> \u5DF2\u7ECF\u5728\u5E38\u91CF\u6C60\u91CC\u4E86\u3002</li><li>\u63A5\u4E0B\u6765 <code>String s2 = &quot;1&quot;;</code> \u8FD9\u53E5\u4EE3\u7801\u662F\u751F\u6210\u4E00\u4E2A <code>s2</code> \u7684\u5F15\u7528\u6307\u5411\u5E38\u91CF\u6C60\u4E2D\u7684 <code>\u201C1\u201D</code> \u5BF9\u8C61\u3002 \u7ED3\u679C\u5C31\u662F <code>s</code> \u548C <code>s2</code> \u7684\u5F15\u7528\u5730\u5740\u660E\u663E\u4E0D\u540C\u3002</li></ul><p>\u63A5\u4E0B\u6765\u662F\u7B2C\u4E8C\u6BB5\u4EE3\u7801\uFF1A</p><p><img src="'+u+`" alt=""></p><ul><li>\u7B2C\u4E00\u6BB5\u4EE3\u7801\u548C\u7B2C\u4E8C\u6BB5\u4EE3\u7801\u7684\u6539\u53D8\u5C31\u662F <code>s3.intern();</code> \u7684\u987A\u5E8F\u662F\u653E\u5728 <code>String s4 = &quot;11&quot;;</code> \u540E\u4E86\u3002\u8FD9\u6837\uFF0C\u9996\u5148\u6267\u884C <code>String s4 = &quot;11&quot;;</code> \u58F0\u660E <code>s4</code> \u7684\u65F6\u5019\u5E38\u91CF\u6C60\u4E2D\u662F\u4E0D\u5B58\u5728 <code>\u201C11\u201D</code> \u5BF9\u8C61\u7684\uFF0C\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C <code>\u201C11\u201C</code> \u5BF9\u8C61\u662F <code>s4</code> \u58F0\u660E\u4EA7\u751F\u7684\u65B0\u5BF9\u8C61\u3002\u7136\u540E\u518D\u6267\u884C <code>s3.intern();</code> \u65F6\uFF0C\u5E38\u91CF\u6C60\u4E2D <code>\u201C11\u201D</code> \u5BF9\u8C61\u5DF2\u7ECF\u5B58\u5728\u4E86\uFF0C\u56E0\u6B64 <code>s3</code> \u548C <code>s4</code> \u7684\u5F15\u7528\u662F\u4E0D\u540C\u7684\u3002</li><li>\u7B2C\u4E8C\u6BB5\u4EE3\u7801\u4E2D\u7684 <code>s</code> \u548C <code>s2</code> \u4EE3\u7801\u4E2D\uFF0C<code>s.intern();</code>\uFF0C\u8FD9\u4E00\u53E5\u5F80\u540E\u653E\u4E5F\u4E0D\u4F1A\u6709\u4EC0\u4E48\u5F71\u54CD\u4E86\uFF0C\u56E0\u4E3A\u5BF9\u8C61\u6C60\u4E2D\u5728\u6267\u884C\u7B2C\u4E00\u53E5\u4EE3\u7801<code>String s = new String(&quot;1&quot;);</code> \u7684\u65F6\u5019\u5DF2\u7ECF\u751F\u6210 <code>\u201C1\u201D</code> \u5BF9\u8C61\u4E86\u3002\u4E0B\u8FB9\u7684 <code>s2</code> \u58F0\u660E\u90FD\u662F\u76F4\u63A5\u4ECE\u5E38\u91CF\u6C60\u4E2D\u53D6\u5730\u5740\u5F15\u7528\u7684\u3002 <code>s</code> \u548C <code>s2</code> \u7684\u5F15\u7528\u5730\u5740\u662F\u4E0D\u4F1A\u76F8\u7B49\u7684\u3002</li></ul><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>\u4ECE\u4E0A\u8FF0\u7684\u4F8B\u5B50\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA <code>jdk7</code> \u7248\u672C\u5BF9 <code>intern</code> \u64CD\u4F5C\u548C\u5E38\u91CF\u6C60\u90FD\u505A\u4E86\u4E00\u5B9A\u7684\u4FEE\u6539\u3002\u4E3B\u8981\u5305\u62EC2\u70B9\uFF1A</p><ul><li>\u5C06 <code>String</code> \u5E38\u91CF\u6C60 \u4ECE <code>Perm</code> \u533A\u79FB\u52A8\u5230\u4E86 <code>Java Heap</code> \u533A</li><li><code>String#intern</code> \u65B9\u6CD5\u65F6\uFF0C\u5982\u679C\u5B58\u5728\u5806\u4E2D\u7684\u5BF9\u8C61\uFF0C\u4F1A\u76F4\u63A5\u4FDD\u5B58\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u800C\u4E0D\u4F1A\u91CD\u65B0\u521B\u5EFA\u5BF9\u8C61\u3002</li></ul><h3 id="\u4F7F\u7528\u8303\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8303\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u8303\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>static final int MAX = 1000 * 10000;
static final String[] arr = new String[MAX];

public static void main(String[] args) throws Exception {
    Integer[] DB_DATA = new Integer[10];
    Random random = new Random(10 * 10000);
    for (int i = 0; i &lt; DB_DATA.length; i++) {
        DB_DATA[i] = random.nextInt();
    }
	long t = System.currentTimeMillis();
    for (int i = 0; i &lt; MAX; i++) {
        //arr[i] = new String(String.valueOf(DB_DATA[i % DB_DATA.length]));
         arr[i] = new String(String.valueOf(DB_DATA[i % DB_DATA.length])).intern();
    }

	System.out.println((System.currentTimeMillis() - t) + &quot;ms&quot;);
    System.gc();
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u8FD0\u884C\u7684\u53C2\u6570\u662F\uFF1A<code>-Xmx2g -Xms2g -Xmn1500M</code> \u4E0A\u8FF0\u4EE3\u7801\u662F\u4E00\u4E2A\u6F14\u793A\u4EE3\u7801\uFF0C\u5176\u4E2D\u6709\u4E24\u6761\u8BED\u53E5\u4E0D\u4E00\u6837\uFF0C\u4E00\u6761\u662F\u4F7F\u7528 intern\uFF0C\u4E00\u6761\u662F\u672A\u4F7F\u7528 intern\u3002</p><p>\u901A\u8FC7\u4E0A\u8FF0\u7ED3\u679C\uFF0C\u6211\u4EEC\u53D1\u73B0\u4E0D\u4F7F\u7528 <code>intern</code> \u7684\u4EE3\u7801\u751F\u6210\u4E86 <code>1000w</code> \u4E2A\u5B57\u7B26\u4E32\uFF0C\u5360\u7528\u4E86\u5927\u7EA6 <code>640m</code> \u7A7A\u95F4\u3002 \u4F7F\u7528\u4E86 <code>intern</code> \u7684\u4EE3\u7801\u751F\u6210\u4E86 <code>1345</code> \u4E2A\u5B57\u7B26\u4E32\uFF0C\u5360\u7528\u603B\u7A7A\u95F4 <code>133k</code> \u5DE6\u53F3\u3002\u5176\u5B9E\u901A\u8FC7\u89C2\u5BDF\u7A0B\u5E8F\u4E2D\u53EA\u662F\u7528\u5230\u4E86 <code>10</code> \u4E2A\u5B57\u7B26\u4E32\uFF0C\u6240\u4EE5\u51C6\u786E\u8BA1\u7B97\u540E\u5E94\u8BE5\u662F\u6B63\u597D\u76F8\u5DEE <code>100w</code> \u500D\u3002\u867D\u7136\u4F8B\u5B50\u6709\u4E9B\u6781\u7AEF\uFF0C\u4F46\u786E\u5B9E\u80FD\u51C6\u786E\u53CD\u5E94\u51FA intern \u4F7F\u7528\u540E\u4EA7\u751F\u7684\u5DE8\u5927\u7A7A\u95F4\u8282\u7701\u3002</p><p>\u7EC6\u5FC3\u7684\u540C\u5B66\u4F1A\u53D1\u73B0\u4F7F\u7528\u4E86 <code>intern</code> \u65B9\u6CD5\u540E\u65F6\u95F4\u4E0A\u6709\u4E86\u4E00\u4E9B\u589E\u957F\u3002\u8FD9\u662F\u56E0\u4E3A\u7A0B\u5E8F\u4E2D\u6BCF\u6B21\u90FD\u662F\u7528\u4E86 <code>new String</code> \u540E\uFF0C\u7136\u540E\u53C8\u8FDB\u884C <code>intern</code> \u64CD\u4F5C\u7684\u8017\u65F6\u65F6\u95F4\uFF0C\u8FD9\u4E00\u70B9\u5982\u679C\u5728\u5185\u5B58\u7A7A\u95F4\u5145\u8DB3\u7684\u60C5\u51B5\u4E0B\u786E\u5B9E\u662F\u65E0\u6CD5\u907F\u514D\u7684\uFF0C\u4F46\u6211\u4EEC\u5E73\u65F6\u4F7F\u7528\u65F6\uFF0C\u5185\u5B58\u7A7A\u95F4\u80AF\u5B9A\u4E0D\u662F\u65E0\u9650\u5927\u7684\uFF0C\u4E0D\u4F7F\u7528 <code>intern</code> \u5360\u7528\u7A7A\u95F4\u5BFC\u81F4 <code>jvm</code> \u5783\u573E\u56DE\u6536\u7684\u65F6\u95F4\u662F\u8981\u8FDC\u8FDC\u5927\u4E8E\u8FD9\u70B9\u65F6\u95F4\u7684\u3002 \u6BD5\u7ADF\u8FD9\u91CC\u4F7F\u7528\u4E86 <code>1000w</code> \u6B21 <code>intern</code> \u624D\u591A\u51FA\u67651\u79D2\u949F\u591A\u7684\u65F6\u95F4\u3002</p><h3 id="\u4E0D\u5F53\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5F53\u4F7F\u7528" aria-hidden="true">#</a> \u4E0D\u5F53\u4F7F\u7528</h3><p><code>fastjson</code> \u4E2D\u5BF9\u6240\u6709\u7684 <code>json</code> \u7684 <code>key</code> \u4F7F\u7528\u4E86 <code>intern</code> \u65B9\u6CD5\uFF0C\u7F13\u5B58\u5230\u4E86\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\uFF0C\u8FD9\u6837\u6BCF\u6B21\u8BFB\u53D6\u7684\u65F6\u5019\u5C31\u4F1A\u975E\u5E38\u5FEB\uFF0C\u5927\u5927\u51CF\u5C11\u65F6\u95F4\u548C\u7A7A\u95F4\u3002\u800C\u4E14 <code>json</code> \u7684 <code>key</code> \u901A\u5E38\u90FD\u662F\u4E0D\u53D8\u7684\u3002\u8FD9\u4E2A\u5730\u65B9\u6CA1\u6709\u8003\u8651\u5230\u5927\u91CF\u7684 <code>json key</code> \u5982\u679C\u662F\u53D8\u5316\u7684\uFF0C\u90A3\u5C31\u4F1A\u7ED9\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u5E26\u6765\u5F88\u5927\u7684\u8D1F\u62C5\u3002</p><p>\u8FD9\u4E2A\u95EE\u9898 <code>fastjson</code> \u5728<code>1.1.24</code>\u7248\u672C\u4E2D\u5DF2\u7ECF\u5C06\u8FD9\u4E2A\u6F0F\u6D1E\u4FEE\u590D\u4E86\u3002\u7A0B\u5E8F\u52A0\u5165\u4E86\u4E00\u4E2A\u6700\u5927\u7684\u7F13\u5B58\u5927\u5C0F\uFF0C\u8D85\u8FC7\u8FD9\u4E2A\u5927\u5C0F\u540E\u5C31\u4E0D\u4F1A\u518D\u5F80\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u4E2D\u653E\u4E86\u3002</p><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h2>`,41),g={href:"https://tech.meituan.com/2014/03/06/in-depth-understanding-string-intern.html",target:"_blank",rel:"noopener noreferrer"},h=i("\u6DF1\u5165\u89E3\u6790String#intern");function S(f,q){const n=o("ExternalLinkIcon");return a(),c(d,null,[m,e("p",null,[e("a",g,[h,r(n)])])],64)}var x=s(b,[["render",S]]);export{x as default};
