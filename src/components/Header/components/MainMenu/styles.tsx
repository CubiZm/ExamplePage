import styled from "styled-components";

import phoneIcon from "../../../../assets/images/icons/phone.svg"
import phoneIconHover from "../../../../assets/images/icons/hover/phone-icon-hover.svg"

export const MenuWrap = styled.nav`
    display: flex;
    list-style: none;
    margin-bottom: 21px;
`;

export const MainMenuItem = styled.li`
    &:last-child {
        margin-left: auto;

        a {
            position: relative;
            color: #4859F0;
            text-decoration: none;
            outline: none;

            &:hover, &:focus {
                color: #1022CA;
            }

            &::before {
                content: "";
                position: absolute;
                left: -25px;
                background: url(${phoneIcon});
                width: 18px;
                height: 18px;
                background-size: cover;
                background-repeat: no-repeat;
            }
        }

        &:hover::before {
            background: url(${phoneIconHover});
        }
    }
`;

export const MainMenuLink = styled.a`
    margin-right: 14px;
    padding: 5px;
    font-size: 16px;
    line-height: 16px;
    color: #212121;
    text-decoration: underline rgba(155, 149, 145, 0.5);

    &:hover, &:focus {
        outline: none;
        color: #4859F0;
    }

    &:active {
        color: #4859F0;
    }
`;
