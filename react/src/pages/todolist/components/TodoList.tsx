import style from './TodoList.module.scss'
import { Input, Button } from 'antd'

function TodoList() {
  return (
    <>
      <h1>TodoList</h1>

      <div className={style['todo-input__wrap']}>
        <Input placeholder="Basic usage" />
        <Button type="primary">Button</Button>
        213
      </div>
    </>
  )
}

export default TodoList
