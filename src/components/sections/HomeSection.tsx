import { Section } from "../atomic/Section";
import { HStack, VStack } from "../atomic/Stack";
import Typograhpy from "../atomic/Typograhpy";
import logoPicture from "@assets/logo.png";
import rocketPicture from "@assets/rocket.svg";

export const HomeSection = () => {
  return (
    <>
      <Section>
        <HStack $align="center">
          <HStack $align="flex-end" $spacing={10}>
            <VStack>
              <HStack>
                <Typograhpy.Title color="blue">
                  서울디지텍 고등학교&nbsp;
                </Typograhpy.Title>
                <Typograhpy.Title color="text">학생들을 위해</Typograhpy.Title>
              </HStack>
              <HStack>
                <Typograhpy.Title color="text">
                  필요한 물품을 로켓배송보다 빠르게
                </Typograhpy.Title>
              </HStack>
            </VStack>
            <img src={logoPicture} alt="" />
          </HStack>
          <img src={rocketPicture} alt="" />
        </HStack>
      </Section>
    </>
  );
};
