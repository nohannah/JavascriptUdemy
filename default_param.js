// function rollDie(numside){
//     if (numside=== undefined){
//         numside=6
//     }
//     return Math.floor(math.random()* numside) +1 
// }
// console.log(rollDie)

// add more syntax
function rolldie(numside=6){
    return Math.floor(Math.random()* numside) + 1
}
 console.log(rolldie());
function greet ( person,msg= "Hey there",punc='!'){
    console.log(`${msg}, ${person}${punc}`);

}