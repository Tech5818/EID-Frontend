import { SeasonContent } from "@/components/SeasonContent";
import { SeasonContainer } from "@/components/season/SeasonContainer";
import styled from "styled-components";
import summerIcon1 from "@assets/summer1.png";
import summerIcon2 from "@assets/summer2.png";

export const SummerPage = () => {
  return (
    <>
      <SeasonContainer>
        <SeasonContent highlight="시원한 여름 EID" color="blue" />
        <Icon1 src={summerIcon1} />
        <Icon2 src={summerIcon2} />
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
  top: 160px;
  right: 100px;
`;
