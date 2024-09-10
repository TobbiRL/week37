/*
    Task: B
    The following code is incorrect, can you fix the errors?
    This one isn't that simple, there are syntax errors and logical errors.
    Try to think about what we are trying to achieve.
*/
console.log("Task: B");

const MAX = 99;
for (let index = MAX; index > 0; index--) {
    console.log(index + " bottles of soda on the shelf");
    console.log(index + " bottles of soda on the shelf");

    console.log("Take one down, pass it around \n" + (index - 1) + " bottles of soda on the shelf");
    console.log("");
};
    

console.log("No more bottles of soda on the shelf");

