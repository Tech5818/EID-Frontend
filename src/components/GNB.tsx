import styled from "styled-components";
import Typograhpy from "./atomic/Typograhpy";

export const GNB = () => {
  return (
    <>
      <Container>
        <Menu>
          <Typograhpy.Label color="text">홈페이지</Typograhpy.Label>
        </Menu>
        <Menu>
          <Typograhpy.Label color="text">학용품 목록</Typograhpy.Label>
        </Menu>
        <Menu>
          <Typograhpy.Label color="text">배송 서비스</Typograhpy.Label>
        </Menu>
        <Menu>
          <Typograhpy.Label color="text">고객지원</Typograhpy.Label>
        </Menu>
      </Container>
    </>
  );
};

const Container = styled.ul`
  display: flex;
  gap: 50px;
`;

const Menu = styled.li`
  cursor: pointer;
  position: relative;

  &:hover::before {
    transform: scale(1);
  }
  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 100px;
    background: ${({ theme }) => theme.color.blue};
    transform: scale(0);
    transition: all.2s;
  }
`;
