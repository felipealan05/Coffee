import styled from 'styled-components';

interface ButtonContainerProps {
  variant: string;
  label: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: ${(props) => props.theme['purple-light']};
    padding: 8px;
    gap: 4px;
    border-radius: 6px;
    text-align: center;
    cursor: pointer;
    width: 143px;
    height: 38px;
    border: none;
    color: black;
`