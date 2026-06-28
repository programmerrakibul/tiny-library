import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <Section className="min-h-[calc(100vh-4rem)] flex items-center pt-24 md:pt-32 pb-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
        {/* Left Image Column with Skeleton Loader */}
        <div className="w-full md:w-1/2 max-w-125 lg:max-w-137.5 aspect-square relative rounded-xs overflow-hidden bg-muted">
          <Image
            src={"/about.png"}
            alt="Tiny Library About Page Image"
            width={600}
            height={600}
            priority
            className={cn(
              "object-cover w-full h-full duration-700 ease-in-out rounded-xs transition-all",
            )}
          />
        </div>

        {/* Right Content Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-8 md:min-h-87.5">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
              About Tiny Library
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              Small shelf, big impact
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
              Tiny Library started as a simple idea: make it easier for curious
              readers to actually find books they’ll love, not just scroll
              endless lists. Every title here is chosen with care, not
              algorithms.
            </p>
          </div>

          <div className="mt-auto flex items-center md:justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutPage;
