#include <stdio.h>
#include <string.h>

#define MAXLEN 255;
typedef struct
{
  /* data */
  char ch[MAXLEN];
  int length;
} SString;

int Index_KMP(SString str, SString target, int Next[])
{
  int i = 1, j = 1;
  while (i <= str.length && j <= target.length)
  {
    /* 判断当前是否相同 */
    if (str[i] == target[j] || j == 0)
    {
      // 比较后续
      i++;
      j++;
    }
    else
    {
      // 匹配失败 寻找下一个起点
      j = Next[j];
    }
  }

  // 匹配成功 返回起点坐标
  if (j < target.length)
  {
    return i - target.length;
  }

  // 未找到 返回 -1
  return -1;
}

int main()
{
  return 0;
}
