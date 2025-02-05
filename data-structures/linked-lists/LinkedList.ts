class ListNode<T>{
    data:T;
    next:ListNode<T>|null;
    constructor(data:T){
        this.data=data;
        this.next=null
    }
}

class LinkedList<T>{
   private head:ListNode<T>|null;
   private size:number;
   
/**
 * Initializes a new instance of the LinkedList class.
 * Sets the head of the list to null and the size to 0.
 */
   constructor(){
    this.head=null;
    this.size=0;
   }
   

    /**
     * Appends a new node with the given data to the end of the linked list
     * @param data The data to add to the linked list
     */
   append(data:T){
        const newNode=new ListNode(data)
        if(!this.head){
            this.head=newNode;
        }else{
            let currentNode=this.head;
            while(currentNode.next){
                currentNode=currentNode.next;
            }
            currentNode.next=newNode;
        }
        this.size++;
   }


    /**
     * Prepends a new node with the given data to the beginning of the linked list
     * @param data The data to prepend to the linked list
     */
   prepend(data:T){
        const newNode=new ListNode(data);
        newNode.next=this.head;
        this.head=newNode;

        this.size++;
   }


    /**
     * Removes the first occurrence of the given data from the linked list.
     * @param data The data to remove
     */
   remove(data:T){
        if (!this.head) return;

        if(this.head.data===data){
            this.head=this.head.next
            this.size--;
            return
        }

        let currentNode=this.head;

        while(currentNode.next){
            if(currentNode.next.data===data){
                currentNode.next=currentNode.next.next;
                this.size--;
                return;
            }
            currentNode=currentNode.next;
        }
   }


   getSize():number{
    return this.size;
   }

   print(){
    let currentNode=this.head;
    const list:T[]=[];
    while(currentNode){
        list.push(currentNode.data);
        currentNode=currentNode.next;
    }
    console.log(list);
   }


   reverse(){
    let prev:ListNode<T>|null=null;
    let currentNode=this.head;
    while(currentNode){
        let next=currentNode.next;
        currentNode.next=prev;
        prev=currentNode;
        currentNode=next;
    }
    this.head=prev;
   }
}

const numberList=new LinkedList<number>()

numberList.append(6);
numberList.append(8);
numberList.append(10);
numberList.prepend(12);


numberList.remove(10);
numberList.remove(12);
console.log(numberList.getSize())

numberList.append(20);



numberList.print();