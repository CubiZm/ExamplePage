import styled from "styled-components";

import LogoSvg from "../../assets/images/icons/search-icon.svg"

export const Input = styled.input`
    padding-left: 58px;

    width: 479px;
    height: 45px;
    
    border-radius: 8px;
    border: 1px solid #fff;
    outline: none;

    &::placeholder {
        font-size: 16px;
        line-height: 19px;
        color: #9B9591;
    }

    &:hover, &:focus {
        border: 1px solid #ccc;
    }
`;

export const Label = styled.label`
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 15px;
        top: -5px;
        height: 30px;
        width: 30px;
        background-image: url("${LogoSvg}");
        background-repeat: no-repeat;
    }
`;