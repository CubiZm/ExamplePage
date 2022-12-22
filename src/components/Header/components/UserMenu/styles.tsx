import styled from "styled-components";


import DocumentSvg from "../../../../assets/images/icons/document-icon.svg"
import UserSvg from "../../../../assets/images/icons/user-icon.svg"
import FlashSvg from "../../../../assets/images/icons/flash-icon.svg"
import CartSvg from "../../../../assets/images/icons/cart-icon.svg"

import DocumentSvgHover from "../../../../assets/images/icons/hover/document-icon-hover.svg"
import UserSvgHover from "../../../../assets/images/icons/hover/user-icon-hover.svg"
import FlashSvgHover from "../../../../assets/images/icons/hover/flash-icon-hover.svg"
import CartSvgHover from "../../../../assets/images/icons/hover/cart-icon-hover.svg"

type LinkType = 'lists' | 'account' | 'quickorder' | 'cart';

interface NavLinkProps {
    LinkType: LinkType;
}

export const getBgImage = (LinkType: LinkType) => {
    switch (LinkType) {
        case 'lists':
        return DocumentSvg;

        case 'account':
        return UserSvg;

        case 'quickorder':
        return FlashSvg;

        case 'cart':
        return CartSvg;

        default:
        return null;
    }
};

export const getBgImageHover = (LinkType: LinkType) => {
    switch (LinkType) {
        case 'lists':
        return DocumentSvgHover;

        case 'account':
        return UserSvgHover;

        case 'quickorder':
        return FlashSvgHover;

        case 'cart':
        return CartSvgHover;

        default:
        return null;
    }
};

export const UserMenuWrap = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;

export const UserMenuItem = styled.li`
    list-style: none;
    margin: 0 25px;
`;

export const UserMenuLink = styled.a<NavLinkProps>`
    position: relative;
    display: flex;
    align-items: center;

    font-size: 16px;
    line-height: 19px;

    color: #212121;

    & span {
        margin-left: 9px;
    }

    &:hover, &:focus {
        outline: none;
        color: #4859F0;
    }

    &:active {
        color: #4859F0;
    }

    &::before {
        content: "";
        position: absolute;
        left: -30px;
        top: -5px;
        background-image: url(${props => {
            return getBgImage(props.LinkType);
        }});
        background-repeat: no-repeat;
        background-position: center;
        width: 30px;
        height: 30px;
        transition: all 1s ease-in;
    }

    &:hover::before,
    &:focus::before {
        outline: none;
        background-image: url(${props => {
            return getBgImageHover(props.LinkType);
        }});
    }
`;


export const CardCircle = styled.div`
    position: absolute;
    background: rgba(72, 89, 240, 0.99);
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    width: 19px;
    height: 17px;
    background: rgba(72, 89, 240, 0.99);
    border: 2px solid rgba(72, 89, 240, 0.2);
    border-radius: 50%;
    text-align: center;
    padding: 1px 0;
    margin: 0 auto;
    top: -12px;
    left: -17px;
    font-weight: 700;

    span {
        margin: 0;
    }
`