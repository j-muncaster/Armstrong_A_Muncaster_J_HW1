(() => {
    // connect to api pull a list of 10 characters
    // when user clicks, pull up a specific movie and include the title, poster image
    // and opening crawl
    
    //route 1 get characters
    //https://swapi.info/api/people
    
    // route 2 get a particular movie
    // https://swapi.info/api/films/2
    
    
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
      .catch(err => console.log("Oops… this page has gone to a galaxy far, far away."));
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
    
            .catch(err => console.log("Oops… this page has gone to a galaxy far, far away."));
        }
    
    
    getMovie();    
    // call the functions to kick things off
    getCharacters();
        })();
