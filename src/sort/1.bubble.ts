import { isEqual, range } from './test'

// 冒泡排序
// 1. 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
// 2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
// 3. 针对所有的元素重复以上的步骤，除了最后一个；
// 4. 重复步骤1~3，直到排序完成。

// 冒泡排序是最简单的排序算法

// 初学时候容易造成误解的地方
// 1. 每次循环执行结束, 最大的数字都已经被交换到了数组最后一个元素
// 2. 循环是要反复执行知道数组为有序的

function sort(arr: number[]) {
  let temp: number
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // const element = arr[j]
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
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
  isEqual(sort(range(10000).reverse()), range(10000))
})()
