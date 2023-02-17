import { useState, useEffect } from "react";
import "./whyChooseUs.scss";
import pic1 from "./1.png";
import pic2 from "./2.png";
import pic3 from "./3.png";
import pic4 from "./4.png";

const WhyChooseUs = () => {
  let [vw, setVw] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="whyChooseUs">
      <h4>Why choose us</h4>
      <p className="content">
        Modern consumer trends: Focus on top-selected services. Changing
        business models to adapt to new consumer trends: Applying the latest
        technology
      </p>
      <div className="">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner d-lg-flex justify-content-around">
            <div className={`${vw < 1000 ? "carousel-item active" : ""}`}>
              <div className="card">
                <div className="card-title">
                  <img
                    src={pic1}
                    className="card-img-top card-title"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Professional</h5>
                </div>
              </div>
            </div>
            <div className={`${vw < 1000 ? "carousel-item" : ""} `}>
              <div className="card">
                <div className="card-title">
                  <img
                    src={pic2}
                    className="card-img-top card-title"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Fast</h5>
                </div>
              </div>
            </div>
            <div className={`${vw < 1000 ? "carousel-item" : ""}`}>
              <div className="card">
                <div className="card-title">
                  <img
                    src={pic3}
                    className="card-img-top card-title"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Multi service</h5>
                </div>
              </div>
            </div>
            <div className={`${vw < 1000 ? "carousel-item" : ""}`}>
              <div className="card">
                <div className="card-title">
                  <img
                    src={pic4}
                    className="card-img-top card-title"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Safety, quality</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button
              className="carousel-control-prev d-lg-none"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </button>
            <button
              className="carousel-control-next d-lg-none"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
