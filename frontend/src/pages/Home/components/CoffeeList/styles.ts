import styled from "styled-components";

export const CoffeeListDiv = styled.div `
    background-color: ${(props) => props.theme.background};
    width: 100%;
    height: 1645px;
`

export const CoffeeListTextContainer = styled.div`
    width: px;
    height: 42px;
    padding-top: 32px;
    padding-left: 260px;

    & h2{
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 32px;
        font-weight: 800;
        font-family: Baloo 2;
        line-height: 41.6px;
    }
` 