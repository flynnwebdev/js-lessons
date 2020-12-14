function wait(ms) {
  let start = Date.now();
  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

// document.querySelector("button").addEventListener("click", e => {
//     wait(5000)
//     alert("You clicked the button!")
// })

// console.log(1)

// setTimeout(() => {
//     console.log(2)
// }, 0)

// console.log(3)

let jokes = [];

$.getJSON("https://icanhazdadjoke.com/", (dadJoke) => {
  jokes.push(dadJoke.joke);
  $.getJSON("https://icanhazdadjoke.com/", (dadJoke) => {
    jokes.push(dadJoke.joke);
    $.getJSON("https://icanhazdadjoke.com/", (dadJoke) => {
      jokes.push(dadJoke.joke);
      $.getJSON("https://icanhazdadjoke.com/", (dadJoke) => {
        jokes.push(dadJoke.joke);
        $.getJSON("https://icanhazdadjoke.com/", (dadJoke) => {
          jokes.push(dadJoke.joke);
          $.getJSON("https://icanhazdadjoke.com/", (dadJoke) => {
            jokes.push(dadJoke.joke);
          });
        });
      });
    });
  });
});

console.log(`Your Jokes: ${JSON.stringify(jokes)}`);
