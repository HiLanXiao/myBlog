---
layout: Post  # 必须
title: 「持续记录」Rust 学习笔记  # 博客标题（必须）
subtitle: 随手记录下个人的简要理解  # 博客副标题（可选）
date: 2022-02-14  # 博客发表日期（可选）
author: 烂笑  # 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
useHeaderImage: true  # 是否在博客中显示封面图（可选，默认：false）
headerImage: https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/f0fcc77c0f6f16d4727816ebdf010bd3496fdf5d.png  # 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）
headerMask: rgba(40, 57, 101, .4)  # 封面图遮罩（可选）
headerImageCredit: 网图  # 图片来源，比如图片作者的名字（可选，只在 "useHeaderImage: true" 时有效）
# headerImageCreditLink: https://www.artstation.com/artwork/nLY0K  # 图片来源的链接（可选，只在 "useHeaderImage: true" 时有效）
tags:  # 博客标签（可选）
  - 学习笔记
  - Rust
---
## 「持续记录」Rust 学习笔记

- rust 的包管理工具
  
  - Cargo
- 打印
  - rust 打印（`println!() & print!()`），`{}` 是占位符，`{index}` 可以索引可变参数
- 变量
  - 不可变变量 => let a = 'abc'  => 不可 a = 'ab'  => 可 let a = 1 <= 【重影】=> 名字可以被重新利用
  - 常量 => const a = 'abc' => 不可 let a = 'ab' => 常量名字不能被重新利用
  - 可变变量 => let mut a = 'abc' => 可 a = 'ab' => 不可 a = 123 => 值可以变，类型不可以变
- 数据类型
  - 整数型
    - 有符号 i，无符号 u，8 ~ 128 + size(usize/isize => 根据平台位数决定)
  - 浮点类型
    - f32 / f64
  - 布尔
    - bool
  - 字符
    - char
    - 四字节 Unicode 标量值
  - 复合类型（元组）
    - let a: (i32, f64, u8) = (500, 6.4, 1);
    - let (x, y, z) = tup;
  - 数组
    - let a = [1,2,3]
    - let [b,c,d] = a
    - let e: [i32; 5] = [1, 2, 3, 4, 5];
  - 数值计算
    - 可以 +=，不可以 ++ 
- 函数

  - fn
  - 风格：小写字母下划线分割
  - 类型声明类似 ts，返回值类型声明 ->
- 表达式

  - {} 内可以写复杂的表达式
  - 函数体表达式不等于函数体，不能使用 return 关键字
- if

  - 必须是 bool，没有（）
  - 因为 {} 可以是函数体表达式，所以相当于是三元表达式
- rust 的内存管理

  - 每个值有个唯一的所有者（栈中堆的地址在传递后失效），传递要用 clone
  - 运行范围结束自动清除
- 基本数据类型：

  - 所有整数类型 i32
  - 布尔类型 bool
  - 所有浮点类型 f32
  - 字符类型 char
  - 包括以上内容的元组

- 切片 -> 对数据值的部分

