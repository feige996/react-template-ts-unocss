# 介绍

为了方便使用 svg，编写了 SvgIcon 组件。

> 主要借助 `vite-plugin-svg-icons` 插件，得到 SVG 雪碧图。
>
> 配置的 svg 路径为 "src/assets/svg"，见 `vite.config.ts`。

## 使用

```jsx
import SvgIcon from "/@/components/SvgIcon"
<SvgIcon name="icon-name" />
<SvgIcon name="icon-name" width="30px" />
<SvgIcon name="icon-name" width="30"/>
<SvgIcon name="icon-name" width={30} />
// 上面3种效果一致
// 下面2中效果也一样
<SvgIcon name="icon-name" color="red" />
<SvgIcon name="icon-name" className="text-red" />
// 同时支持点击事件，可以写在 div 上属性都可以传进来
<SvgIcon name="icon-name" onClick={() => {console.log('click')}} />
```

其中 `icon-name` 是 svg 文件名，不带后缀。

```jsx
//  src/assets/svg/close.svg =>
<SvgIcon name="close" />

// src/assets/svg/user-avatar.svg =>
<SvgIcon name="user-avatar" />
```

如果 svg 文件在 `子目录` 下，记得加上目录路径：

```jsx
// src/assets/svg/user/close.svg =>
<SvgIcon name='user-close' />
```

## svg 文件处理

- svg 文件应当放到 `src/assets/svg` 目录下，可以根据模块划分放到不同的子目录下。
- (可选)把 svg 文件源码里面的部分 fill 属性的值改为 'currentColor'.

> 推荐安装 `VSCODE 插件`：`simonsiefke.svg-preview`，可以预览 SVG。
