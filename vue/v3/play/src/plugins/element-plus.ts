import 'element-plus/dist/index.css'
import { ElInput, ElDialog, ElButton } from 'element-plus'

const install = (app: any) => {
  app.component('ElInput', ElInput)
  app.component('ElDialog', ElDialog)
  app.component('ElButton', ElButton)
}

export default {
  install,
}
