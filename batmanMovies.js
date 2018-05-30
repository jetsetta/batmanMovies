let batmanTitles = document.querySelector("#batmanTitles")

const myAPIKey = "fc19350e"

fetch('http://www.omdbapi.com/?s=batman&apikey=' +myAPIKey)
.then(function(response){
  return response.json()
})
.then(function(movies){
  movies.Search.forEach(function(movie){
    batTitle = ` <div id="batTitle">
                 <img id="poster" scr="${movie.Poster}">
                 <p id="title" ${movie.Title}></p>
                 </div> `

  batmanTitles.innerHTML += batTitle
})
})
