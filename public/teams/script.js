let picsPosition = 0;
const pics = document.querySelectorAll(".carousel_item");
const totalPics = pics.length;

document
  .querySelector("#carousel_button--next")
  .addEventListener("click", function () {
    moveToNextPic();
  });

document
  .querySelector("#carousel_button--prev")
  .addEventListener("click", function () {
    moveToPrevPic();
  });

function updatePicPosition() {
  for (let pic of pics) {
    pic.classList.remove("carousel_item--visible");
    pic.classList.add("carousel_item--hidden");
  }

  pics[picsPosition].classList.add("carousel_item--visible");
}

function moveToNextPic() {
  if (picsPosition === totalPics - 1) {
    picsPosition = 0;
  } else {
    picsPosition++;
  }

  updatePicPosition();
}

function moveToPrevPic() {
  if (picsPosition === 0) {
    picsPosition = totalPics - 1;
  } else {
    picsPosition--;
  }

  updatePicPosition();
}
