class stack {
    constructor(){
        this.arr = [];
    }
    push(element){
        this.arr.push(element)
    }
    pop(){
        return this.arr.pop()
    }
    peek(){
        return this.arr[this.arr.length-1]
    }
    isEmpty(){
        return this.arr.length == 0;
    }

}

let st = new stack()
st.push(5)
st.push(2)
console.log(st.pop())
console.log(st.peek())
console.log(st.isEmpty())
