const jokesList = document.getElementById("jokes-list");

function fetchAndDisplayJoke(url) {
  fetch(url)
    .then((response) => response.text())
    .then((joke) => {
      const li = document.createElement("li");
      li.className = "joke";
      li.innerText = joke;
      jokesList.appendChild(li);
    });
}

const numberOfJokes = 5; // Replace this with the number of joke text files you have

for (let i = 1; i <= numberOfJokes; i++) {
  const url = `https://raw.githubusercontent.com/username/repository-name/branch-name/path/to/joke
