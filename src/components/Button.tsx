import React from 'react';
import { Button as SButton } from 'semantic-ui-react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => <SButton>{children}</SButton>;

export default Button;
