#include <stdio.h>

// 从顺序表删除最小的元素 返回被删除的 空出的位置由最后一个元素填充，如果顺序表为空  显示出错信息

int remove_minimum(SqList &L)
{

  if (len == 0)
    return -1;

  int min_index = 0;
  for (int i = 1; i < L.length; i++)
  {
    if (L.data[i] < L.data[min_index])
    {
      min_index = i;
    }
  }

  int min_value = L.data[min_index];

  L.data[min_index] = L.data[len - 1];

  return min_value;
}

int main()
{
  int arr[] = {11, 3, 14, 7, 22, 18};
  int len = sizeof(arr) / sizeof(arr[0]);

  int min_value = remove_minimum(arr, len);

  printf("被删除的最小元素：%d\n", min_value);

  return 0;
}