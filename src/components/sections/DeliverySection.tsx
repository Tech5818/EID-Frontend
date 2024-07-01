import { Section } from "../atomic/Section";
import { HStack, VStack } from "../atomic/Stack";
import Typograhpy from "../atomic/Typograhpy";
import DeliveryPicture from "@assets/delivery.png";
import BikePicture from "@assets/bike.png";

export const DeliverySection = () => {
  return (
    <>
      <Section>
        <VStack $spacing={20} $align="center">
          <HStack>
            <Typograhpy.Title color="blue">EID&nbsp;</Typograhpy.Title>
            <Typograhpy.Title color="text">학생 배달 기사</Typograhpy.Title>
          </HStack>
          <img src={DeliveryPicture} />
          <HStack $align="center" $spacing={10}>
            <img src={BikePicture} alt="" />
            <Typograhpy.SubTitle color="text">정현우</Typograhpy.SubTitle>
          </HStack>
        </VStack>
      </Section>
    </>
  );
};
