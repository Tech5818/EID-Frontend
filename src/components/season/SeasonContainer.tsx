import { ReactNode } from "react";
import styled from "styled-components";

interface SeasonContainerProps {
  children: ReactNode;
}

export const SeasonContainer = ({ children }: SeasonContainerProps) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.background};
  padding: 100px 0 0 0;
`;
