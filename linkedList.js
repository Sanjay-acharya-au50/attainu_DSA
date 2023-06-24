
// //  creating single node linklist;

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// let node1 = new Node(5)
// let node2 = new Node(6)
// node1.next = node2
// console.log("Node ---> ", node1.value)

// //  creating multiple node link list;

// class Node1 {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }




// let node11 = new Node1(1);
// let node22 = new Node1(2);
// let node33 = new Node1(3);
// let node44 = new Node1(4);

// node11.next = node22;
// node22.next = node33;
// node33.next = node44;

// console.log("Node22 ---> " , node11.value)
// console.log("Node22 ---> " , node22.value)
// console.log(node11)

// creating empty linklist and insert the value;

// class Node2 {
//     constructor(value){
//      this.val = value;
//      this.next = null;
//     }
// }

// class linklist {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

// //  insert at the end

// insertAtEnd(val){
// let nod = new Node2(val);
// if(this.head == null){
//     this.head = nod;
// }
// else {
//     let cur = this.head;
//     while(cur.next != null){
//         cur = cur.next
//     }
//     cur.next = nod;
// }

// }
// }
// let link = new linklist()
// link.insertAtEnd(5);
// link.insertAtEnd(9);
// console.log(link)

// ---------------------------------------------------------
// add from beginning;
class node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class linklinst{
    constructor (){
        this.head = null;

    }
// insert at beginning
    insertAtBeginning(val){
        let nod = new node(val)
        nod.next = this.head;
        this.head =  nod;
    }
    sizeOfTheLink(){
        let size = 0;
        let cur = this.head;

        while(cur != null){
            cur = cur.next;
            size++
//         }
//         console.log(size)
//     }

// }
// let obj = new linklinst()
// obj.insertAtBeginning(5)
// obj.insertAtBeginning(6)
// obj.insertAtBeginning(4)
// obj.sizeOfTheLink()
// console.log(obj)

// to find size of the linklist;


// class linklinst {
//     constructor(value){
//         this.value = value
//         this.next = null;
//     }
// }
// let node = new linklinst(5)
// let node2 = new linklinst(5)
// let node3 = new linklinst(5)

// node.next = node2
// node2.next = node3 

// // console.log(node)

// //  size of the linklist 

// class link {
//     constructor (val) {
//         this.head = val;
//         this.next = null;
//     }

//     sizeOfTheLink(){
//         let size = 0;
//         let cur = this.head;

//         while(cur != null){
//             cur = cur.next;
//             size++
//         }
//         console.log(size)
//     }



// // }
// let obj = new link
// obj.sizeOfTheLink()



class node {
    constructor (val){
        this.value = val;
        this.next = null;
    }
}
class link {
    constructor(){
        this.head = null;

    }
    //  creating the linklist;
    // adding from beginning;
    addFromFRont(val){
        let nod = new node(val);

        nod.next = this.head; 
        this.head = nod
    
        }
    remove(){
        let cur = this.head;
        this.head = cur.next
    }
}



obj = new link()
obj.addFromFRont(2)
obj.addFromFRont(3)
obj.addFromFRont(4)

obj.remove()
console.log(obj)


