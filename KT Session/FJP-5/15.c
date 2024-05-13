#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* create(struct Node* head, int x)
{
    struct Node *temp, *ptr = head;
    temp = (struct Node*)malloc(sizeof(struct Node));
    temp->data = x;
    temp->next = NULL;
    if (head == NULL)
        head = temp;
    else {
        while (ptr->next != NULL) {
            ptr = ptr->next;
        }
        ptr->next = temp;
    }
    return head;
}

struct Node* removeNthFromEnd(struct Node* head, int n)
{
    // Initialize two pointers, p1 and p2, with a gap of n nodes
    struct Node *p1 = head, *p2 = head;
    for (int i = 0; i < n; i++)
        p2 = p2->next;

    // If p2 has reached the end, it means the nth node from the end is the head node
    // In this case, we simply return the second node as the new head
    if (p2 == NULL)
        return head->next;

    // Move p2 to the end of the list
    while (p2->next != NULL)
    {
        p1 = p1->next;
        p2 = p2->next;
    }

    // Set the next pointer of p1 to the node after the nth node from the end
    p1->next = p1->next->next;

    return head;
}

void display(struct Node* start)
{
    struct Node* temp = start;
    while (temp != NULL) {
        printf("%d ",temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main()
{
    struct Node* start = NULL;

    start = create(start, 1);
    start = create(start, 2);
    start = create(start, 3);
    start = create(start, 4);
    start = create(start, 5);
    int n;
    printf("Enter the nth node from the end to remove: ");
    scanf("%d", &n);
    printf("Linked list Input \n");
    display(start);
    start = removeNthFromEnd(start, n);
    printf("Linked list after removing the nth node from the end \n");
    display(start);
    return 0;
}

