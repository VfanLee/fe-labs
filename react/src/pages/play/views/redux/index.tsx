import { useSelector, useDispatch } from 'react-redux'
import type { RootState, RootDispatch } from '../../store'
import { increment, decrement, asyncIncrement } from '../../store/modules/counter'

function ReduxView() {
  // 获取 state 中的数据
  const { count } = useSelector((state: RootState) => state.counter)
  // 获取 dispatch 方法
  const dispatch = useDispatch<RootDispatch>()

  return (
    <>
      {/* 调用 dispatch 方法  */}
      <button onClick={() => dispatch(increment(2))}>+2</button>
      {/* 异步 dispatch  */}
      <button onClick={() => dispatch(asyncIncrement(2))}>异步 ++</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
    </>
  )
}

export default ReduxView
