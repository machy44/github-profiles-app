import React from 'react';
import { InputProps as SInputProps, Input as SInput } from 'semantic-ui-react';

// disable to send focus and placeholder as prop
type SearchInputProps = Omit<SInputProps, 'focus' | 'placeholder'>;

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  return <SInput {...props} focus placeholder="Search..."></SInput>;
};

export const Input = SInput;
