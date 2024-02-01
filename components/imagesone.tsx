import React from "react";
import Borzoi from "./images/borzoi.jpg";

function ImagesOne() {
  return (
    <div>
      <div className="flex space-x-6 p-6 justify-between">
        <img className="w-1/4 h-fit" src={Borzoi} alt="" />
        <img className="w-1/4 h-fit " src={Borzoi} alt="" />
        <img className="w-1/4 h-fit " src={Borzoi} alt="" />
        <img className="w-1/4 h-fit " src={Borzoi} alt="" />
      </div>
    </div>
  );
}

export default ImagesOne;
