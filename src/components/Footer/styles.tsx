import styled from "styled-components";

export const FooterLayout = styled.footer`
    padding: 23px 37px;
    background: #212121;
    border-radius: 16px 16px 0px 0px;
    min-height: 285px;
`;

export const FooterNavigation = styled.nav`
    display: flex;
    flex-direction: column;

    // margin-right: 130px;
    min-width: 230px;
    margin-right: 70px;
`;

export const FooterTitle = styled.h2`
    margin: 0;
    margin-bottom: 23px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #6F6F6F;
`;

export const FooterChild = styled.li`
    list-style: none;
    margin-bottom: 5px;
`;

export const FooterLink = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    text-decoration: none;

    &:hover, &:focus {
        color: #6F6F6F;
        text-decoration: underline;
        outline: none;
    }
`;

export const FooterWrap = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const CopyrightText = styled.p`
    font-size: 16px;
    line-height: 19px;
    color: #9B9591;
    margin: 0;
    margin-top: 28px;
    text-align: center;
`;