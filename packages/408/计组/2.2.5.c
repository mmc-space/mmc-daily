#include <stdio.h>

int main()
{
  short x = -4321;

  unsigned y = (unsigned short)x;

  printf("x: %d, y: %u", x, y);

  return 0;
}
