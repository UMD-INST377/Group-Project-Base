function getFive() {
  return fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((jsonData) => {
      const titleList = jsonData;
      const topFive = titleList.sort((a, b) => b.rating.average - a.rating.average).slice(0, 5);
      return topFive;
    });
}

const imageOne = document.getElementById('one');
const imageTwo = document.getElementById('two');
const imageThree = document.getElementById('three');
const imageFour = document.getElementById('four');
const imageFive = document.getElementById('five');

getFive()
  .then((shows) => {
    imageOne.src = shows[0].image.medium;
    imageTwo.src = shows[1].image.medium;
    imageThree.src = shows[2].image.medium;
    imageFour.src = shows[3].image.medium;
    imageFive.src = shows[4].image.medium;
  });