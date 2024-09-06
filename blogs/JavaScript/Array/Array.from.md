---
title: Array.from()
date: 2024/09/04
author: joker
tags:
 - 前端
categories:
 - JavaScript
---
Array.from() 静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。

转换异步的可迭代对象到数组，可以使用 Array.fromAsync()。

``` js
    console.log(Array.from('foo'));
    // Expected output: Array ["f", "o", "o"]

    console.log(Array.from([1, 2, 3], (x) => x + x));
    // Expected output: Array [2, 4, 6]
```