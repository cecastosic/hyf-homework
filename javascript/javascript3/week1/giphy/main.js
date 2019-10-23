let url = "";

function fetchData(url) {
  return fetch(url).then(response => response.json());
  // .then(data => {
  //  console.log(data);
  //  });
}

const input = document.getElementById("search-word");
const number = document.getElementById("number");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  if (input.value) {
    const searchedWord = input.value.toLowerCase();
    if (number.value) {
      url = `https://api.giphy.com/v1/gifs/search?api_key=4qBp1RiNkjsQjtijpglxFSCPnRpwPxEl&q=${searchedWord}&limit=${number.value}&offset=0&rating=G&lang=en`;
    } else {
      url = `https://api.giphy.com/v1/gifs/search?api_key=4qBp1RiNkjsQjtijpglxFSCPnRpwPxEl&q=${searchedWord}&limit=25&offset=0&rating=G&lang=en`;
    }
    fetchData(url).then(data => renderData(data));
  }
});

function renderData(data) {
  resetView();
  const div = document.getElementById("giphy-content");
  console.log(data);
  console.log(data.data);
  console.log(data.data.images);
  for (gif of data.data) {
    const divImage = document.createElement("div");
    div.appendChild(divImage);

    // Temperature
    Object.keys(gif.images).forEach(function(item) {
      if (item === "original_mp4") {
        divImage.innerHTML = `
                <video autoplay loop>
                    <source src="${gif.images[item].mp4}" type="video/mp4">
                </video>`;
      }
    });

    //video.poster = ;
    //video.style = ;
  }
}

function resetView() {
  const div = document.getElementById("giphy-content");
  div.innerHTML = "";
}
