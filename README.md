# SCSSfy Ant Design

A repository of SCSS based on the theme of Ant Design. Mostly I "SCSSfy" the theme which means I make @mixins for them. But keep the design about allowing us to customize the theme by \$variables.

## Install

```shell
npm install git+ssh://git@github.com:vannoel/scssfy-ant-design.git
```

## Import

The CSS files will be built after installation. I seperate css into two parts: index.css, responsive.css. Normally styled class will be collected into index.css. And the styled class which works with breakpoint will be collected into responsive.css.

```js
/* core css */
improt '@vannoel/scssfy-ant-design/index.min.css';
/* responsive css */
improt '@vannoel/scssfy-ant-design/responsive.min.css';
```

However we still can utilize the `$variable`, `@mixin`s from SCSS via importing from src/. For customization, we can customize theme by replacing `$color` or `$theme`.

```scss
// $color
@import 'node_modules/@vannoel/scssfy-ant-design/src/color/index';
// $theme (based on $color)
@import 'node_modules/@vannoel/scssfy-ant-design/src/theme/index';
// @mixins (based on $theme)
@import 'node_modules/@vannoel/scssfy-ant-design/src/mixins/index';
```

### \$color

Becasue the repository is for some projects which are required to similar the style with Ant-Design without using their library of components. The default color defined as [Ant-Design's Document of Colors](https://ant.design/docs/spec/colors).

Actually [Ant Design's color](https://github.com/ant-design/ant-design-colors) is powerful for development. The repository is all about theme designed by Ant-Design. But used in the case which does not need thier library of components. The repository only using SCSS and compile to CSS. So we can use the common styled class or HTML's elements with CSS. Or use the `$variables`, `@mixins` with SCSS.

For now I don't mock their amazing algorithm of palette. Which means now we defined the color by `HEX` and `RGBA` directly. I will try to understand their algorithm. Then the color will be defined in the calculated way.

Now, I defined the color as SCSS List. So we use the `nth` to get the color we want. Definitions in `src/color/_index.scss`

```scss
$color: nth($colorList, $index);
```

### \$theme

About definition of theme, to utilize the concept of `@mixins` from SCSS. I only extract some definitions of `$variables` which are core. And put some meaning of theme into `@mxins`.

- color:

  Definitions of primary color and some specific color.

- Media-boundary

  Dimensions of breakpoint and definitions of columns for grid.

- Font

  Dimensions of font-size, font-weight, line-height and definitions of font-style.

- Link

  Definitions of style about linkable.

- Transition

  Dimensions of durance and definitions of function for transition.

- Pading, Margin, Height, Border, Radius

  Dimensions for Pading, Margin, Height, Border, Radius.

- Disabled states

  Definitions of states in deabled.

### @mixins

As mentioned before. I transform the way to design the theme from `LESS` style to `SCSS` style. So I add some `@mixins` to help you developing the components by your own but still keep the theme as similar as Ant-Design.

You may notice the \$theme can be separated into definition-part and dimension-part. For mixins, the definition-part is used as default parameter, and the dimension-part is used as parameter.

#### Definition for default

```scss
@mixin sample($size: $default-size) {
  ...
}

@mixin sample() {
  size: $default-size
}
```

#### Dimensions for parameter

```scss
@include sample($size-md);
```

### Common Style for HTML's elements

In this repositiory. The CSS files will be built after installation. And it will produce `index.css` and `responsive.css`. The `index.css` contains the common style for general defitions. It styles `HTML elements` in Ant-Design way basically.

Please let me know if you found some style I missed.

### Responsive Style with breakpoint for Responsive Web Design

The other file produced is `responsive.css`. Basically it contians the grid system and the style for layout which works with breakpoint.

Please let me know if you have some style want to add in Responsive Style.
