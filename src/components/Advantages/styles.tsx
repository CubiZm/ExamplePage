import styled from "styled-components";

export const AdvantagesList = styled.ul`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 112px;
    margin-top: 55px;
    padding: 0;
`;

export const AdvantagesItem = styled.li`
    list-style: none;

    img {
        display: block;
        margin: 0 auto;
        width: auto;
        height: 74px;
    }
`;

export const AdvantagesTitle = styled.h3`
    margin: 0;
    margin-top: 28px;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: #212121;
`;