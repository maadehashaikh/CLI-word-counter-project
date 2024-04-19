import inquirer from "inquirer";

const word_input:{
  word:string
} = await inquirer.prompt([
  {
    name:"word",
    type:"input",
    message:"Enter your sentence to know the number of words:"
  }
])
