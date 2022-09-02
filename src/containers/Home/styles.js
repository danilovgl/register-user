import styled from "styled-components"
import Backgroud from "../../Assents/bg-1.svg"


export const Container = styled.div `
display: flex;
align-items: center;
flex-direction: column;
gap: 40px;
background:url("${Backgroud}");
background-size: cover;
`
export const Image = styled.img `
    margin-top: 30px;
`

export const InputLabel = styled.p `
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 25px;
`
export const Input = styled.input `
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    padding-left:25px;
    color: #FFFFFF;
    margin-bottom: 34px;
    outline: none;
    
`
