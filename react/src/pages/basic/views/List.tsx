const users = [
  { id: 1, name: '张三', age: 18 },
  { id: 2, name: '李四', age: 19 },
  { id: 3, name: '王五', age: 20 },
]

const obj: Record<string, any> = {
  id: 1,
  name: '张三',
  age: 18,
}

function List() {
  return (
    <>
      {/* 数组 */}
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>

      <hr />

      {/* 对象 */}
      <div>
        {Object.keys(obj).map((key) => (
          <div key={key}>
            {key}: {obj[key]}
          </div>
        ))}
      </div>
    </>
  )
}

export default List
