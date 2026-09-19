import {
  IconBotId,
  IconCode,
  IconFingerprint,
  IconHandClick,
  IconLayoutDashboard,
  IconMathXDivideY2,
  IconSteeringWheelFilled,
  IconUsers,
  type TablerIcon,
} from "@tabler/icons-react";

export type FeatureAvailability = "all" | "local" | "cloud";

export interface IFeatureItem {
  Icon: TablerIcon;
  title: string;
  description: string;
  availability: FeatureAvailability;
}

export const feature_items: IFeatureItem[] = [
  {
    Icon: IconSteeringWheelFilled,
    title: "No master secret",
    description:
      "Secretpass doesn't keep any keys that can be used to decrypt your secrets. Each user keeps their private keys, public keys are shared allowing one way encryption between users.",
    availability: "all",
  },
  {
    Icon: IconUsers,
    title: "Secrets for the whole team",
    description:
      "Locally or on cloud, you get a multi-user experience with fine-grained access to projects, environments and secrets. Access can be granted to individual users or teams.",
    availability: "all",
  },
  {
    Icon: IconFingerprint,
    title: "Biometric & Hardware based private keys",
    description:
      "For human users, we use Passkeys and Hardware keys for encryption and decryption purposes. These keys are secured by biometrics and never leave your device for ultimate security.",
    availability: "all",
  },
  {
    Icon: IconCode,
    title: "Securely track from your codebase",
    description:
      "With local storage, you can store encrypted secrets as part of your codebase without compromising security, this option is best for small teams without a lot of secrets.",
    availability: "local",
  },
  {
    Icon: IconMathXDivideY2,
    title: "Multi-environment Support",
    description:
      "Keep dev, staging and production secrets separate through environments with access-control per environment or per individual secrets inside an environment.",
    availability: "all",
  },
  {
    Icon: IconLayoutDashboard,
    title: "Central command for all projects",
    description:
      "When working with multiple projects? Track everything from a centralized dashboard through cloud service while still maintaining full private key control.",
    availability: "cloud",
  },
  {
    Icon: IconBotId,
    title: "Agent and Machine Access",
    description:
      "Your code, AI agents and other systems still need to access secure systems, you can create limited scope private keys that allow access to specific environments and/or secrets",
    availability: "all",
  },
  {
    Icon: IconHandClick,
    title: "Human friendly management interface",
    description:
      "Both through the local and cloud offering, we've tried to keep a friendly and familiar web interface to reduce the cognitive load and mistakes of handling secrets in tty and config files.",
    availability: "all",
  },
];
