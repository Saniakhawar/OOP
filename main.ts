#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk" 

class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Person {
    students: Student[] = [];

    addStudent(obj: Student) {
        this.students.push(obj);
    }
}

const persons = new Person();

const programStart = async (persons: Person) => {
    console.log(chalk.bold.rgb(204,204,204)(`\t\t<<< ========================================================= >>> `));
    console.log( chalk.yellowBright.bold("\n\t\t          Welcome to OOP Project created by SaniaKhawar\n"));
    console.log(chalk.bold.cyan.bold("\n\t\t                    Welcome guest!  \n"));
    console.log(chalk.bold.rgb(204,204,204)(`\t\t<<< ========================================================= >>> `));
    do{
    console.log(chalk.bold.cyan("*******Welcome!!!*******"));

   
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "What would you like to interact with?",
            choices: ["Teacher", "student", "exit"]
        });

        if (ans.select === "Teacher") {
            console.log(chalk.green(`Hello!!!!! You are chatting with Teacher`));
            console.log(chalk.yellow("Hope you are doing well!"));
        } 
        else if (ans.select === "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with:"
            });

            const student = persons.students.find(val => val.name === ans.student);

            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.bold.cyan(`Hello, I am ${chalk.bold.cyan(name.name)}. Nice to meet you!`));
                console.log(chalk.bold.yellow("New student added."));
                console.log(chalk.bold.green("Current student list:"));
                console.log(persons.students);
            } else {
                console.log(chalk.bold.yellow(`Hello, I am ${chalk.bold.cyan(student.name)}. Nice to meet you again!`));
                console.log(chalk.bold.blue("Exixiting student list:"));
                console.log(persons.students);
            }

            
            
        } else if (ans.select === "exit") {
            console.log(chalk.bold.green("Exiting the program..."));
            process.exit()
        }
    }while(true)
}

programStart(persons);
