import {address, age, name} from "./index1.mjs";

console.log(name);
console.log(age);
console.log(address);

// export by name
// => a file has many export
// => need curly braces while import
// => while import you should use same name which is used while export

// export by default
// => a file has only one export default
// =>does not need curly braces while import
// =>while import you can use any name


// alias
// import {name as name1} from './first.mjs';