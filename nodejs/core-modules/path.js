import { fileURLToPath } from 'node:url'
import { dirname } from 'path'

// 20+
console.log(import.meta.dirname)
console.log(import.meta.filename)

// 20-
console.log(dirname(fileURLToPath(import.meta.url)))
console.log(fileURLToPath(import.meta.url))
