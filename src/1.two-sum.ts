// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 脑抽实现
function twoSum1(nums: number[], target: number): number[] {
  let result: number[] = []

  for (let indexOuter = 0; indexOuter < nums.length; indexOuter++) {
    const minus = target - nums[indexOuter]

    for (
      // 注意这里需要+1，否则当 目标数值是第 0 个元素的2倍时，会出现判断错误
      let indexInner = indexOuter + 1;
      indexInner < nums.length;
      indexInner++
    ) {
      if (nums[indexInner] === minus) {
        console.log(indexOuter, indexInner)
        result = [indexOuter, indexInner]
        break
      }
    }

    if (result.length) break
  }

  return result
}

// 常规实现
function twoSum2(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j]
    }
  }

  return []
}

// Map实现1
// 这个实现会直接把全部的用例弄到一个map里，对内存不太友好
function twoSum3(nums: number[], target: number): number[] {
  // const numsMap: { [key: number]: number } = {}
  // for (let index = 0; index < nums.length; index++) {
  //   numsMap[nums[index]] = index
  // }

  const numsMap = new Map()
  for (let index = 0; index < nums.length; index++) {
    numsMap.set(nums[index], index)
  }

  for (let index = 0; index < nums.length; index++) {
    const remainIndex = numsMap.get(target - nums[index])

    if (remainIndex && remainIndex !== index) return [index, remainIndex]
  }

  return []
}

// Map实现2
function twoSum(nums: number[], target: number): number[] {
  const numsMap: { [key: number]: number } = {}

  for (let index = 0; index < nums.length; index++) {
    const remainIndex = numsMap[target - nums[index]]

    if (remainIndex !== undefined && remainIndex !== index) {
      return [remainIndex, index]
    }

    numsMap[nums[index]] = index
  }

  return []
}

;(function test() {
  console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
  console.log(twoSum([3, 2, 4], 6)) // [1, 2]
})()
