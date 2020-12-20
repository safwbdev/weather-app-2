import React from "react";
import Slider from "react-slick";
import WeatherSlide from "./WeatherSlide";

const WeatherSlider = ({ getData }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5.3,
    slidesToScroll: 5,
  };
  return (
    <div>
      <Slider {...settings}>
        {getData &&
          getData.map((data, index) => {
            return <WeatherSlide key={index} data={data} />;
          })}
      </Slider>
    </div>
  );
};
export default WeatherSlider;
