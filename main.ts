import inquirer from "inquirer";

const word_input:{       //bcz answer mai object milta h isi liyay uski type hm bta rhy hain
  word:string
} = await inquirer.prompt([
  {
    name:"word",
    type:"input",
    message:"Enter your sentence to know the number of words:"
  }
])
const words = word_input.word.trim().split(" ");    //trim say last or first ki spaces khatm ho jati hain 
console.log(`words in your sentence is :${words.length}`);

