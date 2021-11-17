let picsPosition = 0;
const pics = document.querySelectorAll(".carousel_item");
const carouselScroll = document.querySelectorAll(".carousel");
const totalPics = pics.length;
let pic0Position = totalPics;
let pic1Position = 0;
let pic2Position = 2;
let pic3Position = 3;
let pic4Position = 4;

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

function updatePicPositionRight() {
  pics[removedPicPosition].classList.remove("carousel_item--visible");
  pics[removedPicPosition].classList.add("carousel_item--hideLeft");
  setTimeout(pics[removedPicPosition].classList.add("carousel_item--hidden"), 2000);
  

  pics[picsPosition].classList.add("carousel_item--visible");
}

function moveToNextPic() {
  /*removedPicPosition = picsPosition;
  if (picsPosition === totalPics - 1) {
    picsPosition = 0;
    removedPicPosition = totalPics;
  } else {
    picsPosition++;
  }
  updatePicPositionRight();*/

  document.getElementById('carouselScroller').scrollLeft += 600;
}

function moveToPrevPic() {
  /*if (picsPosition === 0) {
    picsPosition = totalPics - 1;
  } else {
    picsPosition--;
  }

  updatePicPosition();
  */
  document.getElementById('carouselScroller').scrollLeft -= 600;
}
