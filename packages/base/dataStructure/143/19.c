#include <stdio.h>

typedef struct TreeNode
{
  int weight;                    // 权值
  struct TreeNode *left, *right; // 左右 结点
} TreeNode;

// 路径上每个节点的深度乘以对应节点的权值的总和
int getWeightedPathLength(TreeNode *root, int depth)
{
  if (!root)
    return 0;

  // 检查是否为叶子结点
  if (!root->left && !root->right)
    return root->weight * depth; // 权重与节点深度的乘积

  return getWeightedPathLength(root->left, depth + 1) + getWeightedPathLength(root->right, depth + 1);
}
int main()
{

  return 0;
}