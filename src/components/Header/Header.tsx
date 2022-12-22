import * as React from "react"
import type { PageProps } from "gatsby"

import Logo from "./components/Logo/Logo";
import MainMenu from "./components/MainMenu/MainMenu";
import UserMenu from "./components/UserMenu/UserMenu";
import SearchInput from "../SearchInput/SearchInput";

import {HeaderLayout, BasedWrap, MainMenuWrap, UtilityWrap, UtilityItem, HeaderWrap} from "./styles"

const Header: React.FC<PageProps> = () => {
    return (
      <HeaderLayout>
        <HeaderWrap>
          
          <UtilityWrap>
            <UtilityItem>
              <a href="#">
                Request a Sample
              </a>
            </UtilityItem>
            <UtilityItem>
              <a href="#">
                Help
              </a>
            </UtilityItem>
            <UtilityItem>
              <a href="#">
                Contact
              </a>
            </UtilityItem>
          </UtilityWrap>

          <BasedWrap>
            <Logo/>
            <SearchInput/>
            <UserMenu/>
          </BasedWrap>
        </HeaderWrap>

        <MainMenuWrap>
          <MainMenu/>
        </MainMenuWrap>
        
      </HeaderLayout>
    )
  }
  
  export default Header
