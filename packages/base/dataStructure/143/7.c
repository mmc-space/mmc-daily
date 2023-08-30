#include <stdio.h>
#include <stdbool.h>

// 判断是否为完全二叉树
// 层序遍历改良
bool is_complete_binary_tree(TreeNode root)
{
  if (root == NULL)
    return true;

  Queue Q;
  EnQueue(Q, root);

  // 是否为叶结点
  bool is_leaf = false;

  while (Q.length)
  {
    DeQueue(Q, p);

    if (is_leaf && (p->left || p->right))
      return false;

    if (p->left)
      EnQueue(Q, p->left);
    else if (p->right)
      return false; // 如果节点只有右子节点，这不是一颗完全二叉树。

    if (p->right)
      EnQueue(Q, p->right);

    if (p->right == NULL || p->left == NULL)
      is_leaf = true; // 为空 说明到达叶结点
  }

  return true;
};

int main()
{

  return 0;
}