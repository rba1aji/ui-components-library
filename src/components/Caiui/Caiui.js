import "./Caiui.css";
import Cai1 from '../../assets/Cai1.webp'
import Cai2 from '../../assets/Cai2.webp'
import Cai3 from '../../assets/Cai3.webp'
import Cai4 from '../../assets/Cai4.webp'
import Cai5 from '../../assets/Cai5.webp'
import Cai6 from '../../assets/Cai6.webp'
import Cai7 from '../../assets/Cai7.webp'
import star from '../../assets/star.png'
import Gallery1 from '../../assets/Gallery1.webp'
import Gallery2 from '../../assets/Gallery2.webp'
import Gallery3 from '../../assets/Gallery3.webp'

const Caiui = () => {
    return (
        <main className="cai">
          <section className="video-section">
            <video className="videocontainer" autoPlay muted loop>
              <source src="https://asset.weaveroo.io/cai/Heels/maroon-studded-heels/videos/cai.mp4" />
            </video>
          </section>
          <section className="perfectfit">
            <div className="perfectcontainer">
              <h1 className="perfectheading">Perfect fit</h1>
              <p className="perfectparagraph">
                Bring out your festive personality with poise and maximise comfort
                by 'opting for a size larger than usual for wider feet.' Mix comfort
                and style with ease with the Maroon Studded Heels.
              </p>
            </div>
          </section>
          <section className="timeless-and-comfy">
            <div className="leftcontainer">
              <img
                className="sandlesimage-icon"
                alt=""
                src={Cai1}
              />
            </div>
            <div className="rightcontainer">
              <h1 className="heading">Timeless and comfy</h1>
              <p className="paragraph">
                A symphony of beautiful earthy shades with an open toe, Maroon
                Studded Heels made of PU leather are sustainable, super comfortable
                and super stylish.
              </p>
            </div>
          </section>
          <section className="fashion-meets-comfort">
            <div className="leftcontainer1">
              <h1 className="heading1">Fashion meets comfort</h1>
              <p className="paragraph1">
                A chic addition to your look, these strappy sandals have super soft
                nubuck sheet inner soles that provide comfort and are stylish in
                equal measure. They feel as good as they look!
              </p>
            </div>
            <div className="rightcontainer1">
              <img
                className="sandlesimage2-icon"
                alt=""
                src={Cai2}
              />
            </div>
          </section>
          <section className="timeless-and-comfy">
            <div className="leftcontainer2">
              <img
                className="sandlesimage3-icon"
                alt=""
                src={Cai3}
              />
            </div>
            <div className="rightcontainer">
              <h1 className="heading">Cosy style</h1>
              <p className="paragraph">
                Thoughtfully crafted footwear in PU leather with maroon studded
                straps and mid heels, which look amazing and feel like the perfect
                pair of everyday footwear.
              </p>
            </div>
          </section>
          <section className="function-fashionably">
            <div className="functionleftcontainer">
              <p className="heading3">FUNCTION FASHIONABLY!</p>
              <p className="paragraph3">
                Combining function and form, CAI fashionably steers the conscious
                consumption movement locally and globally with non-leather,
                pocket-friendly footwear.
              </p>
            </div>
            <div className="functionrightcontainer">
              <img
                className="sandlesimage4-icon"
                alt=""
                src={Cai4}
              />
            </div>
          </section>
          <section className="gif-section">
            <img
              className="gifcontainer-icon"
              alt=""
              src="https://syndication-global-v3-wpageassetbucket-ymw4gzd09eqt.s3.amazonaws.com/cai-01/en/maroon-studded-heels/1/image/c1a0732d-378c-4b50-9434-a4d709c126ef.gif"
            />
          </section>
          <section className="gallery">
            <div className="galleryleft">
              <img
                className="galleryleftimage-icon"
                alt=""
                src={Gallery1}
              />
            </div>
            <div className="galleryright">
              <div className="sectiontop">
                <img
                  className="galleryleftimage-icon"
                  alt=""
                  src={Gallery2}
                />
              </div>
              <div className="sectionbottom">
                <img
                  className="galleryleftimage-icon"
                  alt=""
                  src={Gallery3}
                />
              </div>
            </div>
          </section>
          <section className="magicdetail">
            <div className="magiccontainer">
              <img
                className="magicimageleft-icon"
                alt=""
                src={Cai5}
              />
              <img
                className="magicimageleft-icon"
                alt=""
                src={Cai6}
              />
            </div>
          </section>
          <section className="review">
            <div className="reviewleft">
              <div className="reviewcontainer">
                <div className="heading4">Customer Reviews</div>
                <div className="jgreviewstar">
                  <div className="jg">J.G</div>
                  <div className="staricon">
                    <img
                      className="ef-aadb-4f47-9961-fed46d093f01-icon"
                      alt=""
                      src={star}
                    />
                    <img
                      className="ef-aadb-4f47-9961-fed46d093f01-icon"
                      alt=""
                      src={star}
                    />
                    <img
                      className="ef-aadb-4f47-9961-fed46d093f01-icon"
                      alt=""
                      src={star}
                    />
                    <img
                      className="ef-aadb-4f47-9961-fed46d093f01-icon"
                      alt=""
                      src={star}
                    />
                    <img
                      className="ef-aadb-4f47-9961-fed46d093f01-icon"
                      alt=""
                      src={star}
                    />
                  </div>
                </div>
                <p className="paragraph4">
                  The cai store has outdone themselves with this collection!!
                </p>
              </div>
              <div className="pgreview">
                <div className="pgreviewstar">
                  <div className="jg">P.G</div>
                  <div className="staricon">
                    <img
                      className="ef-aadb-4f47-9961-fed46d093f01-icon"
                      alt=""
                      src={star}
                    />
                    <img
                      className="ef-aadb-4f47-9961-fed46d093f01-icon"
                      alt=""
                      src={star}
                    />
                    <img
                      className="ef-aadb-4f47-9961-fed46d093f01-icon"
                      alt=""
                      src={star}
                    />
                    <img
                      className="ef-aadb-4f47-9961-fed46d093f01-icon"
                      alt=""
                      src={star}
                    />
                    <img
                      className="ef-aadb-4f47-9961-fed46d093f01-icon"
                      alt=""
                      src={star}
                    />
                  </div>
                </div>
                <p className="paragraph5">
                  From the point of view of comfort, it is well and good. I love
                  wearing this as its very light and comfy....
                </p>
              </div>
            </div>
            <div className="reviewright">
              <img
                className="reviewimage-icon"
                alt=""
                src={Cai7}
              />
            </div>
          </section>
        </main>
      );
    };

export default Caiui;