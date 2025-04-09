const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// is tarh se add karne pr array ke andar me array aa jata h 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// concat karne se vo ik naye array me value return krta h a ki exiting array me
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// sperad opertor array ke sbhi value ko spread kar deta h taki usko add ache se ho ske
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// agar array ke andar array aur uske andar array rhe to hm falt ka use karte h 
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Ritesh")) // ye batata h ki ye array h ya nhi
// console.log(Array.from("Ritesh")) ye array me badlta h 
console.log(Array.from({name: "Ritesh"})) // interesting ye empty dega isme hmko batna padhta h ki hm jey par array banye ki pair pr

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));