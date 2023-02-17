const sliderWrapper = document.querySelector(".slider-wrapper");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    sliderWrapper.scrollLeft = index * sliderWrapper.offsetWidth;
    setActiveThumbnail(index);
  });
});

// Se agrega el controlador de eventos "scroll"
sliderWrapper.addEventListener("scroll", () => {
  const activeThumbnailIndex = Math.round(sliderWrapper.scrollLeft / sliderWrapper.offsetWidth);
  setActiveThumbnail(activeThumbnailIndex);
});

function setActiveThumbnail(index) {
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.remove("active");
    if (i === index) {
      thumbnail.classList.add("active");
    }
  });
}
