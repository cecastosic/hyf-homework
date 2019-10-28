// Create a function that has one parameter: resolveAfter.
// Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

function promiseResolvedAfter(resolveAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("I am called asynchronously"));
    }, resolveAfter * 1000);
  });
}

console.log(promiseResolvedAfter(6));

// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.

function setTimeoutPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
console.log(setTimeoutPromise(3000));

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function(position) {
      resolve(position);
      reject("rejected");
    });
  });
}

console.log(getCurrentLocation());
getCurrentLocation()
  .then(position => {
    // called when the users position is found
    console.log(position.coords.latitude, position.coords.longitude);
  })
  .catch(error => {
    // called if there was an error getting the users location
    console.log(error);
  });

//  Fetch some data from an api.
const fetchedData = fetch(
  "https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=G2Se0AIM&format=json"
).then(response => response.json());
//  After that data has been fetched, wait 3 seconds
//  Log out the data from the api
const timeout = fetchedData.then(data =>
  setTimeout(() => console.log(data), 3000)
);

//  Optional Now do all of these things using chaining
fetch(
  "https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=G2Se0AIM&format=json"
)
  .then(response => response.json())
  .then(data => setTimeout(() => console.log(data), 3000));
