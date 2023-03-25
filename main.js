const jokesList = document.getElementById("jokes-list");

const jokes = [
  {
    caption: "Redesigning Netflix push notifications - 1 trillion users",
    url: "https://raw.githubusercontent.com/younesbram/promptengineer/master/jokes/joke1.txt"
  },
  {
    caption: "Skyrim Engineer",
    url: "https://raw.githubusercontent.com/younesbram/promptengineer/master/jokes/joke2.txt"
  },
  {
    caption: "Apple iSeinfeld",
    url: "https://raw.githubusercontent.com/younesbram/promptengineer/master/jokes/joke3.txt"
  }
  // Add more jokes here
];

jokes.forEach((joke) => {
  const li = document.createElement("li");
  li.className = "joke";
  const a = document.createElement("a");
  a.href = "#";
  a.setAttribute("data-url", joke.url);
  a.innerText = joke.caption;
  li.appendChild(a);
  jokesList.appendChild(li);
});

jokesList.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const url = event.target.getAttribute("data-url");
    fetch(url)
      .then((response) => response.text())
      .then((joke) => {
        window.location.href = `joke.html?joke=${encodeURIComponent(joke)}`;
      });
  }
});
