# miniapp
> HIS配套小程序[**基于wxa框架开发**]

## 一、环境安装

1. 开发环境安装
* Node.js安装:[下载链接 版本10.15.*](http://cdn.npm.taobao.org/dist/node/v10.15.3/node-v10.15.3-x64.msi)
* NPM包管理器安装：Node.js安装包已集成

```
# 验证安装
node -v
# v10.15.3

npm -v
# v6.4.1
```

2. 开发IDE安装:[下载链接 Visual Studio Code](https://code.visualstudio.com/)
> 常用插件安装: vetur、Beautify css/sass/scss/less、minapp

```
//用户自定义配置

{
  // 以像素为单位控制字号。
  "editor.fontSize": 17,
  "files.associations": {
    "*.wpy": "vue",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "terminal.integrated.confirmOnExit": true,
  "emmet.includeLanguages": {
    "vue-html": "html",
    "vue": "html",
    "wxml": "html"
  },
  "minapp-vscode.disableAutoConfig": true,
  "vetur.validation.template": false,
  "vetur.grammar.customBlocks": {
    "config": "json"
 }
}
```

3. GIT安装 下载地址：共享\\\\192.168.1.190\share
* Git-2.18.0-64-bit.exe
* TortoiseGit-2.6.0.0-64bit.msi
* TortoiseGit-LanguagePack-2.6.0.0-64bit-zh_CN.msi

> 资源
* 配置GIT使用证书登录，无需每次输入密码 [1.安装参考](https://blog.csdn.net/zhou_vip/article/details/67633988) [2.配置GIT使用证书通信](https://blog.csdn.net/lsyz0021/article/details/52064829)
* [GIT的奇淫技巧](https://github.com/521xueweihan/git-tips)

# 二、项目说明
## 1.文件夹及说明
```
├ dist                生成后的小程序文件夹(编译文件夹)
  ├ _wxa 
  ├ assets 
  ├ components 
  ├ mixin
  ├ npm
  ├ pages 
  ├ services
  ├ templates
  ├ utils
  ├ wux-weapp
  ├ app.js 
  ├ app.json 
  ├ app.wxss  
  ├ project.config.json
  └ sitemap.json 
├ node_modules        npm依赖的包
├ src                 开发源文件夹
  ├ assets                静态资源：图片等（全部拷贝到编译文件夹对应目录）
  ├ components            自定义组件
  ├ css                   全局公共css文件夹
  ├ mixin                 混入代码文件夹
  ├ pages                 页面 
  ├ services              redux和静态数据data等                
  ├ templates             公共模板(编译目标文件夹wxml)
  ├ utils                 公共类库、工具
  ├ wux-weapp             wux-weapp第三方组件库
  ├ app.wxa               小程序入口
  └ project.config.json   小程序开发工具配置文件
├ .babelrc            babel编译配置文件
├ .browserslistrc
├ .eslintrc
├ .gitignore          GIT项目忽略的文件和文件夹
├ package-lock.json   项目依赖包锁文件(固化依赖的版本)
├ package.json        项目配置文件
├ README.md
├ wxa.config.js       wxa项目打包配置文件
```

## 2.项目资源说明
1. [小程序测试号](https://developers.weixin.qq.com/sandbox?tab=miniprogram&hl=zh)
2. [小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

3. 小程序开发框架 **wxa2**

    （1）[项目地址 https://github.com/wxajs/wxa](https://github.com/wxajs/wxa)

    （2）[项目文档 https://wxajs.github.io/wxa/](https://wxajs.github.io/wxa/)

    （3）[脚手架 https://github.com/wxajs/wxa/tree/master/packages/wxa-cli](https://github.com/wxajs/wxa/tree/master/packages/wxa-cli)

> # wxa官方介绍
>wxa是一个[AOP](https://en.wikipedia.org/wiki/>Aspect-oriented_programming)框架，通过预编译和运行时动态代理实现对小程序>实例方法的拦截、改写、新增等操作。
>
>wxa提供了丰富的Decorator用于开发小程序，开发者可以方便简洁的实现相应的业务>需求。
>
>wxa是一套完善的微信小程序开发解决方案，通过Decorator增强小程序能力，基于>nodejs工程化小程序开发流程，同时支持Vue单文件开发模式和原生小程序开发模>式！此外还提供了一套基于wxa开发UI组件。
>
>## 它是如何工作的？
>一个`wxa`项目实际上是由`@wxa/core`，`@wxa/cli`以及小程序原生能力驱动的应>用。通过cli为小程序和npm仓库搭建了直接沟通的桥梁，使得无数优秀的类库有了直>接在小程序上使用的可能。而`@wxa/core`则为小程序开发提供了许多最佳实践。
>
>## 特性
>- 原生友好
>    - 迁移一个旧项目到wxa只需要几分钟
>    - 良好的原生组件开发支持
>
>- 简洁好用的核心类库`@wxa/core`
>    - **Decorator** 切面编程，无缝增强
>    - **Mixins** 分离逻辑，复用代码，提高可维护性
>    - **Plugins** 插件机制
>    - **Redux** 全局状态管理方案
>    - **Promise** 化小程序api
>    - **Eventbus** 自定义事件
>    - **Router** 路由跳转
>
>- 功能齐全的命令行工具`@wxa/cli`
>    - Npm依赖解析
>    - 灵活的编译配置
>        - [Tapable](https://github.com/webpack/tapable)插件机制
>        - 可拔插的编译器
>    - 多开发模式支持
>        - 支持小程序原生开发
>        - 支持Vue单文件开发模式
>    - 组件良好支持
>        - 原生组件
>        - 第三方原生组件
>    - 调用微信开发者工具
>        - 上传代码
>        - 预览项目



4. 需要了解的概念JS概念 Promise、Redux、Mixins、js es6 import export、Object.assign 或者 ES2015 - Spread operator(即...操作)
5. CSS概念 css3，flexbox弹性盒布局

6. 小程序组件、API

7. **小程序第三方组件**

    （1） [wux-weapp 文档地址](https://wux-weapp.github.io/wux-weapp-docs/#/)

## 3.常用命令

> 1. 基础编译
> `wxa2 build`
> 
> 2. 监听模式
> `wxa2 build --watch`
> 
> 3. 指定无效缓存以及打印更详细的构建信息
> `wxa2 build --no-cache --verbose`
> 
> 4. 使用模板创建新项目, [template](https://github.com/Genuifx/> wxa-templates)
> `wxa2 create`
> 
> 5. 调用微信开发者工具, windows用户需要在 `wxa.config.js` 设置开发者工具> 的路径 `wechatwebdevtools`
>     - `wxa2 cli -a open`: 打开开发者工具
>     - `wxa2 cli -a preview`: 预览项目
>     - `wxa2 cli -a upload`: 上传项目
>     - `wxa2 cli -a login`: 登录微信，`preview`和`upload`都需要登录微信后操作

## License
BPH &copy; 党华龙
