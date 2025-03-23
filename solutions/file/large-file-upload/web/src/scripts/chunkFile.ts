const CHUNK_SIZE = 1024 * 1024 * 5 // 分片大小
const THREAD_COUNT = navigator.hardwareConcurrency || 4 // 逻辑处理器

export function chunkFile(file: File) {
  return new Promise((resolve, reject) => {
    const chunkCount = Math.ceil(file.size / CHUNK_SIZE) // 切片个数
    const threadChunkCount = Math.ceil(chunkCount / THREAD_COUNT) // 给每个线程分配的切片个数

    const result = []

    for (let i = 0; i < THREAD_COUNT; i++) {
      const worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' })
      const start = i * threadChunkCount
      let end = (i + 1) * threadChunkCount
      if (end > chunkCount) {
        end = chunkCount
      }

      worker.onerror = (err) => {
        console.log('work error', i, err)
      }

      worker.postMessage({
        file,
        size: CHUNK_SIZE,
        start,
        end,
      })

      worker.onmessage = (e: MessageEvent) => {
        const data = e.data
        data.forEach((chunk) => {
          result[chunk.index] = chunk
        })

        if (result.length === chunkCount) {
          resolve(result)
        }
      }
    }
  })
}
