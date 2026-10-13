"use client";

import {
  Button,
  Description,
  Dropdown,
  IconChevronDown,
  Label,
  Popover,
} from "@heroui/react";
import {
  IconCloudFilled,
  IconExternalLink,
  IconMenu,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { type ReactNode, useState } from "react";
import { useAnalytics } from "@/analytics";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { COMMUNITY_LINKS, type LinkItemProps } from "@/constants/links";
import { Logo } from "../brand";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <header className="container mx-auto">
        <div className="flex grow h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="size-7" />
            <span className="text-2xl font-bold">Secretpass</span>
            <span className="text-2xl font-bold text-muted">Cloud</span>
            <IconCloudFilled className="size-7 text-muted" />
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Link href="#features">
              <Button variant="ghost">Features</Button>
            </Link>
            <LinkDropDown items={COMMUNITY_LINKS} label="Community" />
            <Link href="#faq">
              <Button variant="ghost">FAQ</Button>
            </Link>
            <DocsLink capture="pre-launch-nav-docs-click" />
            <div className="flex items-center gap-4 border-l pl-4">
              <ThemeToggle />
              <SignInButton capture="pre-launch-nav-login-click" />
            </div>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button type="button" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <IconX className="h-6 w-6" />
              ) : (
                <IconMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t px-4 bg-background">
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#features" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" onClick={() => setIsOpen(false)}>
                  Features
                </Button>
              </Link>
              <LinkDropDown
                items={COMMUNITY_LINKS}
                onClick={() => setIsOpen(false)}
                label="Community"
              />
              <Link href="#faq" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" onClick={() => setIsOpen(false)}>
                  FAQ
                </Button>
              </Link>
              <DocsLink
                capture="pre-launch-nav-docs-mobile-click"
                onClick={() => setIsOpen(false)}
              />
              <div className="border-t pt-4">
                <SignInButton capture="pre-launch-nav-login-mobile-click" />
              </div>
            </div>
          </div>
        )}
      </header>
    </nav>
  );
}

function SignInButton({ capture }: { capture: string }) {
  const analytics = useAnalytics();
  return (
    <Popover>
      <Button
        className="w-full md:w-auto"
        onClick={() => analytics?.capture(capture)}
      >
        Sign In
      </Button>
      <Popover.Content className="px-4 py-6 max-w-sm flex flex-col items-start">
        <Label>Work in progress</Label>
        <Description>
          Meanwhile, please check our local offering below. Check our community
          channels for help and updates.
        </Description>
      </Popover.Content>
    </Popover>
  );
}

function DocsLink({
  capture,
  onClick,
}: {
  capture: string;
  onClick?: () => void;
}) {
  const analytics = useAnalytics();
  return (
    <Popover>
      <Button
        size="lg"
        variant="ghost"
        onClick={() => {
          analytics?.capture(capture);
          onClick?.();
        }}
      >
        Docs
      </Button>
      <Popover.Content className="px-4 py-6 max-w-sm flex flex-col">
        <Label>Work in progress</Label>
        <Description>
          Please check how to get started below. In case you get stuck or have
          any questions, use the chat button here or on the app. Also check our
          community channels for updates and support from fellow users.
        </Description>
      </Popover.Content>
    </Popover>
  );
}

function LinkDropDown({
  items,
  label,
  onClick,
}: {
  items: LinkItemProps[];
  label: ReactNode;
  onClick?: () => void;
}) {
  const analytics = useAnalytics();
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <div className="button button--md button--ghost w-full md:w-auto justify-start">
          {label}
          <IconChevronDown />
        </div>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <Dropdown.Menu>
          {items.map((item) => (
            <Dropdown.Item
              onClick={() => {
                onClick?.();
                if (item.capture) {
                  analytics?.capture(item.capture);
                }
              }}
              className="flex items-center gap-2"
              key={item.href}
              href={item.href}
              target="_blank"
            >
              <item.Icon className="size-5" />
              <span className="grow">{item.label}</span>
              <IconExternalLink className="size-4" />
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
