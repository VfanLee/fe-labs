import spartMd5 from 'spark-md5'

export function createChunk(file: File, size: number, index: number) {
  return new Promise((resolve, reject) => {
    const start = index * size
    const end = start + size

    const blob = file.slice(start, end)
    const spark = new spartMd5.ArrayBuffer()

    const render = new FileReader()
    render.onload = () => {
      const chunk = render.result as ArrayBuffer
      spark.append(chunk)

      resolve({
        chunkStart: start,
        chunkEnd: end,
        chunkIndex: index,
        chunkHash: spark.end(),
        chunkBlob: blob,
      })
    }
    render.readAsArrayBuffer(blob)
  })
}
