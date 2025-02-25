const uploadDirInput = document.querySelector('#upload-dir')
const uploadDirBtn = document.querySelector('#upload-dir-btn')
const pidInput = document.querySelector('#pid')
const isViewSelect = document.querySelector('#isView')

let files = []

/*
{
  "name": "test",
  "child": [
    {
      "name": "src",
      "child": [
        {
          "name": "assets"
        },
        {
          "name": "components",
          "child": [
            {
              "name": "icons"
            }
          ]
        },
        {
          "name": "router"
        },
        {
          "name": "views",
          "child": [
            {
              "name": "modules"
            }
          ]
        }
      ]
    },
    {
      "name": "public",
      "child": []
    }
  ]
}
*/

uploadDirBtn.addEventListener('click', () => {
  uploadDirInput.click()
})

uploadDirInput.addEventListener('change', e => {
  files = e.target.files
  console.log('上传文件列表', files)

  uploadDir()
  fetchTree()
  uploadFiles()
})

function uploadFiles() {
  for (let i = 0; i < files.length; i++) {
    const file = files[i]

    console.log({
      title: file.name,
      type: 1,
      status: 2,
      contentSize: file.size,
      location: `file_url_${file.name}_${i}`,
      mimeType: 'png',
      isView: 0,
      remark2: 1,
      remark3: 0,
      parentId: '???',
      subjectIds: [],
      majorIds: []
    })
  }
}

function fetchTree() {
  const data = [
    {
      id: 10,
      path: 'test'
    },
    {
      id: 11,
      path: 'test/src'
    },
    {
      id: 12,
      path: 'test/src/views'
    },
    {
      id: 13,
      path: 'test/src/views/modules'
    },
    {
      id: 14,
      path: 'test/src/router'
    },
    {
      id: 15,
      path: 'test/src/components'
    },
    {
      id: 16,
      path: 'test/src/components/icons'
    },
    {
      id: 17,
      path: 'test/src/assets'
    },
    {
      id: 18,
      path: 'test/public'
    }
  ]
  console.log('fetch 文件夹 pid', data)
  document.querySelectorAll('pre')[1].textContent = JSON.stringify(data, null, 2)
}

function uploadDir() {
  const dirPathSet = new Set()
  for (const file of files) {
    const filePath = file.webkitRelativePath
    const dirPath = filePath.slice(0, filePath.lastIndexOf('/'))
    dirPathSet.add(dirPath)
  }
  console.log('上传目录列表', dirPathSet)

  const dir = []
  for (const dirPath of dirPathSet) {
    const dirPathArr = dirPath.split('/')
    let curDir = dir
    for (const dirName of dirPathArr) {
      let child = curDir.find(item => item.name === dirName)
      if (!child) {
        child = { name: dirName, child: [] }
        curDir.push(child)
      }
      curDir = child.child
    }
  }
  console.log('目录结构', dir[0])

  // fetch
  dir[0].pid = pidInput.value
  dir[0].isView = isViewSelect.value
  const data = dir[0]
  console.log('fetch 上传文件夹', data)
  document.querySelectorAll('pre')[0].textContent = JSON.stringify(data, null, 2)
}
