var readLineSync=require('readline-sync')
var color=require('chalk')
console.log(color.blue("What is your name?"))
const username=readLineSync.question();

console.log(color.blue("What is your date of birth in DD/MM/YYYY?"))
let birthYear=readLineSync.question();
let flag=false;
let regex=/^\d{2}\/\d{2}\/\d{4}$/
const day=birthYear.substring(0,2)
const month=birthYear.substring(3,5);
while(!flag)
{
  if(birthYear=="")
{
  console.log(color.red("Please enter your date of birth in DD/MM/YYYY!"))
birthYear=readLineSync.question();
}
else if(!regex.test(birthYear)){
console.log(color.red("Invalid Format! Please enter in correct format."));
birthYear=readLineSync.question();
}else if(month>12)
{
  console.log(color.red("Invalid Month! Please enter the birthyear with correct month."));
birthYear=readLineSync.question();
}
else{
  flag=true;
}
}

let year=birthYear.substring(6,10);
if((year%4===0 && year%100!==0)||(year%100===0 && year%400==0)){
  console.log(color.yellow.bold.italic(" You were born in a Leap Year"))
}
else
console.log(color.yellow.bold.italic(("You were not born in a Leap Year")))

