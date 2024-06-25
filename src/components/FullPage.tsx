/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PageNavigation from "./PageNavigation";

export const FullPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      nextSection();
    } else {
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
    console.log(containerRef.current?.children[0]);

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
        <FullPageItem ref={(el) => (sectionsRef.current[0] = el!)}>
          <Section style={{ backgroundColor: "lightcoral" }}>Section 1</Section>
        </FullPageItem>
        <FullPageItem ref={(el) => (sectionsRef.current[1] = el!)}>
          <Section style={{ backgroundColor: "lightseagreen" }}>
            Section 2
          </Section>
        </FullPageItem>
        <FullPageItem ref={(el) => (sectionsRef.current[2] = el!)}>
          <Section style={{ backgroundColor: "lightblue" }}>Section 3</Section>
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

const Section = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  transition: transform 1s ease;
`;
