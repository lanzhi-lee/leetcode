// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 示例 4:
// 输入: s = ""
// 输出: 0

// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

// 队列实现
function lengthOfLongestSubstring(str: string): number {
  if (!str) return 0

  let result: string[] = [str[0]]

  for (let index = 1; index < str.length; index++) {
    const char = str[index]

    // result中是否已存在当前字符
    if (result.includes(char)) {
      // result的长度大于等于剩余字符的长度时，直接结束
      // if (result.length >= str.length - index + 1) break
      // 否则 result 置空
      // else
      result = result.slice(result.indexOf(char) + 1)
    }

    result.push(char)
  }

  return result.length
}

;(function test() {
  console.log('expect:', 3, lengthOfLongestSubstring('abcabcbb'))
  console.log('expect:', 1, lengthOfLongestSubstring('bbbbb'))
  console.log('expect:', 3, lengthOfLongestSubstring('pwwkew'))
  console.log('expect:', 0, lengthOfLongestSubstring(''))
  console.log('expect:', 2, lengthOfLongestSubstring('aab'))
  console.log('expect:', 3, lengthOfLongestSubstring('dvdf'))
  console.log('expect:', 5, lengthOfLongestSubstring('anviaj'))
})()

// public int lengthOfLongestSubstring(String s) {
//   // 记录字符上一次出现的位置
//   int[] last = new int[128];
//   for(int i = 0; i < 128; i++) {
//       last[i] = -1;
//   }
//   int n = s.length();

//   int res = 0;
//   int start = 0; // 窗口开始位置
//   for(int i = 0; i < n; i++) {
//       int index = s.charAt(i);
//       start = Math.max(start, last[index] + 1);
//       res   = Math.max(res, i - start + 1);
//       last[index] = i;
//   }

//   return res;
// }
