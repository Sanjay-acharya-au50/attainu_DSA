class node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let node1 = new node(29);  
let node2 = new node(23);
let node3 = new node(33);
let node4 = new node(21);
let node5 = new node(25);
let node6 = new node(31);
let node7 = new node(35);


//         29
//    23       33
// 21   25  31     35

let root = node1;

node1.left = node2;

node1.right = node3;

node2.left = node4;

node2.rigth = node5;

node3.left = node6;

node3.right = node7;


console.log(root)
// count = 0;

// function preOrder(root){
//     if(root==null) return;
// count++
//     preOrder(root.left);
//     preOrder(root.right);
// }
// preOrder(root)
// console.log(count)



