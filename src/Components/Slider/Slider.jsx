import React from "react";
import SliderData from "../../data/sliderData";
import Marquee from "react-fast-marquee";

function Slider() {

  return (
    <div className="slider">
      <Marquee
        gradient={false}
        speed={50}
        direction={"right"}
        pauseOnHover={true}
      >
        {SliderData.map((item) => (
          <div className="singleItem">
            {" "}
            <img src={item.img} alt="" width={60} height={60} />
            <p>{item.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Slider;
