(() => {
    // Variables
    const characterTemplate = document.querySelector("#character-template");
    const movieTemplate = document.querySelector("#movie-template");
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
                if (selectedCharacters.includes(character.name)) {
                    img.src = characterImages[character.name]; 
                    a.textContent = (character.name);
                    a.characterFilms = character.films;
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
                links.forEach(link => link.addEventListener("click", getMovie));
      })
      .catch(function(error){
        console.error("Oops… this page has gone to a galaxy far, far away.", error);
     });
    }

    function getMovie(e) {
        const characterFilms = e.currentTarget.characterFilms;
        infoCon.innerHTML = "";

        fetch(`${baseUrl}films/`)
            .then(res => res.json())
            .then(data => {
                const films = data;
                const characterMovies = films.filter(film => characterFilms.includes(film.url));

                characterMovies.forEach(movie => {
                    const clone = movieTemplate.content.cloneNode(true);
                    const movieTitle = clone.querySelector(".movie-title");
                    const movieCrawl = clone.querySelector(".movie-description");

                    const moviePoster = document.createElement("img");
                    moviePoster.src = `images/poster_starwars_${movie.episode_id}.webp`;
                    moviePoster.alt = `${movie.title} Movie Poster`;

                    movieTitle.textContent = movie.title;
                    movieTitle.appendChild(moviePoster);
                    movieCrawl.textContent = movie.opening_crawl;

                    infoCon.appendChild(clone);
                });
            })
            .catch(function(error){
            console.error("Oops… this page has gone to a galaxy far, far away.", error);
            });
    }
    // Calling the Functions
    getCharacters();

    // GSAP Animations
    if (document.querySelector("#character-box")) {
        gsap.from("#character-box li", {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.1
        });
    }

    if (document.querySelector(".movie-card")) {
        gsap.from(movieCard, {
            opacity: 0,
            y: 30,
            scale: 0.95,
            duration: 0.8,
            ease: "power3.out"
        });
    }

    document.querySelectorAll(".movie-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.02, duration: 0.3, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" });
        });
    });
})();