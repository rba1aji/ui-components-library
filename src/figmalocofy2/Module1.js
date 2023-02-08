import "./Module1.css";
import "../global.css"
import slipper from "../../public/slipper.png"

const Module1 = () => {
  return (
    <div className="module1">
      <div className="module1left">
        <p className="description">
          <span className="description-txt">
            <span className="fashion-meets-comfort">
              <span>Fashion meets comfort</span>
            </span>
            <span className="a-chic-addition-to-your-look">
              <span>
                A chic addition to your look, these strappy sandals have super
                soft nubuck sheet inner soles that provide comfort and are
                stylish in equal measure. They feel as good as they look!
              </span>
            </span>
          </span>
        </p>
      </div>
      <div className="module1right">
        <img className="slipper-img-icon" alt="" src={slipper} />
        <p className="hover-description">
          <span className="description-txt">
            <span className="fashion-meets-comfort">
              Comfortable PU leather in dashing maroon
            </span>
            <span className="fashion-meets-comfort">
              Motivated yoga instructor with advanced training and
              specialization in ashtanga principles
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Module1;
