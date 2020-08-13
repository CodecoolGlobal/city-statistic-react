import React from "react";
import "../slideshow.css";
export default function Images(props) {
  let page = 0;
  function nextSlide() {
    if (page === props.img.length - 1) {
      page = 0;
    } else {
      page++;
    }

    let mySlide = document.querySelector(".mySlides");
    mySlide.innerHTML = `<img
    src=${props.img[page]}
    width="30%" height="30%"
  />`;
  }

  function prevSlide() {
    if (page > 0) {
      page--;
    } else {
      page = props.img.length - 1;
    }
    let mySlide = document.querySelector(".mySlides");
    mySlide.innerHTML = `<img
    src=${props.img[page]}
    width="30%" height="30%"
  />`;
  }
  return (
    <div class="slideshow-container">
      <div class="mySlides">
        <img src={props.img[page]} width="30%" height="30%" />
        {/* <div class="text">Caption Text</div> */}
      </div>
      <a class="prev" onClick={prevSlide}>
        &#10094;
      </a>
      <a class="next" onClick={nextSlide}>
        &#10095;
      </a>
    </div>
  );
}
