# 从零搭建 React 开发 H5 模板

## 项目创建
创建项目文件夹
```javascript
mkdir react-demo
cd react-demo
npm init -y
```
## 依赖安装
```shell
yarn add react react-dom

yarn add webpack webpack-cli webpack-dev-server webpack-merge
babel-core babel-loader babel-polyfill babel-preset-env babel-preset-react
babel-preset-stage-0 cross-env
file-loader jsx-loader
css-loader style-loader url-loader less less-loader --dev 
```
## webpack 配置
区分开发环境 `development` 和生产环境 `production` 配置<br />
<br />分别创建对应的[配置文件](https://github.com/one-pupil/react-board/blob/master/build/webpack.base.js)<br />
<br />**antd-mobile 按需加载**<br />**

- 安装插件
```
yarn add babel-plugin-import -D
```
**

- 修改 babel.config.js 配置
```javascript
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    ["import", { libraryName: "antd-mobile", style: true }]
  ]
};
```
## externals 配置
webpack 中的 externals **防止**将某些 `import` 的包(package)**打包**到 bundle 中
```javascript
modules.export = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Board',
      files: { // 配置 CDN 引入
        js: [
          '//unpkg.com/swiper/js/swiper.min.js'
        ],
        css: [
          '//unpkg.com/swiper/css/swiper.min.css'
        ]
      }
    })
  ],
  externals: {
  	swiper: 'Swiper'
  }
}
```
index.html 设置：
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title><%= htmlWebpackPlugin.options.title %></title>
  <!-- require cdn assets css -->
  <% for (var i in htmlWebpackPlugin.options.files.css) { %>
  <link rel="stylesheet" href="<%= htmlWebpackPlugin.options.files.css[i] %>" />
  <% } %>
</head>

<body>
  <div id="root"></div>
  <!-- require cdn assets js -->
  <% for (var i in htmlWebpackPlugin.options.files.js) { %>
  <script type="text/javascript" src="<%= htmlWebpackPlugin.options.files.js[i] %>"></script>
  <% } %>
</body>

</html>
```
代码中使用：
```javascript
import Swiper from 'swiper';
```
## 移动端适配

<br />使用 **postcss-loader **实现 css 转换<br />

```javascript
// 项目使用的是 less
yarn add postcss-less-loader -D
```
`webpack.base.js` 配置
```javascript
{
  test: /\.(css|less)$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
      'postcss-less-loader'
    ]
}
```
### postcss-px-to-viewport
选用该插件对所有的 px 转换成 vw 视窗尺寸
```javascript
yarn add postcss-px-to-viewport -D
```
项目根目录下建立 `postcss.config.js`
```javascript
module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 375,   // 视窗的宽度，对应的是我们设计稿的宽度，Iphone6的一般是375 （xx/375*100vw）
      viewportHeight: 667, // 视窗的高度，Iphone6的一般是667
      unitPrecision: 3,     // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: "vw",   // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1,     // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false,     // 允许在媒体查询中转换`px`
      exclude: /(node_module)/i // 忽略 UI 组件库
    } 
  }
}
```
### postcss-plugin-px2rem
这个插件是对所有 px 转换成 rem 尺寸单位<br />

```javascript
yarn add postcss-plugin-px2rem -D
```
`postcss.config.js` 配置：
```javascript
module.exports = {
  plugins: {
    "postcss-plugin-px2rem": {
      rootValue: 75,// 配合 rem.js 使用 750 的设计稿
      unitPrecision: 5,
      mediaQuery: true,
      exclude: /(node_module)/i,
      selectorBlackList: ['html', 'mp-', 'calendar', 'iconfont'], // 在 rem.js 全局作用下，排除指定的文件的影响
      propBlackList: ['border'] // 过滤属性
    }  
  }
}
```
需要新建 `rem.js` 或者直接下载 `lib-flexible`
```javascript
const viewportWidth = 750
// 基准大小 
const baseSize = 32
// 设置 rem 函数 
function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。 
  const scale = document.documentElement.clientWidth / viewportWidth
  // 设置页面根节点字体大小 
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化 
setRem()
// 改变窗口大小时重新设置 rem 
window.onresize = function () { setRem() }
```
**在入口文件引入:**
```javascript
// App.js

import './utils/rem'
// import "./utils/flexible.js"
```
## EsLint 配置
安装 eslint 插件
```shell
yarn add eslint eslint-plugin-import babel-eslint eslint-plugin-react-hooks -D
```
根目录下新建 `.eslintrc.js` 配置文件<br />
```javascript
module.exports = {
  parser: "babel-eslint",
  plugins: [
    "react-hooks"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "error" // 检查 effect 的依赖
  }
}
```
## React 路由
```javascript
yarn add react-router-dom react-router-config
```
使用 `react-router-config` 来简化路由配置<br />
<br />新建 routes.js 文件
```javascript
import Home from "@/pages/Home"
import Me from "@/pages/Me"
import Test from "@/pages/Test"

console.log(typeof process.env.API)

const routes = [
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/me",
    exact: true,
    component: Me
  },
  {
    path: "/test",
    exact: true,
    component: Test
  }
];

export default routes;
```
根文件 App.js 中引入路由：
```javascript
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { HashRouter as Router } from 'react-router-dom'

import Layouts from "./components/Layouts";

function App() {
  return (
    <Router>
      <Layouts>
        {renderRoutes(routes)}
      </Layouts>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## Hooks 开发

<br />**Hook 是什么？**<br />Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。**Hook 只能再 Function Component 里面声明。**

### useState
返回一个状态和一个可以修改状态的函数 `setter` 
```javascript
import React, { useState } from 'react';
import { Button } from "antd-mobile";

function User() {
  const [user, setUser] = useState('Mondo')
  return (
    <div>
      <div>{user}</div>
      <Button type="primary" onClick={e => setUser('imondo.cn')}>改变 State</Button>
    </div>
  )
}
```

### useEffect

替代 **Class Component **中 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount` 等部分生命周期<br />

```javascript
import React, { useState, useEffect } from 'react';

function User() {
  const [user, setUser] = useState('Mondo')
  useEffect(() => {
    setTimeout(() => {
      setUser("js.imondo.cn")
    }, 2000)
  }, [user]) // 仅在 user 更改时更新
  return (
    <div>
      <div>{user}</div>
      <Button type="primary" onClick={e => setUser('imondo.cn')}>改变 State</Button>
    </div>
  )
}
```

### useContext

接收一个 context 对象并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染。<br />
<br />可用于**组件间值传递**
```javascript
import React, { useContext } from 'react';
const theme = {
  color: "red"
}
const UserContext = React.createContext(theme);
function User() {
  ...
  return (
    <UserContext.Provider value={theme}>
      <Child/>
    </UserContext.Provider>
  )
}
function Child() {
  const theme = useContext(UserContext);
  return (
    <div style={{color: theme.color}}>context</div>
  )
}
```

### useMemo

<br />使用格式：`useMemo(() => fn, deps)`<br />
<br />把“创建”函数和依赖项数组作为参数传入 `useMemo`，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。**可以当作 vue 中的计算属性**

```javascript
import React, { useState, useMemo } from 'react';
import { Button  } from "antd-mobile";

function User() {
  const [user, setUser] = useState(1)
  /* 缓存计算属性 */
  const data = useMemo(() => ({
    users: (user + 1)
  }), [user]);
	 const onChangeUser = (e) => {
    setUser(+e.target.value);
  }
  return (
    <UserContext.Provider>
      <input value={user} onChange={onChangeUser}/>
      <div>{data.users}</div>
      <Button type="primary" onClick={e => setUser(user + 1)}>改变 State</Button>
    </UserContext.Provider>
  )
}
```

### useReducer

使用格式：`const [state, dispatch] = useReducer(reducer, initialArg, init)`<br />
<br />它是 useState 的替代方案，在一些场景使用：

- state 逻辑较复杂且包含多个子值
- 下一个 state 依赖于之前的 state 



最重要的其实它的写法和 **redux **差不多

```javascript
import React, { useReducer } from "react";
import { Button  } from "antd-mobile";
let initCount = 0;
function reducer(state = initCount, action) {
  switch (action) {
    case "increment":
      state++
      return state
    case "decrement":
      state--
      return state      
    default:
      throw new Error();
  }
}
function User() {
  const [count, disaptch] = useReducer(reducer, initCount)
  return (
    <UserContext.Provider value={theme}>
      <div>useReducer</div>
      <div>计数器{count}</div>
      <Button type="primary" onClick={e => disaptch("decrement")}>减</Button>
      <Button type="primary" onClick={e => disaptch("increment")}>加</Button>
    </UserContext.Provider>
  )
}
```

### useRef

返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数<br />如果想要**访问子组件内的 ref 对象，子组件需要用 class 声明组件**。
```javascript
import React, { useState, useMemo, useRef } from 'react';

function Parent() {
  let [count, setCount] = useState(0)
  const childRef = useRef(null)
  const childClick = (val) => {
    childRef.current.setState({
      num: 2
    });
  }
  return (
    <div>
      <h4>组件传值</h4>
      <button onClick={childClick}>向子组件传值</button>
      <Child1 ref={childRef} />
    </div>
  );
}

class Child1 extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      num: 1
    }
  }
  render() {
    const { num } = this.state;
    return (
      <div>
        <div>ref 组件</div>
        <div>{num}</div>
      </div>
    )
  }
}
```
