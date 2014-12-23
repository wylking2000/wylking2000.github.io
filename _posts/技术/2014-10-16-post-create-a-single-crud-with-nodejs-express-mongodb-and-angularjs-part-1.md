---
layout: post
title: 使用Node.js,Express,MongoDB和AngularJS创建简单地CRUD,第一部分
category: 技术
tags: 技术
keywords: 博客 Github Pages jekyll
description: 使用Node.js,Express,MongoDB和AngularJS创建简单地CRUD,第一部分
---

## 背景

上周（三月30和31日）我参加了[2014哥斯达黎加BarCamp](http://www.barcamp.cr/)，是一种国际研讨会网络，此类研讨会是开放、由参与者相互分享的工作坊式会议，议程内容由参加者提供，焦点通常放在发展初期的网际应用程式、相关开放源代码技术、社交协定思维，以及开放资料格式。

我参加了，并作为嘉宾分享了 [Nodejs和创业精神](https://slidebean.com/p/Ujc7VeEf7d/Nodejs-y-Emprendedurismo)，Node是如何帮助人们更容易的建立原型、开发和架设一个Web应用，尤其是那些希望减少预算的创业者。其中一个出席者希望我能介绍一下Node.js操作MongoDB的简单CRUD，因此这就是我写这篇文章的动力。

尽管有简单地CRUD框架，比如[Sails.js](http://sailsjs.org/)或者[Meteor](https://www.meteor.com/)，我会尽可能比较容易的让你理解使用[Express](http://expressjs.com/)CRUD操作。

## Node.js

我们知道，[Node.js](http://www.nodejs.org)是服务端开发速度最快，方便扩展的JavaScript网络应用程序。它已经被创业公司或者中型企业如[Uber](https://www.uber.com/)或者[Medium](https://medium.com/)，甚至像[PayPal](https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/)或者[Wallmart](http://nodejs.org/video/)所采用，**所以Node.js已经具备企业能力**。

Node.js是基于[Google V8 engine](https://code.google.com/p/v8/)，用C++编写，包括其他的Node.js核心组件。

## Express.js

[Express](http://expressjs.com/)是一个比较小的Web应用程序框架，用于构建性能优越的API。也有一些其他的Node.js框架，其实也是基于Express的，[点击这里查看完整列表](http://nodeframework.com/)

## MongoDB

[MongoDB](http://www.mongodb.org/) 是一个快速的、强壮的开源NoSQL文档数据库(JSON风格文档)，也是用C++编写的。

## Mongoose

[Mongoose](http://mongoosejs.com/)是一个为对象模型设计的ODM（对象文档映射器），提供了一个逻辑层用来写MongoDB验证、铸造、业务逻辑等功能。

## Angular.js

[Angular.js](https://angularjs.org/)是一个客户端的MVVM(模型-视图-视图-模型)框架，用于创建单页面Web应用程序，我们会用它来跟Node.js提供的API进行交互。

![image](/public/pics/50454122.jpg)

---

## 动手

现在，我来提供一个场景用于练习我们的例子。在第一部分，我们开发出API，第二部分我们在前端页面会使用到这些API。

### 1- Node.js 安装

在这一步之前你已经安装过Node.js，那这一步你就不用操作了。如果你没有安装，请从[这里下载安装](http://nodejs.org/download/)。**如果你不知道是否安装过**，你只需要在你的电脑命令行里运行`node --version`如果你能看到版本号就说明你已经安装了，否则表示未安装。

#### 关于Node.js版本

我鼓励你安装最新的稳定版本Node.js，这里有一个很方便的[包叫“n”可以很方便的处理你机器上的Node.js版本](https://github.com/visionmedia/n)，要安装这个包只需要运行：

    npm install -g n
    
然后安装最新稳定版本Node.js只需要执行如下语句：

    n stable
 
如果你想切换Node.js版本，你只需要运行 `n` 你就可以选择Node.js的版本了。
	
	n
	
### 2- 创建package.json文件

你几乎会在任何一个Node.js项目中都会看到package.json文件。这个文件**汇集了关于我们想怒的最基本和最重要的信息**就像项目名称、版本、依赖等。

一个最基本的package.json文件应该是这样的：

	{
		"name": "simple-express-crud",
		"version": "0.0.1",
		"author": "Kevin Blanco",
		"description": "Simple CRUD with Node.js, MongoDB, Mongoose and Express Framework",
		"scripts": {
			"start": "node app.js"
		},
		"lincense": "MIT"
	}
	
现在我们有了一个基本的JSON结构的文件，让我们来安装后面会用到的包。在输出控制台中，转到`package.json`所在的目录，然后执行如下命令：

	npm install express --save
	
和

	npm install mongoose --save
	
**为了使用Express 4，我们需要安装 bodyParse，methodOverride 和 morgan**

	npm install morgan --save
	npm install body-parse --save
	npm install method-override --save
	
`--save`参数会帮助我们添加刚才安装的模块依赖语句到package.json文件的dependancies中。

### 3- 创建app.js文件

现在我们已经有package文件了，也安装了模块了，让我们开始编写JS代码 ：）。创建一个叫`app.js`的文件，跟`package.json`并列在同一个目录。（注意：如果你创建的文件不叫app.js，你需要在package.json中的scripts的start处修改成你创建的文件名称）

	/*
 	* Main App file App.js
 	* @author Kevin Blanco
 	*/


	// Dependencies requirements, Express 4
	var express        = require('express');
	var morgan         = require('morgan');
	var bodyParser     = require('body-parser');
	var methodOverride = require('method-override');
	var mongoose        = require("mongoose");
	var app            = express();

	app.use(express.static(__dirname + '/public'));
	app.use(morgan('dev'));
	app.use(bodyParser());
	app.use(methodOverride());

	app.listen(8080);
	console.log('Im listening on port 8080');

	// First example router
	app.get('/', function(req, res) {
	  res.send("Hello world!");
	});
	
### 4- 运行这个应用！

耶，现在**让我们运行一下我们的应用！！**使用如下语句：

	node app.js
	
如果你访问你的浏览器[http://localhost:8080](http://localhost:8080)你应该会看到：

![image](/public/pics/hello-world.png)

#### 让我们继续往下走！

![image](/public/pics/meme.png)

#### 那么，刚才上面的语句是什么好意思呢？

恩，上面只是一个简单地“Hello World”应用，让我们看一下是怎样做到的。

	// Dependencies requirements, Express 4
	var express        = require('express');
	var morgan         = require('morgan');
	var bodyParser     = require('body-parser');
	var methodOverride = require('method-override');
	var mongoose        = require("mongoose");
	var app            = express();
	
**第一部分**加载了在我们的应用中会用到的各个依赖模块。`require('包名字')`将会引入这个包，并把包里面的方法、属性什么的暴露出来，方便我们的引用和使用。

	app.use(express.static(__dirname + '/public'));
	app.use(morgan('dev'));
	app.use(bodyParser());
	app.use(methodOverride());

**第二部分**会应用一些设置让Express去运行。

	app.listen(8080);
	console.log('Im listening on port 8080');

	// First example router
	app.get('/', function(req, res) {
	  res.send("Hello world!");
	});
	
**最后这部分**会让Express应用监听我们设置的端口，我们同时也定义了**第一个路由**虽然只是简单的返回GET请求：“Hello World”。

### 5- 定义应用的数据模型

一个数据模型就是让计算机可以理解的一个对象的属性和相互关系的描述，在我们得例子中，我们只有一个简单的数据模型叫`tshirt`，因为我们的应用会展示关于`Tshirt`的信息。

新建一个‘models’文件夹，在这个文件夹里面创建一个`tshirt.js`文件，我们将会放置关于`Tshirt`数据模型的代码：

	/**
	 * Tshirt
	 *
	 * @module      :: Model
	 * @description :: Represent data model for the Tshirts
	 * @author        :: Kevin Blanco
	 */

	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;


	var Tshirt = new Schema({

	  model:    {
	    type    : String,
	    require : true
	  },
	  style:    {
	    type    : String,
	    enum    :  ['Casual', 'Vintage', 'Alternative'],
	    require : true
	  },
	  size:     {
	    type    : Number,
	    enum    : [36, 38, 40, 42, 44, 46],
	    require : true
	  },
	  color:   {
	    type: String
	  },
	  price :   {
	    type    : Number,
	    require : true
	  },
	  modified: {
	    type    : Date,
	    default : Date.now
	  }
	});

	Tshirt.path('model').validate(function (v) {
	  return ((v != "") && (v != null));
	});

	module.exports = mongoose.model('Tshirt', Tshirt);

从根本上说，我们已经设计了一个关于`Tshirt`的模型，具有如下几个属性：款式、风格、尺寸、颜色、价格，任何一个字段的修改都会让这个模型发生变化。

### 6- 连接到MongoDB

我们需要建立从应用程序到MongoDB数据库的连接，然后存储我们的文档数据。

首先，**你需要在本地安装MongoDB**，请[移步到MongoDB站点](http://docs.mongodb.org/manual/installation/)按照指引安装。如果你用的是Mac电脑，我推荐你使用[Homebrew](http://brew.sh/)进行安装，如果你使用的是Windows电脑，我建议你要有**耐心**。

好了，如果你已经正确安装了MongoDB，确保你的**守护进程已经运行**（如果是Mac，你需要在终端里运行`mongod`）。

现在，让我们回到`app.js`文件，在Express配置后面添加如下代码：

	// MongoDB configuration
	mongoose.connect('mongodb://localhost/tshirt', function(err, res) {
	  if(err) {
	    console.log('error connecting to MongoDB Database. ' + err);
	  } else {
	    console.log('Connected to Database');
	  }
	});

这段代码会让我们的应用程序连接MongoDB里的`tshirt`集合。如果我们重新运行`node app.js`我们将会看到控制台如下输出：

	Im listening on port 8080
	Connected to Database
	
我们得`app.js`文件**现在应该是这样的了：**

	/*
	 * Main App file App.js
	 * @author Kevin Blanco
	 */


	// Dependencies requirements, Express 4
	var express        = require('express');
	var morgan         = require('morgan');
	var bodyParser     = require('body-parser');
	var methodOverride = require('method-override');
	var mongoose       = require("mongoose");
	var app            = express();

	app.use(express.static(__dirname + '/public')); 
	app.use(morgan('dev')); 
	app.use(bodyParser()); 
	app.use(methodOverride());


	// MongoDB configuration
	mongoose.connect('mongodb://localhost/tshirt', function(err, res) {
	  if(err) {
	    console.log('error connecting to MongoDB Database. ' + err);
	  } else {
	    console.log('Connected to Database');
	  }
	});

	app.listen(8080);
	console.log('Im listening on port 8080'); 

	// First example router
	app.get('/', function(req, res) {
	  res.send("Hello world!");
	});
	
所以现在我们最好开始开发跟数据模型的交互动作和创建相关的路由动作（也就是控制器的工作）。

### 7- 创建路由和绑定动作

创建一个新的文件夹`routes`并在里面创建一个文件叫`tshirt.js`。

添加如下代码到`tshirt.js`，代码看起来很多，但是我会挨个部分进行介绍：

	/**
	 * Tshirt
	 *
	 * @module      :: Routes
	 * @description :: Maps routes and actions
	 * @author        :: Kevin Blanco
	 */

	var Tshirt = require('../models/tshirt.js');

	module.exports = function(app) {


	  /**
	   * Find and retrieves all tshirts
	   * @param {Object} req HTTP request object.
	   * @param {Object} res HTTP response object.
	   */
	  findAllTshirts = function(req, res) {
	    console.log("GET - /tshirts");
	    return Tshirt.find(function(err, tshirts) {
	      if(!err) {
	        return res.send(tshirts);
	      } else {
    	    res.statusCode = 500;
        	console.log('Internal error(%d): %s',res.statusCode,err.message);
	        return res.send({ error: 'Server error' });
	      }
	    });
	  };



	  /**
	   * Find and retrieves a single tshirt by its ID
	   * @param {Object} req HTTP request object.
	   * @param {Object} res HTTP response object.
	   */
	  findById = function(req, res) {

	    console.log("GET - /tshirt/:id");
	    return Tshirt.findById(req.params.id, function(err, tshirt) {
	
	      if(!tshirt) {
	        res.statusCode = 404;
	        return res.send({ error: 'Not found' });
	      }

	      if(!err) {
	        return res.send({ status: 'OK', tshirt:tshirt });
	      } else {
	
	        res.statusCode = 500;
	        console.log('Internal error(%d): %s', res.statusCode, err.message);
	        return res.send({ error: 'Server error' });
	      }
	    });
	  };




	  /**
	   * Creates a new tshirt from the data request
	   * @param {Object} req HTTP request object.
	   * @param {Object} res HTTP response object.
	   */
	  addTshirt = function(req, res) {

	    console.log('POST - /tshirt');
	
	    var tshirt = new Tshirt({
	      model:    req.body.model,
	      style:    req.body.style,
	      size :    req.body.size,
    	  color:    req.body.color,
	      price:    req.body.price
	    });

	    tshirt.save(function(err) {

	      if(err) {

	        console.log('Error while saving tshirt: ' + err);
	        res.send({ error:err });
	        return;

	      } else {

	        console.log("Tshirt created");
	        return res.send({ status: 'OK', tshirt:tshirt });

	      }

	    });

	  };



	  /**
	   * Update a tshirt by its ID
	   * @param {Object} req HTTP request object.
	   * @param {Object} res HTTP response object.
	   */
	  updateTshirt = function(req, res) {

	    console.log("PUT - /tshirt/:id");
	    return Tshirt.findById(req.params.id, function(err, tshirt) {

	      if(!tshirt) {
	        res.statusCode = 404;
	        return res.send({ error: 'Not found' });
	      }

	      if (req.body.model != null) tshirt.model = req.body.model;
	      if (req.body.price != null) tshirt.price = req.body.price;
	      if (req.body.style != null) tshirt.style = req.body.style;
	      if (req.body.size != null) tshirt.size  = req.body.size;
	      if (req.body.colour != null) tshirt.color = req.body.color;

	      return tshirt.save(function(err) {
	        if(!err) {
	          console.log('Updated');
	          return res.send({ status: 'OK', tshirt:tshirt });
	        } else {
	          if(err.name == 'ValidationError') {
	            res.statusCode = 400;
	            res.send({ error: 'Validation error' });
	          } else {
	            res.statusCode = 500;
	            res.send({ error: 'Server error' });
	          }
	          console.log('Internal error(%d): %s',res.statusCode,err.message);
	        }

	        res.send(tshirt);

	      });
	    });
	  };



	  /**
	   * Delete a tshirt by its ID
	   * @param {Object} req HTTP request object.
	   * @param {Object} res HTTP response object.
	   */
	  deleteTshirt = function(req, res) {

	    console.log("DELETE - /tshirt/:id");
	    return Tshirt.findById(req.params.id, function(err, tshirt) {
	      if(!tshirt) {
	        res.statusCode = 404;
	        return res.send({ error: 'Not found' });
	      }

	      return tshirt.remove(function(err) {
	        if(!err) {
	          console.log('Removed tshirt');
	          return res.send({ status: 'OK' });
	        } else {
	          res.statusCode = 500;
	          console.log('Internal error(%d): %s',res.statusCode,err.message);
	          return res.send({ error: 'Server error' });
	        }
	      })
	    });
	  }

	  //Link routes and actions
	  app.get('/tshirt', findAllTshirts);
	  app.get('/tshirt/:id', findById);
	  app.post('/tshirt', addTshirt);
	  app.put('/tshirt/:id', updateTshirt);
	  app.delete('/tshirt/:id', deleteTshirt);

	}
	
好了，**上面代码都做了些什么？**，让我们每个方法都看一下：

	   /**
	   * Find and retrieves all tshirts
	   * @param {Object} req HTTP request object.
	   * @param {Object} res HTTP response object.
	   */
	  findAllTshirts = function(req, res) {
	    console.log("GET - /tshirts");
	    return Tshirt.find(function(err, tshirts) {
	      if(!err) {
	        return res.send(tshirts);
	      } else {
	        res.statusCode = 500;
	        console.log('Internal error(%d): %s',res.statusCode,err.message);
	        return res.send({ error: 'Server error' });
	      }
	    });
	  };
	  
这个方法用来**获取所有的tshrits**，就像你在文件头部看到的，我们“require”了Tshirt模型，`var Tshirt=require('../models/tshirt.js');`使用上面的对象我们可以在引用中查询和存储tshirt。在查询的回调函数中，我们处理了错误异常，如果一切顺利，我们就返回(`responde`)查询的tshirt(`return res.send(tshirts);`)。让我们看下**第二个函数**：

     /**
     * Find and retrieves a single tshirt by its ID
     * @param {Object} req HTTP request object.
     * @param {Object} res HTTP response object.
     */
    findById = function(req, res) {

      console.log("GET - /tshirt/:id");
      return Tshirt.findById(req.params.id, function(err, tshirt) {

        if(!tshirt) {
          res.statusCode = 404;
          return res.send({ error: 'Not found' });
        }

        if(!err) {
          return res.send({ status: 'OK', tshirt:tshirt });
        } else {

          res.statusCode = 500;
          console.log('Internal error(%d): %s', res.statusCode, err.message);
          return res.send({ error: 'Server error' });
        }
      });
    };
    
在这个方法中，我们通过tshirt ID处理单一的一个tshirt。我们应该在request中传入（`/tshirt/:id`）。我们使用`findById`方法，根据传入的ID，在回调函数中返回查询结果。回调函数同样会处理异常情况，如果顺利，我们也会得到这样得返回：`return res.send({status: 'OK', tshirt: tshirt});` 让我们继续看**第三个函数**： 

    /**
     * Creates a new tshirt from the data request
     * @param {Object} req HTTP request object.
     * @param {Object} res HTTP response object.
     */
    addTshirt = function(req, res) {

      console.log('POST - /tshirt');

      var tshirt = new Tshirt({
        model:    req.body.model,
        style:    req.body.style,
        size :    req.body.size,
        color:    req.body.color,
        price:    req.body.price
      });

      tshirt.save(function(err) {

        if(err) {

          console.log('Error while saving tshirt: ' + err);
          res.send({ error:err });
          return;

        } else {

          console.log("Tshirt created");
          return res.send({ status: 'OK', tshirt:tshirt });

        }

      });
    };
    
在这个函数中，我们创建了一条新的tshirt记录。我并没有校验任何数据的正确性，因为在`Tshirt`模型中我们定义了`必填字段`，如果存储过程中发现必填字段缺失Mongoose就会做出提醒。

当然，我也会在前端使用AngularJS校验数据，所以只要我们确保使用正确的数据请求就可以了，现在让我们看**第四个函数**：

     /**
     * Update a tshirt by its ID
     * @param {Object} req HTTP request object.
     * @param {Object} res HTTP response object.
     */
    updateTshirt = function(req, res) {

      console.log("PUT - /tshirt/:id");
      return Tshirt.findById(req.params.id, function(err, tshirt) {

        if(!tshirt) {
          res.statusCode = 404;
          return res.send({ error: 'Not found' });
        }

        if (req.body.model != null) tshirt.model = req.body.model;
        if (req.body.price != null) tshirt.price = req.body.price;
        if (req.body.style != null) tshirt.style = req.body.style;
        if (req.body.size != null) tshirt.size  = req.body.size;
        if (req.body.colour != null) tshirt.color = req.body.color;

        return tshirt.save(function(err) {
          if(!err) {
            console.log('Updated');
            return res.send({ status: 'OK', tshirt:tshirt });
          } else {
            if(err.name == 'ValidationError') {
              res.statusCode = 400;
              res.send({ error: 'Validation error' });
            } else {
              res.statusCode = 500;
              res.send({ error: 'Server error' });
            }
            console.log('Internal error(%d): %s',res.statusCode,err.message);
          }

          res.send(tshirt);

        });
      });
    };
    
这是最大的一个函数了。`updateTshirt`函数会根据ID更新tshirt的任何字段。总体来说，我们需要校验任何一个在`req.body`中的字段。我们处理异常，更新tshirt。现在让我们看**最后一个函数**。

     /**
     * Delete a tshirt by its ID
     * @param {Object} req HTTP request object.
     * @param {Object} res HTTP response object.
     */
    deleteTshirt = function(req, res) {

      console.log("DELETE - /tshirt/:id");
      return Tshirt.findById(req.params.id, function(err, tshirt) {
        if(!tshirt) {
          res.statusCode = 404;
          return res.send({ error: 'Not found' });
        }

        return tshirt.remove(function(err) {
          if(!err) {
            console.log('Removed tshirt');
            return res.send({ status: 'OK' });
          } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
          }
        })
      });
    }
    
这个函数中，我们根据ID删除了一条记录。我们从`req.params`中获取ID，我们使用`tshirt.remove`方法移出这条记录。

最后，我们**绑定这些路由**：

    //Link routes and actions
    app.get('/tshirt', findAllTshirts);
    app.get('/tshirt/:id', findById);
    app.post('/tshirt', addTshirt);
    app.put('/tshirt/:id', updateTshirt);
    app.delete('/tshirt/:id', deleteTshirt);
    
**把这个文件路由引入到`app.js`中**，放在数据库连接之前：

	//Add the routes
	routes = require('./routes/tshirt')(app);
	
这就是一个`Tshirt`的CRUD操作了，让我们使用 [Chrome的Postman Rest Client](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm/related) 插件来测试他们。

### 8-测试应用

打开Postman插件，首先让我们来测试一个简单地获取 `/tshirt` ：

![image](/public/pics/first-get.png)

就像你看到的，我们得到了一个空的数组，那就对了，**因为我们数据库里还没有任何一条tshirt记录！**

**让我们新增一条tshirt记录**，切换Postman 方法到 **`POST`**添加上我们模型中定义的字段信息：

![image](/public/pics/create.png)

如果我们发送请求，我们就得到了**一条新的tshirt的记录：**

![](/public/pics/create-response.png)

现在，让我们重新尝试**`GET`**请求`/tshirt`，我们会看到我们刚才创建的记录：

![](/public/pics/second-get.png)

现在，让我们试一下**`UPDATE`**方法，让我们更新这条tshirt的价格为 `50000` 。粘贴好这条tshirt的ID属性，在请求中设置好：

![](/public/pics/update-price.png)

确保却换到**`UPDATE`**方法，如果我们发送请求，我们会看到价格已经被更新了：

![](/public/pics/update-response.png)

最后，我们试一下**`DELETE`**方法，切换方法到`DELETE`，然后像这样发送请求：

![](/public/pics/delete.png)

**你应该看到了OK status**，那表示你已经删除成功了。

## 结束语

我们现在就完成了**Node、Express、MongoDB、Mongoose操作CRUD**。在下一章，我们将会创建前端AngularJS代码衔接这章里写的接口。

## 本章github代码

这个例子的代码也已经放到Github中了，如果你一时没有跟上，或者有不懂的地方，可以在[这里检出代码](https://github.com/kevinblanco/nodejs-express-crud)。

希望你能喜欢，谢谢！

原文：http://blog.kevinblanco.io/creating-a-simple-crud-with-node-js-express-mongodb-and-angularjs-part-1/
