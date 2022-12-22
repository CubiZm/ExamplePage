import * as React from "react"
import type { PageProps } from "gatsby"
import styled from "styled-components";


const ButtonTheme = styled.a`
  position: absolute;
  left: 95px;
  top: 80%;

  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: #FFFFFF;

  width: 320px;
  padding: 19px 15px;

  background: #4859F0;
  border-radius: 16px;

  text-align: center;
  text-decoration: none;

  transition: background-color 0.3s linear;

  &:hover, &:focus {
    background: #1022CA;
    transition: background-color 0.3s linear;
  }
`;

export const ButtonPrimary = styled(ButtonTheme)`
  position: relative;
  display: block;
  left: 0;
  top: 0;
`;

export const ButtonChat = styled(ButtonTheme)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 0;
    top: 0;
    
    padding: 11px 24px 13px;
    width: fit-content;
    
    background: #4859F0;
    box-shadow: 0px 4px 11px rgba(33, 33, 33, 0.35);
    border-radius: 25px;

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;
`;


interface ButtonProps {
  withIcon?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <ButtonTheme href="">
        {props.children}
    </ButtonTheme>

  );
};

export default Button