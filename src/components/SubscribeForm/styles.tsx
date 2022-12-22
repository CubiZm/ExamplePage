import styled from "styled-components";

export const SubscribeText = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #6F6F6F;
`;

export const SubscribeInput = styled.input`
    padding: 19px 20px;
    border: 1px solid #1B1B1B;
    background: #1B1B1B;
    border-radius: 11px;
    outline: none;
    color: #C4C4C4;

    &:hover, &:focus {
        border:1px solid #6F6F6F;
    }

    &::placeholder {
        font-size: 16px;
        line-height: 19px;
        color: #C4C4C4;
    }
`;

export const SubscribeButton = styled.button`
    padding: 16px 33px;
    background: #4859F0;
    border: 1px solid #4859F0;
    border-radius: 8px;

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    transition: background-color 0.3s linear;

    &:hover, &:focus {
        border: 1px solid #1022CA;
        background: #1022CA;
        transition: background-color 0.3s linear;
    }
`;

export const SubscribeButtonWrap = styled.div`
    background: #1B1B1B;
    border-radius: 11px;
    width: 95%;
    margin-bottom: 47px;
`;

export const PayCardImg = styled.img`
    width: 81px;
    height: 48px;
`;