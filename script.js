const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.getElementById("movie-box");
const moiveSearch = document.getElementById("search");
const getMovie = async (api) => {
    const response = await fetch(api)
    const data = await response.json()
    showMovie(data.results);
}

const showMovie = (data) => {
    movieBox.innerHTML = "";
    data.forEach(
        (item) => {
            const box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML =
                `<img
                src="${IMGPATH + item.poster_path}"
                alt="movie-image"/>
                <div class="overlay">
                    <div class="title">
                        <h2>${item.title}</h2>
                        <span>${item.vote_average}</span>
                    </div>
                    <h3>${item.overview}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
                        Totam mollitia, cumque iusto sed nam assumenda sunt
                        quaerat dolorum amet, quia laudantium pariatur
                        recusandae dolor eaque, quisquam ad fugiat
                        blanditiis.
                        Adipisci quia dolorem nemo similique autem illo
                        illum
                        aliquid, laborum labore quibusdam ex corporis
                        voluptatum</p>
                </div>
                `;
            movieBox.appendChild(box);
        }
    )
}

const searchMoive = () => {
    moiveSearch.addEventListener("keyup", function (event) {
        if (event.target.value !== "") {
            getMovie(SEARCHAPI + event.target.value);
        } else {
            getMovie(APIURL);
        }
    });
}
searchMoive();
getMovie(APIURL)