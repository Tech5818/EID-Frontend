import papaerCup from "@assets/paper_cup.png";
import charger from "@assets/charger.png";
import face_mask from "@assets/face_mask.png";
import blanket from "@assets/blanket.png";
import styled from "styled-components";
import { HStack } from "../atomic/Stack";
import { Card } from "../atomic/Card";

export const SeasonCards = () => {
  return (
    <>
      <Container>
        <HStack $spacing={50}>
          <Card title="종이컵" icon={papaerCup} />
          <Card title="충전기" icon={charger} />
          <Card title="마스크" icon={face_mask} />
          <Card title="담요" icon={blanket} />
        </HStack>
      </Container>
    </>
  );
};

const Container = styled.div``;
