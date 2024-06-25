import { ReactNode } from "react";
import styled from "styled-components";

interface TypograhpyProps {
  chidren: ReactNode;
  color: "text" | "text_grey" | "text_white";
}

const Base = styled.p<TypograhpyProps>`
  color: ${({ color, theme }) => theme.color[color]};
`;

const Label = styled(Base)`
  font-weight: 600;
  font-size: 2px;
`;

const Title = styled(Base)`
  font-weight: 700;
  font-size: 45px;
`;

const SubTitle = styled(Base)`
  font-weight: 700;
  font-size: 38px;
`;

const Caption = styled(Base)`
  font-weight: 600;
  font-size: 18px;
`;

const Body = styled(Base)`
  font-weight: 500;
  font-size: 15px;
`;

const Typograhpy = {
  Label,
  Title,
  SubTitle,
  Caption,
  Body,
};

export default Typograhpy;
