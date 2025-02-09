const worker = new Worker('./worker.js')

worker.onmessage = (e) => {
  console.log(e)
  console.log(e.data)
}
