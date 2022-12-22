import * as React from "react"
import type { PageProps } from "gatsby"

import {UserMenuWrap, UserMenuItem, UserMenuLink} from "./styles"

const userMenuLinks = [
  {
    text: "Lists",
    url: "#",
    LinkType: "lists"
  },
  {
    text: "Account",
    url: "#",
    LinkType: "account"
  },
  {
    text: "Quick Order",
    url: "#",
    LinkType: "quickorder"
  },
  {
    text: "Cart",
    url: "#",
    LinkType: "cart"
  },
]

const UserMenu: React.FC<PageProps> = () => {
  return (
    <UserMenuWrap role="navigation" aria-label="User Menu">
        {userMenuLinks.map((userMenuData, index) => (
          <UserMenuItem key={index}>
            <UserMenuLink
            LinkType={userMenuData.LinkType}
              
              href={`${userMenuData.url}`}
            >   
              <span>{userMenuData.text}</span>
            </UserMenuLink>
          </UserMenuItem>
        ))}
    </UserMenuWrap>
  )
}

export default UserMenu;