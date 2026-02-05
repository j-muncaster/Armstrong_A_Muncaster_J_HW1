(() => {
// connect to api pull a list of 10 characters
// when user clicks, pull up a specific movie and include the title, poster image
// and opening crawl

//route 1 get characters
//https://swapi.info/api/people

// route 2 get a particular movie
// https://swapi.info/api/films/2
    // add loading icon(s) for list and content


// variables
    const  baseUrl = "https://swapi.info/api/";

    // set up variables for DOM elements 
    
function getCharacters(){
    fetch(`${baseUrl}people`)
  .then((res) => res.json())
  .then((characters) => {
    //console.log(json[0].name);
    characters.forEach(character => {
        console.log(character.name);
        console.log(character.films[0]);

    });
})


  .then(()=> {
    //attach an event listener to each link, calls a new function that makes 
    // 2nd AJAX call
    //function name is getMovie()
  })
  .catch((error) => {
    console.error(error)

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
    
    })
}

    function getMovie() {
        // need to extract data attribute either using eveent object or
        // https://swapi.info/api/films/
    fetch("https://swapi.info/api/films/1")
        .then((res) => res.json())
        .then((movie) => {

            console.log(`img.src="images/poster${movie.episode_id}.jpg"`);
            console.log(movie.title);
            console.log(movie.opening_crawl);

        })

        .catch((error) => {
            console.error(error)
        })
    }


getMovie();    
// call the functions to kick things off
getCharacters();
    })();
