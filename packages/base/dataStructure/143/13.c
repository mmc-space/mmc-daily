#include <stdio.h>

// 最近公共祖先
TreeNode ANCESTOR(TreeNode root, TreeNode p, TreeNode q)
{
  if (root == p || root == q || root == NULL)
    return root;

  // 左右子树依次查找
  TreeNode left = ANCESTOR(root.left, p, q);
  TreeNode right = ANCESTOR(root.right, p, q);

  // 说明在两侧 根节点为最近祖先
  if (left != NULL && right != NULL)
    return root;

  // 说明在左子树
  if (left != NULL)
    return left;

  return right;
}

int main()
{

  return 0;
}