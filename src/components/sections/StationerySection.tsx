import { Card } from "../atomic/Card";
import { Section } from "../atomic/Section";
import { HStack, VStack } from "../atomic/Stack";
import Typograhpy from "../atomic/Typograhpy";
import SpringPicture from "@assets/spring.png";
import SummerPicture from "@assets/summer.png";
import AutumnPicture from "@assets/autumn.png";
import WinterPicture from "@assets/winter.png";

export const StationerySection = () => {
  return (
    <>
      <Section>
        <VStack $spacing={25} $align="center">
          <HStack>
            <Typograhpy.SubTitle color="blue">EID&nbsp;</Typograhpy.SubTitle>
            <Typograhpy.SubTitle color="text">
              에서 이번 시즌 물품을 합리적인 가격에 대여/구매 해보세요!
            </Typograhpy.SubTitle>
          </HStack>
          <Typograhpy.Caption color="text_grey">
            시즌별 한정 물품들을 확인하세요!!
          </Typograhpy.Caption>
          <HStack $spacing={50}>
            <Card title="봄" icon={SpringPicture} description="기간: 3월~5월" />
            <Card
              title="여름"
              icon={SummerPicture}
              description="기간: 6월~8월"
            />
            <Card
              title="가을"
              icon={AutumnPicture}
              description="기간: 9월~11월"
            />
            <Card
              title="겨울"
              icon={WinterPicture}
              description="기간: 12월~2월"
            />
          </HStack>
        </VStack>
      </Section>
    </>
  );
};
