import React from "react";
import styled from "styled-components";

interface PageNavigationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  numPages: number;
}

const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  setCurrentPage,
  numPages,
}) => {
  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Nav>
      {Array.from({ length: numPages }, (_, index) => (
        <NavItem
          key={index}
          onClick={() => handleClick(index)}
          $active={index === currentPage}
        ></NavItem>
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 50%;
  right: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 1000;
`;

const NavItem = styled.div<{ $active?: boolean }>`
  cursor: pointer;
  padding: 10px;
  background-color: ${({ $active, theme }) =>
    $active ? theme.color.blue : theme.color.grey};
  border-radius: 50%;
  text-align: center;
  width: 20px;
  height: 20px;
`;

export default PageNavigation;
