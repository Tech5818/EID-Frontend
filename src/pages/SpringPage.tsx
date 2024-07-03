import styled from "styled-components";
import { SeasonContent } from "../components/SeasonContent";
import springIcon1 from "@assets/spring1.png";
import springIcon2 from "@assets/spring2.png";
import { SeasonContainer } from "@/components/season/SeasonContainer";
import {} from "@components/season/SeasonCards";

export const SpringPage = () => {
  return (
    <>
      <SeasonContainer>
        <SeasonContent highlight="따뜻한 봄 EID" color="pink" />
        <Icon1 src={springIcon1} />
        <Icon2 src={springIcon2} />
      </SeasonContainer>
    </>
  );
};

const Icon1 = styled.img`
  position: absolute;
  left: 0;
  top: 150px;
`;

const Icon2 = styled.img`
  position: absolute;
  right: 0;
  bottom: 100px;
`;
