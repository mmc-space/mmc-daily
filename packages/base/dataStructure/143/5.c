#include <stdio.h>

int treeHeight(TreeNode root)
{
  if (root == NULL)
    return;

  Queue Q;
  int height = 0;

  while (Q.length) // 从上至下遍历
  {
    for (int i = 0, len = Q.length; i < len; i++)
    {
      DeQueue(Q, p);

      Push(Res, p->data);

      if (Q->left)
        EnQueue(Q, Q->left);

      if (Q->right)
        EnQueue(Q, Q->right);
    }
    height++;
  }

  return height;
};

int main()
{

  return 0;
}