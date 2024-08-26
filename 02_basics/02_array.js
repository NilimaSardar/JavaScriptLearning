const marvel_heros=["thor","Ironman","Spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);


// let allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const all_new_heros=[...dc_heros,...marvel_heros,...dc_heros];
// console.log(all_new_heros);

const another_array =[1,2,3,[4,5],6,7,[4,6,8,[5,2]]];
// const real_another_array = another_array.flat(1);
// const real_another_array = another_array.flat(2);
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray(marvel_heros));
console.log(Array.isArray("Nilima"));

console.log(Array.from("Nilima"));

console.log(Array.from({name:"Nlima"}));//Interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(100,200,300));
console.log(Array.of(score1,score2,score3));







