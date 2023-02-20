import { useEffect } from "react";
import "./Zigly1.css";
import '../../global.css'
import img63 from '../../../public/m6-3-img1@2x.png';
import img62 from '../../../public/m6-2-img1@2x.png';
import img61 from '../../../public/m6-1-img1@2x.png'

import img71 from '../../../public/image-71@2x.png';
import img81 from '../../../public/image-81@2x.png';
import img61a from '../../../public/image-61@2x.png'
import img5right from '../../../public/image-7@2x.png'
import img5mid from '../../../public/image-8@2x.png'
import img5left from '../../../public/image-6@2x.png'

import img52 from '../../../public/image-52@2x.png';
import img42 from '../../../public/image-42@2x.png';

import img24 from '../../../public/image-24@2x.png'
import img12 from '../../../public/image-12@2x.png'

import img51 from '../../../public/image-51@2x.png';
import img32 from '../../../public/image-32@2x.png'
import img41 from '../../../public/image-41@2x.png'
import img31 from '../../../public/image-31@2x.png'
import img23 from '../../../public/image-23@2x.png'
import img11 from '../../../public/image-11@2x.png'
import img52a from '../../../public/image-5@2x.png'

import img22 from '../../../public/img2@2x.png'
import img12a from '../../../public/img1@2x.png'
import img21 from '../../../public/image-21@2x.png'
import img222 from '../../../public/image-22@2x.png'
import img32a from '../../../public/image-3@2x.png'
import img32x from '../../../public/img3@2x.png'
import img42x from '../../../public/image-4@2x.png'
import img00 from '../../../public/img1@2x.png'
import img0 from '../../../public/image-2@2x.png'
import img11a from '../../../public/img11@2x.png'
import img111 from '../../../public/image-1@2x.png'

const Zigly1 = () => {
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
    <div className="zigly-1">
      <div className="module1">
        <div className="m1-row1">
          <div className="m1-left">
            <img
              className="img1-icon"
              alt=""
              // src="static/media/public/img1@2x.png"
              src={img00}
              data-animate-on-scroll
            />
          </div>
          <div className="m1-mid">
            <div className="m1-mid-container" data-animate-on-scroll>
              <img className="img2-icon" alt=""
                // src="static/media/public/image-2@2x.png"
                src={img0}
              />
            </div>
            <h5 className="text1">
              <p className="bling-on-the">
                Bling On The Shine Waterless Shampoo
              </p>
            </h5>
          </div>
          <div className="m1-right">
            <img
              className="img3-icon"
              alt=""
              // src="static/media/public/img3@2x.png"
              src={img32x}
              data-animate-on-scroll
            />
          </div>
        </div>
        <div className="m1-row2-mob">
          <div className="m1-left1" />
          <div className="m1-mid1">
            <div className="m1-mid-container1" data-animate-on-scroll>
              <img className="img2-icon1" alt=""
                // src="static/media/public/image-21@2x.png"
                src={img21}
              />
            </div>
            <h5 className="text11">
              <span className="text1-txt">
                <p className="bling-on-the">
                  Bling On The Shine Waterless Shampoo
                </p>
              </span>
            </h5>
          </div>
          <div className="m1-right1" />
        </div>
      </div>
      <div className="module2" data-animate-on-scroll>
        <div className="m2-left">
          <img className="img2-icon2" alt=""
            // src="static/media/public/img2@2x.png"
            src={img22}
          />
        </div>
        <div className="m2-right">
          <img className="img1-icon1" alt=""
            // src="static/media/public/img11@2x.png"
            src={img11a}
          />
        </div>
      </div>
      <div className="m3-row1">
        <div className="m3-text-left">
          <p className="coat-type-all-container">
            <span className="coat-type">
              <b>Coat Type</b>
            </span>
            <span className="coat-type">
              <span>All Coats</span>
            </span>
          </p>
        </div>
        <div className="m3-text-right">
          <p className="coat-type-all-container">
            <span className="coat-type">
              <b>Age Range</b>
            </span>
            <span className="coat-type">
              <span>All life stages</span>
            </span>
          </p>
        </div>
      </div>
      <div className="m3-row2">
        <p className="m3-text-bottom">Made for your furry little fellas</p>
      </div>
      <div className="module4">
        <div className="module4-row-1">
          <div className="frame-parent">
            <div className="image-1-wrapper">
              <img className="image-1-icon" alt=""
                // src="static/media/public/image-1@2x.png"
                src={img111}
              />
            </div>
            <p className="prevents-odour">Prevents odour</p>
          </div>
          <div className="frame-parent">
            <div className="image-1-wrapper">
              <img className="image-1-icon" alt=""
                //  src="static/media/public/image-22@2x.png" 
                src={img222}
              />
            </div>
            <p className="prevents-odour">Paraben free</p>
          </div>
          <div className="frame-container">
            <div className="image-3-wrapper">
              <img className="image-1-icon" alt=""
                // src="static/media/public/image-3@2x.png" 
                src={img32a}
              />
            </div>
            <p className="prevents-odour">pH balanced</p>
          </div>
          <div className="frame-div">
            <div className="image-1-wrapper">
              <img className="image-1-icon" alt=""
                // src="static/media/public/image-4@2x.png"
                src={img42x}
              />
            </div>
            <p className="prevents-odour">{`Vegan & cruelty free`}</p>
          </div>
          <div className="frame-div">
            <div className="image-3-wrapper">
              <img className="image-1-icon" alt=""
                //  src="static/media/public/image-5@2x.png" 
                src={img52a}
              />
            </div>
            <p className="prevents-odour">Artificial fragrance free</p>
          </div>
        </div>
        <div className="module4-row2">
          <div className="module4-row2-inner">
            <div className="image-1-container">
              <img className="image-1-icon1" alt=""
                //  src="static/media/public/image-11@2x.png" 
                src={img11}
              />
            </div>
          </div>
          <div className="module4-row2-inner">
            <div className="image-2-container">
              <img className="image-2-icon1" alt=""
                //  src="static/media/public/image-23@2x.png"
                src={img23}
              />
            </div>
          </div>
          <div className="frame-parent2">
            <div className="image-3-wrapper">
              <img className="image-1-icon" alt=""
                //  src="static/media/public/image-31@2x.png" 
                src={img31}
              />
            </div>
            <p className="prevents-odour">pH balanced</p>
          </div>
          <div className="frame-parent2">
            <div className="image-1-wrapper">
              <img className="image-1-icon" alt=""
                // src="static/media/public/image-41@2x.png" 
                src={img41}
              />
            </div>
            <p className="prevents-odour">{`Vegan & cruelty free`}</p>
          </div>
          <div className="module4-row2-inner">
            <div className="image-5-container">
              <img className="image-1-icon1" alt=""
                //  src="static/media/public/image-51@2x.png" 
                src={img51}
              />
            </div>
          </div>
        </div>
        <div className="module4-row2">
          <div className="module4-row2-inner">
            <div className="image-1-container">
              <img className="image-1-icon1" alt=""
                //  src="static/media/public/image-12@2x.png"
                src={img12}
              />
            </div>
          </div>
          <div className="module4-row2-inner">
            <div className="image-2-container">
              <img className="image-2-icon1" alt=""
                // src="static/media/public/image-24@2x.png"
                src={img24}
              />
            </div>
          </div>
          <div className="module4-row2-inner">
            <div className="image-5-container">
              <img className="image-1-icon1" alt=""
                //  src="static/media/public/image-32@2x.png" 
                src={img32}
              />
            </div>
          </div>
          <div className="module4-row2-inner">
            <div className="image-5-container">
              <img className="image-1-icon1" alt=""
                // src="static/media/public/image-42@2x.png"
                src={img42}
              />
            </div>
          </div>
          <div className="frame-parent2">
            <div className="image-3-wrapper">
              <img className="image-1-icon" alt=""
                //  src="static/media/public/image-52@2x.png"
                src={img52}
              />
            </div>
            <p className="prevents-odour">Artificial fragrance free</p>
          </div>
        </div>
      </div>
      <div className="module5">
        <div className="m5-row1">
          <div className="m5-left">
            <img className="image-6-icon" alt=""
              // src="static/media/public/image-6@2x.png" 
              src={img5left}
            />
          </div>
          <div className="m5-mid">
            <div className="m5-mid-container">
              <div className="img-container">
                <img className="image-1-icon" alt=""
                  // src="static/media/public/image-8@2x.png" 
                  src={img5mid}
                />
              </div>
              <h5 className="text1">FOR YOUR FURRY LITTLE BABIES</h5>
              <p className="text2">
                We come from a place of great love for pets! We're here to make
                your pet parenting journey amazing with direct access to
                consistent, compassionate, affordable products.
              </p>
            </div>
          </div>
          <div className="m5-right">
            <img className="image-7-icon" alt=""
              // src="static/media/public/image-7@2x.png" 
              src={img5right}
            />
          </div>
        </div>
        <div className="m5-mobile">
          <div className="m5-mob-left">
            <img className="image-6-icon1" alt=""
              src={img61a}
            // src="static/media/public/image-61@2x.png"
            />
          </div>
          <div className="m5-mob-mid">
            <div className="m5-mob-mid-container">
              <div className="img-container">
                <img className="image-1-icon" alt=""
                  // src="static/media/public/image-81@2x.png"
                  src={img81}
                />
              </div>
              <h5 className="text1">FOR YOUR FURRY LITTLE BABIES</h5>
              <p className="text2">
                We come from a place of great love for pets! We're here to make
                your pet parenting journey amazing with direct access to
                consistent, compassionate, affordable products.
              </p>
            </div>
          </div>
          <div className="m5-mob-right">
            <img className="image-7-icon1" alt=""
              // src="static/media/public/image-71@2x.png" 
              src={img71}
            />
          </div>
        </div>
      </div>
      <div className="module6">
        <div className="module6-row1">
          <div className="m6-1">
            <img className="m6-1-img" alt=""
              src={img61}
            //  src="static/media/public/m6-1-img@2x.png"
            />
            <p className="m6-text1">
              <span className="coat-type">
                <b>Scent</b>
              </span>
              <span className="coat-type">
                <span>Essential oil</span>
              </span>
            </p>
          </div>
          <div className="m6-2">
            <img className="m6-1-img" alt=""
              // src="static/media/public/m6-2-img@2x.png"
              src={img62}
            />
            <p className="m6-text1">
              <span className="coat-type">
                <b>Quantity</b>
              </span>
              <span className="coat-type">
                <span>250 ml</span>
              </span>
            </p>
          </div>
          <div className="m6-3">
            <img className="m6-1-img" alt=""
              // src="static/media/public/m6-3-img@2x.png" 
              src={img63}
            />
            <p className="m6-text1">
              <span className="coat-type">
                <b>Country of Origin</b>
              </span>
              <span className="coat-type">
                <span>India</span>
              </span>
            </p>
          </div>
        </div>
        <div className="module6-row2">
          <div className="m6-11">
            <img className="m6-1-img" alt=""
              //  src="static/media/public/m6-1-img1@2x.png" 
              src={img61}
            />
            <p className="m6-text1">
              <span className="coat-type">
                <b>Scent</b>
              </span>
              <span className="coat-type">
                <span>Essential oil</span>
              </span>
            </p>
          </div>
          <div className="frame-parent">
            <img className="m6-1-img" alt=""
              // src="static/media/public/m6-2-img1@2x.png"
              src={img62}
            />
            <p className="m6-text1">
              <span className="coat-type">
                <b>Quantity</b>
              </span>
              <span className="coat-type">
                <span>250 ml</span>
              </span>
            </p>
          </div>
          <div className="m6-11">
            <img className="m6-1-img" alt=""
              // src="static/media/public/m6-3-img1@2x.png" 
              src={img63}
            />
            <p className="m6-text1">
              <span className="coat-type">
                <b>Country of Origin</b>
              </span>
              <span className="coat-type">
                <span>India</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="module7">
        <div className="how-to-use-wrapper">
          <p className="how-to-use">How to use</p>
        </div>
        <div className="please-follow-the-instructions-wrapper">
          <p className="how-to-use">
            Please follow the instructions given on the bottle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Zigly1;
