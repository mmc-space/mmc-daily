TreeNode *buildTreeHelper(int *preorder, int *inorder, int pre_cur, int start_index, int end_index)
{
  if (start_index > end_index)
    return NULL;

  // 参数 pre_cur 用于记录前序数组当前的索引
  int root = preorder[pre_cur];

  TreeNode *node = createNode(root);         //创建一个新的树节点
  int root_index = findIndex(inorder, root); //在中序遍历数组中找到当前值的位置

  // 递归 对左右子树依次
  node->left = buildTreeHelper(preorder, inorder, pre_cur + 1, start_index, root_index - 1);
  node->right = buildTreeHelper(preorder, inorder, pre_cur + (root_index - start_index) + 1, root_index + 1, end_index);

  return node;
}

// 根据 前序 中序 确定二叉树
TreeNode *buildTree(int *preorder, int *inorder, int len)
{
  return buildTreeHelper(preorder, inorder, 0, 0, len - 1);
}
