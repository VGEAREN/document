---
title: Java类图
date: 2021-11-30 14:33:47
tags: [Java]
category: [开发,Java]
toc: true
---
类和类、类和接口、接口和接口之间存在一定关系，UML类图中一般会有连线指明它们之间的关系。关系共有六种类型，分别是**实现关系、泛化关系、关联关系、依赖关系、聚合关系、组合关系**。
下面引用一下别人的图：   
![类图](https://vgearen.github.io/images/Java类图/1.png)
<!-- more -->
### 实现关系(Realization)
很简单，就是`implements`

### 泛化关系(Generalization)
泛化就是继承`extends`

### 关联关系(Association)
分为单向关联和双向关联：
比如有两个类，一个Person类，一个身份证IDcard类
**单向关联**
``` java
class IDcard{
}

class Person{
  private IDcard card;
}
```

**双向关联**

``` java 
class IDcard{
  private Person person;
}

class Person{
  private IDcard card;
}
```

### 依赖关系（Dependency）
依赖关系是一种弱关联关系。如果对象A用到对象B，但是和B的关系不是太明显的时候，就可以把这种关系看作是依赖关系。如果对象A依赖于对象B，则 A “use a” B。比如驾驶员和汽车的关系，驾驶员使用汽车，二者之间就是依赖关系。
依赖关系在Java中的具体代码表现形式为**B为A的构造器**或**方法中的局部变量**、**方法或构造器的参数**、**方法的返回值**，或者**A调用B的静态方法**。
下面我们用代码清单1和代码清单2所示的Java代码来演示对象和对象之间的依赖关系。

代码清单1所示的`B`类定义了一个成员变量 `field1`，一个普通方法 `method1()` 和一个静态方法 `method2()`。

``` java
//代码清单1 B.java
public class B {
  public String field1;   //成员变量

  public void method1() {
    System.out.println("在类B的方法1中");
  }

  public static void method2() {                 //静态方法
    System.out.println("在类B的静态方法2中");
  }
}
```

代码清单2所示的`A`类依赖于`B`类，在`A`类中定义了四个方法，分别演示四种依赖形式。

``` java
/* 代码清单2 A.java
  A依赖于B
*/

public class A {
  public void method1() {
    //A依赖于B的第一种表现形式：B为A的局部变量
    B b = new B();
    b.method1();
  }

  public void method2() {
    //A依赖于B的第二种表现形式： 调用B的静态方法
    B.method2();
  }

  public void method3(B b)  {
    //A依赖于B的第三种表现形式：B作为A的方法参数
    String s = b.field1;
  }

  //A依赖于B的第四种表现形式：B作为A的方法的返回值
  public B method4() {
    return new B();
  }
}
```

### 聚合关系 (Aggregation)

表示整体由部分组成，但是整体和部分不是强依赖的，整体不存在了部分还是会存在。例如，公司部门与员工的关系，一个员工可以属于多个部门，一个部门撤消了，员工可以转到其它部门。

### 组合关系 (Composition)

和聚合不同，组合中整体和部分是强依赖的，整体不存在了部分也不存在了。比如公司和部门，公司没了部门就不存在了。但是公司和员工就属于聚合关系了，因为公司没了员工还在。


