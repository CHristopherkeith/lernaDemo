
# `subproject1`

## Usage

```
const subproject1 = require('subproject1');

// TODO: DEMONSTRATE API
```
## 问题todo
- git提交的问题
- 不同子项目互相依赖的问题
- 指定子项项目添加包所有子项目package.json变动的问题
- 创建子项目的方式：<br/>
lerna create<br>
lerna import<br>
使用react或vue等框架脚手架
- 依赖提升的问题
- lerna add 本地包之后是否需要lerna link生成包链接？；文档似乎用lerna bootstrap就可以？<br/>
使用lerna bootstrap就可以，但是如果使用npm作为包管理器需要把lerna.js的useWorkspaces配置置位false，因为useWorkspaces为yarn使用
https://github.com/lerna/lerna/issues/2567


## 命令
- lerna add subproject2 --scope=subproject1
- lerna add subproject1 --scope=subproject2
- lerna exec --scope subproject1 -- npm start
- lerna exec --scope subproject2 -- npm start
- lerna bootstrap
