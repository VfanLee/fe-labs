import { createChunk } from './createChunk'

onmessage = async (e) => {
  const { file, size, start, end } = e.data

  const result = []
  for (let i = start; i < end; i++) {
    result.push(createChunk(file, size, i))
  }

  const chunks = await Promise.all(result)

  postMessage(chunks)
}
