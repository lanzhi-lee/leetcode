/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */

// Definition for singly-linked list.
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
//   }
// }

// @lc code=start
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head

  let cur = head

  while (cur.next) {
    if (cur.val === cur.next.val) cur.next = cur.next.next
    else cur = cur.next
  }

  return head
}
// @lc code=end

; (() => {
  console.log(deleteDuplicates(array2list([1, 1, 2])))
  console.log(deleteDuplicates(array2list([4, 5, 6])))
})()

function array2list(array: number[]) {
  if (array.length === 0) return null

  const head = new ListNode(array[0])
  let pointer = head

  for (let index = 1; index < array.length; index++) {
    pointer.next = new ListNode(array[index])
    pointer = pointer.next
  }

  return head
}
