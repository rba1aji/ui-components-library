import "./Container.css";
import slipper from "../../public/slipper.png";

const Container = () => {
  return (
    <div className="container">
      <style>
        {require('!raw-loader!./Container.css').default}
      </style>
      <section className="section">
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
      </section>
      <section className="section1">
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
      </section>
    </div>
  );
};

export default Container;
