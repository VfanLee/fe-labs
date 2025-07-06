<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('v3')
</script>

# MathJax

## 安装

<Tabs v-model="activeName">
  <TabPane label="v2" name="v2">

- [v2 配置参考](https://docs.mathjax.org/en/v2.7-latest/config-files.html#the-tex-mml-am-chtml-configuration-file)

```html
<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/mathjax@2.7.7/MathJax.js?config=TeX-MML-AM_SVG"></script>
```

  </TabPane>

  <TabPane label="v3" name="v3">

- [v3 配置参考](https://docs.mathjax.org/en/latest/web/components/combined.html)

```html
<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-svg.min.js"></script>
```

  </TabPane>
</Tabs>

## 常见配置

配置在 MathJax 初始化之前定义。

<Tabs v-model="activeName">
<TabPane label="v3" name="v3">

```js
window.MathJax = {
  options: {
    enableMenu: false, // 关闭右键菜单功能
  },
}
```

</TabPane>
</Tabs>

## 动态渲染

<Tabs v-model="activeName">
<TabPane label="v3" name="v3">

```js
window.MathJax.typesetPromise.([elements])
```

</TabPane>
</Tabs>

## 参考资料

- [MathJax v2](https://docs.mathjax.org/en/v2.7-latest/)
- [MathJax v3(latest)](https://docs.mathjax.org/en/latest/)
