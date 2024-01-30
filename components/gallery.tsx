import React, { useState } from "react";
import ImagesOne from "./imagesone";
function Gallery() {
  const [openGallery, setOpenGallery] = useState(false);
  return (
    <div className="w-screen h-screen  justify-center items-center text-center  min-w-[800px] max-w-[1200px]    mx-auto ">
      <div className={openGallery ? "hidden" : "block"}>
        <div>
          <h1 className="text-[84px] p-8 pb-12 font-semibold">Gallery</h1>
        </div>
        <div>
          <div className="flex   justify-content-between justify-between">
            <div
              onClick={() => setOpenGallery(!openGallery)}
              className="w-[300px] h-[550px] border-2 bg-red-300 -skew-y-12"
            ></div>
            <div className="w-[300px] h-[550px] border-2 bg-green-400 -skew-y-12"></div>
            <div className="w-[300px]  h-[550px] border-2 bg-yellow-400 -skew-y-12"></div>
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
