function generate() {
  let previousIndex = -1; 
  fetch("./assets/data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * data.length);
      } while (randomIndex === previousIndex); 

      previousIndex = randomIndex; 

      let vershelye = document.querySelector(".vers");
      console.log(randomIndex);
      console.log(data[randomIndex]);
      
      // Szétválasztjuk a szöveget vessző mentén és minden elem után sortörést teszünk
      const formattedText = data[randomIndex].vers.split(',').join('\n');
      
      // Megkeressük a meglévő .szoveg osztályú h2 elemet és beállítjuk a formázott szöveget
      document.querySelector('.szoveg').innerText = formattedText;
    })
    .catch((error) => console.error(error));
}