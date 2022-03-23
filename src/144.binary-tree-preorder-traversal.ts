// 144. 二叉树的前序遍历
// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/

// 递归法
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []

  if (root?.val) res.push(root.val)
  if (root?.left) res.push(...preorderTraversal(root.left))
  if (root?.right) res.push(...preorderTraversal(root.right))

  return res
}

; (function test() {
  const root = new TreeNode(
    0,
    new TreeNode(1,
      new TreeNode(3,
        new TreeNode(7), new TreeNode(8)
      ),
      new TreeNode(4,
        new TreeNode(9), new TreeNode(10),
      ),
    ),
    new TreeNode(2,
      new TreeNode(5,
        new TreeNode(11), new TreeNode(12),
      ),
      new TreeNode(6,
        new TreeNode(13), new TreeNode(14),
      ),
    ),
  )

  const res = preorderTraversal(root)
  console.log(res)
})()
