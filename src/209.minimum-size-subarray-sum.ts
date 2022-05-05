// 给定一个含有 n 个正整数的数组和一个正整数 target

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组
//  [numsl, numsl+1, ..., numsr-1, numsr]
// 并返回其长度。如果不存在符合条件的子数组，返回 0

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 输入：target = 4, nums = [1,4,4]
// 输出：1

// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0

// 提示：
// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105

// 暴力法是最直观的方法
// 初始化子数组的最小长度为无穷大
// 枚举数组 nums 中的每个下标作为子数组的开始下标，对于每个开始下标 i，需要找到大于或等于 i 的最小下标 j
// 使得从 nums[i] 到 nums[j] 的元素和大于或等于 s
// 并更新子数组的最小长度（此时子数组的长度是 j−i+1）
function minSubArrayLen1(target: number, nums: number[]): number {
  const length = nums.length

  if (length == 0) return 0

  let answer = Number.MAX_VALUE

  for (let i = 0; i < length; i++) {
    let sum = 0

    for (let j = i; j < length; j++) {
      const curSubArrLength = j - i + 1

      sum += nums[j]

      if (sum >= target) {
        answer = Math.min(answer, curSubArrLength)
        break
      }
    }
  }

  return answer == Number.MAX_VALUE ? 0 : answer

  // 针对例1
  // [2,3,1,2] 4
  // [3,1,2,4] 4
  // [1,2,4,] 3
  // [2,4,3] 3
  // [4,3] 2
  // 因此输出 2
}

// 滑动窗口
function minSubArrayLen(target: number, nums: number[]) {
  const length = nums.length
  if (length == 0) return 0

  let answer = Number.MAX_VALUE

  let start = 0
  let end = 0 // 此处需考虑第一个元素即满足整个条件的情况

  while (end < length) {
    const sum = nums.slice(start, end + 1).reduce((acc, cur) => acc + cur, 0)

    if (sum >= target) {
      const curSubArrLength = end - start + 1
      answer = Math.min(answer, curSubArrLength)
      start += 1
    } else end += 1

    // 满足条件时，最小就是1 不需要再进行判断
    if(answer === 1) break
  }

  return answer == Number.MAX_VALUE ? 0 : answer
}

// const minSubArrayLen = minSubArrayLen3;

; (function test() {
  // 输入：target = 7, nums = [2,3,1,2,4,3]
  // 输出：2
  // 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
  let res = minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
  console.log(res, res === 2, 2, '7, [2, 3, 1, 2, 4, 3]')

  // 输入：target = 4, nums = [1,4,4]
  // 输出：1
  res = minSubArrayLen(4, [1, 4, 4])
  console.log(res, res === 1, 1, '4, [1, 4, 4]')

  // 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
  // 输出：0
  res = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])
  console.log(res, res === 0, 0, '11, [1, 1, 1, 1, 1, 1, 1, 1]')

  // 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
  // 输出：0
  res = minSubArrayLen(6, [10, 2, 3])
  console.log(res, res === 1, 1, '6, [10, 2, 3]')
})()
