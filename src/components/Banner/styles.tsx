import styled from "styled-components";

import BgImage from "../../assets/images/background.png"

export const BannerLayout = styled.section`
    margin-bottom: 105px;
    height: 684px;
    background: #FFFFFF;
    outline: 1px solid #E2E0DF;
    border-right: 0;
    border-radius: 16px;

    background: url("${BgImage}");
    background-repeat: no-repeat;
    background-position: right;
    overflow: hidden;
`;

export const BannerInfoWrapper = styled.div`
    padding: 130px 20px 140px 75px;
    max-width: 570px;
    height: 411px;
    background: #fff;
    box-shadow: 20px 0px 130px 220px rgb(255 255 255 / 97%);
    // box-shadow: 20px 257px 0px 160px rgba(255, 255, 255, 0.97);
`;

export const BannerTitle = styled.h2`
    margin: 0;
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 35px;
    line-height: 42px;

    color: #212121;
`;

export const BannerText = styled.p`
    margin: 0;
    margin-bottom: 40px;
    font-size: 22px;
    line-height: 27px;
    color: #000000;
`;