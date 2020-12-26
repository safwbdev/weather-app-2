import React from "react";
import Slider from "react-slick";
import WeatherSlide from "./WeatherSlide";

const WeatherSlider = ({ getData }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.3,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <Slider {...settings}>
        {getData &&
          getData.map((data, index) => {
            return <WeatherSlide key={index} data={data} />;
            // console.log(data);
            // return <p>{index}</p>;
          })}
      </Slider>
    </div>
  );
};
export default WeatherSlider;
