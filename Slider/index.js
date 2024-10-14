const slider = document.querySelector(".slider");
const sliderElements = Array.from(slider.children);
const nextButton = document.querySelector(".slider-next");
const previousButton = document.querySelector(".slider-prev");

sliderElements.forEach((slide, index, arr) => {
  slide.dataset.index = index;
  sliderElements[0].setAttribute("data-active", "");

  if (index !== 0) slide.classList.add("hidden");

  // listener for slider
  slide.addEventListener("click", () => {
    slide.classList.add("hidden");
    slide.removeAttribute("data-active");

    let nextSlideIndex;
    if (index === arr.length - 1) nextSlideIndex === 0;
    else nextSlideIndex = +slide.dataset.index + 1;

    const nextSlide =
      slider.querySelector(`[data-index='${nextSlideIndex}']`) ||
      sliderElements[0];
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
  });
});

// listener for next button
nextButton.addEventListener("click", () => {
  const currentSlide = slider.querySelector("[data-active]");
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");
  let nextSlideIndex;
  if (currentSlide.dataset.index === sliderElements.length - 1)
    nextSlideIndex === 0;
  else nextSlideIndex = +currentSlide.dataset.index + 1;

  const nextSlide =
    slider.querySelector(`[data-index='${nextSlideIndex}']`) ||
    sliderElements[0];
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
});

// listener for previous button

previousButton.addEventListener("click", () => {
  const currentSlide = slider.querySelector("[data-active]");
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  let nextSlideIndex;
  if (currentSlide.dataset.index === 0)
    nextSlideIndex === sliderElements[sliderElements.length - 1].dataset.index;
  else nextSlideIndex = +currentSlide.dataset.index - 1;

  const nextSlide =
    slider.querySelector(`[data-index='${nextSlideIndex}']`) ||
    sliderElements[sliderElements.length - 1];

  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
});

slider.addEventListener("mouseenter", () => {
  slider.title = "Next";
});
