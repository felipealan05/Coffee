import styled from "styled-components";

export const IntroContainer = styled.div `
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 544px;
    background-color: ${(props) => props.theme.background};

    & img
    {
        width: 476px;
        height: 360px;
        margin-top: 92px;
        margin-right: 100px;

    }
`
export const IntroTextContainer = styled.div`
    width: 54rem;
    height: 192px;
    align-items: center;
    padding-top: 94px;
    gap: 16px;
    padding-left: 160px;

    & h2{
        color: ${(props) => props.theme['base-title']};
        font-size: 48px;
        font-weight: 800;
        font-family: Baloo 2;
        line-height: 62.4px;
    }

    & p 
    {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 20px;
        font-weight: 400;
        font-family: Roboto;
        padding-top: 18px;
    }
` 
