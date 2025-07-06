# GSAP

## 介绍

[GSAP（GreenSock Animation Platform）](https://gsap.com/) 是一个高性能、功能强大的 JavaScript 动画库，专为 Web 开发提供流畅且可控的动画效果，适用于 DOM 元素、SVG、Canvas、WebGL 等场景。

### 主要特点

- **高性能**：gsap 内部采用优化算法，动画渲染效率高，相比 CSS 动画和 jQuery .animate() 具有更好的流畅度和性能，特别适用于 **复杂的动画序列**。
- **跨浏览器兼容**：gsap 兼容所有现代浏览器，并能在较老的浏览器（如 IE11）中正常运行。
- **时间线管理**：提供 **Timeline（时间线）**，可让多个动画按照设定顺序播放，并支持暂停、倒放、调整进度等功能。
- **适用于多种场景**：支持 **CSS 动画、SVG、Canvas/WebGL、滚动触发动画（ScrollTrigger）**，广泛应用于网页交互、游戏开发、数据可视化等领域。
- **插件生态**：gsap 提供了许多官方插件，如：
  - `ScrollTrigger`：滚动触发动画
  - `Draggable`：拖拽元素
  - `MotionPathPlugin`：沿路径运动
  - `Flip`：高级布局过渡动画
  - `TextPlugin`：文字动画

## 安装

[gsap 安装](https://gsap.com/docs/v3/Installation/?tab=npm&module=esm&method=private+registry&tier=free&club=false&require=false&trial=true#install-helper)

## Tween 补间动画

**gsap 核心就是 Tween（补间动画）**，主要有四类：

- `gsap.to()`：从元素的起始值开始，动画到指定的结束值
- `gsap.from()`：反过来。指定起始值，动画到结束值
- `gsap.fromTo()`：定义起始值和结束值。
- `gsap.set()`：立即设置属性（无动画）

### 常见属性

| 分类             | 常见属性                                                   |
| ---------------- | ---------------------------------------------------------- |
| **基本动画**     | `duration`，`delay`，`repeat`，`yoyo`，`stagger`           |
| **变换属性**     | `x`，`y`，`rotation`，`scale`，`skewX`                     |
| **CSS 样式**     | `opacity`，`backgroundColor`，`width`，`borderRadius`      |
| **缓动（ease）** | `power1.out`，`elastic.out`，`bounce.out`，`back.out(1.5)` |
| **回调函数**     | `onStart`，`onUpdate`，`onComplete`，`onRepeat`            |
| **其他**         | `scrub`，`immediateRender`，`overwrite`，`autoAlpha`       |

## Timeline 时间线

### 基本用法

语法：

```js
// 创建了 Timeline 实例
let tl = gsap.timeline({ vars1 })
// 添加动画
tl.method(element, { vars2 })
```

- `vars1`：设置 Timeline 的默认值。
- `method()`：Timeline 的某个方法，如 `to` 或 `from`。
- `element`：目标元素。
- `vars2`：Tween 的具体配置，如目标位置、持续时间、缓动效果等

👉 [查看更多](https://gsap.com/docs/v3/GSAP/Timeline)

### 位置参数

通过 `position` 参数控制每个动画的开始时间。

- `time`：`time` 秒后触发。
- `"<"`：在上个动画的开始处插入。
- `">"`：（默认值）上个动画的结束处插入。
- `"+=time"`：上个动画结束后 `time` 秒后插入。
- `"-=time"`：上个动画结束前 `time` 秒后插入。
- `"start"`：在当前时间轴位置开始。
- `"end"`：在时间轴末尾开始。
- `"label"`：指定标签位置开始。

  ```js
  tl.to('.box', { x: 100, duration: 1 }) // 默认
    .to('.box', { y: 100, duration: 1 }, '+=0.5') // 延迟 0.5 秒开始
    .to('.box', { scale: 2, duration: 1 }, '-=0.5') // 与前一个动画重叠
  ```

### 动画控制

```js
tl.method()
```

- `play()`：从当前时间轴位置开始播放动画。
- `pause()`：暂停动画，保持当前进度。
- `restart()`：从头开始播放动画。
- `seek(time)`：跳转到指定时间 `time` 并停在该位置。
- `reverse()`：反向播放动画，从当前位置倒放。
- `resume()`：继续播放已暂停的动画，从暂停的位置继续运行。

## 插件

### ScrollTrigger

**ScrollTrigger** 是 GSAP 的一个插件，用于基于滚动位置触发动画。

- **控制元素的动画**：可以在页面滚动到特定位置时触发 GSAP 动画。
- **钉住元素（pinning）**：让元素在特定区域内固定。
- **滚动范围控制（scrubbing）**：让动画随滚动同步进行。
- **支持横向滚动**：适用于水平滚动的布局。

#### 选项

- `trigger`：触发器元素
- `start` ：滚动触发器的起始滚动位置
- `end` ：滚动触发器的结束滚动位置
- `animation`：与滚动触发器实例关联的补间或时间线（如果有）
- `scrub` ：
  - `scrub: true`：将动画的进度直接链接到滚动触发器的进度;
  - `scrub: number`：播放头“赶上”所需的时间(以秒为单位)，因此 0 将导致动画的播放头需要 0.5 秒才能赶上滚动条的位置。它非常适合平滑事情
- `toggleClass`：当 ScrollTrigger 切换活动/非活动时，向一个元素(或多个元素)添加/删除类
- `markers`：显示滚动触发点（开发调试用）
- `scroll`：滚动元素（默认为 `window`）
- `pin` ：是否固定元素（`true`/`false`）
- `toggleActions`：`"play pause resume reset"`（控制动画如何响应滚动）
