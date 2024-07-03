import { SeasonContent } from "@/components/SeasonContent";
import { SeasonContainer } from "@/components/season/SeasonContainer";
import styled from "styled-components";

export const SummerPage = () => {
  return (
    <>
      <SeasonContainer>
        <SeasonContent highlight="시원한 여름 EID" color="blue" cards={[]} />
      </SeasonContainer>
    </>
  );
};
