/**
 * 生成随机数
 * @param min
 * @param max
 * @returns
 */
export function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
