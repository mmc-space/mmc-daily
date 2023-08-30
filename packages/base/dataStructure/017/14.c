#include <stdio.h>
#include <stdlib.h>

int fn(int s1[], int s2[], int s3[], int len1, int len2, int len3)
{
  int min = 0;

  for (int i = 0; i < len1; i++)
    for (int j = 0; i < len2; j++)
      for (int k = 0; i < len3; k++)
      {
        int value = abs(i - j) + abs(j - k) + abs(k - i);
        if (value < min)
          min = value;
      }

  return min;
}

int main()
{
  int arr1[] = {1, 2, 3};
  int arr2[] = {4, 5, 6, 7};
  int arr3[] = {8, 9};

  int len1 = sizeof(arr1) / sizeof(arr1[0]);
  int len2 = sizeof(arr2) / sizeof(arr2[0]);
  int len3 = sizeof(arr3) / sizeof(arr3[0]);

  fn(arr1, arr2, arr3, len1, len2, len3);

  return 0;
}
