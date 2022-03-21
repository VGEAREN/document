import{_ as n,o as s,b as a,a as e}from"./app.911c58f6.js";const l={},p=e(`<li><p>1\u3001firewalld\u542F\u505C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token comment"># \u542F\u52A8</span>
  systemctl start firewalld     

  <span class="token comment"># \u67E5\u770B\u72B6\u6001</span>
  systemctl status firewalld   
 
  <span class="token comment"># \u4E0B\u6B21\u4E0D\u4F1A\u5F00\u673A\u542F\u52A8</span>
  systemctl disable firewalld   

  <span class="token comment"># \u5173\u95ED</span>
  systemctl stop firewalld      
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p>2\u3001\u5E38\u7528\u64CD\u4F5C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token comment"># \u6DFB\u52A0\u7AEF\u53E3</span>
  firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp --permanent

  <span class="token comment"># \u91CD\u65B0\u8F7D\u5165   </span>
  firewall-cmd --reload  

  <span class="token comment"># \u67E5\u770B\u7AEF\u53E3                                     </span>
  firewall-cmd --zone<span class="token operator">=</span>public --query-port<span class="token operator">=</span><span class="token number">80</span>/tcp     

  <span class="token comment"># \u5220\u9664\u7AEF\u53E3         </span>
  firewall-cmd --zone<span class="token operator">=</span>public --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp --permanent

  <span class="token comment"># \u67E5\u770B\u6240\u6709\u6253\u5F00\u7684\u7AEF\u53E3</span>
  firewall-cmd --zone<span class="token operator">=</span>public --list-ports
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li>`,2),r=[p];function c(t,o){return s(),a("ul",null,r)}var i=n(l,[["render",c]]);export{i as default};
