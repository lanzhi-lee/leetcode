import { isEqual, range } from './test'

// 插入排序
// 1. 把待排序的数组分成已排序和未排序两部分，初始的时候把第一个元素认为是已排好序的
// 2. 从第二个元素开始，在已排好序的子数组中寻找到该元素合适的位置并插入该位置
// 3. 重复上述过程直到最后一个元素被插入有序子数组中

function sort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let tempVal = arr[i]
    let tempPos = i

    while (tempPos > 0 && arr[tempPos - 1] > tempVal) {
      arr[tempPos] = arr[tempPos - 1]
      tempPos--
    }

    arr[tempPos] = tempVal
  }

  return arr
}

;(function test() {
  isEqual(sort([]), [])
  isEqual(sort([1]), [1])
  isEqual(sort([2, 1]), [1, 2])
  isEqual(sort([2, 1, 3]), [1, 2, 3])
  isEqual(sort([4, 2, 1, 3]), [1, 2, 3, 4])
  isEqual(sort(range(10000).reverse()), range(10000))
})()
