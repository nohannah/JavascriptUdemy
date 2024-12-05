// const add=(x,y) => {
//     return x+y;
// }
// console.log(add());

// const rolldie=() => {
//     return Math.floor(Math.random()*6)+1
// }
// console.log(rolldie());

const movies =[
    {
        title:'Avatar',
        score:99
    },
    {
        title:'Moana',
        score:90
    },
    {
        title:'Santa',
        score:70
    },
    {
        title:'kungFupanda',
        score:70
    }
]
const Newmovies = movies.map(movie =>`${movie.title} - ${movie.score/10}`)
console.log (Newmovies);