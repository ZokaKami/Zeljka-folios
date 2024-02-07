import React, { useState } from "react";
import ZeljkaPFP from "./images/ZeljkaPFP.png";
import Gallery from "./gallery.tsx";
import Borzoi from "./images/borzoi.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, useChain, useSpringRef } from "@react-spring/web";
import {
  faInstagram,
  faXTwitter,
  faArtstation,
  faDiscord,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
function gallery() {
  const [fullSize, setFullSize] = useState(false);
  console.log(setFullSize);
  const handleClick = () => {
    setFullSize(!fullSize);
  };
  const props = useSpring({
    from: { width: "30%", height: "513px" },
    to: {
      width: fullSize ? "40%" : "25%",

      height: fullSize ? "900px" : "640px",
    },
    config: { duration: 300 },
  });
  const collapseRef = useSpringRef();

  const propsCollapse = useSpring({
    ref: collapseRef,
    from: { width: "300px", height: "640px" },
    to: {
      width: "250px",

      height: "513px",
    },
    config: { duration: 300 },
  });
  const propsTwo = useSpring({
    from: { width: "0 ", height: "513px" },
    to: { width: "25%", height: "640px" },
    config: { duration: 400 },
  });
  const propsThree = useSpring({
    from: { width: "50%" },
    to: { width: "95%" },
    config: { duration: 400 },
  });

  return (
    <div className="w-[100vw]  text-[#637A9F] overflow-scroll">
      <div className="flex justify-center  ">
        <animated.div
          style={propsThree}
          className="  min-[1300px]:w-[50%] md:w-[70%] w-[90%] transition-width ease-in-out  "
        >
          <div className=" min-h-screen flex   items-center justify-center  text-center space-x-8  transition-all     ">
            <animated.div
              style={propsTwo}
              className="flex  bg-cover bg-center  bg-[url('/components/images/borzoi.jpg')]  h-[513px]  border-8 border-[#637A9F]  rounded-[44px] py-12 bg-[#FFF3CF]  drop-shadow-[0_55px_55px_rgba(0,0,0,0.25)] "
            ></animated.div>
            <animated.div
              onClick={handleClick}
              style={props}
              className="flex   bg-center bg-cover bg-no-repeat  bg-[url('/components/images/statua.jpg')] h-[513px]  border-8 border-[#637A9F]  rounded-[44px] py-12 bg-[#FFF3CF]  drop-shadow-[0_55px_55px_rgba(0,0,0,0.25)] "
            ></animated.div>

            <animated.div
              style={propsTwo}
              className="flex   bg-cover bg-center  bg-[url('/components/images/frog.jpg')]  h-[513px]  border-8 border-[#637A9F]  rounded-[44px] py-12 bg-[#FFF3CF]  drop-shadow-[0_55px_55px_rgba(0,0,0,0.25)] "
            ></animated.div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default gallery;
