const pics = document.querySelectorAll(".carousel_item");
const carouselScroll = document.querySelectorAll(".carousel");
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

function moveToNextPic() {
  document.getElementById('carouselScroller').scrollLeft += 600;
}

function moveToPrevPic() {
  document.getElementById('carouselScroller').scrollLeft -= 600;
}
