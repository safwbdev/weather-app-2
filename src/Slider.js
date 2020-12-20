import React from "react";

export default function Slider({ data }) {
  return (
    <div>
      {data &&
        data.map((a, index) => {
          console.log(a);
          return <p key={index}>{a.dt_txt}</p>;
        })}
    </div>
  );
}
