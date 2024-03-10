# bpt-web

## 目录结构

- docs：开发文档记录
- env：统一存放环境变量目录
- idl：proto 文件目录
- scripts：脚本
- src
  - assets：资源文件
  - components：公共组件
  - constant：常量、枚举、默认值等
  - h5
  - network：网络请求、rpc 等
  - router：路由
  - styles：全局公共样式
  - types：ts 类型声明
  - utils：工具函数

### 移动端开发

- 移动端路由文件以 .mobile.tsx 结尾，动态加载会判断当前端加载对应的 index 文件

## TODO

- [x] 初始化项目
  - [x] 添加 eslint、prettier、husky、lint-staged
- [x] 迁移 RPC 代码
  - [ ] 持续接入用到的 domain
  - [x] 重构梳理简化 rpc 逻辑
- [x] 国际化
- [x] 实现登录功能
  - [x] 账号密码登录
  - [ ] 忘记密码
  - [ ] 注册
  - [ ] gaw 登录
  - [x] 账号登出检查
  - [x] 自动登录
- [x] 支持移动端
  - [ ] 对齐实现 pc 页面
- [x] 支持 pwa
- [x] WebSocket 同时支持本地和 SharedWorker

### 12月15号前的需求

- [ ] 替换新 ui
- [ ] 注册
  - [ ] 忘记密码
- [x] 进入游戏跳转 webGL 地址
  - ~~[ ] 新切一个 appId~~
  - [x] 接入 SharedWorker webSocket
    - [x] 多窗口自动登录
    - [x] 多窗口 webSocket 重连
    - [x] 多窗口登录被踢，任意窗口重新登录其他窗口同步登录状态
  - [x] 同步 webGL 端跳转前加入游戏
  - [x] 同步 webGL 端 LastLoginKey 值，可以保持 webGL 端自动登录
- [ ] 接入钱包
  - [ ] 支付
  - [ ] 大厅钱包

## 开发环境

- 总共三个环境
  - 开发
  - 测试
  - 正式

### 发布正式环境

- 申请 svn 仓库权限
  - http://svnadmin.oa.com
- jenkins 构建同步到 svn 仓库
  - http://172.20.153.11:8080/job/mtt.xyz/configure
- 发布地址
  - http://release.oa.com/rel/apply

### PWA

- vite-plugin-pwa
  - https://vite-pwa-org.netlify.app/guide/
- https://juejin.cn/post/7039258299086143524
- https://www.jianshu.com/p/0a07bd528e08
- https://kwaa.dev/vite-plugin-pwa
- https://blog.meathill.com/vite/vite-plugin-pwa-for-vite.html

## 相关链接

- proto
  - https://github.com/protobufjs/protobuf.js/blob/HEAD/cli/README.md#pbjs-for-javascript
- 压缩图片
  - https://tinypng.com/
  - https://segmentfault.com/a/1190000024416860?sort=votes

### 飞书文档

- [BPT 项目开发](https://boyaagame.feishu.cn/docx/PgjFd1bvgoIbnjxzC3wcA9imn3e)

### 文档

- [vite](https://cn.vitejs.dev/)
- [react-router](https://reactrouter.com/en/main/start/overview)
- [mobx](https://mobx.js.org/README.html)
- [antd](https://ant-design.antgroup.com/docs/react/introduce-cn)
- [recoil](https://www.recoiljs.cn/docs/introduction/installation)
- [react-i18next](https://react.i18next.com/getting-started)
- [react-device-detect](https://github.com/duskload/react-device-detect)
- [lodash](https://www.lodashjs.com/)
