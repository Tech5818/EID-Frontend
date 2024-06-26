import { Section } from "../atomic/Section";
import { HStack } from "../atomic/Stack";
import Typograhpy from "../atomic/Typograhpy";

export const HomeSection = () => {
  return (
    <>
      <Section>
        <HStack>
          <Typograhpy.Title color="blue">
            서울디지텍 고등학교&nbsp;
          </Typograhpy.Title>
          <Typograhpy.Title color="text">학생들을 위해</Typograhpy.Title>
        </HStack>
      </Section>
    </>
  );
};
