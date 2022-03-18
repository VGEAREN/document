---
title: CGLib动态代理
date: 2021-12-12 14:16:58
tags: [Java]
category: [开发,Java,动态代理]
toc: true
---



Spring AOP的原理是 **JDK 动态代理和CGLIB**字节码增强技术，**前者需要被代理类实现相应接口**，也只有接口中的方法可以被JDK动态代理技术所处理；**后者实际上是生成一个子类，来覆盖被代理类，**那么父类的final方法就不能代理，因为父类的final方法不能被子类所覆盖。**一般而言Spring默认优先使用JDK动态代理技术，只有在被代理类没有实现接口时，才会选择使用CGLIB技术来实现AOP。**



CGLib动态代理要点：

1. 代理过程在MethodInterceptor.invoke中
2. 通过Enhancer来创建代理对象



<!-- more -->



### 编写被代理类

```java
public class Chinese{

    public String doEat(String food) {
        return food;
    }

    public int showAge(int age) {
        return 18;
    }
}
```



### 编写代理类

```java
public class CGLibAction implements MethodInterceptor {
    private Object instance;
    public CGLibAction(Object instance) {
        this.instance = instance;
    }

    @Override
    public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
        objects[0] = "Use chopsticks to eat " + objects[0];
        return method.invoke(this.instance,objects);
    }
}
```



### 创建代理实例



```java
public class CGLibTest {
    public static void main(String[] args) {
        Chinese chinese = new Chinese();
        Enhancer enhancer = new Enhancer();
        Chinese action = (Chinese) enhancer.create(Chinese.class, new CGLibAction(chinese));
        System.out.println(action.doEat("seafood"));
    }
}
```

其中创建代理方法`org.springframework.cglib.proxy.Enhancer#create`定义：

> org.springframework.cglib.proxy.Enhancer#create(java.lang.Class, org.springframework.cglib.proxy.Callback)
>
> 创建拦截对象的辅助方法。 为了更好地控制生成的实例，请使用Enhancer的新实例而不是此静态方法。
>
> 参数：
> type - 要扩展的类或要实现的接口
> callback – 用于所有方法的回调

实现的`MethodInterceptor` 就是`Callback`的子类：

> public interface MethodInterceptor extends Callback



运行一下，得到结果：

```java
Use chopsticks to eat seafood

Process finished with exit code 0
```

