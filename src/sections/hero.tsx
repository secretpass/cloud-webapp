"use client";
import { Button, Chip, Description, Label, Popover } from "@heroui/react";
import {
  IconArrowRight,
  IconBook2,
  IconBrandGithub,
} from "@tabler/icons-react";
import Link from "next/link";
import { useAnalytics } from "@/analytics";
import { QuickStartDemo } from "@/components/guide/quick-start";

export function HeroSection() {
  const analytics = useAnalytics();

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
        <Description className="mt-6 max-w-3xl text-sm text-muted font-semibold tracking-tight">
          😉 We'll keep your gibberish!
        </Description>

        <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Encrypt and decrypt{" "}
          <strong className="font-semibold">your secrets</strong> with{" "}
          <strong className="font-semibold">your passkey</strong> on{" "}
          <strong className="font-semibold">your device</strong>, store
          encrypted secrets in your codebase or on a our hosted service.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Popover>
            <Button
              size="lg"
              onClick={() =>
                analytics?.capture("pre-launch-click-start-on-cloud")
              }
            >
              Start on cloud
              <IconArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Popover.Content className="px-4 py-6 max-w-sm flex flex-col">
              <Label>Work in progress</Label>
              <Description>
                Meanwhile, please check our local offering below. Check our
                community channels for help and updates.
              </Description>
            </Popover.Content>
          </Popover>

          <Popover>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                analytics?.capture("pre-launch-click-read-the-docs")
              }
            >
              <IconBook2 className="mr-2 h-4 w-4" />
              Read the docs
            </Button>
            <Popover.Content className="px-4 py-6 max-w-sm flex flex-col">
              <Label>Work in progress</Label>
              <Description>
                Please check how to get started below. In case you get stuck or
                have any questions, use the chat button here or on the app. Also
                check our community channels for updates and support from fellow
                users.
              </Description>
            </Popover.Content>
          </Popover>
        </div>
        <p className="my-6 font-mono text-xs text-muted [animation-delay:400ms]">
          Multi-User · No Secret Zero · Local Storage
        </p>

        <h1 className="mt-8 max-w-3xl text-2xl font-light tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          Get started locally
        </h1>
        <Description className="mt-1 text-base">✊ Always free!</Description>
        <div className="text-left w-full my-6">
          <QuickStartDemo />
        </div>
      </div>
    </section>
  );
}
