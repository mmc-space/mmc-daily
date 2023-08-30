#include <stdio.h>

// 长度为N顺序表 删除所有值为x的元素，要求时间复杂度 On 空间复杂度 O1

void remove_x(SqList &L, ElementType x)
{
  int count = 0;
  for (int i = 0; i < L.length; i++)
  {
    if (L.data[i] != x)
    {
      L.data[count++] = L.data[i];
    }
  }
  L.length = count;
}

int main()
{
  int arr[] = {11, 3, 14, 7, 22, 18};

  printf(remove_x(arr, 3));

  return 0;
}