import * as React from "react"
import type { PageProps } from "gatsby"


import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {ButtonChat} from "../Button/Button"

import {CategoryLayout, TitleWrap, CategoryTitle, CategoryItemTitle, ButtonImg} from "./styled"

import "../../assets/global/styles/utility.css"

import ArrowSvg from "../../assets/images/icons/arrow-icon.svg"
import img_0 from "./images/img_0.jpg";
import img_1 from "./images/img_1.jpg";
import img_2 from "./images/img_2.jpg";
import img_3 from "./images/img_3.jpg";
import img_4 from "./images/img_4.jpg";
import img_5 from "./images/img_5.jpg";


const CategoryData = [
    {
        id: 1,
        imageAlt: "smthg about picture",
        image: img_0,
        title: "Abrasives"
    },
    {
        id: 2,
        imageAlt: "smthg about picture",
        image: img_1,
        title: "Electrical"
    },
    {
        id: 3,
        imageAlt: "smthg about picture",
        image: img_2,
        title: "Welding"
    },
    {
        id: 4,
        imageAlt: "smthg about picture",
        image: img_3,
        title: "Safety"
    },
    {
        id: 5,
        imageAlt: "smthg about picture",
        image: img_4,
        title: "Fasteners"
    },
    {
        id: 6,
        imageAlt: "smthg about picture",
        image: img_5,
        title: "Hand Tools"
    },
    {
        id: 7,
        imageAlt: "smthg about picture",
        image: img_2,
    },
    {
        id: 8,
        imageAlt: "smthg about picture",
        image: img_4,
    },
];

const Category: React.FC<PageProps> = () => {

  return (
    <CategoryLayout className={"category"}>
        <Swiper
        // install Swiper modules
            modules={[Navigation,A11y]}
            spaceBetween={45}
            slidesPerView={6}
            navigation={true}
        >
            <TitleWrap>
                <CategoryTitle>Categories</CategoryTitle>

                <ButtonChat as="a" href="#">
                    Live Chat

                    <ButtonImg src={ArrowSvg} alt=""/> 
                </ButtonChat>
            </TitleWrap>
        <div>

            {CategoryData.map((categotyItem, index) => (
                <SwiperSlide key={index}>
                    <img src={categotyItem.image} alt={categotyItem.imageAlt} />
                    <CategoryItemTitle>{categotyItem.title}</CategoryItemTitle>
                </SwiperSlide>
            ))}
        </div>
        </Swiper>
    </CategoryLayout>
  )
}

export default Category;