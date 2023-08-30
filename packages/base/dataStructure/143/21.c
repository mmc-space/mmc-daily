#include <stdio.h>
#include <stdbool.h>
#include <limits.h>

typedef struct TreeNode
{
  int val;
  struct TreeNode *left;
  struct TreeNode *right;
} TreeNode;

bool is_valid_bst_helper(TreeNode *node, long min_val, long max_val)
{
  if (node == NULL)
    return true;

  // 一个节点的左子树上的所有节点值都必须小于该节点的值
  // 右子树上的所有节点值都必须大于该节点的值。
  if (node->val <= min_val || node->val >= max_val)
    return false;

  return is_valid_bst_helper(node->left, min_val, node->val) &&
         is_valid_bst_helper(node->right, node->val, max_val);
}

bool is_valid_bst(TreeNode *root)
{
  return is_valid_bst_helper(root, LONG_MIN, LONG_MAX);
}
