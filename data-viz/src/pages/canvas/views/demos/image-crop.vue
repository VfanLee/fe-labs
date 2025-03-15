<script setup lang="ts">
const previewRef = shallowRef<HTMLCanvasElement | null>()
const cropRef = shallowRef<HTMLCanvasElement | null>()

let previewCtx: CanvasRenderingContext2D | null | undefined
let cropCtx: CanvasRenderingContext2D | null | undefined

const uploadFile = (e: Event) => {
  if (!previewRef.value) return

  const files = (e.target as HTMLInputElement)?.files
  if (!files) return

  const render = new FileReader()
  render.onload = () => {
    const img = new Image()
    img.src = render.result as string

    img.onload = () => {
      previewCtx?.drawImage(img, 0, 0, 768, 432)
    }
  }
  render.readAsDataURL(files[0])
}

const save = (e: MouseEvent) => {
  console.log(e)
}

onMounted(() => {
  previewCtx = previewRef.value?.getContext('2d')
  cropCtx = cropRef.value?.getContext('2d')
})
</script>

<template>
  <div>
    <div>
      <input type="file" @change="uploadFile" />

      <div class="canvas__wrap">
        <canvas id="previewcvs" ref="previewRef" width="768" height="432"></canvas>
        <canvas id="cropcvs" ref="cropRef" width="128" height="128"></canvas>
      </div>

      <div>
        <button type="button" @click="save">保存图片</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.canvas__wrap {
  margin-block: 8px;

  #previewcvs {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  #cropcvs {
    margin-inline-start: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
