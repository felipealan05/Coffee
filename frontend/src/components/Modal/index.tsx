import React from "react"
import { ModalContainer, ModalContent, XStyled } from "./styles"

interface ModalProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean
  children: React.ReactNode
}

export function Modal({ setIsOpen, isOpen, children }: ModalProps) {
  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalContent>
            <XStyled onClick={() => setIsOpen(!isOpen)} />
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  )
}
