import {
  IconBook,
  IconBook2,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandMedium,
  IconBrandReddit,
  IconBrandSlack,
  type TablerIcon,
} from "@tabler/icons-react";

export interface LinkItemProps {
  label: string;
  Icon: TablerIcon;
  href: string;
  capture: string;
}

export const COMMUNITY_LINKS: LinkItemProps[] = [
  {
    label: "Slack",
    Icon: IconBrandSlack,
    href: "/l/s/slack",
    capture: "social-interest-slack",
  },
  {
    label: "Github",
    Icon: IconBrandGithub,
    href: "/l/s/github",
    capture: "social-interest-github",
  },
  {
    label: "Reddit",
    Icon: IconBrandReddit,
    href: "/l/s/reddit",
    capture: "social-interest-reddit",
  },
  {
    label: "Discord",
    Icon: IconBrandDiscord,
    href: "/l/s/discord",
    capture: "social-interest-discord",
  },
];

export const RESOURCES_LINKS: LinkItemProps[] = [
  {
    label: "Docs",
    Icon: IconBook2,
    href: "/l/docs",
    capture: "resource-interest-docs",
  },
  {
    label: "Blog",
    Icon: IconBrandMedium,
    href: "/l/blog",
    capture: "resource-interest-blog",
  },
  {
    label: "Knowledge Base",
    Icon: IconBook,
    href: "/l/kb",
    capture: "resource-interest-kb",
  },
];
