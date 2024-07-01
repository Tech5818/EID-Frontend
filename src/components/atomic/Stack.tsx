import styled from "styled-components";

interface StackProps {
  $justify?:
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "flex-end";
  $align?: "center" | "flex-end";
  $spacing?: number;
}

const Stack = styled.div<StackProps>`
  display: flex;
  justify-content: ${({ $justify }) => ($justify ? $justify : "flex-start")};
  align-items: ${({ $align }) => ($align ? $align : "flext-start")};
  gap: ${({ $spacing }) => $spacing}px;
`;

export const HStack = styled(Stack)`
  flex-direction: row;
`;

export const VStack = styled(Stack)`
  flex-direction: column;
`;
