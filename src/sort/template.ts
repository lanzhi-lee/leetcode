import { isEqual, range } from './test'

// 排序
// 1. 
// 2. 
// 3. 
// 4. 

function sort(arr: number[]) {
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
