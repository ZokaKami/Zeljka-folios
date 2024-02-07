import React, { useState } from "react";

import ZeljkaPFP from "./images/ZeljkaPFP.png";
import Gallery from "./gallery.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, useChain, useSpringRef } from "@react-spring/web";
import {
  faInstagram,
  faXTwitter,
  faArtstation,
  faDiscord,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
function frontpagesave() {
  const [showGallery, setShowGallery] = useState(false);
  const [showZ, setShowZ] = useState(false);

  const function1 = () => {
    setShowGallery(!showGallery);
  };

  const function2 = () => {
    setTimeout(() => {
      setShowZ(!showZ);
    }, 400);
  };

  const handleButtonClick = () => {
    // Call both functions
    function1();
    function2();
  };

  const opacityRef = useSpringRef();
  const hideRef = useSpringRef();
  console.log(showGallery);
  const test = useSpring({
    ref: opacityRef,
    from: { opacity: "1" },
    to: {
      opacity: showGallery ? "0" : "1",
    },
    config: { duration: 400 },
  });

  const hide = useSpring({
    ref: hideRef,
    from: { visibility: "visible" },
    to: {
      visibility: showGallery ? "hidden" : "visible",
    },
  });

  const combinedProps = useSpring({
    ...test,
    ...hide,
  });

  useChain(showGallery ? [opacityRef, hideRef] : [hideRef, opacityRef]);
  return (
    <div className="  text-[#637A9F]">
      {!showZ ? (
        <div className="flex justify-center  ">
          <div className="  min-[1300px]:w-[50%] md:w-[70%] w-[90%] transition-width ease-in-out  ">
            <div className=" min-h-screen flex items-center justify-center  text-center        ">
              <div className="flex flex-wrap space-y-4  border-8 border-[#637A9F]  rounded-[44px] py-12 bg-[#FFF3CF]  drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] ">
                <animated.div
                  style={combinedProps}
                  className="flex w-full justify-center   "
                >
                  <img
                    src={ZeljkaPFP}
                    className="rounded-full border-2 border-black w-[120px] h-[120px]"
                    alt=""
                  />
                  <h1 className="font-bold text-[54px] p-4 ">Zeljka Dobras</h1>
                </animated.div>
                <animated.div
                  style={combinedProps}
                  className="flex justify-evenly text-[18px] w-full  "
                >
                  <div>
                    <p>Content placeholder</p>
                    <p>Design placeholder</p>
                    <p>Waifu placeholder</p>
                  </div>
                  <div>
                    <p>Design placeholder</p>
                    <p>Waifu placeholder</p>
                    <p>Contest placeholder</p>
                  </div>
                </animated.div>
                <animated.div style={combinedProps} className="w-full  ">
                  <button
                    onClick={handleButtonClick}
                    className="py-2 px-8 text-[40px] border-4 border-[#637A9F] hover:border-[#435778] hover:text-[#435778] rounded-full font-semibold  transition-all ease-in-out duration-300"
                  >
                    Gallery
                  </button>
                </animated.div>
                <animated.div
                  style={combinedProps}
                  className="flex justify-center space-x-6 w-full "
                >
                  <a href="" className="w-10 h-10 border-none">
                    <FontAwesomeIcon
                      className="h-full    hover:text-[#435778] transition-all ease-in-out duration-300  "
                      icon={faArtstation}
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      className="w-10 h-10 rounded-full  hover:text-[#435778]  transition-all ease-in-out duration-300 "
                      icon={faXTwitter}
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      className="w-10 h-10 rounded-full hover:text-[#435778] transition-all ease-in-out duration-300 "
                      icon={faInstagram}
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      className="w-10 h-10 rounded-full hover:text-[#435778]  transition-all ease-in-out duration-300"
                      icon={faDiscord}
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      className="w-10 h-10 rounded-full hover:text-[#435778] transition-all ease-in-out duration-300 "
                      icon={faFacebook}
                    />
                  </a>
                </animated.div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" transition ease-in-out duration-150">
          <div>
            <button
              className="absolute top-5 left-5"
              onClick={handleButtonClick}
            >
              Home
            </button>
          </div>
          <Gallery />
        </div>
      )}
    </div>
  );
}

export default frontpagesave;
