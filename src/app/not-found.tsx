import Container from "@/components/shared/container";
import Section from "@/components/shared/section";

const NotFound = () => {
  return (
    <Section>
      <Container>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Try going back to the home page.</p>
        <p>~ Tiny Library</p>
      </Container>
    </Section>
  );
};

export default NotFound;
