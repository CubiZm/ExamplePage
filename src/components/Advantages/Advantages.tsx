import * as React from "react"
import type { PageProps } from "gatsby"

import {AdvantagesList, AdvantagesItem, AdvantagesTitle} from "./styles"

import ShopIcon from "./images/shop-icon.svg";
import HeadphoneIcon from "./images/headphone-icon.svg";
import LampIcon from "./images/lumos-icon.svg";


const AdvantagesDatas = [
    {
      id: 1,
      imageAlt: "smthg about picture",
      imageSrc: ShopIcon,
      title: "Products Catalog"
    },
    {
      id: 2,
      imageAlt: "smthg about picture",
      imageSrc: HeadphoneIcon,
      title: "24/7 Customer Support"
    },
    {
      id: 3,
      imageAlt: "smthg about picture",
      imageSrc: LampIcon,
      title: "Product Ideas"
    },
  ]

const Advantages: React.FC<PageProps> = () => {
  return (
    <AdvantagesList>
        {AdvantagesDatas.map((AdvantagesData, index) => (
            <AdvantagesItem key={index}>
                <img src={AdvantagesData.imageSrc} alt={AdvantagesData.imageAlt} />
                <AdvantagesTitle>{AdvantagesData.title}</AdvantagesTitle>
            </AdvantagesItem>
        ))}
    </AdvantagesList>
  )
}

export default Advantages;