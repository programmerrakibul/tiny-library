import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import NotFoundComponent from "@/components/ui/not-found";

const NotFound = () => {
  return (
    <Section>
      <Container>
        <NotFoundComponent
          title="Page Not Found"
          description="Sorry, the page you are looking for doesn't exist or has been moved to another shelf."
          actionText="Back to Home"
          actionHref="/"
        />
      </Container>
    </Section>
  );
};

export default NotFound;
