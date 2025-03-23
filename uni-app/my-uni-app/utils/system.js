const SYSTEM_INFO = uni.getSystemInfoSync()
const MENU_BUTTON = uni.getMenuButtonBoundingClientRect()


export function getStatusBarHeight() {
  return SYSTEM_INFO.statusBarHeight
}

export function getTitleBarHeight() {
  const {
    top,
    height
  } = MENU_BUTTON
  const {
    statusBarHeight
  } = SYSTEM_INFO
  const gap = top - statusBarHeight
  return height + (gap * 2)
}