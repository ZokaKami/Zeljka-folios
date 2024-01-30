import React from "react";
import ZeljkaPFP from "./images/ZeljkaPFP.png";
import Gallery from "./gallery";
import { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
  useSprings,
} from "@react-spring/web";

function Frontpage() {
  const [isVisible, setIsVisible] = useState(false);

  const props = useSpring({
    from: { y: 0, scale: 1, transform: "translate3d(0,100%,0)" },
    to: { y: isVisible ? -400 : 0, scale: isVisible ? 1.5 : 1 },
    config: { duration: 300 },
  });
  const springRef = useSpringRef();
  const { anim, ...rest } = useSpring({
    ref: springRef,
    from: { y: 0, opacity: "1", transform: "translate3d(0,70%,0)" },
    to: {
      y: isVisible ? -500 : 0,
      opacity: isVisible ? "0" : "1",
    },

    config: { duration: isVisible ? 350 : 350 },
  });
  const textRef = useSpringRef();
  const hide = useSpring({
    ref: textRef,
    from: { visibility: "visible" },
    to: {
      visibility: isVisible ? "hidden" : "visible",
    },
    config: { duration: isVisible ? 350 : 350 },
  });
  const testRef = useSpringRef();
  const { test, ...icon } = useSpring({
    ref: testRef,
    from: { y: 0, opacity: "1", transform: "translate3d(0,300%,0)" },
    to: {
      y: isVisible ? 500 : 0,
      opacity: isVisible ? "0" : "1",
    },

    config: { duration: isVisible ? 350 : 350 },
  });

  useChain(isVisible ? [springRef, textRef] : [textRef, springRef]);
  useChain(isVisible ? [testRef, textRef] : [textRef, testRef]);

  return (
    <div className="h-screen w-full text-center overflow-hidden">
      <div className="w-screen h-screen flex justify-center      min-w-[800px] max-w-[1200px]    mx-auto   ">
        <div>
          <animated.div style={{ ...rest }}>
            <animated.div style={hide}>
              <div className="flex justify-center  ">
                <div onClick={() => setIsVisible(!isVisible)} className="p-4 ">
                  <img
                    src={ZeljkaPFP}
                    alt="x"
                    className="w-28 h-28 rounded-full bg-[#637A9F]"
                  />
                </div>
                <div className="text-[78px] font-bold p-4">Zeljka Debeljak</div>
              </div>
              <div>
                <ul className="grid grid-cols-2 justify-center w-[800px] mx-auto font-semibold">
                  <li>Concept artist</li>
                  <li>Enviorment artist</li>
                  <li>Pixel art</li>
                  <li>Waifu</li>
                  <li>Placeholder</li>
                  <li>Placeholder</li>
                </ul>
              </div>
            </animated.div>
          </animated.div>
          <div>
            <animated.div className="text-[48px] p-6" style={props}>
              <button
                onClick={() => setIsVisible(!isVisible)}
                className=" mx-auto  border-4 border-[#637A9F] rounded-full px-8 "
              >
                Gallery
              </button>
            </animated.div>
          </div>
          <animated.div style={{ ...icon }}>
            <animated.div
              style={hide}
              className=" flex  space-x-4 justify-center "
            >
              <button className="w-12 h-12 rounded-full border-2 border-[#637A9F]">
                <img src=" " alt=" " />
              </button>

              <button className="w-12 h-12 rounded-full border-2 border-[#637A9F]">
                <img src=" " alt=" " />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-[#637A9F]">
                <img src=" " alt=" " />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-[#637A9F]">
                <img src=" " alt=" " />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-[#637A9F]">
                <img src=" " alt=" " />
              </button>
            </animated.div>
          </animated.div>
        </div>
        <div>
          <button className="absolute left-4 top-4">Home</button>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
