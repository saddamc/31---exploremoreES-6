class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`${this.name} Sleeping now`);
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('Kodom Ali', 21);
console.log(kodom);
kodom.sleep();

const badam = new Person('Kacha badam', 23)
badam.sleep();
