// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// num.forEach(function(number) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// });
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
movies.forEach (function(movie)
{
    console.log(`${movie.title} - ${movie.score/100}`)
})