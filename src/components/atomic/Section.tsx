import { ReactNode } from "react";
import styled from "styled-components";

interface SectionProps {
  children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1s ease;
  background: ${({ theme }) => theme.color.background};
  padding: 100px 0 0 0;
`;
