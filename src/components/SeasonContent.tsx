import styled from "styled-components";
import Typograhpy from "./atomic/Typograhpy";
import { HStack, VStack } from "./atomic/Stack";
import { ColorKeys } from "@/types/ColorTypes";
import { SeasonCards } from "./season/SeasonCards";

interface SeasonContentProps {
  highlight: string;
  color: ColorKeys;
}

export const SeasonContent = ({ highlight, color }: SeasonContentProps) => {
  return (
    <>
      <Container>
        <VStack $spacing={25} $align="center">
          <HStack>
            <Typograhpy.SubTitle color={color}>
              {highlight}&nbsp;
            </Typograhpy.SubTitle>
            <Typograhpy.SubTitle color="text">
              에서 필요한 물품을 대여/구매 해보세요!
            </Typograhpy.SubTitle>
          </HStack>
          <Typograhpy.Caption color="text_grey">
            시즌별 한정 물품들을 확인하세요!!
          </Typograhpy.Caption>
          <SeasonCards />
        </VStack>
      </Container>
    </>
  );
};

const Container = styled.div``;
