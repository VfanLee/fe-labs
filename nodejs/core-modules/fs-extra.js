import fse from 'fs-extra'

const { ensureDir, ensureFile } = fse

ensureDir('dist')
ensureFile('dist/index.js')
