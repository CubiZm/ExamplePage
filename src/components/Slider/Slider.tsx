import * as React from "react"
import type { PageProps } from "gatsby"
import styled from "styled-components";

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "../../assets/global/styles/utility.css"

import Button from "../Button/Button";

const sliderImages = [
  {
    id: 1,
    imageAlt: "smthg about picture",
    image: "https://placehold.co/1600x675",
    title: "Fiberglass and specialty metals are in stock across the United States"
  },
  {
    id: 2,
    imageAlt: "smthg about picture",
    image: "https://placehold.co/1400x675",
    title: "Fiberglass and specialty metals are in stock across the United States",
    isDarkMode: true
  },
  {
    id: 3,
    imageAlt: "smthg about picture",
    image: "https://placehold.co/1200x675",
  },
]

const SliderTitle = styled.h2<{isDarkMode: boolean}>`
  position: absolute;
  left: 95px;
  top: 30%;
  margin: 0;
  max-width: 580px;

  font-weight: 700;
  font-size: 46px;
  line-height: 56px;
  color: ${props =>
    props.isDarkMode
      ? '#000'
      : "#fff"
  }
`;

const SwiperStyled = styled(Swiper)`
  border-radius: 16px;
`;

interface SliderProps {
  className?: string;
  isDarkMode?: boolean;
}

const Slider: React.FC<SliderProps> = props => {
  return (
    <SwiperStyled
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className={"main-slider"}
    >

      {sliderImages.map((sliderImagesData, index) => (
          <SwiperSlide key={index} className="main-slider">
            <div>
              <img src={sliderImagesData.image} alt={sliderImagesData.imageAlt} />

              <SliderTitle isDarkMode={sliderImagesData.isDarkMode}>
                {sliderImagesData.title}
              </SliderTitle>

            </div>
            
            <div>
              <Button as="a" href="#">
                Shop Now
              </Button>
            </div>
          </SwiperSlide>
        ))}
    </SwiperStyled>
  );
};

export default Slider