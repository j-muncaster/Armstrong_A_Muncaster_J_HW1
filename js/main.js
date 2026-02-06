(() => {
    // Variables
    const characterTemplate = document.querySelector("#character-template");
    const infoCon = document.querySelector("#info-con");
    const characterBox = document.querySelector("#character-box");
    const templateImages = characterTemplate.content.querySelectorAll(".character-images img");
    const baseUrl = `https://swapi.info/api/`;

    const selectedCharacters = [
        "Luke Skywalker",
        "Leia Organa",
        "Obi-Wan Kenobi",
        "Anakin Skywalker",
        "Chewbacca",
        "Yoda",
        "Jar Jar Binks",
        "Padme Amidala",
        "C-3PO",
        "R2-D2"
    ];
    
    // Functions
    function getCharacters(){
        fetch(`${baseUrl}people/`)
        .then((res) => res.json())
        .then((characters) => {
            const ul = document.createElement("ul");

            const characterImages = {};
                templateImages.forEach(img => {
                    characterImages[img.alt] = img.src;
                });

                console.log(characterImages);
                
            characters.forEach(character => {
                console.log(character.name);
                console.log(character.films[0]);

                const img = document.createElement("img");
                const li = document.createElement("li");
                const a = document.createElement("a");
                img.src = character.Poster;
                if (selectedCharacters.includes(character.name)) {
                    a.textContent = (character.name);
                    li.appendChild(img);
                    li.appendChild(a);
                    ul.appendChild(li);
                }
            })
            characterBox.appendChild(ul);
        })
        .then(function(){
            const links = document.querySelectorAll("#character-box li a");
                console.log(links);
                links.forEach(function(link){
                    link.addEventListener("click", getMovie);
            })
      })
      .catch(function(error){
        console.error("Oops… this page has gone to a galaxy far, far away.");
     });
    }

    function getMovie(e) {
        const characterFilms = (e.currentTarget.dataset.films);

        infoCon.innerHTML = "";

        fetch(`${baseUrl}films/`)
            .then(res => res.json())
            .then(data => {
                const films = data.results;
                const characterMovies = films.filter(film => characterFilms.includes(film.url));

                characterMovies.forEach(movie => {
                    const clone = characterTemplate.content.cloneNode(true);
                    const movieTitle = clone.querySelector(".movie-title");
                    const movieDesc = clone.querySelector(".movie-description");

                    movieTitle.innerHTML = movie.title;

                    const poster = document.createElement("img");
                    poster.src = `images/poster${movie.episode_id}.jpg`;

                    movieTitle.appendChild(poster);
                    movieDesc.innerHTML = movie.opening_crawl;

                    infoCon.appendChild(clone);
                });
            })
            .catch(function(error){
            console.error("Oops… this page has gone to a galaxy far, far away.");
            });
    }

    // Calling the Functions
    getCharacters();

    //GSAP Animations
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    gsap.from(".logo", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 2,
        ease: "power2.out",
    });
})();