# `root`

## Usage


## 问题todo
- [ ] git提交的问题
- [x] 不同子项目互相依赖的问题
- [x] 指定子项项目添加包所有子项目package.json变动的问题<br/>
暂无发现问题
- [x] 创建子项目的方式：<br/>
lerna create<br/>
lerna import<br/>
手动复制<br/>
使用react或vue等框架脚手架
- [x] 依赖提升的问题
- [x] lerna add 本地包之后是否需要lerna link生成包链接？；文档似乎用lerna bootstrap就可以？<br/>
使用lerna bootstrap就可以，但是如果使用npm作为包管理器需要把lerna.js的useWorkspaces的默认配置置为false，因为useWorkspaces为yarn使用
https://github.com/lerna/lerna/issues/2567
- [ ] 对工程化项目的支持
- [ ] 关联的本地包vue文件的编辑问题<br/>
1.vue文件<br/>
vue文件不能被点击跳转追踪：<br/>
1.1.自身目录下非vue文件使用非相对路径引用vue文件，例如"@/"、"aNodeModulesPackage/"等<br/>
1.2.非自身目录下在非js文件非相对路径引用vue文件<br/>
1.3.链接项目，跳转到js/ts文件能直接到原文件夹，而vue文件只能链接到node_modules包<br/>
2.ts文件<br/>
3.js文件<br/>
- [ ] 循环引用的问题
- [x] lerna add之后会执行bootstrap，将package.json原来提升的依赖重新还原<br/>
1.考虑使用配置使bootstrap命令默认使用提升配置<br/>
2.add之后重新执行bootstrap --hoist
- [ ] 已依赖本地包的本地包使用npm uninstall删除远程包时，会提示npmJs找不到关联本地包的错误，使用lerna exec也是一样的问题


## 命令
- lerna add subproject2 --scope=subproject1
- lerna add subproject1 --scope=subproject2
- lerna exec --scope subproject1 -- npm start
- lerna exec --scope subproject2 -- npm start
- lerna bootstrap --hoist
- lerna add lodash --scope=subproject1
- lerna exec --scope subproject1 -- npm uninstall babel