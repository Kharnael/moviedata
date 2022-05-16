fetch('/assets/datas/movies.json')
.then( (response) => response.json()
.then( data =>
    data.results.forEach(movie => {
        console.log(movie)
        let title = movie.original_title
        let poster = movie.poster_path
        let overview = movie.overview
        let average = movie.vote_average
        movies.innerHTML += `<div class="card">
        <img src="${poster}" alt="poster de ${title}">
        <div class="infos">
        <h2 class="title">${title}</h2>
        <p class="overview">${overview}</p>
        <p class="average">${average}</p>
        </div>
        </div>`

})))

