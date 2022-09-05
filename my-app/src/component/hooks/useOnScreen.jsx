import {useState, useEffect} from "react";

function useOnScreen(ref, threshold = 0.3) {
  const [isIntersecting, setIntersecting] = useState(false);

  const options = {
    rootMargin: "0px",
    threshold: threshold,
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIntersecting(entry.isIntersecting ? true : false);
      });
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  });

  return isIntersecting;
}
export default useOnScreen;
