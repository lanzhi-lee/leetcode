import { isEqual, range } from './test'

// 选择排序
// 1. 在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
// 2. 从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾
// 3. 重复第2步，直到所有元素均排序完毕

function sort(arr: number[]) {
  let temp: number

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j
    }

    if (minIndex !== i) {
      temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }

  return arr
}

;(function test() {
  isEqual(sort([]), [])
  isEqual(sort([1]), [1])
  isEqual(sort([2, 1]), [1, 2])
  isEqual(sort([2, 1, 3]), [1, 2, 3])
  isEqual(sort([4, 2, 1, 3]), [1, 2, 3, 4])
  isEqual(sort([4, 2, 5, 1, 9, 6, 7, 8, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9])
  isEqual(sort(range(10000).reverse()), range(10000))
})()
