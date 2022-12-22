import * as React from "react"
import type { PageProps } from "gatsby"

import payCardImg from "../../assets/images/paycards.png";

import {SubscribeText, SubscribeButtonWrap, SubscribeInput, SubscribeButton, PayCardImg} from "./styles"


const SubscribeForm: React.FC<PageProps> = () => {
  return (
    <div>
        <SubscribeText>
            Subscribe to our mailing list to receive exclusive offers and the latest product updates
        </SubscribeText>

        <SubscribeButtonWrap>
            <SubscribeInput 
                type="email"
                name="email" 
                pattern=".+@.+\..+" 
                placeholder="Your E-mail"
            />
        
            <SubscribeButton type="submit">
                Subscribe
            </SubscribeButton>
        </SubscribeButtonWrap>

        <div>
            <div>
                <PayCardImg src={payCardImg} alt="pay card" />
            </div>
        </div>

    </div>
  )
}

export default SubscribeForm;