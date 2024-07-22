# VSCode 快速语音笔记插件

## 需求
实现一个 VSCode 插件，其提供快捷键供用户创建新文件，并开启语音转文字模式，以记录一些突然迸发但现在没有时间做的灵感。

## 基本思想：敏捷迭代
- 解释：每轮开发过程只做**最最**核心的一个功能
- 原因：人的大脑没法想象太抽象的内容，把东西做出来有助于我们进一步的思考

## 需求拆解

第一步：Hello World

第二步：快速笔记 -> 1. 创建笔记文件 2. 打开笔记文件（供用户编辑）

第三步：触发语音输入 -> 触发 Voice: Start Dictation in Editor 命令 `workbench.action.editorDictation.start`

第四步：快捷键 -> 如何用快捷键触发命令 `quickNote.createAndOpenNote`
