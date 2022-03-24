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

// 滑动窗口
function lengthOfLongestSubstring(s: string): number {
  if (s.length == 0) return 0;

  const charMap: { [key: string]: number } = {}

  let max = 0
  let left = 0

  for (let index = 0; index < s.length; index++) {
    const char = s[index]

    if (charMap.hasOwnProperty(char)) left = Math.max(left, charMap[char] + 1);

    charMap[char] = index

    max = Math.max(max, index - left + 1);
  }

  return max;
}

; (function test() {
  console.log('expect:', 0, lengthOfLongestSubstring(''))
  console.log('expect:', 1, lengthOfLongestSubstring('a'))
  console.log('expect:', 2, lengthOfLongestSubstring('ab'))
  console.log('expect:', 2, lengthOfLongestSubstring('aab'))
  console.log('expect:', 1, lengthOfLongestSubstring('bbbbb'))
  console.log('expect:', 5, lengthOfLongestSubstring('abcdeb'))
  console.log('expect:', 3, lengthOfLongestSubstring('pwwkew'))
  console.log('expect:', 3, lengthOfLongestSubstring('dvdf'))
  console.log('expect:', 5, lengthOfLongestSubstring('anviaj'))
})()
