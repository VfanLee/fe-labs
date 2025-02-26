const filePicker = document.querySelector('#file-picker')

filePicker.addEventListener('change', e => {
  const file = e.target.files[0]

  var zip = new JSZip()
  zip.file(`aaa/bbb/ccc/${file.name}`, file)

  zip.generateAsync({ type: 'blob' }).then(
    function (blob) {
      const a = document.createElement('a')
      a.download = prompt('请输入下载文件名称')
      a.href = URL.createObjectURL(blob)
      a.click()
    },
    function (err) {
      console.log(err)
    }
  )

  // const reander = new FileReader()
  // reander.onload = e => {
  //   const arrayBuffer = e.target.result
  //   console.log(arrayBuffer)
  // }
  // reander.readAsArrayBuffer(file)
})
