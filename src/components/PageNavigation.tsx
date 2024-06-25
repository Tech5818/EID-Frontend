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
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
`;

const NavItem = styled.div<{ $active?: boolean }>`
  cursor: pointer;
  padding: 10px;
  background-color: ${({ $active }) => ($active ? "#333" : "#ccc")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  border-radius: 50%;
  text-align: center;
  width: 30px;
  height: 30px;
`;

export default PageNavigation;
