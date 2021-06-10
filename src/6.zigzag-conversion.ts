// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"

// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// 示例 3：
// 输入：s = "A", numRows = 1
// 输出："A"

// 提示：

// 1 <= s.length <= 1000
// s 由英文字母（小写和大写）、',' 和 '.' 组成
// 1 <= numRows <= 1000

// 普通思路，构造二维数组，接近于暴力破解
function convert1(str: string, numRows: number): string {
  if (numRows === 1) return str

  const mod = numRows - 1 // 模

  // mod 为1时, 任意值对其取模 都是 0, 不满足下方逻辑执行的条件
  if (mod === 1) {
    let odd = '' // 奇数行
    let even = '' // 偶数行

    for (let index = 0; index < str.length; index += 2) {
      odd += str[index]
      even += str[index + 1] || ''
    }

    return odd + even
  }

  let curColumn = 0 // 标记当前列数
  let curCount = 0 // 标记单字符列出现次数

  // 先构建二维数组存储转换后的各个列
  const columns: string[][] = []
  for (let index = 0; index < str.length; index++) {
    // 先判断当前行 是否是单字符列
    if ((curColumn + 1) % mod === 1) {
      columns[curColumn] = str.slice(index, index + numRows).split('')
      curColumn++ // 行+1
      curCount = 0 // 单字符列次数重置
      index += mod // 字符串下标加 mod
    }
    // 单字符列
    else {
      // 默认初始化一个空数组
      if (!columns[curColumn]) columns[curColumn] = []
      columns[curColumn][numRows - curCount - 2] = str[index]
      curColumn++ // 行+1
      curCount++ // 单字符列次数+1
    }
  }

  let res = ''
  for (let index = 0; index < numRows; index++) {
    for (const column of columns) {
      res += column[index] || ''
    }
  }

  return res
}

// 用对象存储转换后的列，提高空间利用效率
// NOTE 实际执行后发现并没有降低内存占用
function convert(str: string, numRows: number): string {
  // type Column = {
  //   type: 's' | 'm' // 'single' | 'multiple'
  //   value: string
  //   index: number
  // }
  // 'single' | 'multiple'
  type Column = [index: number, value: string]

  if (numRows === 1) return str

  const mod = numRows - 1 // 模

  // mod 为1时, 任意值对其取模 都是 0, 不满足下方逻辑执行的条件
  if (mod === 1) {
    let odd = '' // 奇数行
    let even = '' // 偶数行

    for (let index = 0; index < str.length; index += 2) {
      odd += str[index]
      even += str[index + 1] || ''
    }

    return odd + even
  }

  let curColumn = 0 // 标记当前列数
  let curCount = 0 // 标记单字符列出现次数

  // 先构建二维数组存储转换后的各个列
  const columns: Column[] = []
  for (let index = 0; index < str.length; index++) {
    // 先判断当前行 是否是单字符列
    if ((curColumn + 1) % mod === 1) {
      // columns[curColumn] = str.slice(index, index + numRows).split('')
      columns[curColumn] = [0, str.slice(index, index + numRows)]
      curColumn++ // 行+1
      curCount = 0 // 单字符列次数重置
      index += mod // 字符串下标加 mod
    }
    // 单字符列
    else {
      // columns[curColumn][numRows - curCount - 2] = str[index]
      columns[curColumn] = [numRows - curCount - 2, str[index]]
      curColumn++ // 行+1
      curCount++ // 单字符列次数+1
    }
  }

  let res = ''
  for (let index = 0; index < numRows; index++) {
    for (const column of columns) {
      if (column[0] === 0) res += column[1][index] || ''
      else if (index === column[0]) res += column[1]
    }
  }

  return res
}

;(function test() {
  let res

  res = convert('PAYPALISHIRING', 3)
  console.log('expect PAHNAPLSIIGYIR', res, res === 'PAHNAPLSIIGYIR')

  res = convert('PAYPALISHIRING', 4)
  console.log('expect PINALSIGYAHRPI', res, res === 'PINALSIGYAHRPI')

  res = convert('AB', 2)
  console.log('expect AB', res, res === 'AB')

  res = convert('ABABABA', 2)
  console.log('expect AAAABBB', res, res === 'AAAABBB')
})()
