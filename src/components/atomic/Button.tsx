import styled from "styled-components";
import Typograhpy from "./Typograhpy";
import { ReactNode } from "react";
import { ColorKeys } from "@/types/ColorTypes";

interface ButtonProps {
  children: ReactNode;
  color: "text" | "text_white" | "text_grey";
  background: ColorKeys;
}

export const Button = ({ children, color, background }: ButtonProps) => {
  return (
    <>
      <Container $background={background}>
        <Typograhpy.Label color={color}>{children}</Typograhpy.Label>
      </Container>
    </>
  );
};

const Container = styled.div<{
  $background: ColorKeys;
}>`
  border-radius: 100px;
  background: ${({ $background, theme }) => theme.color[$background]};
  padding: 10px 16px;
  cursor: pointer;
  opacity: 0.8;
  transition: all.2s;

  &:hover {
    opacity: 1;
  }
`;
