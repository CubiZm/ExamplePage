import * as React from "react"
import type { PageProps } from "gatsby"

import {ButtonPrimary} from "../Button/Button"

import {BannerLayout, BannerInfoWrapper, BannerTitle, BannerText} from "./styles"


const Banner: React.FC<PageProps> = () => {
  return (
    <BannerLayout>

        <BannerInfoWrapper>
            <BannerTitle>
                Large Inventory Of Power Tools & Accessories
            </BannerTitle>

            <BannerText>
                Find the Aluminum and Stainless Steel items for your project in stock and ready to ship today! 
                Avoid project delays and long lead times in a challenging supply chain for specialty metals and non-ferrous items.
                We are well stocked and here to serve you with guided support.
            </BannerText>

            <ButtonPrimary>
                Shop Now
            </ButtonPrimary>
        </BannerInfoWrapper>
    </BannerLayout>
  )
}

export default Banner;