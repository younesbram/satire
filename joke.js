const jokeContent = document.getElementById("joke-content");

const urlParams = new URLSearchParams(window.location.search);
const jokeText = urlParams.get("joke");

if (jokeText) {
    jokeContent.textContent = decodeURIComponent(jokeText);
} else {
    jokeContent.textContent = "No joke found. Please go back and select a joke.";
}