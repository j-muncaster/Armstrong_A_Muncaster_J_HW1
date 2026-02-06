(() => {
    // Variables
    const characterTemplate = document.querySelector("#character-template");
    const infoCon = document.querySelector("#info-con");
    const characterBox = document.querySelector("#character-box");
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

    const characterImages = {
        "Luke Skywalker": "images/image1.jpeg",
        "Leia Organa": "images/image5.jpeg",
        "Obi-Wan Kenobi": "images/image10.jpeg",
        "Anakin Skywalker": "images/image11.jpeg",
        "Chewbacca": "images/image13.jpeg",
        "Yoda": "images/image20.jpeg",
        "Jar Jar Binks": "images/image36.jpeg",
        "Padme Amidala": "images/image35.jpeg",
        "C-3PO": "images/image2.jpeg",
        "R2-D2": "images/image3.jpeg"
    };

    // Functions
    function getCharacters(){
        fetch(`${baseUrl}people/`)
        .then((res) => res.json())
        .then((characters) => {
            const ul = document.createElement("ul");

            characters.forEach(character => {
                console.log(character.name);
                console.log(character.films[0]);

                const li = document.createElement("li");
                const a = document.createElement("a");
                if (selectedCharacters.includes(character.name)) {
                    a.textContent = (character.name);
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
                    link.addEventListener("click", getCharacters);
            })
      })
      .catch(function(error){
        console.error("Oops… this page has gone to a galaxy far, far away.");
     });
    }

    // Calling the Functions
    getCharacters();

})();