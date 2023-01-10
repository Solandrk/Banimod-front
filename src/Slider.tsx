import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
export default function Slider() {
  return (
    <Carousel indicators={false} className="flex-1 relative rounded-lg">
      <Carousel.Item className="absloute ">
          <img className="rounded-lg" src="https://www.banimode.com/img/cms/011017/1673116347.jpg"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="rounded-lg" src="https://www.banimode.com/img/cms/011017/1673116370.jpg"></img>
      </Carousel.Item>
    </Carousel>
  );
}
