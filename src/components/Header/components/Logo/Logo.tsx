import * as React from "react"
import type { PageProps } from "gatsby"

import {LogoWrapper} from "./styles"

const Logo: React.FC<PageProps> = () => {
    return (
        <LogoWrapper>
            {/* <img src="https://placehold.co/106x45" alt="Logo" /> */}
            Logo
        </LogoWrapper>
    )
  }
  
  export default Logo