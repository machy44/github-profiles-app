import React from 'react';
import { Button as SButton, ButtonProps as SButtonProps } from 'semantic-ui-react';

export const PrimaryButton: React.FC<SButtonProps> = (props) => <SButton {...props} color="blue" inverted />;

export const SecondaryButton: React.FC<SButtonProps> = (props) => <SButton {...props} color="blue" inverted />;
