import styled from "styled-components";
import logoPicture from "@assets/logo.png";
import { GNB } from "./GNB";
import { Button } from "./atomic/Button";

export const Header = () => {
  return (
    <>
      <Container>
        <img src={logoPicture} alt="" />
        <GNB />
        <Button color="text_white" background="blue">
          학용품 기부하러가기
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.color.background_white};
  padding: 0 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.color.stroke};
`;
