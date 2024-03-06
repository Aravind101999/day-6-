/// 1. for movie
class movie {
    constructor(title,studio,pg){
        this.title=title;
        this.studio=studio;
        this.pg=[13];
    }
}
var m1=new movie("Casino Royale","Eon Productions");
var m2=new movie("titan","raju")
console.log(m1);
console.log(m2);


// 3.person details

class person{
    constructor(firstname,lastname,age,qualification,address,phonenumber){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.qualification=qualification;
        this.address=address;
        this.phonenumber=phonenumber;
 
    }
  
}
 
var person1=new person("aravindh","kumar",25,"MBA","coimbatore",987654321);
console.log(person1);
var person2=new person("vasanth","kumar",22,"MBA","coimbatore",968754321);
console.log(person2);

