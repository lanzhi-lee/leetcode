function MergeSort(arr: number[]) {
  sort(arr, 0, arr.length - 1)

  function sort(arr: number[], left: number, right: number) {
    if (left < right) {
      const mid = Math.floor((left + right) / 2)

      sort(arr, left, mid) // 左边归并排序，使得左子序列有序
      sort(arr, mid + 1, right) // 右边归并排序，使得右子序列有序
      merge(arr, left, mid, right) // 将两个有序子数组合并操作
    }
  }

  function merge(arr: number[], left: number, mid: number, right: number) {
    let _left = left // 左序列指针
    let _right = mid + 1 // 右序列指针

    const temp = []
    let p_tmp = 0 // 临时数组指针

    while (_left <= mid && _right <= right) {
      if (arr[_left] <= arr[_right]) {
        temp[p_tmp++] = arr[_left++]
      } else {
        temp[p_tmp++] = arr[_right++]
      }
    }

    while (_left <= mid) {
      // 将左边剩余元素填充进temp中
      temp[p_tmp++] = arr[_left++]
    }

    while (_right <= right) {
      // 将右序列剩余元素填充进temp中
      temp[p_tmp++] = arr[_right++]
    }

    p_tmp = 0
    // 将temp中的元素全部拷贝到原数组中
    while (left <= right) {
      arr[left++] = temp[p_tmp++]
    }
  }
}

;(function test() {
  const arr = [9, 8, 7, 6, 5, 1, 2, 3, 4]
  MergeSort(arr)
  console.log('expect:[1, 2, 3, 4, 5, 6, 7, 8, 9]', arr)
})()
