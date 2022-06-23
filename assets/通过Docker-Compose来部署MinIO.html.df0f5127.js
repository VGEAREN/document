import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.1ed3ff77.js";const i={},l=e(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>MinIO \u662F\u4E00\u4E2A\u57FA\u4E8EApache License v2.0\u5F00\u6E90\u534F\u8BAE\u7684\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\u3002\u5B83\u517C\u5BB9\u4E9A\u9A6C\u900AS3\u4E91\u5B58\u50A8\u670D\u52A1\u63A5\u53E3\uFF0C\u975E\u5E38\u9002\u5408\u4E8E\u5B58\u50A8\u5927\u5BB9\u91CF\u975E\u7ED3\u6784\u5316\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u56FE\u7247\u3001\u89C6\u9891\u3001\u65E5\u5FD7\u6587\u4EF6\u3001\u5907\u4EFD\u6570\u636E\u548C\u5BB9\u5668/\u865A\u62DF\u673A\u955C\u50CF\u7B49\uFF0C\u800C\u4E00\u4E2A\u5BF9\u8C61\u6587\u4EF6\u53EF\u4EE5\u662F\u4EFB\u610F\u5927\u5C0F\uFF0C\u4ECE\u51E0kb\u5230\u6700\u59275T\u4E0D\u7B49\u3002</p><p>MinIO\u662F\u4E00\u4E2A\u975E\u5E38\u8F7B\u91CF\u7684\u670D\u52A1,\u53EF\u4EE5\u5F88\u7B80\u5355\u7684\u548C\u5176\u4ED6\u5E94\u7528\u7684\u7ED3\u5408\uFF0C\u7C7B\u4F3C NodeJS, Redis \u6216\u8005 MySQL\u3002</p><h2 id="\u524D\u63D0\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u524D\u63D0\u6761\u4EF6" aria-hidden="true">#</a> \u524D\u63D0\u6761\u4EF6</h2><ul><li>\u60A8\u7684\u673A\u5668\u5DF2\u7ECF\u5B89\u88C5docker\u53CAdocker compose\u3002</li></ul><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><ul><li><p>docker-compose.yaml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token comment"># Settings and configurations that are common for all containers</span>
<span class="token key atrule">x-minio-common</span><span class="token punctuation">:</span> <span class="token important">&amp;minio-common</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> minio/minio<span class="token punctuation">:</span>RELEASE.2021<span class="token punctuation">-</span>07<span class="token punctuation">-</span>30T00<span class="token punctuation">-</span>02<span class="token punctuation">-</span>00Z
  <span class="token key atrule">command</span><span class="token punctuation">:</span> server <span class="token punctuation">-</span><span class="token punctuation">-</span>console<span class="token punctuation">-</span>address &quot;<span class="token punctuation">:</span>9001&quot; http<span class="token punctuation">:</span>//minio<span class="token punctuation">{</span>1<span class="token punctuation">...</span>4<span class="token punctuation">}</span>/data<span class="token punctuation">{</span>1<span class="token punctuation">...</span>2<span class="token punctuation">}</span>
  <span class="token key atrule">expose</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;9000&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;9001&quot;</span>
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token key atrule">MINIO_ROOT_USER</span><span class="token punctuation">:</span> minio
    <span class="token key atrule">MINIO_ROOT_PASSWORD</span><span class="token punctuation">:</span> minio123
  <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
    <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:9000/minio/health/live&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> 30s
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 20s
    <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span>

<span class="token comment"># starts 4 docker containers running minio server instances.</span>
<span class="token comment"># using nginx reverse proxy, load balancing, you can access</span>
<span class="token comment"># it through port 9000.</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">minio1</span><span class="token punctuation">:</span>
    <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*minio-common</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> minio1
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> data1<span class="token punctuation">-</span>1<span class="token punctuation">:</span>/data1
      <span class="token punctuation">-</span> data1<span class="token punctuation">-</span>2<span class="token punctuation">:</span>/data2

  <span class="token key atrule">minio2</span><span class="token punctuation">:</span>
    <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*minio-common</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> minio2
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> data2<span class="token punctuation">-</span>1<span class="token punctuation">:</span>/data1
      <span class="token punctuation">-</span> data2<span class="token punctuation">-</span>2<span class="token punctuation">:</span>/data2

  <span class="token key atrule">minio3</span><span class="token punctuation">:</span>
    <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*minio-common</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> minio3
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> data3<span class="token punctuation">-</span>1<span class="token punctuation">:</span>/data1
      <span class="token punctuation">-</span> data3<span class="token punctuation">-</span>2<span class="token punctuation">:</span>/data2

  <span class="token key atrule">minio4</span><span class="token punctuation">:</span>
    <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*minio-common</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> minio4
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> data4<span class="token punctuation">-</span>1<span class="token punctuation">:</span>/data1
      <span class="token punctuation">-</span> data4<span class="token punctuation">-</span>2<span class="token punctuation">:</span>/data2

  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.19.2<span class="token punctuation">-</span>alpine
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf<span class="token punctuation">:</span>ro
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9000:9000&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9001:9001&quot;</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> minio1
      <span class="token punctuation">-</span> minio2
      <span class="token punctuation">-</span> minio3
      <span class="token punctuation">-</span> minio4

<span class="token comment">## By default this config uses default local driver,</span>
<span class="token comment">## For custom volumes replace with volume driver configuration.</span>
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">data1-1</span><span class="token punctuation">:</span>
  <span class="token key atrule">data1-2</span><span class="token punctuation">:</span>
  <span class="token key atrule">data2-1</span><span class="token punctuation">:</span>
  <span class="token key atrule">data2-2</span><span class="token punctuation">:</span>
  <span class="token key atrule">data3-1</span><span class="token punctuation">:</span>
  <span class="token key atrule">data3-2</span><span class="token punctuation">:</span>
  <span class="token key atrule">data4-1</span><span class="token punctuation">:</span>
  <span class="token key atrule">data4-2</span><span class="token punctuation">:</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>nginx.conf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections  4096;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;
    sendfile        on;
    keepalive_timeout  65;

    # include /etc/nginx/conf.d/*.conf;

    upstream minio {
        server minio1:9000;
        server minio2:9000;
        server minio3:9000;
        server minio4:9000;
    }

    upstream console {
        ip_hash;
        server minio1:9001;
        server minio2:9001;
        server minio3:9001;
        server minio4:9001;
    }

    server {
        listen       9000;
        listen  [::]:9000;
        server_name  localhost;

        # To allow special characters in headers
        ignore_invalid_headers off;
        # Allow any size file to be uploaded.
        # Set to a value such as 1000m; to restrict file size to a specific value
        client_max_body_size 0;
        # To disable buffering
        proxy_buffering off;

        location / {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            proxy_connect_timeout 300;
            # Default is HTTP/1, keepalive is only enabled in HTTP/1.1
            proxy_http_version 1.1;
            proxy_set_header Connection &quot;&quot;;
            chunked_transfer_encoding off;

            proxy_pass http://minio;
        }
    }

    server {
        listen       9001;
        listen  [::]:9001;
        server_name  localhost;

        # To allow special characters in headers
        ignore_invalid_headers off;
        # Allow any size file to be uploaded.
        # Set to a value such as 1000m; to restrict file size to a specific value
        client_max_body_size 0;
        # To disable buffering
        proxy_buffering off;

        location / {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-NginX-Proxy true;

            # This is necessary to pass the correct IP to be hashed
            real_ip_header X-Real-IP;

            proxy_connect_timeout 300;
            # Default is HTTP/1, keepalive is only enabled in HTTP/1.1
            proxy_http_version 1.1;
            proxy_set_header Connection &quot;&quot;;
            chunked_transfer_encoding off;

            proxy_pass http://console;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4</p><h5 id="gnu-linux-and-macos" tabindex="-1"><a class="header-anchor" href="#gnu-linux-and-macos" aria-hidden="true">#</a> GNU/Linux and macOS</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> pull
<span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> stack deploy --compose-file docker-compose.yaml minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker-compose.exe pull
docker-compose.exe up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Copydocker stack deploy --compose-file docker-compose.yaml minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7http://127.0.0.1:9000/\u8BBF\u95EEMinIO server</p></li></ul>`,7),t=[l];function c(o,d){return s(),a("div",null,t)}var r=n(i,[["render",c],["__file","\u901A\u8FC7Docker-Compose\u6765\u90E8\u7F72MinIO.html.vue"]]);export{r as default};
