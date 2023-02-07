import { useEffect } from "react";
import "./AndroidSmall1.css";
import image3Icon from "../../public/image-3@2x.png";
import frameIcon from "../../public/frame-1@2x.png";

const AndroidSmall1 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="android-small-1">
      <div className="a-shoe-brand-which-is-a-world-parent">
        <p className="a-shoe-brand">
          a shoe brand, which is a world famous. wear it to win the match
        </p>
        <img
          className="image-3-icon"
          alt=""
          src={image3Icon}
          data-animate-on-scroll
        />
      </div>
      <img className="android-small-1-child" alt="" src={frameIcon} />
    </div>
  );
};

export default AndroidSmall1;
