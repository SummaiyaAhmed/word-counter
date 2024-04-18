#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence"
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word count is :  ${words.length} `);
// trim method  removes n does not count  white spaces before and after the sentence but yes it  does count spaces 
//between words with in the sentence.
// split method splits the sentence into words and returns an array of words.
// trim method removes white spaces before and after the sentence but does not remove spaces between words.
// split k bracket me jo  "" hai is me space deni  zarori hy   space nh lgai to wo words nh charachter or letters  count krny lgyga .
// or pora split hi hata dengy tb bhi  same yehi hoga k letters n  charachters count hony lgengy  words nh .or array ki form me b print nh ho k aega .
