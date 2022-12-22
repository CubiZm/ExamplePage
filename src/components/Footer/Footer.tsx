import * as React from "react"
import type { PageProps } from "gatsby"

import SubscribeForm from "../SubscribeForm/SubscribeForm";

import {FooterLayout, FooterWrap, FooterNavigation, FooterTitle, FooterChild, FooterLink, CopyrightText} from "./styles"

const FooterData = [
    {
      heading: "Helpful Links",
      children: [
        "Buyer’s Guides",
        "Calculators", 
        "All Brands",
        "Catalog Updates"
        ]
    },
    {
      heading: "Customer Services",
      children: [
        "Express Delivery", 
        "Privacy Statement",
        "Terms of Use",
        "Pricing Policy",
        "Returns and Refunds",
        "Help and FAQ",
        "Return Points",
        "Returns and Orders",
        ]
    },
    {
      heading: "Support",
      children: [
        "Contact Us",
         "FAQ", 
         "Feedback",
         "Live Chat",
         "My Account"
        ]
    }
];

const Footer: React.FC<PageProps> = () => {
  return (
    <div>
    <FooterLayout>
        <FooterWrap>
            {FooterData.map((data, index) => {
            return (
                <FooterNavigation key={index}>
                    <FooterTitle>{data.heading}</FooterTitle>
                    {data.children.map((child, index) => {
                        return <FooterChild key={index}>
                            <FooterLink href="#">
                                {child}
                            </FooterLink>
                        </FooterChild>;
                    })}

                </FooterNavigation>
            );
            })}

            <SubscribeForm/>
        </FooterWrap>

        <div>
            <CopyrightText>© «Brand» 2022, All Rights Reserved</CopyrightText>
        </div>
    </FooterLayout>

    </div>
  )
}

export default Footer;