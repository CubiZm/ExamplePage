import styled from "styled-components";

export const HeaderLayout = styled.header`
    min-height: 45px;
    margin-bottom: 17px;
`;

export const BasedWrap = styled.div`
    display: flex;
`;

export const MainMenuWrap = styled.div`
    // display: flex;
`;

export const UtilityWrap = styled.nav`
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
`;

export const UtilityItem = styled.li`
    list-style: none;
    margin-right: 9px;
    margin-top: 12px;

    a {
        padding: 5px;
        font-size: 16px;
        line-height: 19px;
        color: #4859F0;
        text-decoration: none;

        &:hover, &:focus {
            outline: none;
            color: #1022CA;
            text-decoration: underline;
        }
    }
`;

export const HeaderWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;