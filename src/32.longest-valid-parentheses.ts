// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

// 示例 1：

// 输入：s = "(()"
// 输出：2
// 解释：最长有效括号子串是 "()"

// 示例 2：

// 输入：s = ")()())"
// 输出：4
// 解释：最长有效括号子串是 "()()"

// 示例 3：

// 输入：s = ""
// 输出：0

// 提示：

// 0 <= s.length <= 3 * 104
// s[i] 为 '(' 或 ')'

function longestValidParentheses(str: string): number {
  if (!str) return 0

  const map: { [key: string]: string } = { '(': ')' }
  const stack: string[] = []

  let max = 0
  let series = 0

  for (let index = 0; index < str.length; index++) {
    const char = str[index]
    // stack为空 直接入栈
    if (!stack.length) {
      stack.push(char)
      continue
    }

    const lastChar = stack[stack.length - 1]

    // 匹配前一个 出栈
    if (map[lastChar] === char) {
      stack.pop()

      series += 2
    }
    // 不匹配前一个，入栈
    else {
      // max = Math.max(max, series)
      // series = 0

      stack.push(char)
    }
  }

  return max
}

;(function test() {
  let str = '(()'
  let res = longestValidParentheses(str)
  console.log(res === 2, res, str)

  str = ')()())'
  res = longestValidParentheses(str)
  console.log(res === 4, res, str)

  str = ''
  res = longestValidParentheses(str)
  console.log(res === 0, res, str)
})()
