---
title: 从源码看PriorityQueue
date: 2021-12-22 09:01:39
tags: [Java,源码]
category: [开发,Java,源码]
---

### add/offer

> java.util.PriorityQueue#add
>
> 将指定元素插入此优先级队列。
> 返回：true （由Collection.add指定）
> 抛出：ClassCastException – 如果根据优先级队列的顺序无法将指定元素与当前在此优先级队列中的元素进行比较
> 			NullPointerException – 如果指定的元素为空

<!-- more -->

```java
// java.util.PriorityQueue#add

public boolean add(E e) {
    return offer(e);
}
```

进入offer -> siftUp，直接看siftUp函数

#### siftUp

> java.util.PriorityQueue#siftUp
>
> 在位置 k 处插入项 x，通过将 x 向上提升树直到它大于或等于其父项或者是根来保持堆不变。 简化和加速强制和比较。 Comparable 和 Comparator 版本被分成不同的方法，这些方法在其他方面是相同的。 （类似于 siftDown。）
> 参数：k - 要填补的位置
> 			x - 要插入的项目

```java
// java.util.PriorityQueue#siftUp

private void siftUp(int k, E x) {
    if (comparator != null)
        siftUpUsingComparator(k, x);
    else
        siftUpComparable(k, x);
}
```

这里根据有无比较器再分为两个情况，无比较器时使用自然顺序排序（Comparable natural ordering）：

#### siftUpComparable

```java
private void siftUpComparable(int k, E x) {
    // E或者它的父类必须实现了Comparable接口，不然会报ClassCastException
    Comparable<? super E> key = (Comparable<? super E>) x;
    while (k > 0) {
        int parent = (k - 1) >>> 1;
        Object e = queue[parent];
        if (key.compareTo((E) e) >= 0)
            break;
        queue[k] = e;
        k = parent;
    }
    queue[k] = key;
}
```

看这段代码，可以判断这里是一个**小顶堆**，每次元素进来，就和父节点比较（[parent = (k - 1) >>> 1]这里可以找到父节点，(当前节点-1)/2），如果父节点大于新加节点，则交换值，然后再和父节点的父节点比较，以此类推。



### poll

```java
// java.util.PriorityQueue#poll
public E poll() {
    if (size == 0)
        return null;
    int s = --size;
    modCount++;
    E result = (E) queue[0];
    E x = (E) queue[s];
    queue[s] = null;
    if (s != 0)
        siftDown(0, x);
    return result;
}
```

同理，出元素跟入的逻辑流程差不多，我们直接来到`siftDown` ->`siftDownComparable`：

```java
private void siftDownComparable(int k, E x) {
    Comparable<? super E> key = (Comparable<? super E>)x;
    int half = size >>> 1;        // loop while a non-leaf
    while (k < half) {
        int child = (k << 1) + 1; // assume left child is least
        Object c = queue[child];
        int right = child + 1;
        if (right < size &&
            ((Comparable<? super E>) c).compareTo((E) queue[right]) > 0)
            c = queue[child = right];
        if (key.compareTo((E) c) <= 0)
            break;
        queue[k] = c;
        k = child;
    }
    queue[k] = key;
}
```

这里把最后一个元素拿出来，重建小顶堆。
