#include <stdio.h>

void levelOrder(TreeNode root)
{
  if (root == NULL)
    return;

  Queue Q;
  Stack Res;

  while (Q.length) // 从上至下遍历
  {
    Stack S;
    for (int i = 0, len = Q.length; i < len; i++)
    {
      DeQueue(Q, p);

      Push(Res, p->data);
      // 先右再左
      if (Q->right)
        EnQueue(Q, Q->right);

      if (Q->left)
        EnQueue(Q, Q->left);
    }
    Push(Res, S);
  }

  // 反转输出
  while (Res.length)
  {
    Pop(s, p);
    visite(p->data);
  }
};

int main()
{

  return 0;
}