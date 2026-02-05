(() => {
<<<<<<< Updated upstream
    // add loading icon(s) for list and content

    //for homework source the images for star wars API
    //swapi.info/api/people

    //name image "image4.jpeg" etc.
    
        const characterBox = document.querySelector("#character-box");
        const reviewTemplate = document.querySelector("#review-template");
        const reviewCon = document.querySelector("#review-con");
        const baseUrl = `https://swapi.dev/api/people/`;
    
        function getCharacters() {
            fetch('https://swapi.dev/api/people/')
                .then(response => response.json())
                .then(response => {
                    console.log(response.results);
    
                    const characters = response.results;
                    const ul = document.createElement("ul");
    
                    characters.forEach(character => {
                        const li = document.createElement("li");
                        const a = document.createElement("a");
    
                        a.textContent = character.name;
                        a.dataset.url = character.url;
    
                        li.appendChild(a);
                        ul.appendChild(li);
                    });
    
                    characterBox.appendChild(ul);
                })
                .then(() => {
                    const links = document.querySelectorAll("#character-box li a");
                    links.forEach(link => {
                        link.addEventListener("click", getCharacterDetails);
                    });
                })
                .catch(err => console.log("Oops… this page has gone to a galaxy far, far away."));
        }
    
        function getCharacterDetails(e) {
            const characterUrl = e.currentTarget.dataset.url;
    
            fetch(characterUrl)
                .then(response => response.json())
                .then(character => {
                    reviewCon.innerHTML = "";
    
                    const clone = reviewTemplate.content.cloneNode(true);
                    clone.querySelector(".review-heading").textContent = character.name;
                    clone.querySelector(".review-description").textContent =
                        `Height: ${character.height} cm
                         Mass: ${character.mass} kg
                         Birth Year: ${character.birth_year}`;
                    clone.querySelector(".review-rating").textContent =
                        `Gender: ${character.gender}`;
    
                    reviewCon.appendChild(clone);
                })
                .catch(err => console.log("Oops… this page has gone to a galaxy far, far away."));
        }
    
        getCharacters();
    })();
    
=======
    
   // Variables
    const baseUrl = "https://swapi.info/api/";
    const reviewCon = document.querySelector("#review-con");
    const characterTemplate = document.querySelector("#character-template");


    // Functions
    function getCharacters(){
        fetch(`${baseUrl}people`)
        .then((res) => res.json())
        .then((characters) => {
            characters.forEach(character => {
            console.log(character.name);
            console.log(character.films[0]);

            //create a ul, li, a, add data attribute to anchor tag that contains a film
        });
    })
    
      .then(()=> {
        //attach an event listener to each link, calls a new function that makes 
        // 2nd AJAX call
        //function name is getMovie()
      })
      .catch((error) => {
        console.error("Oops… this page has gone to a galaxy far, far away.")}
        );
    }
    
    function getMovie() {
        fetch("https://swapi.info/api/films")
            .then((res) => res.json())
            .then((movie) => {
                console.log(`img.src="images/poster${movie.episode_id}.jpg"`);
                console.log(movie.title);
                console.log(movie.opening_crawl);
            })
    
            .catch((error) => {
                console.error("Oops… this page has gone to a galaxy far, far away.")}
                );
        }
    
    // Calling the Functions
    getCharacters();
    getMovie();  

})();
>>>>>>> Stashed changes
