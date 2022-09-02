import styled from "styled-components"


export const Button = styled.button `
    background:${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'  };
    border-radius: 14px;
    border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
    width: 342px;
    height: 74px;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #FFFFFF;
    line-height: 28px;
    text-align: center;
    margin-top: 132px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-decoration: none;
    cursor: pointer;


    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
    img {
        transform: ${props => props.isBack && 'rotateY(180deg)'};
    }
`