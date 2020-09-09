// emotion-styled doesnt have type declaration file and that is why I ignored it
//@ts-ignore
import styled, { CreateStyled } from '@emotion/styled';

type Theme = {
  color: {
    primary: string;
    background: string;
  };
};

export default styled as CreateStyled<Theme>;
