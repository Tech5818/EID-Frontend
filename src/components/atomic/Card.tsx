import styled from "styled-components";
import Typograhpy from "./Typograhpy";

interface CardProps {
  title?: string;
  icon?: string;
  description?: string;
}

export const Card = ({ title, icon, description }: CardProps) => {
  return (
    <>
      <Container>
        <Typograhpy.Label color="text">{title}</Typograhpy.Label>
        <img src={icon} alt="" />
        {description && (
          <Typograhpy.Body color="text">{description}</Typograhpy.Body>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  background: ${({ theme }) => theme.color.background_white};
  box-shadow: 4px 4px 20px -5px rgba(0, 0, 0, 0.25);
  width: 250px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
`;
