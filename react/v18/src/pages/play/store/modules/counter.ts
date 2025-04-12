import { createSlice } from '@reduxjs/toolkit'
import type { RootDispatch } from '../index'

const counterStore = createSlice({
  name: 'counter',
  // 初始化 state
  initialState: {
    count: 0,
  },
  // 同步操作，直接修改
  reducers: {
    increment(state, action) {
      state.count += action.payload
    },
    decrement(state, action) {
      state.count -= action.payload
    },
  },
})

// 解构出 actionCreator
const { increment, decrement } = counterStore.actions

// 异步操作，返回一个函数
const asyncIncrement = (val: number) => {
  return async (dispatch: RootDispatch) => {
    setTimeout(() => {
      dispatch(increment(val * 100))
    }, 3000)
  }
}

// 获取 reducer
const reducer = counterStore.reducer

export { increment, decrement, asyncIncrement }
export default reducer
