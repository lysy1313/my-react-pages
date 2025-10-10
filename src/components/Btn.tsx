import styled, { css } from "styled-components";

type StyledBtnPropsType = {
    fontSize?: string
    color?: string
    primary?: boolean
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType> `
  border:none;
  background-color: ${props => props.color || "#4053cc"};
  width: 86px;
  height: 30px;
  margin: 5px;
  color: #fff;
  font-size: ${props => props.fontSize || "10px"};
  border-radius: 5px;
  font-weight: lighter;
  
  &:hover{
    background-color: #22bee6;
  }

  ${props => props.outlined && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "#4053cc"};
    color: ${props => props.color || "#4053cc"};
    background-color: transparent;
  
    &:hover{
        border-color: #4053cc;
        color: #4053cc;
        background-color: transparent;
    }
  `}

  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#4053cc"};
    color: snow;
    margin-left: 10px;
  `}
`