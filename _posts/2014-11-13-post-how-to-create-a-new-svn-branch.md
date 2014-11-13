---
layout:     post
title:      在svn中如何创建一个新的分支
date:       2014-11-13 14:55:29
summary:    如何使用svn命令行创建一个新的svn分支
categories: github
---

假如你的具有svn主干和分支的权限，
主干路径：svn://svn.xxxdemo.com/project-a/trunk
分支路径：svn://svn.xxxdemo.com/project-a/brunches

那么你希望创建一个新的分支路径是：svn://svn.xxxdemo.com/project-a/brunches/20141113-item-feature

那么你的可以在terminal里输入如下命令（假设你已经在trunk目录）：

        svn copy svn://svn.xxxdemo.com/project-a/trunk svn://svn.xxxdemo.com/project-a/branches/20141113-item-feature -m 'This is my new branch, I will develop same new features'
        
好了，通过上面的命令，你就创建完成了一个新的分支：svn://svn.xxxdemo.com/project-a/brunches/20141113-item-feature ，你现在可以检出进行开发了