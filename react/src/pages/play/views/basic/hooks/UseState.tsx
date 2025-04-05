import { useState } from 'react'

function State() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  const [obj, setObj] = useState({
    name: '张三',
    age: 18,
  })
  const handleClick2 = () => {
    setObj({
      ...obj,
      name: '李四',
    })
  }

  const [arr, setArr] = useState([1, 2, 3])
  const handleClick3 = () => {
    setArr([4, 5, 6])
  }

  return (
    <>
      {/* 基本状态 */}
      <h2>{count}</h2>
      <button type="button" onClick={handleClick}>
        count++
      </button>

      <hr />
      {/* 对象状态 */}
      <h2>{JSON.stringify(obj)}</h2>
      <button type="button" onClick={handleClick2}>
        更改 obj
      </button>

      <hr />
      {/* 数组状态 */}
      <h2>{JSON.stringify(arr)}</h2>
      <button type="button" onClick={handleClick3}>
        添加 arr
      </button>
    </>
  )
}

export default State
