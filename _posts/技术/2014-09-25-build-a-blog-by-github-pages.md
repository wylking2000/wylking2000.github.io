---
layout: post
title: GitHub Pages 搭建博客
category: 技术
tags: 技术
keywords: 博客 Github Pages jekyll
description: 使用GitHub Pages网站提供的免费服务快捷的搭建一个静态博客系统，永久免费托管，速度还非常快
---

[GitHub Pages](https://pages.github.com) 是一个非常好的静态博客系统服务网站，她接受任何人免费搭建自己的静态网站，只不过代码是公开的，仅仅是为了搭建自己的博客系统，用于学习交流，那简直是太完美了。

下面就介绍如何使用[GitHub Pages](https://pages.github.com) 搭建自己的“静态”博客（实际上是内容是动态的，可以自己方便的发表管理博客）。

#### 1. 使用自己的 {{用户名}} + "github.io" 创建一个仓库作为你要创建博客的网站目录。

比如你在github上的账号是：githubuser，

那么你创建的仓库名称应该是：githubuser.github.io。

这个很关键，我刚开始创建成了githubuser，

发现不能使用如下路径访问：
{% highlight ruby %}
http://{你的用户名}.github.io 
{% endhighlight %}
访问

#### 2. 克隆刚才创建仓库代码到本地
{% highlight ruby %}
git clone https://github.com/{你的用户名}/{你的用户名}.github.io
{% endhighlight %}

#### 3. 创建自己的第一个页面
{% highlight ruby %}
cd username.github.io
echo "Hello World" > index.html
{% endhighlight %}

#### 4. 提交到远程仓库
{% highlight ruby %}
git add --all
git commit -m "Initial commit"
git push
{% endhighlight %}

#### 5. 完成了，你可以预览你的页面了
预览地址：**http://{你的用户名}.github.io**
