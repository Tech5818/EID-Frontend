import { SeasonContent } from "@/components/SeasonContent";
import { SeasonContainer } from "@/components/season/SeasonContainer";
import styled from "styled-components";
import winterIcon1 from "@assets/winter1.png";
import winterIcon2 from "@assets/winter2.png";

export const WinterPage = () => {
  return (
    <>
      <SeasonContainer>
        <SeasonContent highlight="너무 추운 겨울 EID" color="snow" />
        <Icon1 src={winterIcon1} />
        <Icon2 src={winterIcon2} />
      </SeasonContainer>
    </>
  );
};

const Icon1 = styled.img`
  position: absolute;
  left: 30px;
  bottom: 10px;
`;

const Icon2 = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;
