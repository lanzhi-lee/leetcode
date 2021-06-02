// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// Definition for singly-linked list.
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
//   }
// }

// ❌ 初步的思路是先转成 整型 再转回去，但是似乎不行

// 循环实现
function addTwoNumbers1(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode(0)
  let pointer = result
  let carry = 0

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 !== null ? l1.val : 0
    const val2 = l2 !== null ? l2.val : 0
    const sum = val1 + val2 + carry

    carry = Math.floor(sum / 10)

    const nextNode = new ListNode(sum % 10)
    pointer.next = nextNode
    pointer = nextNode

    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }

  return result.next
}

function add(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number
): ListNode | null {
  const val1 = l1 !== null ? l1.val : 0
  const val2 = l2 !== null ? l2.val : 0

  const sum = val1 + val2 + carry
  let _carry = Math.floor(sum / 10)

  if (l1 === null && l2 === null && !carry) return null
  else
    return new ListNode(
      sum % 10,
      add(l1 ? l1.next : null, l2 ? l2.next : null, _carry)
    )
}

// 递归实现
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  return add(l1, l2, 0)
}

;(function test() {
  // const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
  // const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
  const l1 = new ListNode(2, null)
  const l2 = new ListNode(7, new ListNode(3))

  console.log(JSON.stringify(addTwoNumbers(l1, l2)))
})()
