// https://zhuanlan.zhihu.com/p/42586566

export function isEqual(source: number[], target: number[]) {
  const flag = JSON.stringify(source) === JSON.stringify(target)
  console.log(flag)
  return flag
}

export function range(len: number) {
  let index = 0
  const res = []
  while (index < len) res.push(index++)
  return res
}
