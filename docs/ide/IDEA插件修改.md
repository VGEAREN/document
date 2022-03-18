---
title: IDEA插件修改
date: 2021-09-13 12:42:44
tags: [IDEA Plugins,Crack]
category: [开发,IDE]
toc: true
---
## 简介
有时候需要用到某些IDEA插件的高级功能，使用次数不高，但是高级版需要收费，因此对插件进行一些小修改，这里记录一下修改思路，具体修改的插件就不写了，避免不必要的麻烦。这里记录的方法仅供学习使用，如果有能力建议还是支持正版。
<!-- more -->
## 环境&工具

由于有时候插件作者为了使插件不容易被破解，可能会假如混淆，但是Windows系统使不区分大小写的，这样操作Jar包会造成错误，所以还需要准备`Linux环境`，其他软件：
* 1、[JEB Decompiler Professional 3.19.1](https://www.pnfsoftware.com/)、[recaf](https://github.com/Col-E/Recaf)、[jd-gui](https://github.com/java-decompiler/jd-gui)：反编译jar包，查看代码
* 2、[Java ByteCode Editor](https://set.ee/jbe/)：修改字节码

## 过程

* 1、IDEA的插件位于`%appdata%\JetBrains\IntelliJIdea2021.1\plugins`中间的文件夹根据自己的IDEA版本自行替换一下
  


* 2、找到需要破解的插件，里面可能有多个jar包，首先排除掉依赖的jar包，找到其中需要破解的jar，使用**JD-GUI或者JEB**打开  

*以下步骤可能每个插件破解方式都不一样，这里只是阐述这个插件的破解过程和思路*

* 3、用jd-gui打开jar包，软件激活的按钮是**Activation**,在`META-INF/plugin.xml`中搜索`Activation`  
  然后可以找到这句：
  
  ``` xml
  <action id="xxx.offlineActivation" class="com.ccnode.codegenerator.O.N" text="Activation" description="Activation"/>
  ```
  



* 4、**JEB**进入到类`com.ccnode.codegenerator.O.N`里面
    ``` java
   public final class N extends AnAction {
        public void actionPerformed(@NotNull AnActionEvent arg3) {
        Intrinsics.checkParameterIsNotNull(((Object)arg3), "e");
        new a(arg3.getProject()).showAndGet();
        }
    }
   ```



* 5、new a()这个函数想必就是节目的视图层了，看看a()中的代码看看有没有地方可以下手：
    ``` java
        private void d() {
            int v1 = a.e();
            com.ccnode.codegenerator.D.a.c v0 = com.ccnode.codegenerator.D.a.b.a();
            try {
                this.m.setEditable(false);
                if(v1 == 0) {
                    boolean v2 = v0.b().booleanValue();  //此处也需要返回true
                    goto label_16;
                }
                else {
                    goto label_64;
                }
    
                return;
            }
            catch(TypeCastException v0_1) {
                throw a.b(((Exception)v0_1));
            }
    
        label_16:
            if(!v2) {
                goto label_49;
            }
    
            this.m.setForeground(new Color(46, 204, 0x71));
            this.m.setText(aw.c(v0.c()));
            this.g.setVisible(true);
            String v0_2 = v0.a();
            if(v1 == 0) {
                try {
                    int v2_1 = v0_2.length();
                }
                catch(TypeCastException v0_3) {
                    throw a.b(((Exception)v0_3));
                }
    
                if(v2_1 == 36) {
                    v0_2 = StringUtils.abbreviateMiddle(v0_2, "****", 35);
                }
    
                this.s.setText(v0_2);
                this.s.setForeground(new Color(46, 204, 0x71));
            }
    
            if(v1 != 0) {
                try {
                label_49:
                    this.m.setForeground(Color.RED);
                    this.m.setText("not activated yet");
                }
                catch(TypeCastException v0_4) {
                    throw a.b(((Exception)v0_4));
                }
    
                this.g.setVisible(false);
                return;
            label_64:
                this.g.setVisible(false);
            }
        }
    ```
    这里我们看到一个函数，`this.m.setText("not activated yet");`根据这一句的判断逻辑，再去到`com.ccnode.codegenerator.D.a.b.a();`




* 6、`com.ccnode.codegenerator.D.a.b.a()`函数可以再去到`com.ccnode.codegenerator.W.d.c()`
    ``` java
        public static c a() {
        com.ccnode.codegenerator.W.d.c v0 = new com.ccnode.codegenerator.W.d.c();
        v0.a("xxx");
        v0.c(a_.a());
        boolean v1 = m.a(v0);
        d.a().setValid(v1);
        c v2 = new c();
        new String("M18b9");
        v2.a(Boolean.valueOf(v1));
        v2.a(v0.c());
        v2.a(v0.d());
        try {
            if(DomainObject.b() != null) {
                b.b("KLGaO");
                return v2;
            }
        }
        catch(TypeCastException v0_1) {
            throw b.a(v0_1);
        }
    
        return v2;
    }
    ```



* 7、进到`com.ccnode.codegenerator.W.d.c()`这个实体类基本就比较明朗了：
    ``` java
        
        public class c {
        @SerializedName("valid")
        private boolean a;
        @SerializedName("paidKey")
        private String b;
        private static final String[] bb;
        @SerializedName("returnExpireDate")
        private Date c;
        private static final String[] cb;
        @SerializedName("userPluginName")
        @NotNull
        private String d;
        @SerializedName("userMac")
        private String e;
          
            public void a(String arg1) {
                this.d = arg1;
            }
    
            public void a(Date arg1) {
                this.c = arg1;
            }
    
            public void a(boolean arg1) {
                this.a = arg1;
            }
    
            public boolean a() {
                return this.a;
            }
    
            public String b() {
                return this.e;
            }
    
            public void b(String arg1) {
                this.b = arg1;
            }
    
            public Date c() {
                return this.c;
            }
    
            public void c(String arg1) {
                this.e = arg1;
            }
    
            public String d() {
                return this.b;
            }
    
            public String e() {
                return this.d;
            }
        }
    ```
    这里就很简单了，只需要让实体类直接返回我们指定的值就行了，更改其中的`String e()、 Date c()、 boolean a()、String d()、 String b()`



* 8、下面讲一下怎么使用 **jbe** 打开字节码并修改；   
  * 1、在linux中解压jar包并取出`com.ccnode.codegenerator.W.d.c -> c.class`使用 **jbe** 打开
  * 2、我现在要修改`boolean a()`这个函数，使它能直接返回true   
  * 3、在 **jbe** 中点击Methods，找到a函数，有好几个a函数，找入参返回值符合`boolean a()`的     
      ```
      Name:           cp_info #35 <a>
      Discriptor:     cp_info #48 <() Z>
      Access flags:   0x0001[public]
      ```
  * 4、由于我对字节码不是很熟悉，所以我直接写好相关函数，然后编译出class，直接复制过来覆盖。
    ``` java
    public boolean a() {
        return true;
    }
    ```
    在IDEA中编译后再通过插件`jclasslib`查看字节码:
    ``` 
    0 iconst_1
    1 ireturn
    ```
    直接复制到 **jbe** 的Code Editor中，保存。     
    *Misc中的Maximum stack depth和 Maximum local variables也同步更改一下*
    
  * 5、同理替换其他函数



* 9、修改完之后，linux中将class文件放在com/ccnode/codegenerator/W/d/下，jar包放在com同级目录:
  
    ``` shell
        jar uvf test.jar com/ccnode/codegenerator/W/d/c.class
    ```




* 10、将jar包放回原来的目录中，打包成zip，在IDEA中重新安装一下，验证是否破解成功了。



* 11、这里还需要更改一个地方`boolean v2 = v0.b().booleanValue(); `，`v0.b()`这里返回true，修改方法和上面一样，到这里就修改结束了。
