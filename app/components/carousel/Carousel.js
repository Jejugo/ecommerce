import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./Carousel.module.scss";

export default function CarouselComponent() {
  return (
    <Carousel className={styles.carousel}>
      <div>
        <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mlb-home-desktop-slider-picture-fc63f170-f139-4570-9f6f-dbc3baaa3152.jpg" />
      </div>
      <div>
        <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/exhibitors/MLB-pais/64ca3ae0-c301-11ea-8788-4ff22571a1a8-home-slider_desktop.jpg" />
      </div>
      <div>
        <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mlb-home-desktop-slider-picture-c44e3b4b-76ad-4be3-9071-d6f256dbf26b.jpg" />
      </div>
    </Carousel>
  );
} 