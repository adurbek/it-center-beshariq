import React from "react";
import video from "../reklama/NITCUZ.mp4";
export default function Reklama() {
  return (
    <>
      <div className="inner-shd w-full h-[80vh] md:h-[100vh] relative">
        <video
          className="right-0 absolute w-full h-full object-cover"
          src={video}
          autoPlay={true}
          muted={true}
        ></video>
      </div>
    </>
  );
}
