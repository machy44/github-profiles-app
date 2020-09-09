// emotion-styled doesnt have type declaration file and that is why I ignored it
//@ts-ignore
import styled, { CreateStyled } from '@emotion/styled';

type Theme = {
  colors: {
    primary: string;
    background: string;
  };
};

export const theme: Theme = {
  colors: {
    primary: 'red',
    background: 'black',
  },
};

export default styled as CreateStyled<Theme>;
