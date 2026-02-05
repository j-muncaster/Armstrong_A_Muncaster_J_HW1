(() => {
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
