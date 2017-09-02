import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';


Meteor.startup(()=>{

    // class Person {
    //     constructor (name='Anonymous', age = 0) {
    //         this.name = name;
    //         this.age = age;
    //     }

    //     getGreeting () {
    //         return `Hi, my name is ${this.name}!`;
    //     }

    //     getPersonDescription () {
    //         return `${this.name} is ${this.age} year(s) old.`
    //     }

    // }

    // class Employee extends Person {
    //     constructor (name, age, title, salary=0, companyCar=false) {
    //         super(name,age);
    //         this.title=title;
    //         this.salary=salary;
    //         this.companyCar=companyCar;
    //     }

    //     hasJob() {
    //         return !!this.title;
    //     }

    //     getGreeting () {
    //         if(this.title) {
    //             return `Hi, my name is ${this.name}, and I work as a ${this.title}`;        
    //         } else {
    //             return super.getGreeting();
    //         }
    //     }
    // }

    // class Programmer extends Person {
    //     constructor (name, age, preferredLang='Modula-2') {
    //         super(name,age);
    //         this.preferredLang = preferredLang;
    //     }

    //     getGreeting (){
    //         return `Hi, my name is ${this.name}.  I am ${this.age} year(s) old and I prefer programming in ${this.preferredLang}`;
    //     }
    // }

    // let me = new Programmer ('Mark', 48);

    // console.log(me.getGreeting());
    // // console.log(me.hasJob());
    // console.log(me.getPersonDescription());

   
    
});