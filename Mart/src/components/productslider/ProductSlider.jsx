import React, { useEffect } from "react";
import "./index.css";
import { Productcard } from "../Index";

const ProductSlider = () => {
  useEffect(() => {
    productScroll();

    function productScroll() {
      let slider = document.getElementById("slider");
      let next = document.getElementsByClassName("pro-next");
      let prev = document.getElementsByClassName("pro-prev");
      let slide = document.getElementById("slide");
      let item = document.getElementById("slide");

      for (let i = 0; i < next.length; i++) {
        let position = 0;

        prev[i].addEventListener("click", function () {
          if (position > 0) {
            position -= 1;
            translateX(position);
          }
        });

        next[i].addEventListener("click", function () {
          if (position >= 0 && position < hiddenItems()) {
            position += 1;
            translateX(position);
          }
        });
      }

      function hiddenItems() {
        let items = getCount(item, false);
        let visibleItems = slider.offsetWidth / 210;
        return items - Math.ceil(visibleItems);
      }
    }

    function translateX(position) {
      let slide = document.getElementById("slide");
      slide.style.left = position * -210 + "px";
    }

    function getCount(parent, getChildrensChildren) {
      let relevantChildren = 0;
      let children = parent.childNodes.length;
      for (let i = 0; i < children; i++) {
        if (parent.childNodes[i].nodeType !== 3) {
          if (getChildrensChildren)
            relevantChildren += getCount(parent.childNodes[i], true);
          relevantChildren++;
        }
      }
      return relevantChildren;
    }
  }, []);

  return (
    <div className="slider" id="slider">
      <div className="slide" id="slide">
        <Productcard />

        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product1"
        />
        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product1"
        />
        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product1"
        />
        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product1"
        />
        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product2"
        />
        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product2"
        />
        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product2"
        />
        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product2"
        />
        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product3"
        />
        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product3"
        />
        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product3"
        />
        <img
          class="item"
          src="http://via.placeholder.com/200x200?text=Product3"
        />
      </div>
      <button className="ctrl-btn pro-prev">Prev</button>
      <button className="ctrl-btn pro-next">Next</button>
    </div>
  );
};

export default ProductSlider;
