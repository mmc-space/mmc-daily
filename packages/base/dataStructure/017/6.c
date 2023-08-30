#include <stdio.h>

typedef struct
{
  int data[100];

  int length;
} SqList;

// 删除重复元素
void remove_repeat(SqList &L)
{
  if (L.length <= 1)
    return;

  int new_length = 1;

  for (int i = 1; i < L.length; i++)
  {
    if (L.data[i] != L.data[new_length - 1])
    {
      L.data[new_length++] = L.data[i];
    }
  }

  L.length = new_length;
}

int main()
{
  SqList L = {{1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8}, 12};

  remove_repeat(L);

  return 0;
}