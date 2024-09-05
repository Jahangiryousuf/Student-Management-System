import inquirer from "inquirer"

const randomNum : number = Math.floor(1000+ Math.random()*90000)

let myBalance : number= 0



    
    
let  answer = await inquirer.prompt([
    {
        name : "student",
        type : "input",
        message : "enter student name",
        //  using validate function
        validate : function (value){
     if(value.trim()  !== ""){
        return true
     }
        return "enter a non empty value"
        }
    },

    {
        name : "courses",
        type : "list",
        message : "select course to enroll",
        choices :["Ms Office", "Html", "JavaScript", "TypeScript", "Python"]

    }
]);



 const courseFee : {[key : string] : number} ={
    "Ms Office" : 2000,
    "TypeScript": 3000,
    "JavaScript" :4000,
    "Html"  : 5000,
    "Python" : 6000
 };

 console.log(`Course Fees ${courseFee[answer.courses]}`);
 console.log(`Balance ${myBalance} \n`);

 let paymentType = await inquirer.prompt([{
    name : "payment",
    type:"list",
    message : "select payment method",
    choices : [  "Bank Transfer", "EasyPaisa", "JazzCash", ]
 },
 {
    name : "amount",
    type : "input",
    message : "TRansfer Money",
    validate: function(value) {
        if (value.trim() !== ""){
            return true;
        }
        return "please enter a non empty value" },
 }
]);

console.log(`\n you select payment method ${paymentType.payment}`);

const fees = courseFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);

if (fees === paymentAmount) {
    console.log(`congratulations you  have successfully enrolled in ${answer.courses}. \n`);
    
    let ans = await inquirer.prompt([{
        name : "select",
        type : "list",
        message : "what would like to do",
        choices : ["exit", "View Status"]
    }]);

    if (ans.select === "View Status"){
        console.log(`\n ******** Status******** \n`);
        console.log(`StudentName ${answer.student}\n`);
        console.log(`Student ID ${randomNum}\n`);
        console.log(`Course ${answer.courses}\n`);
        console.log(`Tution Fee Paid : ${paymentAmount}\n`);
        console.log(`Balance ${myBalance += paymentAmount}`);
      }
       else{
        console.log("Exiting Student Management System");
        
      }
      
      }  else{"select correct Amount Of selected Course"}

      






 


 


