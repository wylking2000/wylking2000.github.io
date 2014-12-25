---
layout: post
title: 同一台电脑使用不同的Github账号提交代码到不同的仓库的配置方法
category: 技术
tags: 技术
keywords: 多账户 Github 多仓库 不同的 配置
description: 同一台电脑使用不同的Github账号提交代码到不同的仓库的配置方法
---


### 申请一个新的GitHub账号

申请的操作还是非常简单的，在[GitHub首页上](http://github.com/)就可以完成申请。假设你申请的新的GitHub账号是：github_user2。而之前你已经有的一个账号是：github_user1。

### 你需要为你新申请的账号生成一个新的公钥

参考Github官方的说明，[如何创建你的公钥](https://help.github.com/articles/generating-ssh-keys/)，因为是第二个公钥了，所以可以参考我这里的说明：

#### 先检查一下之前的公钥名称是什么：

		ls -al ~/.ssh

你之前的可能是这样的：

	id_dsa.pub
 	id_ecdsa.pub
 	id_ed25519.pub
 	id_rsa.pub

#### 生成一个密钥对

		ssh-keygen -t rsa -C "your_apply_github_user2@163.com"

这里你需要填写你的邮箱地址，这个地址一般是你申请你的GitHub账号时候的邮箱地址。


	Generating public/private rsa key pair.
	# Enter file in which to save the key (/Users/you/.ssh/id_rsa):[Press enter]

这个地方，你最好手动新起一个名字，不然会跟上一个重叠，或者覆盖，这里我们假设你输入了：user2_rsa，这个时候，你应该会得到这样的信息：

	Your identification has been saved in ~/.ssh/user2_rsa.
	# Your public key has been saved in ~/.ssh/user2_rsa.pub.
	# The key fingerprint is:
	# 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_apply_github_user2@163.com

这时候，你需要把你新创建的密钥添加到ssh-agent里面：

	eval "$(ssh-agent -s)"
	ssh-add ~/.ssh/user2_rsa

### 把你的公钥添加的到你的GitHub账户里。

![](/public/pics/add-ssh-key-to-your-github-account.png)

### 在你的~/.ssh文件夹下找到config文件，如果没有你自行创建，然后在里面做如下配置：

		# 改文件用于配置私钥对应的服务器
		# 默认的账户信息
		Host github.com
		  HostName github.com
		  User github_user1
		  IdentityFile ~/.ssh/id_rsa

		# 新增的账户信息
		Host github_newhost
		  HostName github.com
		  User github_user2
		  IdentityFile ~/.ssh/user2_rsa

这时候，你就可以做如下的测试，查看远程服务器是否接受你的信息了：

		ssh -T git@github.com

那么会得到如下信息：

		Hi github_user1! You've successfully authenticated, but GitHub does not provide shell access.

然后再做新增账号的测试：

		ssh -T git@github_newhost

那么会得到如下信息：

		Hi github_user2! You've successfully authenticated, but GitHub does not provide shell access.

如果看到这个信息，那么恭喜你，你已经配置成功了一大半了。

### 然后在你新的GitHub账户里新建仓库，然后把这个仓库克隆到你本地电脑之后，进入这个目录：

		git remote set-url origin git@github_newhost:github_user2/project_name

这个时候，你就可以直接git push你的内容到远程服务器了。到此，你才真正的打通了可以2个账户分别提交代码到2个仓库了！