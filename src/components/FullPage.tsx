/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PageNavigation from "@components/PageNavigation";
import { Section } from "./atomic/Section";
import { HomeSection } from "./sections/HomeSection";
import { StationerySection } from "./sections/StationerySection";
import { DeliverySection } from "./sections/DeliverySection";

export const FullPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY > 15) {
      nextSection();
    } else if (event.deltaY < -15) {
      previousSection();
    }
  };

  const nextSection = () => {
    setCurrentPage((prevPage) =>
      prevPage < sectionsRef.current.length - 1 ? prevPage + 1 : prevPage
    );
  };

  const previousSection = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [window]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 100);
  }, []);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        section.style.transform = `translateY(-${currentPage * 100}vh)`;
      }
    });
  }, [currentPage]);

  return (
    <>
      <Container ref={containerRef}>
        <FullPageItem ref={(el) => (sectionsRef.current[0] = el!)}>
          <HomeSection />
        </FullPageItem>
        <FullPageItem ref={(el) => (sectionsRef.current[1] = el!)}>
          <StationerySection />
        </FullPageItem>
        <FullPageItem ref={(el) => (sectionsRef.current[2] = el!)}>
          <DeliverySection />
        </FullPageItem>
        <FullPageItem ref={(el) => (sectionsRef.current[3] = el!)}>
          <Section>Section 3</Section>
        </FullPageItem>
      </Container>
      <PageNavigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numPages={4}
      />
    </>
  );
};

const Container = styled.div``;

const FullPageItem = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  transition: transform 1s ease;
`;
