
//Arrays

const firstArray = [];  //creates an empty array just like java
let secondArray = new Array();    //another way of doing the same thing

firstArray[0]; //access value at first index- undefined as it is an empty array
firstArray[0] = "Superman"; //assigns value to array index

firstArray[12] = "superman12";  //can assign at any value

firstArray; //displays entire array as output

secondArray = ["1","2","3","4"];    //another way to add data to an array

const [x,y] = [1,2];    //assings multiple values at the same time
x;  //1
y;  //2

firstArray.length;  //returns length (use dot trick)

firstArray.pop();   //returns last value of array and removes it from array (same as stack)

secondArray.concat(firstArray); //adds firstArray onto secondArray

secondArray.join(); //turns second array into a string
secondArray.reverse();  //returns reverse of original array
//use dot trick to find additional methods that array can perform

secondArray.indexOf("Superman12");  //can find items index


//Sets


let set1 = new Set();   //creates empty set
const set2 = new Set([1,1,1,1,1,1,1]);  //assigns values upon initialization

set1.add([1]).add([1]); //treats objects as individual, added twice on one line

const Array1 = [set1];  //converts set to Array
Array1; //outputs array

let array = [1,2,3];
const strong = new Set().add(array);

array = null;   //remove reference to original
array = [strong][0];
//array still exists within set so it is not garbage collected

const weak = new WeakSet().add(array);
//can only add non-primitive data types

weak.delete(array); //can delete array within set


//Maps


const map1 = new Map(); //created same as other objects above
map1.set(1,'1').set(2,'2');
map1.get(2);    //returns '2'

map1.delete(2);

Array.from(map1);    //Arrays.from method to convert to array
//weak maps exist just like weak 

//logic

let condition = true;
if(condition){
    //run code
}

else{
    //run else code
}
//if/else works just like java

//condition ? (//code if true) : (//code if false);

//switch operator

let number = 1;

switch(number){
    case 1:
        //run case 1 code
    break;
    case 2:
        //case 2 code
        break;
    case 3:
        //case 3 code
        break;
}

while(condition){
    //code here
}
//while loops just like java

do{
    //run code here
}while(condition);
//do...while loop example

for(let i = 0; i < 10; i++){
    //run loop code here
}

//loop through set/maps
for(const value of set1){
    //do something with each value of set here
}

