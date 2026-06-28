"use client";

import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./container";

type NavLinkProps = {
  href: string;
  label: string;
};

const links: NavLinkProps[] = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "About", href: "/about" },
];

const NavLink = ({ label, href }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary relative py-1",
        isActive ? "text-primary font-semibold" : "text-muted-foreground",
      )}
    >
      {label}

      {isActive && (
        <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary" />
      )}
    </Link>
  );
};

const Navbar = () => {
  const isScrolled = useScrollThreshold();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/20 backdrop-blur-xs supports-backdrop-filter:bg-background/20 shadow-sm border-border"
          : "bg-transparent border-transparent",
      )}
    >
      <Container className="py-1.5">
        <nav className="flex items-center justify-between">
          <div className="flex items-center size-16 md:size-20">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Tiny Library Logo"
                width={178}
                height={117}
                className="object-cover w-full h-full"
              />
            </Link>
          </div>

          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
