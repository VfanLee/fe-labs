import './styles/style.css'
import { chunkFile } from './scripts/chunkFile'

const fileInput = document.querySelector('#file') as HTMLInputElement
const fileBtn = document.querySelector('#file-btn') as HTMLButtonElement

fileBtn.addEventListener('click', () => {
  fileInput.click()
})

fileInput.addEventListener('change', uploadFile)

async function uploadFile(e: Event) {
  const files = (e.target as HTMLInputElement).files
  if (!files) return
  const file = files[0]

  await chunkFile(file)
}
