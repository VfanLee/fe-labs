import { createContext, useContext } from 'react'

const MsgCtx = createContext('default value')

function A() {
  return (
    <div>
      <div>A 组件</div>
      <B />
    </div>
  )
}

function B() {
  const msg = useContext(MsgCtx)

  return <div>B 组件 - {msg}</div>
}

function UseContext() {
  const msg = 'hello world'
  return (
    <>
      <MsgCtx.Provider value={msg}>
        <div>UseContext</div>
        <A />
      </MsgCtx.Provider>
    </>
  )
}

export default UseContext
