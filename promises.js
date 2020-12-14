$(document).ready(function () {
  $.ajaxSetup({ cache: false });
});

function getJoke() {
  return new Promise((resolve, reject) => {
    $.getJSON("https://icanhazdadjoke.com/", (result) => {
      if (result && result.joke) resolve(result.joke);
      reject("Error getting joke");
    });
  });
}

function getJokes(qty) {
    let jokePromises = [];

    for (let i = 0; i < qty; i++) {
        console.log(i)
        jokePromises.push(getJoke());
    }

    Promise.all(jokePromises)
        .then((jokes) => {
            const jokesDiv = document.querySelector("#jokes");
            // jokesDiv.innerHTML = "";
            for (let joke of jokes) {
                let p = document.createElement("p");
                p.innerHTML = joke;
                jokesDiv.appendChild(p);
            }
        }) // Called if promise resolves
        .catch((error) => console.log(`Error: ${error}`)); // Called if the promise rejects
}

document.querySelector("button").addEventListener("click", event => {
    getJokes(3)
})

// const processJoke = foo => {
//   jokes.push(foo);
//   return getJoke();
// };

// getJoke()
//   .then(processJoke)
//   .then(processJoke)
//   .then(processJoke)
//   .then(processJoke)
//   .then((joke2) => {
//     jokes.push(joke2);
//     console.log(jokes);
//   }) // Called if promise resolves
//   .catch((error) => console.log(`Error: ${error}`)); // Called if the promise rejects

console.log("Waiting for joke ...");
