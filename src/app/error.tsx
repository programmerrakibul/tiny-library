"use client";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";

const Error = () => {
  return (
    <Section>
      <Container>
        <h1>Something went wrong</h1>
        <p>Try refreshing the page</p>
        <p>Or contact support if the problem persists</p>
        <p>Thank you</p>
        <p>~ Tiny Library</p>
      </Container>
    </Section>
  );
};

export default Error;
