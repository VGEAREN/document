---
lang: zh-CN
title: SpringBoot
description: SpringBoot
---
## SpringCache不生效原因
SpringCache 包括注解 @Cacheable、@CachePut、 @CacheEvict

### 问题情景：

一个类中有方法A和方法B，调用方法A时，每次都会调用数据库。和期望不符。
``` java
    /**
     * 方法A 
     */
    public Manager info() {
        return info(ManagerHelper.getManagerId());
    }

    /**
     * 方法B
     */
    @Cacheable(key = "#id")
    public Manager info(Long id) {
        return managerRepository.findById(id).orElseThrow(EntityExistsException::new);
    }
```
### 问题原因：

Spring 缓存注解是基于Spring AOP切面，必须走代理才能生效，同类调用或者子类调用父类带有缓存注解的方法时属于内部调用，没有走代理，所以注解不生效。

### 解决方法：

方式一：将缓存的方法抽离放到一个单独的类中，然后再在service的实现类中进行调用；

方式二：手动使用CacheManager来获得缓存效果。

### 总结：

- 使用注解 `@Cacheable` 的对象必须是Spring管理的Bean。
- 调用者必须是另一个方法。

以下情形注解式缓存是不起作用的：

同一个Bean内部方法调用，子类调用父类中有缓存注解的方法