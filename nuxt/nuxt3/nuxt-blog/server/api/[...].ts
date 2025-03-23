import { createRouter, defineEventHandler, useBase } from 'h3'
import * as BlogCtrl from '@/server/controller/blog'

const router = createRouter()

router.get('/blog', defineEventHandler(BlogCtrl.read))
router.post('/blog', defineEventHandler(BlogCtrl.create))
router.put('/blog/:id', defineEventHandler(BlogCtrl.update))
router.get('/blog/:id', defineEventHandler(BlogCtrl.detail))
router.delete('/blog/:id', defineEventHandler(BlogCtrl.remove))

export default useBase('/api', router.handler)
