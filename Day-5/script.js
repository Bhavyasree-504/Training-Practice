/*num=10;
num="java"
num=true;
console.log(num);*/

var numVariable = "Hey Hello";
console.log(numVariable);
class DisplayDetails{
    static getDetails(){
        console.log(numVariable);
    }
}
new DisplayDetails().getDetails();