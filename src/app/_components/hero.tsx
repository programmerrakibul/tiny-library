import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full h-full">
        {/* Left Content Column */}
        <div className="flex flex-col justify-between gap-8 w-full md:max-w-2xl md:min-h-100">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
              Browse books
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Find your next <br className="hidden sm:inline" />
              favourite book
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose leading-relaxed">
              Tiny Library is a cosy corner of the web where readers discover
              hand‑picked titles across every genre, from timeless classics to
              hidden indie gems.
            </p>
          </div>

          <div className="mt-auto">
            <Button asChild variant="outline" size="lg">
              <Link href="/books">Browse BOOKS</Link>
            </Button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full max-w-112.5 md:max-w-137.5 lg:max-w-150 aspect-square flex items-center justify-center">
          <Image
            src="/hero.png"
            width={600}
            height={600}
            alt="Tiny Library Hero"
            loading="eager"
            priority
            className="object-contain w-full h-full drop-shadow-xl"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
