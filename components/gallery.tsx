import React, { useState } from "react";
import ImagesOne from "./imagesone";
function Gallery() {
  const [openGallery, setOpenGallery] = useState(false);
  return (
    <div className="w-screen h-screen  justify-center items-center text-center  min-w-[800px] max-w-[1200px] pX-16 py-[24px]  mx-auto ">
      <div className={openGallery ? "hidden" : "block"}>
        <div>
          <div className="flex    justify-content-between justify-between">
            <div>
              <p className="text-[48px] font-bold -skew-y-[20deg]">
                COMISSIONS
              </p>
              <div
                onClick={() => setOpenGallery(!openGallery)}
                className="w-[300px] min-w-[300px] max-w-[300px] h-[550px] border-8 border-black bg-red-300 -skew-y-[20deg]"
              ></div>
            </div>
            <div>
              <p className="text-[48px] font-bold -skew-y-[20deg]">SKETCHES</p>
              <div className="w-[300px] min-w-[300px] max-w-[300px] h-[550px] border-8 border-black bg-green-400 -skew-y-[20deg]"></div>
            </div>
            <div>
              <p className="text-[48px] font-bold -skew-y-[20deg]">
                PLACEHOLDER
              </p>
              <div className="w-[300px] min-w-[300px] max-w-[300px]  h-[550px] border-8 border-black bg-yellow-400 -skew-y-[20deg]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={openGallery ? "block" : "hidden"}>
        <ImagesOne />
      </div>
    </div>
  );
}
export default Gallery;
