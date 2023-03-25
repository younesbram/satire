const jokesList = document.getElementById("jokes-list");

const jokes = [
  {
    caption: "Redesigning Netflix push notifications - 1 trillion users",
    url: "https://raw.githubusercontent.com/younesbram/satire/master/jokes/joke1.txt",
    image: "https://raw.githubusercontent.com/younesbram/satire/master/images/1.jpg"
  },
  {
    caption: "Skyrim Security Engineer",
    url: "https://raw.githubusercontent.com/younesbram/satire/master/jokes/joke2.txt",
    image: "https://raw.githubusercontent.com/younesbram/satire/master/images/2.jpg"
  },
  {
    caption: "Apple iSeinfeld Overworked Engineer",
    url: "https://raw.githubusercontent.com/younesbram/satire/master/jokes/joke3.txt",
    image: "https://raw.githubusercontent.com/younesbram/satire/master/images/3.jpg"
  }
  // Add more jokes here
];

jokes.forEach((joke) => {
  const li = document.createElement("li");
  li.className = "joke";
  const a = document.createElement("a");
  a.href = "#";
  a.setAttribute("data-url", joke.url);
  const img = document.createElement("img");
  img.src = joke.image;
  img.alt = joke.caption;
  a.appendChild(img);
  const caption = document.createElement("p");
  caption.innerText = joke.caption;
  a.appendChild(caption);
  li.appendChild(a);
  jokesList.appendChild(li);
});

jokesList.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG" || event.target.tagName === "P") {
    const a = event.target.closest("a");
    const url = a.getAttribute("data-url");
    fetch(url)
      .then((response) => response.text())
      .then((joke) => {
        window.location.href = `joke.html?joke=${encodeURIComponent(joke)}`;
      });
  }
  else if (event.target.tagName === "A") {
    event.preventDefault();
    const url = event.target.getAttribute("data-url");
    fetch(url)
      .then((response) => response.text())
      .then((joke) => {
        window.location.href = `joke.html?joke=${encodeURIComponent(joke)}`;
      });
  }
});

const starContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  starContainer.appendChild(star);
}