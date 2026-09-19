import { Button, Chip } from "@heroui/react";
import {
  IconArrowRight,
  IconBook2,
  IconBrandGithub,
} from "@tabler/icons-react";
import Link from "next/link";
import { QuickStartDemo } from "@/components/guide/quick-start";

export function HeroSection() {
  return (
    <section id="hero">
      <div className="container mx-auto relative flex flex-col items-center pt-24 pb-12 text-center md:pt-32 md:pb-16">
        <Link
          href="https://github.com/secretpass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Chip color="success">
            <IconBrandGithub className="size-3.5 text-primary" />
            <Chip.Label className="font-semibold">
              Transparent Source Code; Business Source License 1.1
            </Chip.Label>
          </Chip>
        </Link>
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Keep your Secrets!
        </h1>
        <p className="mt-6 max-w-3xl text-xs text-muted font-semibold tracking-tight">
          🤔 you need more than that?
        </p>

        <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Encrypt and decrypt{" "}
          <strong className="font-semibold">your secrets</strong> with{" "}
          <strong className="font-semibold">your passkey</strong> on{" "}
          <strong className="font-semibold">your device</strong>, store
          encrypted secrets in your codebase or on a our hosted service.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/app">
            <Button size="lg">
              Start on cloud
              <IconArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/docs">
            <Button size="lg" variant="outline">
              <IconBook2 className="mr-2 h-4 w-4" />
              Read the docs
            </Button>
          </Link>
        </div>
        <p className="my-6 font-mono text-xs text-muted [animation-delay:400ms]">
          Multi-User · No Secret Zero · Local Storage
        </p>

        <div className="text-left w-full my-6">
          <QuickStartDemo />
        </div>
      </div>
    </section>
  );
}
