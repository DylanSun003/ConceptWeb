import {useEffect} from "react";
import LocomotiveScroll from "locomotive-scroll";

function useLocalScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector(".main");
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
    });
  }, [start]);
}

export default useLocalScroll;
