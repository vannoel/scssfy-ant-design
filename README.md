# SCSSfy Ant Design

A repository of SCSS based on the theme of Ant Design.

## Install

npm install git+ssh://git@github.com:vannoel/scssfy-ant-design.git

## Styled Class List

The CSS files will be built after installation.

```js
/* core css */
improt '@vannoel/scssfy-ant-design/index.min.css';
/* grid css */
improt '@vannoel/scssfy-ant-design/rwd.min.css';
```

But we still can use the \$variable, @mixins from SCSS via importing from src/.

```scss
// $color
@import 'node_modules/@vannoel/scssfy-ant-design/src/color/index';
// $theme (based on $color)
@import 'node_modules/@vannoel/scssfy-ant-design/src/theme/index';
// @mixins (based on $theme)
@import 'node_modules/@vannoel/scssfy-ant-design/src/mixins/index';
```
