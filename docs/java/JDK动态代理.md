---
title: JDK动态代理
date: 2021-12-11 14:29:40
tags: [Java]
category: [开发,Java,动态代理]
toc: true
---

大家都知道，接口是不能实例化的，除非实现了该接口，那有没有什么办法，不编写实现类，创捷接口实例呢？

答案是有的，通过JDK动态代理，创建JDK动态代理有几个条件：
1. 创建代理对象时需要实现InvocationHandler
2. 代理过程在invoke中实现     

<!-- more -->
下面就通过代码来实现一下：

## 代理接口方法

### 定义接口

```java
public interface Human {
    String doEat(String food);

    int showAge(int age);
}
```



### 编写代理方法

```java
public class ActionProxy implements InvocationHandler {
    private Object instance;

    public ActionProxy(Object instance){
        this.instance = instance;
    }

    public ActionProxy(){
    }

     @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println(method.getName());
        for (Object arg : args) {
            System.out.println(arg);
        }
        return null;
    }
}
```

我们在invoke把方法名和参数打印一下



### 创建代理实例

```java
public static void main(String[] args) {
    Human proxyInstance = (Human) Proxy.newProxyInstance(Human.class.getClassLoader(), new Class[]{Human.class}, new ActionProxy());
    proxyInstance.doEat("apple");
    //proxyInstance.showAge(50);
}
```



运行一下输出

```java
doEat
apple
```



调用没问题，但是这里有个点需要注意，接口还定义了一个`showAge`方法，返回int，但是我们的invoke中返回的是null，如果我们调用`showAge`，就会报`NullPointerException`:

```java
showAge
50
Exception in thread "main" java.lang.NullPointerException
	at com.sun.proxy.$Proxy0.showAge(Unknown Source)
	at com.example.javalearning.HumanTest.main(HumanTest.java:9)
```

我们这里可以看下invoke的定义：

> 处理代理实例上的方法调用并返回结果。 当在与其关联的代理实例上调用方法时，将在调用处理程序上调用此方法。
>
> 参数：
> 				proxy - 调用该方法的代理实例
> 				method – 与在代理实例上调用的接口方法对应的Method实例。 Method对象的声明类将是该方法声明所在的接口，它可能是代理类继承该方法所				通过的代理接口的超接口。
> 				args – 包含在代理实例的方法调用中传递的参数值的对象数组，如果接口方法不接受参数，则为null 。 原始类型的参数被包装在适当的原始包装类				的实例中，例如java.lang.Integer或java.lang.Boolean 。
> 返回：	从代理实例上的方法调用返回的值。 如果接口方法声明的返回类型是原始类型，则该方法返回的值必须是对应的原始包装类的实例； 否则，它必				须是可分配给声明的返回类型的类型。 如果此方法返回的值为null且接口方法的返回类型为原始类型，则代理实例上的方法调用将抛出                           				NullPointerException 。 如果此方法返回的值与上述接口方法声明的返回类型不兼容，则代理实例上的方法调用将抛出ClassCastException 。
> 抛出：	Throwable – 从代理实例的方法调用中抛出的异常。 异常的类型必须可分配给在接口方法的throws子句中声明的任何异常类型，或分配给未经检查				的异常类型java.lang.RuntimeException或java.lang.Error 。 如果此方法抛出的已检查异常不可分配给接口方法的throws子句中声明的任何异常类				型，则包含此方法抛出的异常的UndeclaredThrowableException将被该方法上的方法调用抛出代理实例



## 代理接口实例

当然我们也可以代理接口实例对象，我们先编写一个`Human`类的实现：

### 实现接口

```java
public class Chinese implements Human{

    @Override
    public String doEat(String food) {
        return "Use chopsticks to eat " + food;
    }

    @Override
    public int showAge(int age) {
        return 18;
    }
}
```

### 编写代理方法

```java
public class ActionProxy implements InvocationHandler {
    private Object instance;

    public ActionProxy(Object instance){
        this.instance = instance;
    }

    public ActionProxy(){
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        if(null != this.instance){
            if (method.getName().equals("doEat")){
                args[0] = "delicious " + args[0];
                Object res = method.invoke(this.instance, args);
                return res;
            }else if(method.getName().equals("showAge")){
                Object res = method.invoke(this.instance, args);
                int i = (int)res - 10;
                return i;
            }
        }
        return null;
    }
}
```

### 创建代理实例

```java
public class HumanTest {
    public static void main(String[] args) {
        Human zhangsan = new Chinese();
        Human proxyInstance = (Human) Proxy.newProxyInstance(Human.class.getClassLoader(), new Class[]{Human.class}, new ActionProxy(zhangsan));
        System.out.println(proxyInstance.doEat("hot pot"));
        System.out.println(proxyInstance.showAge(50));
    }
}
```



运行：

```
Use chopsticks to eat delicious hot pot
8
```

