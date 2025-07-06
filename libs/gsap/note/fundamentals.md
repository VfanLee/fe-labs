# 基本概念

## Tween

```js
// 创建一个从当前状态到目标状态的动画
gsap.to(target, duration, vars)

// 创建一个从指定状态到当前状态的动画
gsap.from(target, duration, vars)

// 同时指定起始状态和结束状态的动画
gsap.fromTo(target, duration, fromVars, toVars)
```

- `target`: 目标元素，可以是 DOM 元素、数组、或者选择器字符串。
- `duration`: 动画的持续时间（单位：秒）。
- `vars`: 一个包含动画属性的对象，定义了动画的参数和配置。

👉 [查看更多](https://gsap.com/docs/v3/GSAP/Tween)

## Easing

```js
gsap.to('.to', { x: 100, duration: 3, ease: 'elastic.out' })
```

👉 [查看更多](https://gsap.com/docs/v3/Eases)
