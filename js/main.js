(() => {
    //Routes
    //Search for movies
    // https://www.omdbapi.com/?s=speed&apikey=ca8e6bc3

    //One Movie by ID
    // https://www.omdbapi.com/?i=tt2369135&apikey=ca8e6bc3

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
                .catch(err => console.log(err));
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
                .catch(err => console.log(err));
        }
    
        getCharacters();
    })();
    