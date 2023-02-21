import { useEffect } from "react";
import "./FullFrame.css"
import sandals from '../../assets/Sandles image.png'
import CAIimage1 from '../../assets/CAI Image2.png'
import CAIimage4 from '../../assets/CAI Image4.png'
import Gif1 from '../../assets/Gif1.gif'

const FullFrame = () => {
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
    <main className="full-frame">
      <section className="perfect-fit">
        <div className="perfect-fit-parent">
          <h1 className="perfect-fit1">PERFECT FIT</h1>
          <p className="bring-out-your">
            Bring out your festive personality with poise and maximise comfort
            by 'opting for a size larger than usual for wider feet.' Mix comfort
            and style with ease with the Maroon Studded Heels.
          </p>
        </div>
      </section>
      <section className="modeldesc" data-animate-on-scroll>
        <img
          className="sandles-image-1"
          alt=""
          src={sandals}
        />
      </section>
      <section className="fashion3">
        <div className="text-container" data-animate-on-scroll>
          <h1 className="timeless-and-comfy">Timeless and comfy</h1>
          <p className="a-symphony-of">
            A symphony of beautiful earthy shades with an open toe, Maroon
            Studded Heels made of PU leather are sustainable, super comfortable
            and super stylish.
          </p>
        </div>
        <div className="cai-image2-2-wrapper" data-animate-on-scroll>
          <img
            className="sandles-image-1"
            alt=""
            src={CAIimage1}
          />
        </div>
      </section>
      <section className="video-section">
        <video className="video-section1" autoPlay muted loop>
          <source src="https://asset.weaveroo.io/cai/Heels/maroon-studded-heels/videos/cai.mp4" />
        </video>
      </section>
      <section className="bend-image">
        <img className="bend-image-child" alt="" src="../vector-5.svg" />
      </section>
      <section className="cosy-style-new">
        <div className="cai-image2-2-wrapper" data-animate-on-scroll>
          <img className="cai-image4-4" alt="" src={CAIimage4} />
        </div>
        <div className="text-container1" data-animate-on-scroll>
          <h1 className="fashion-meets-comfort">Fashion meets comfort</h1>
          <p className="a-chic-addition">
            A chic addition to your look, these strappy sandals have super soft
            nubuck sheet inner soles that provide comfort and are stylish in
            equal measure. They feel as good as they look!
          </p>
        </div>
      </section>
      <section className="gif-section" data-animate-on-scroll>
        <img
          className="gif-section-icon"
          alt=""
          src={Gif1}
        />
      </section>
      <section className="bend-image">
        <img className="bend-image-child" alt="" src="../vector-5.svg" />
      </section>
      <section className="cosy-style-new">
        <div className="text-container1" data-animate-on-scroll>
          <h1 className="fashion-meets-comfort">Cosy Style</h1>
          <p className="thoughtfully-crafted-footwear">
            Thoughtfully crafted footwear in PU leather with maroon studded
            straps and mid heels, which look amazing and feel like the perfect
            pair of everyday footwear.
          </p>
        </div>
        <div className="cai-image4-4-container" data-animate-on-scroll>
          <img className="cai-image4-4" alt="" src={CAIimage4} />
        </div>
      </section>
    </main>
  );
};

export default FullFrame;