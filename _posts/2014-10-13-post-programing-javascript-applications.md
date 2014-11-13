---
layout:     post
title:      编写JavaScript应用程序
date:       2014-10-13 21:42:29
summary:    编写JavaScript应用程序
categories: github
---


作者：埃里克·艾略特

Copyright © 2014 Eric Elliott

##### 目录

###### 前言

 - 介绍
 - 这本书适合哪些人
 - 这本书不适合哪些人
 - 单元测试
 - 本书的一些约定
 - Safari® Books Online
 - 如何联系我们
 - 感谢
 
    
 正文

1. JavaScript革命
    * JavaScript的优势
      * 性能
      * 对象
      * 语法
      * 第一类功能
      * 事件
      * 重用性
      * 网络结果 
    * 剖析一个经典的现代JavaScrip应用程序
      * 基础构架
      * JSON：数据存储和交换
      * NoSQL 数据存储
      * RESTful JSON Web服务
2. 方法
    * 副作用降到最低
    * 方法定义
      * 有名的函数表达式
      * 匿名函数
      * 立即调用方法表达式
      * 方法上下文
    * 方法作用域
      * 提升
      * 闭包
    * 方法设计
      * 命名参数变量
      * 方法的多态性
      * 泛型和集合的多态性
      * 方法链和流行的API
    * 函数式编程
      * 无状态的函数（也叫做纯函数）
      * 部分应用程序和柯里化
    * 异步操作
      * 回调函数
      * 允诺和延迟
    * 总结
3. 对象
    * 经典的继承已经过时了
    * 流行式的JavaScript
    * 原型
      * 委托原型
      * 原型克隆
      * 享元模式
    * 对象的创建
    * 工厂
    * 带有时间戳的原型继承
    * 总结
4. 模块
    * 模型化原则
    * 接口
    * 模块模式
    * 异步模块定义
      * 插件
      * node式模块
      * npm
      * ES6 模块
      * 使用CommonJS、npm、Grunt、Browserify构建客户端代码
        * 定义应用
        * 功能实现
        * 捆绑和部署
      * 结论
5. 关注点分离
      * 客户端关注点
        * 模块管理
        * 事件
        * 模型视图控制器 / MV*
        * 介绍和DOM操作
      * 服务端关注点
        * Node和Express入门
      * 总结
6. 访问控制
      * 认证
        * 密码
        * 证书
        * 多因素身份认证
        * 联邦及委托认证
      * 授权
        * 授权应用程序
        * OAuth 2.0
      * 总结
7. 日志
      * 调试
      * 服务端操作
      * 安全
      * 审计
      * 业务分析
        * 病毒因子
      * 记录清单
      * 记录请求
      * 记录错误
      * 示例日志输出
      * 记录服务警告
      * 记录目标
      * 分析和仪表化
      * 记录客户端事件
      * 解读数据
      * 总结
8. 构建RESTful API
      * 可用性
        * 专注
        * 一致性
      * 自描述：超媒体
        * 自解释
        * 超媒体即应用状态引擎
        * HTML 作为一个API媒介类型
        * Jade
        * Jiron
      * 响应的 API
      * 为速度的优化
      * 总结
9. 功能切换
      * 组织功能
        * 一个功能的范围
        * 功能组
      * 要素的寿命
        * 开发
        * 脚手架
        * 产品测试
        * 功能转出
        * 默认激活
        * 完整继承
      * 实现
      * 总结
10. 国际化
      * 总结

A.JavaScript 风格指导

  * 示例测试
  * QUnit 入门
  * 代码质量
  * 最佳实践快速参考
      * 缩进：一贯的风格
      * 使用分好
      * 花括号放在：右侧
      * 避免名字冲
      * 总是使用var
      * 一个方法使用一行var变量声明
      * 避免滥用常量
      * 必要的时候使用迭代器
      * 小心的私用if
      * 避免副作用
      * 不要使用switch
      * 不要使用eval()

索引

 

  