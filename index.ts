import inquirer from "inquirer";

// Random student ID generate karna
const randomNum: number = Math.floor(1000 + Math.random() * 90000);

// Balance initialize karna
let myBalance: number = 0;

// Student details aur course selection ke liye prompt
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Student ka naam daalein",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Ek non-empty value daalein";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Course chunain",
        choices: ["Ms Office", "Html", "JavaScript", "TypeScript", "Python"]
    }
]);

// Course fee dictionary ke sath keys theek karna
const courseFee: { [key: string]: number } = {
    "Ms Office": 2000,
    "TypeScript": 3000,
    "JavaScript": 4000,
    "Html": 5000,
    "Python": 6000
};

const selectedCourseFee = courseFee[answer.courses];
console.log(`Course Fees: ${selectedCourseFee}`);
console.log(`Balance: ${myBalance} \n`);

// Payment method aur amount ke liye prompt
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Payment method chunain",
        choices: ["Bank Transfer", "EasyPaisa", "JazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Paisa transfer karain",
        validate: function (value) {
            const numValue = parseFloat(value);
            if (!isNaN(numValue) && numValue > 0) {
                return true;
            }
            return "Ek valid amount daalein";
        }
    }
]);

const paymentAmount = parseFloat(paymentType.amount);

if (selectedCourseFee === paymentAmount) {
    console.log(`Mubarak! Aapne successfully ${answer.courses} mein enroll kar liya hai. \n`);
    
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Aap kya karna chahenge?",
            choices: ["Exit", "View Status"]
        }
    ]);

    if (ans.select === "View Status") {
        console.log(`\n ******** Status ******** \n`);
        console.log(`Student Name: ${answer.student}\n`);
        console.log(`Student ID: ${randomNum}\n`);
        console.log(`Course: ${answer.courses}\n`);
        console.log(`Tuition Fee Paid: ${paymentAmount}\n`);
        myBalance += paymentAmount; // Balance update karna
        console.log(`Balance: ${myBalance}`);
    } else {
        console.log("Student Management System se exit ho rahe hain");
    }
} else {
    console.log("Payment amount course fee se match nahi karti. Phir se try karein.");
}
