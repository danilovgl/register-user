import styled from "styled-components"
import Backgroud from "../../Assents/bg-2.svg"

export const Container = styled.div `
display: flex;
align-items: center;
flex-direction: column;
gap: 40px;
background:url("${Backgroud}");
background-size: cover;
height: 100%;
min-height: 100vh;
`
export const Image = styled.img `
    margin-top: 30px;
`

export const Button = styled.button `
    background: transparent;
    border: 1px solid #FFFFFF;
    border-radius: 14px;
    

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
    cursor: pointer;


    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
    img {
        transform: rotateY(180deg);
    }
    
    
`
export const User = styled.li `
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    margin-top: 28px;
    list-style-type: none; 
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    outline: none;
    border: none;
    
    button{
        border: none;
        cursor: pointer;
        background-color: transparent;
        &:active{
            transform: translateY(-1px);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }
        &:hover{
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
    }
    
`