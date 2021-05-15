import React from "react";
import Slider from "react-slick";
import WeatherSlide from "./WeatherSlide";

const WeatherSlider = ({ getData }) => {
  var settings = {
    dots: false,
    dotsarrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          // centerMode: true,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="weatherSlider">
        {getData &&
          getData.map((data, index) => {
            return <WeatherSlide key={index} data={data} />;
          })}
      </Slider>
    </div>
  );
};
export default WeatherSlider;
