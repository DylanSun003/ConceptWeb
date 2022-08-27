import {useEffect} from "react";
import LocomotiveScroll from "locomotive-scroll";

function useLocalScroll() {
  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-section]");
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      // when smooth scrolling enable, if the viewport's weight greater than 1000px,
      // there will be a c-scrollbar created and make the page destoried
      // smooth: true,
      // multiplier: 1,
    });
  }, []);
}

export default useLocalScroll;
