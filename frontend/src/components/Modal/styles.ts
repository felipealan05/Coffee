import { X } from 'phosphor-react';
import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  z-index: 900;

  & button {
    background-color: ${(props) => props.theme['background-color']};
  }
`


export const ModalContent = styled.div`
  background-color: ${(props) => props.theme['background-color']};
  padding: 20px;
  border-radius: 5px;
  min-width: 300px;
  max-width: 1200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  
`;

export const XStyled = styled(X)`
  color: ${(props) => props.theme['gray-900']};
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme['red-500']};
  }
`;

export const ModalButton = styled.button `
    border-radius: 1rem;
    background-color: ${(props) => props.theme['purple-main']};
`