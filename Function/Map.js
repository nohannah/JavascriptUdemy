// // mapp
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const double =num.map(function(num) {
//     return num * 2; 
    
// })
// console.log(double)
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
const titles = movies.map(function(movie)
{
    return movie.title.toUpperCase();
}
)
console.log(titles)