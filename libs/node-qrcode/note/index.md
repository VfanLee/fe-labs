<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref("esm")
</script>

# node-qrcode

## 安装

<Tabs v-model="activeName">
  <TabPane label="ESM" name="esm">

注意：`qrcode` 实际上就是 `node-qrcode`，npm 与 github 包名并不对应，具体可在 npm 中[查看](https://www.npmjs.com/package/qrcode)。

```bash
npm install qrcode
```

  </TabPane>

  <TabPane label="UMD" name="umd">

注意：`qrcode` 自 **1.5.2** 开始，输出后就没有输出 `build` 文件夹了（输出目录变了，具体原因不清楚），需要用到 `UMD` 模块化时，可以使用 `1.5.1` 这个版本。

```html
<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.js"></script>

<!-- unpkg -->
<script src="https://unpkg.com/qrcode@1.5.1/build/qrcode.js"></script>
```

  </TabPane>
</Tabs>

## Options 选项

### 二维码选项

#### `version`

- 类型：`Number`
- 描述：二维码的版本。如果未指定，将自动计算出最适合的版本。

#### `errorCorrectionLevel`

- 类型：`String`
- 默认值：`M`
- 描述：错误校正级别。  
  可能的值为：`low`（低）、`medium`（中）、`quartile`（四分位）、`high`（高），或简写为 `L`、`M`、`Q`、`H`。

#### `maskPattern`

- 类型：`Number`
- 描述：用于对二维码进行掩模的模式。  
  可选值为 `0` 到 `7`。如果未指定，将自动计算出最适合的值。

#### `toSJISFunc`

- 类型：`Function`
- 描述：一个内部使用的辅助函数，用于将汉字转换为其 Shift JIS 值。如果需要支持汉字模式，可以提供此函数。

### 渲染器选项

#### `margin`

- 类型：`Number`
- 默认值：`4`
- 描述：定义二维码安静区（边距）的宽度。

#### `scale`

- 类型：`Number`
- 默认值：`4`
- 描述：缩放比例。值为 `1` 时，表示每个模块（黑点）的大小为 1 像素。

#### `small`

- 类型：`Boolean`
- 默认值：`false`
- 描述：仅适用于终端渲染器。如果启用，将输出更小的二维码。

#### `width`

- 类型：`Number`
- 描述：强制指定输出图像的宽度。  
  如果指定的宽度过小，无法容纳二维码符号，此选项会被忽略。此选项的优先级高于 `scale`。

### 颜色选项

#### `color.dark`

- 类型：`String`
- 默认值：`#000000ff`
- 描述：二维码中深色模块的颜色。值必须为十六进制格式（RGBA）。  
  注意：深色颜色应始终比浅色颜色更深。

#### `color.light`

- 类型：`String`
- 默认值：`#ffffffff`
- 描述：二维码中浅色模块的颜色。值必须为十六进制格式（RGBA）。

## 参考资料

- [node-qrcode](https://github.com/soldair/node-qrcode)
