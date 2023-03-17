import React, { useEffect, useState } from "react";



import bgImage from "../Assets/IntroPage/Images/bgimage.png";
import Logo from "../Assets/IntroPage/Images/Logo.png";
import Layer from "../Assets/IntroPage/Images/Layer.png";




const IntroPage = (props) => {
  const [IntroFinish, setIntroFinish] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIntroFinish(true);
      props.setisIntroFinished(true);
    }, 5000);
  }, []);




  return (
    <div className={!IntroFinish && "vh-100"}>
      <div className={IntroFinish ? "d-none" : "w-100 h-100"}>
        <div className="bg-green vh-100 d-flex justify-content-center align-items-center">
          <div className="w-100 h-100 position-absolute">
            <img
              src={bgImage}
              className="img-fluid opacity-25"
              alt="Introgif"
            />
          </div>
          <div>
            <div className="d-flex justify-content-center">
              <img
                src={Logo}
                className=" position-relative opacity-80"
                alt="Introgif"
                data-aos="zoom-in-up"
                data-aos-duration="3000"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={Layer}
                alt="layer"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-delay="1000"
              />

              <h3
                className="mt-3 px-4 text-danger fw-bold "
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                MADE WITH LOVE
              </h3>
              <img
                src={Layer}
                alt="layer"
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-delay="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
