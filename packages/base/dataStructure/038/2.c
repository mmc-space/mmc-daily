#include <stdio.h>

//
void remove_x(ListNode &l, ElementType x)
{
  ListNode *p = l.next, *c = l, *q;

  while (p != NULL)
  {
    if (p.value == x)
    {
      q = p;
      c.next = p.next;
      p = p.next;
      free(q);
    }
    else
    {
      c = p;
      p = p.next;
    }
  }
}

int main()
{

  return 0;
}