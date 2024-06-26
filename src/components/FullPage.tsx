/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PageNavigation from "@components/PageNavigation";
import { Section } from "./atomic/Section";
import { Header } from "./Header";
import { HomeSection } from "./sections/HomeSection";

export const FullPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY > 10) {
      nextSection();
    } else if (event.deltaY < -10) {
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
      containerRef.current?.children[0].scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }, [containerRef]);

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
        <Header />
        <FullPageItem ref={(el) => (sectionsRef.current[0] = el!)}>
          <HomeSection />
        </FullPageItem>
        <FullPageItem ref={(el) => (sectionsRef.current[1] = el!)}>
          <Section>Section 2</Section>
        </FullPageItem>
        <FullPageItem ref={(el) => (sectionsRef.current[2] = el!)}>
          <Section>Section 3</Section>
        </FullPageItem>
      </Container>
      <PageNavigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numPages={3}
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
