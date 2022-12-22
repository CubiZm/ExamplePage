import * as React from "react"
import type { PageProps } from "gatsby"

import { MenuWrap, MainMenuItem, MainMenuLink } from "./styles"

const mainMenuLinks = [
  {
    text: "Products",
    url: "#",
  },
  {
    text: "Resources",
    url: "#",
  },
  {
    text: "Services",
    url: "#",
  },
  {
    text: "Locations",
    url: "#",
  },
  {
    text: "Careers",
    url: "#",
  },
  {
    text: "Support",
    url: "#",
  },
]

const MainMenu: React.FC<PageProps> = () => {
  return (
    <MenuWrap role="navigation" aria-label="Main Menu">
        {mainMenuLinks.map((mainMenuData, index) => (
          <MainMenuItem key={index}>
            <MainMenuLink
              
              href={`${mainMenuData.url}`}
            >
              {mainMenuData.text}
            </MainMenuLink>
          </MainMenuItem>
        ))}

      <MainMenuItem><a href="tel:+84443672">+(844) 434-672</a></MainMenuItem>
    </MenuWrap>
  )
}

export default MainMenu;