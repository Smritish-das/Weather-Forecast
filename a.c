#include<stdio.h>
int main()
{
    char name[30]="Programming";
    int i=10;
    int in=0;
    char name2[30];
    while(name[in]!='\0')
    {
        name2[in]=name[i-in-1];
        in++;
    };
    return 0;
}