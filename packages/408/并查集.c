#define SIZE 100
int UFSets[SIZE];

void Initial(int S[])
{
  for (int i = 0; i < SIZE; i++)
    S[i] = -1;
}

// 先找到根节点，然后直接挂载到根节点上
int Find(int S[], int x)
{
  int root = x;
  while (S[root] >= 0) root = S[root];

  while (x != root)
  {
    int temp = S[x];
    S[x] = root;
    x = temp;
  }

  return root;
}

// 让小树合并到大树上，防止增加高度
void Union(int S[], int Root1, int Root2)
{
  if (S[Root1] > S[Root2])
  {
    S[Root1] += S[Root2];
    S[Root2] = Root1;
    return;
  }

  S[Root2] += S[Root1];
  S[Root1] = Root2;
}
