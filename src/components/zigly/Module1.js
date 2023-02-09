import { useEffect } from "react";
import "./Module1.css";
import img1 from '../../../public/img1.png';
import img2 from '../../../public/img2.png'
import img3 from '../../../public/img3.png'
import '../../global.css'

const Module1 = () => {
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
    <div className="module1">
      <div className="m1-sec1">
        <div className="m1-left">
          <img
            className="img1-icon"
            alt=""
            src={img1}
            data-animate-on-scroll
          />
        </div>
        <div className="m1-mid" data-animate-on-scroll>
          <div className="m1-mid-container">
            <img className="img2-icon" alt="" src={img2} />
            <h5 className="text1">
              <p className="bling-on-the">
                Bling On The Shine Waterless Shampoo
              </p>
            </h5>
          </div>
        </div>
        <div className="m1-right">
          <img
            className="img3-icon"
            alt=""
            src={img3}
            data-animate-on-scroll
          />
        </div>
      </div>
      <div className="m1-sec2">
        <div className="m1-left1" />
        <div className="m1-mid1" data-animate-on-scroll>
          <div className="m1-mid-container1">
            <img className="img2-icon1" alt="" src={img2} />
            <h5 className="text1">
              <p className="bling-on-the">
                Bling On The Shine Waterless Shampoo
              </p>
            </h5>
          </div>
        </div>
        <div className="m1-right1" />
      </div>
    </div>
  );
};

export default Module1;
