import { ButtonContainer } from "./Button";
import React from 'react';

interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return (
    <div>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}
