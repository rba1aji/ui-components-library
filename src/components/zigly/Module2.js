import { useEffect } from "react";
import "./Module2.css";
import img1 from '../../../public/Module2/img1.png';
import img2 from '../../../public/Module2/img2.png';
import '../../global.css'

const Module2 = () => {
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
        <div className="module2">
            <div className="m2-top" data-animate-on-scroll>
                <div className="m2-top-right">
                    <img className="img2-icon" alt="" src={img1} />
                </div>
                <div className="m2-top-left">
                    <img className="img1-icon" alt="" src={img2} />
                </div>
            </div>
            <div className="m2-bottom">
                <div className="m2-bottom-sec2">
                    <div className="m2-text-left">
                        <p className="coat-type-all-container">
                            <span className="coat-type">
                                <b>Coat Type</b>
                            </span>
                            <span className="coat-type">
                                <span>All Coats</span>
                            </span>
                        </p>
                    </div>
                    <div className="m2-text-right">
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
                <div className="m2-bottom-sec1">
                    <b className="made-for-your">Made for your furry little fellas</b>
                </div>
            </div>
        </div>
    );
};

export default Module2;
