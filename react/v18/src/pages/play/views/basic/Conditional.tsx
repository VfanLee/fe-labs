import { useState } from 'react'

function conditional() {
  const [isShow, setIsShow] = useState(true)
  const [type, setType] = useState(0)

  function getTypeTep() {
    switch (type) {
      case 0:
        return <div>类型 1 ~</div>
      case 1:
        return <div>类型 2 @</div>
      case 2:
        return <div>类型 3 !</div>
      default:
        return null
    }
  }

  return (
    <>
      {/* 简单逻辑 */}
      <button type="button" onClick={() => setIsShow(!isShow)}>
        切换
      </button>
      {/* 逻辑与 && */}
      <div>{isShow && <span>嘿嘿</span>}</div>
      {/* 三元运算 */}
      <div>{isShow ? <span>我来了</span> : <span>我走了</span>}</div>

      <hr />

      {/* 复杂逻辑 */}
      <button type="button" onClick={() => setType((type + 1) % 3)}>
        切换
      </button>
      {/* 通过调用函数渲染不同的模板 */}
      {getTypeTep()}
    </>
  )
}

export default conditional
