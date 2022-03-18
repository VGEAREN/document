---
title: JAVA注解的底层实现
date: 2021-12-11 14:29:40
tags: [Java,源码]
category: [开发,Java,源码]
toc: true
---

## 前言

注解的声明如下：

> {InterfaceModifier} @interface Identifier AnnotationTypeBody  
> 接口修饰符 @interface 注解标识符 注解类型的内容


<!-- more -->
根据类图，我们可以知道每个注解的父接口都是**java.lang.annotation.Annotation**。



## 底层实现



先定义一个注解：

```java
# AnnotationTest.java
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Target(ElementType.TYPE)
public @interface AnnotationTest {

    String value() default "some test";
}

# Person.java
@AnnotationTest("person test")
public class Person {
}

# Test.java
public class Test {
    public static void main(String[] args) {
->      Annotation[] declaredAnnotations = Person.class.getDeclaredAnnotations(); // 在这里打断点debug一下
        for (Annotation declaredAnnotation:declaredAnnotations){
            String name = declaredAnnotation.getClass().getName();
            System.out.println(name);
        }
    }
}
```



### AnnotatedElement

这里先简单介绍下`AnnotatedElement `，如果看到后面对某个函数不懂可以倒回来看这里：

> AnnotatedElement 接口是所有程序元素（Class、Method和Constructor）的父接口，所以程序通过反射获取了某个类的AnnotatedElement对象之后，程序就可以调用该对象的方法来访问Annotation信息。我们看下具体的先关接口
>
> - `boolean isAnnotationPresent(Class<?extends Annotation> annotationClass)`
>
> 判断该程序元素上是否包含指定类型的注解，存在则返回true，否则返回false。注意：此方法会忽略注解对应的注解容器。
>
> - `<T extends Annotation> T getAnnotation(Class<T> annotationClass)`
>
> 返回该程序元素上存在的、指定类型的注解，如果该类型注解不存在，则返回null。
>
> - `Annotation[] getAnnotations()`
>
> 返回该程序元素上存在的所有注解，若没有注解，返回长度为0的数组。
>
> - `<T extends Annotation> T[] getAnnotationsByType(Class<T> annotationClass)`
>
> 返回该程序元素上存在的、指定类型的注解数组。没有注解对应类型的注解时，返回长度为0的数组。该方法的调用者可以随意修改返回的数组，而不会对其他调用者返回的数组产生任何影响。`getAnnotationsByType`方法与 `getAnnotation`的区别在于，`getAnnotationsByType`会检测注解对应的重复注解容器。若程序元素为类，当前类上找不到注解，且该注解为可继承的，则会去父类上检测对应的注解。
>
> - `<T extends Annotation> T getDeclaredAnnotation(Class<T> annotationClass)`
>
> 返回直接存在于此元素上的所有注解。与此接口中的其他方法不同，该方法将忽略继承的注解。如果没有注解直接存在于此元素上，则返回null
>
> - `<T extends Annotation> T[] getDeclaredAnnotationsByType(Class<T> annotationClass)`
>
> 返回直接存在于此元素上的所有注解。与此接口中的其他方法不同，该方法将忽略继承的注解
>
> - `Annotation[] getDeclaredAnnotations()`
>
> 返回直接存在于此元素上的所有注解及注解对应的重复注解容器。与此接口中的其他方法不同，该方法将忽略继承的注解。如果没有注解直接存在于此元素上，则返回长度为零的一个数组。该方法的调用者可以随意修改返回的数组，而不会对其他调用者返回的数组产生任何影响。

### Class.java

#### getDeclaredAnnotations

我们进入到`getDeclaredAnnotations`方法中可以发现：`Class.java` 里面实现了`java.lang.reflect.AnnotatedElement`，可以通过调用`Annotation[] getDeclaredAnnotations()`方法获取注解：

`public Annotation[] getDeclaredAnnotations()`的定义：

> 返回直接出现在此元素上的注解。 此方法忽略继承的注解。 如果该元素上没有直接存在的注解，则返回值是一个长度为 0 的数组。该方法的调用者可以自由修改返回的数组； 它不会影响返回给其他调用者的数组。
>
> 返回：直接出现在此元素上的注解
> 自从：1.5

进入`getDeclaredAnnotations`方法：

```java
# java.lang.Class#getDeclaredAnnotations
public Annotation[] getDeclaredAnnotations()  {
    return AnnotationParser.toArray(annotationData().declaredAnnotations);
}
```

可以看到`declaredAnnotations`是个Map：

```java
# java.lang.Class.AnnotationData#declaredAnnotations
final Map<Class<? extends Annotation>, Annotation> declaredAnnotations;
```

直接通过获取Map的值就可以返回注解了，这么说只要深入这个`annotationData().declaredAnnotations`的初始化过程，就可以知道注解是怎么初始化的了。



#### annotationData

进入`annotationData()`：

```java
# java.lang.Class#annotationData
private AnnotationData annotationData() {
    while (true) { // retry loop
        AnnotationData annotationData = this.annotationData;
        int classRedefinedCount = this.classRedefinedCount;
        if (annotationData != null &&
            annotationData.redefinedCount == classRedefinedCount) {
            return annotationData;
        }
        // null or stale annotationData -> optimistically create new instance
        AnnotationData newAnnotationData = createAnnotationData(classRedefinedCount);
        // try to install it
        if (Atomic.casAnnotationData(this, annotationData, newAnnotationData)) {
            // successfully installed new AnnotationData
            return newAnnotationData;
        }
    }
}
```

进来先获取`annotationData`如果存在的话直接返回，没有的话通过`createAnnotationData`创建。

```java
private static class AnnotationData {
    final Map<Class<? extends Annotation>, Annotation> annotations;
    final Map<Class<? extends Annotation>, Annotation> declaredAnnotations;

    // Value of classRedefinedCount when we created this AnnotationData instance
    final int redefinedCount;

    AnnotationData(Map<Class<? extends Annotation>, Annotation> annotations,
                   Map<Class<? extends Annotation>, Annotation> declaredAnnotations,
                   int redefinedCount) {
        this.annotations = annotations;
        this.declaredAnnotations = declaredAnnotations;
        this.redefinedCount = redefinedCount;
    }
}
```

`AnnotationData`有三个常量，`annotations`和`declaredAnnotations`都是`Map<Class<? extends Annotation>, Annotation>`，key为注解的注解类型，value实际上是该注解的代理实例：

1. annotations：所有注解包括继承的注解
2. declaredAnnotations： 作用于此元素上的注解
3. redefinedCount： classRedefinedCount用于判断`AnnotationData`是否过时

> 这个方法有另外一个知识点，CAS（Compare And Swap）,即比较并替换，实现并发算法时常用到的一种技术。



#### createAnnotationData

进入`createAnnotationData`，代码太长了就不贴了，这个方法主要做的事情：

1. 获取类本身的Annotations（`declaredAnnotations`）
2. 如果父类不为空，获取父类的Annotations（`superAnnotations`）
3. 将两个Annotations塞入`Map<Class<? extends Annotation>, Annotation> annotations`返回

好了，继续来看怎么获取注解，可以看到是通过`AnnotationParser.parseAnnotations`获取：

```java
# java.lang.Class#createAnnotationData
Map<Class<? extends Annotation>, Annotation> declaredAnnotations =
    AnnotationParser.parseAnnotations(getRawAnnotations(), getConstantPool(), this);
```



### AnnotationParser.java

`AnnotationParser`是个啥呢？

> Java 编程语言注解的解析器。 将编译器发出的注解字节流翻译成注解对象。



#### parseAnnotations

`AnnotationParser.parseAnnotations`又是干啥的呢？

> 解析由指定字节数组描述的注解。 解析指定常量池中的常量引用。 该数组必须包含一个注解数组，如 RuntimeVisibleAnnotations_attribute 中所述： 
>
> ​	u2 num_annotations; 
>
> ​	annotation annotations[num_annotations];
>
> 抛出：AnnotationFormatError – 如果发现注解格式错误



```java
# sun.reflect.annotation.AnnotationParser#parseAnnotations
public static Map<Class<? extends Annotation>, Annotation> parseAnnotations(
            byte[] rawAnnotations,
            ConstantPool constPool,
            Class<?> container) {
    if (rawAnnotations == null)
        return Collections.emptyMap();

    try {
        return parseAnnotations2(rawAnnotations, constPool, container, null);
    } catch(BufferUnderflowException e) {
        throw new AnnotationFormatError("Unexpected end of annotations.");
    } catch(IllegalArgumentException e) {
        // Type mismatch in constant pool
        throw new AnnotationFormatError(e);
    }
}
```

`getRawAnnotations()`和`getConstantPool()`都是native方法：
`getRawAnnotations`：获取自定义注解类型的字节码
`getConstantPool`：获取this.Class的常量池，因为它里面有注解属性值



然后是`sun.reflect.annotation.AnnotationParser#parseAnnotations2`

​				-->  `sun.reflect.annotation.AnnotationParser#parseAnnotation2(和上面的不是同一个方法！)

> parseAnnotations2主要是将parseAnnotation2返回的注解类塞进Map里，然后一起返回

#### parseAnnotation2

而`parseAnnotation2`的作用是

1. 将从之前两个native方法（`getRawAnnotations()`和`getConstantPool()`）中获取注解类
2. 获取注解的参数，注解的参数也是存在this.Class的常量池中，如果为空则取注解默认值

然后把获取到的**注解类**及**注解参数**传给`annotationForMap`。



#### annotationForMap

```java
public static Annotation annotationForMap(final Class<? extends Annotation> type,
                                          final Map<String, Object> memberValues)
{
    return AccessController.doPrivileged(new PrivilegedAction<Annotation>() {
        public Annotation run() {
            return (Annotation) Proxy.newProxyInstance(
                type.getClassLoader(), new Class<?>[] { type },
                new AnnotationInvocationHandler(type, memberValues));
        }});
}
```

最后到`annotationForMap`，通过入参的**注解类**及**注解参数**创建JDK动态代理实例返回，其中`AnnotationInvocationHandler`是用于 Annotation 的动态代理实现。

> ```java
> public static Object newProxyInstance(ClassLoader loader,
>                                       Class<?>[] interfaces,
>                                       InvocationHandler h)
> ```
>
> 返回指定接口的代理类的实例，该接口将方法调用分派到指定的调用处理程序。
> Proxy.newProxyInstance抛出IllegalArgumentException的原因与Proxy.getProxyClass相同。
>
> 参数：loader – 定义代理类的类加载器
> 			interfaces- 代理类要实现的接口列表
>
> ​			h – 将方法调用分派到的调用处理程序
> 返回：具有代理类的指定调用处理程序的代理实例，该代理类由指定的类加载器定义并实现指定的接

## 总结

注解的底层实现就是**JDK动态代理**，JDK通过`java.lang.reflect.AnnotatedElement`接口实现对注解的解析。