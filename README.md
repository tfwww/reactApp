使用 React 重构前端移动项目

项目使用 [Create React App] 来搭建
(https://github.com/facebookincubator/create-react-app).

## 运行语句

在项目目录结构，运行以下命令：

### `npm start`

在开发模式下调试项目，将会自动打开本地服务器 [http://localhost:3000](http://localhost:3000)

代码的变动将会实时反映到浏览器中

### `npm run build`

在文件夹 `build` 中打包用于生产环境的代码

## 目录结构
```
src/                    // 所有源代码存放的路径
    app.js              // 应用的入口
    views/              // 应用中某个页面的入口文件，一般为路由组件
        Home.js         // 例如，首页的入口就是Home.js
        Home.css        // Home页面对应的样式
    components/         // 所有应用的组件
        Home/           // 例如，views/中一个名为Home的view，则在components/中就有一个名为Home的子文件夹
        Table.js        // Home页面中的一个列表组件
        Table.css       // 列表组件对应的样式
        TableRedux.js   // 列表组件的reducer、action creator及action type，整合在一个文件中
        Modal.js
        Modal.css
        ModalRedux.js
        shared/         // 不归属于任何view的组件，如一些公共组件等
    containers/
        DevTools.js     // 配置DevTools
        Root.js         // 一般被app.js依赖，用于根据环境判断是否需要加载DevTools
    layouts/            // 布局相关的组件及样式，如菜单、侧边栏、header、footer等
    redux/              // Redux store相关的配置
        reducers.js     // 整个应用中所有reducer的汇总
    routes/             // 路由相关的配置
    utils/              // 工具函数、常量等
    styles/             // 全局公共样式
    app.css             // 应用主样式表
```
