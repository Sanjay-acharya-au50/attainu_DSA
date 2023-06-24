
class Student{
    constructor(name,age,marks){
        this.name = name;
        this.age = age;
        this.marks = marks
    }

    getTotalMarks(){
        return this.marks
    }

}
let st = new Student("san", 20,90)

console.log(st.getTotalMarks())