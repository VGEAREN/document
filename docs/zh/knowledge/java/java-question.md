---
title: JAVA QA
order: 2
---

### 面向对象的特征有哪些方面？ 

- **抽象**：抽象是将一类对象的共同特征总结出来构造类的过程，包括数据抽象和行为抽象两方面。抽象只关注对象有哪些属性和行为，并不关注这些行为的细节是什么。
- **继承**：继承是从已有类得到继承信息创建新类的过程。继承让变化中的软件系统有了一定的延续性，同时继承也是封装程序中可变因素的重要手段。
- **封装**：通常认为封装是把数据和操作数据的方法绑定起来，对数据的访问只能通过已定义的接口。面向对象的本质就是将现实世界描绘成一系列完全自治、封闭的对象。
- **多态**：多态性是指允许不同子类型的对象对同一消息作出不同的响应。

### 访问修饰符 `public` 、 `private` 、 `protected` 以及不写时的区别？ 

类的成员不写访问修饰时默认为 `package`。默认对于同一个包中的其他类相当于公开（public），对于不是同一个包中的其他类相当于私有（private）。受保护（protected）对子类相当于公开，对不是同一包中的没有父子关系的类相当于私有。Java中，外部类的修饰符只能是 public 或默认，类的成员（包括内部类）的修饰符可以是以上四种。

### String是最基本的数据类型吗？ 

不是，Java中的基本数据类型只有8个：`byte`、`short`、`int`、`long`、`float`、`double`、`char`、`boolean`；除了基本类型（primitive type），剩下的都是引用类型（reference type），Java 5以后引入的枚举类型也算是一种比较特殊的引用类型。

### `float f=3.4;`是否正确？ 

不正确。3.4是双精度数，将双精度型（double）赋值给浮点型（float）属于下转型会造成精度损失，因此需要强制类型转换 `float f =(float)3.4;` 或者写成 `float f =3.4F;`。

### `short s1 = 1; s1 = s1 + 1;`有错吗? `short s1 = 1; s1 += 1;` 有错吗？ 

对于 `short s1 = 1; s1 = s1 + 1;` 由于 1 是 int 类型，因此 `s1+1` 运算结果也是int 型，需要强制转换类型才能赋值给 short 型，编译不通过。

而 `short s1 = 1; s1 += 1;` 可以正确编译，因为 `s1+= 1;` 相当于 `s1 = (short)(s1 + 1);` 其中有隐含的强制类型转换。

### Java有没有goto？ 

goto 是Java中的保留字，但在目前版本的Java中没有使用。

### int 和 Integer 有什么区别？ 

Java为每一个基本数据类型都引入了对应的包装类型（wrapper class）， `int` 的包装类就是 `Integer` ，从 Java 5 开始引入了自动装箱/拆箱机制，使得二者可以相互转换。

``` java

public static void main(String[] args) {
    Integer f1 = 100, f2 = 100, f3 = 150, f4 = 150;
    System.out.println(f1 == f2);//true
    System.out.println(f3 == f4);//false
}
```

当我们给一个 Integer 对象赋一个 int 值的时候，会调用 Integer 类的静态方法 `valueOf` ，如果看看 `valueOf` 的源代码就知道发生了什么。

``` java
public static Integer valueOf(int i) {
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
```

如果整型（byte、short、int、long）字面量的值在 `-128` 到 `127` 之间，那么不会 new 新的 Integer 对象，而是直接引用常量池中的 Integer 对象。

### & 和 && 的区别？ 

`&` 运算符有两种用法：按位与；逻辑与。`&&` 运算符是短路与运算。

逻辑与跟短路与的差别是非常巨大的，虽然二者都要求运算符左右两端的布尔值都是 `true` 整个表达式的值才是 `true` 。 `&&` 之所以称为短路运算是因为，如果 `&&` 左边的表达式的值是 `false` ，右边的表达式会被直接短路掉，不会进行运算。

> 逻辑或运算符 `|` 和短路或运算符 `||` 的差别也是如此。

### `Math.round(11.5)` 等于多少？`Math.round(-11.5)` 等于多少？ 

`Math.round(11.5)` 的返回值是 `12` ，`Math.round(-11.5)` 的返回值是 `-11`。四舍五入的原理是在参数上加 `0.5` 然后进行下取整。

### switch是否能作用在 byte 上，是否能作用在 long 上，是否能作用在 String 上？ 

在 Java 5 以前， `switch(expr)` 中， `expr` 只能是 `byte` 、`short`、`char`、`int`；从 Java 5 开始，Java 中引入了枚举类型，`expr` 也可以是 enum 类型；从 Java 7 开始， `expr` 还可以是字符串 `String` ，但是长整型 `long` 在目前所有的版本中都是不可以的。

### 用最有效率的方法计算 2 乘以 8 ？ 

`2 << 3`（左移3位相当于乘以2的3次方，右移3位相当于除以2的3次方）。

### 数组有没有 `length()` 方法？ `String` 有没有 `length()` 方法？ 

数组没有 `length()` 方法，有length的属性。String有 `length()` 方法。

### 在Java中，如何跳出当前的多重嵌套循环？ 

在最外层循环前加一个标记如A，然后用break A;可以跳出多重循环。

### 构造器（constructor）是否可被重写（override）？ 

构造器不能被继承，因此不能被重写，但可以被重载。

### 两个对象 `x.equals(y) == true`，但却可有不同的 `hash code` ？ 

不对，如果两个对象 x 和 y 满足 `x.equals(y) == true`，它们的哈希码（hash code）应当相同

### 重载（Overload）和重写（Override）的区别。重载的方法能否根据返回类型进行区分？ 

方法的重载和重写都是实现多态的方式，区别在于 **重载是编译时的多态性**，而 **重写是运行时的多态性**。

重载发生在一个类中，**同名的方法如果有不同的参数列表**（参数类型不同、参数个数不同或者二者都不同）则视为重载。

重写发生在子类与父类之间，重写要求子类被重写方法与父类被重写方法有相同的返回类型（或子类型），不能比父类被重写方法声明更多的异常（里氏代换原则）。

### char 型变量中能不能存贮一个中文汉字，为什么？ 

char 类型可以存储一个中文汉字，因为 Java 中使用的编码是 Unicode （不选择任何特定的编码，直接使用字符在字符集中的编号，这是统一的唯一方法），**一个 char 类型占2个字节**，所以放一个中文是没问题的。

### 抽象类（abstract class）和接口（interface）有什么异同？ 

- 抽象类和接口都不能够实例化，但可以定义抽象类和接口类型的引用。
- 一个类如果继承了某个抽象类或者实现了某个接口都需要对其中的抽象方法全部进行实现，否则该类仍然需要被声明为抽象类。
- 接口比抽象类更加抽象，因为抽象类中可以定义构造器，可以有抽象方法和具体方法，而接口中不能定义构造器而且其中的方法全部都是抽象方法。
- 抽象类中的成员可以是 `private`、默认、 protected 、public的，而接口中的成员全都是public的
- 抽象类中可以定义成员变量，而接口中定义的成员变量实际上都是常量
- 有抽象方法的类必须被声明为抽象类，而抽象类未必要有抽象方法

### 静态内部类（Static Nested Class）和内部类（Inner Class）的不同 

Static Nested Class是被声明为静态（static）的内部类，它可以不依赖于外部类实例被实例化。而通常的 **内部类需要在外部类实例化后才能实例化**：`new Outer().new Inner();`

### 抽象的（abstract）方法是否可同时是静态的（static），是否可同时是本地方法（native），是否可同时被 synchronized 修饰？ 

都不能。抽象方法需要子类重写，而静态的方法是无法被重写的，因此二者是矛盾的。

本地方法是由本地代码（如C代码）实现的方法，而抽象方法是没有实现的，也是矛盾的。

synchronized 和方法的实现细节有关，抽象方法不涉及实现细节，因此也是相互矛盾的。

### 阐述静态变量和实例变量的区别 

静态变量是被static修饰符修饰的变量，也称为类变量，它属于类，不属于类的任何一个对象，一个类不管创建多少个对象，静态变量在内存中有且仅有一个拷贝；实例变量必须依存于某一实例，需要先创建对象然后通过对象才能访问到它。静态变量可以实现让多个对象共享内存。

### 如何实现对象克隆？ 

有两种方式：

1. 实现 `Cloneable` 接口并重写 Object 类中的 `clone()` 方法；
2. 实现 `Serializable` 接口，通过对象的序列化和反序列化实现克隆，可以实现真正的深度克隆。

### `String s = new String("xyz");`创建了几个字符串对象？ 

两个对象，一个是常量池的 `"xyz"` ，一个是用 `new` 创建在堆上的对象。

### 接口是否可继承（extends）接口？抽象类是否可实现（implements）接口？抽象类是否可继承具体类（concrete class）？ 

接口可以继承接口，而且支持多重继承。抽象类可以实现(implements)接口，抽象类可继承具体类也可以继承抽象类。

### Error和Exception有什么区别？ 

Error表示系统级的错误和程序不必处理的异常，是恢复不是不可能但很困难的情况下的一种严重问题；比如内存溢出，不可能指望程序能处理这样的情况；Exception表示需要捕捉或者需要程序进行处理的异常，是一种设计或实现问题；也就是说，它表示如果程序运行正常，从不会发生的情况。

### 运行时异常与受检异常有何异同？ 

运行时异常表示虚拟机的通常操作中可能遇到的异常，是一种常见运行错误，只要程序设计得没有问题通常就不会发生。

受检异常跟程序运行的上下文环境有关，即使程序设计无误，仍然可能因使用的问题而引发。

### `try{}` 里有一个 `return` 语句，那么紧跟在这个 `try` 后的 `finally{}` 里的代码会不会被执行？如果 `finally{}` 里也进行了 `return` 最终返回的哪个值？ 

`finally` 会执行，在方法返回调用者前执行。如果 `finally{}` 里也进行了 `return` 最终返回 `finally` 里的 `return`

### List、Set、Map是否继承自Collection接口？ 

List、Set 是，Map 不是。Map是键值对映射容器，与List和Set有明显的区别

### Thread类的 `sleep()` 方法和对象的 `wait()` 方法都可以让线程暂停执行，它们有什么区别？ 

`sleep()`方法是线程类（Thread）的静态方法，调用此方法会让当前线程暂停执行指定的时间，将执行机会（CPU）让给其他线程，但是对象的锁依然保持，因此休眠时间结束后会自动恢复。

`wait()`是Object类的方法，调用对象的 `wait()` 方法导致当前线程放弃对象的锁（线程暂停执行），进入对象的等待池（wait pool），只有调用对象的 `notify()` 方法（或 `notifyAll()` 方法）时才能唤醒等待池中的线程进入等锁池（lock pool），如果线程重新获得对象的锁就可以进入就绪状态。

### 线程的 sleep() 方法和 yield() 方法有什么区别？ 

1. `sleep()`方法给其他线程运行机会时不考虑线程的优先级，因此会给低优先级的线程以运行的机会；`yield()`方法只会给相同优先级或更高优先级的线程以运行的机会；
2. 线程执行sleep()方法后转入阻塞（blocked）状态，而执行yield()方法后转入就绪（ready）状态；
3. `sleep()`方法声明抛出InterruptedException，而yield()方法没有声明任何异常；
4. `sleep()`方法比 yield() 方法（跟操作系统CPU调度相关）具有更好的可移植性。