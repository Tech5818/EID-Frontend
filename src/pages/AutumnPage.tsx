import { SeasonContent } from "@/components/SeasonContent";
import { SeasonContainer } from "@/components/season/SeasonContainer";
import styled from "styled-components";
import autumnIcon1 from "@assets/autumn1.png";
import autumnIcon2 from "@assets/autumn2.png";

export const AutumnPage = () => {
  return (
    <>
      <SeasonContainer>
        <SeasonContent highlight="쌀쌀한 가을 EID" color="brown" />
        <Icon1 src={autumnIcon1} />
        <Icon2 src={autumnIcon2} />
      </SeasonContainer>
    </>
  );
};

const Icon1 = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Icon2 = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;
