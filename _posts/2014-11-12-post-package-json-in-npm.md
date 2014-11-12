---
layout:     post
title:      npm中的package.json介绍
date:       2014-11-12 14:43:00
summary:    翻译npm官方页面
categories: github
---

#### 介绍

这个文档里有所有你需要知道的package.json字段的信息，package.json必须是一个JSON，而不仅仅是JavaScript对象字面量。

这个配置文件里设置的配置作用是会受到npm config里的配置影响到的。

##### name

在package.json中最重要的信息字段就是`name`和`version`。这2个也是确实必须包含的字段，如果没有这2个字段，你的这个包就安装不上。name和version字段组合在一起就形成了一个唯一的标示。包的变动需要伴随着版本号的变动。

`name`就是你的这个包叫什么，一些提示：

- 不要把"js"和"node"写到name里。自从你开始写这个package.json文件开始，这个项目就是一个js项目，所以你不需要重复指明了，并且你还可以在下面要讲到的`engines`字段里可以配置nodejs的版本。
- 这个名字将来会放到URL的结尾处、作为命令行参数使用和作为文件夹名字。所以，任何会引起url不安全的字符都不能使用，并且不能以*点*和*下划线*开头。
- 这个名字将来会被作为require()的参数传入到程序中，所以应该尽量的短一些，并且能够见名知意。
- 你还需要在[这里](http://registry.npmjs.org/)查看你的名字是否被占用。假如你的包名字是：npmdemo，你可以这样访问这个地址查看是否被占用：http://registry.npmjs.org/npmdemo

包名也可能会被加上范围前缀，比如`@myorg/mypackage`。具体可以找到 `npm-scope(7)`查看更多细节。

##### version

在package.json中最重要的信息字段就是`name`和`version`。这2个也是确实必须包含的字段，如果没有这2个字段，你的这个包就安装不上。name和version字段组合在一起就形成了一个唯一的标示。包的变动需要伴随着版本号的变动。

你的版本号必须能够被 `node-semver`正确解析，也就是说符合语义化的版本发布规则。这个模块已经跟npm绑定在一起了。(`npm install semver` 来安装使用)

更多关于版本和取值范围的介绍可以看 semver(7)。

##### description

是一个字符串形式的描述，可以帮助人们找到你的包，它出现在 `npm search` 列表里。

##### keywords

关于包关键字的一个字符串数组，可以帮助人们找到你的包，它出现在`npm search`列表里。

##### homepage

项目首页的链接地址

##### bugs

里面包含了`url`和`email`字段，表示当使用者发现这个包有问题的时候，把问题提交到哪个地址或者发往哪个邮箱。

这个字段看起来可能这样：

		{ "url" : "http://github.com/owner/project/issues"
		, "email" : "project@hostname.com"
		}
		
你可以写上上面的任何一个字段或者两个字段都写上，你也可以使用一个地址字符串代替这个对象。

如果提供得是url形式的字符串，会被用于`npm bugs`命令。

##### licese

你应该给你的包提供一个授权协议，这样人们才能知道如何才能获得你的使用授权，有哪些限制。

最简单的方式就是使用标准的类似BSD-3-Clause或者MIT等授权。就像这样：

		{"licese":"BSD-3-Clause"}
		
你可以查看[完整的授权类型](https://spdx.org/licenses/)。理想情况下推荐你选择 [OSI](http://opensource.org/licenses/alphabetical)。

你也可以在你的包文件里包含一个LICESE文件。

##### author/contributors

作者是一个人，这里是一个对象存储，里面有名字、邮箱、主页地址等信息，就像这样：

			{ "name" : "Barney Rubble"
			, "email" : "b@rubble.com"
			, "url" : "http://barnyrubble.tumblr.com/"
			}
			
你也可以像如下形式的简写，npm也能够解析：

		"Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"
		
邮箱和网址都是可选的。

npm也设置了一个最高级别的维护字段"maintainers"用户保存这个包的贡献者。

##### files

这个字段是一个文件列表数组。如果你在数组的一项里书写的是一个文件夹，那么这个文件夹下地所有的文件默认是被包含进去的（除非你在其他的忽略文件中明确指出）。

你也可以书写一个`.npmignore`文件放在你的包的根目录，这个文件里列举的文件会被包忽略，就像`.gitignore`的作用一样。

##### main

这个字段是模块的ID，也是你整个包文件运行的入口。具体哪个文件是你的入口文件，这里是设置的地方。

##### bin

经常有一些包可以在全局就可以运行，那么你就可以在这里设置，设置代码类似：

		{ "bin" : { "npm" : "./cli.js" } }
所以当你安装了这个包之后，npm就会创建`cli.js`软链接放在`/usr/local/bin/npm`下面。

下面的两种方式是等价的：

		{ "name": "my-program"
		, "version": "1.2.5"
		, "bin": "./path/to/program" }
		
跟这个是一样得：
		
		{ "name": "my-program"
		, "version": "1.2.5"
		, "bin" : { "my-program" : "./path/to/program" } }

