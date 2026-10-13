"use client";

import {
  Card,
  CardContent,
  CardHeader,
  Description,
  Label,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
} from "@heroui/react";
import {
  IconBrandDocker,
  IconBrandPowershell,
  IconTerminal,
} from "@tabler/icons-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { CodeHighlighter } from "@/components/shared";
import { CodeLanguage, CodeLanguageIcon } from "@/constants";

interface AccessSample {
  language: CodeLanguage;
  code: string[];
  command: string;
}

const COMMON_INSTRUCTIONS = `# Start secret manager - launches a web UI to manage secrets
spass  # --help if you need it

# HUMANS: Run a command with secrets injected decrypted through your passkey
# You can start multiple commands and processes from the management UI
spass --env staging -- {{COMMAND}}

# CI, CODE, AGENTS e.t.c: Run a command using a generated private key
spass --private-key="key generated from manager" --env staging -- {{COMMAND}}`;

const UNIX_INSTRUCTIONS = `# Official Installer
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/secretpass/core/releases/download/0.1.0-prerelease.1/secretpass-cli-installer.sh | sh

# Or use homebrew tap
brew install secretpass/tap/secretpass-cli

${COMMON_INSTRUCTIONS}`;
const WINDOWS_INSTRUCTIONS = `# Official Installer
powershell -ExecutionPolicy Bypass -c "irm https://github.com/secretpass/core/releases/download/0.1.0-prerelease.1/secretpass-cli-installer.ps1 | iex"

${COMMON_INSTRUCTIONS}`;

const ACCESS_SAMPLES: AccessSample[] = [
  {
    language: CodeLanguage.Typescript,
    code: [
      "export function getSecret(name: string, default_value?: string): string | undefined {",
      "    // Secrets are automatically injected into your environment variables",
      "    return process.env[name] ?? default_value",
      "}",
    ],
    command: "npm run start",
  },
  {
    language: CodeLanguage.Python,
    code: [
      "import os\n",
      "def get_secret(env_name: str, default: str) -> str:",
      "    # Secrets are automatically injected into your environment variables",
      "    return os.getenv('SECRET_NAME', 'default value')",
    ],
    command: "python main.py",
  },
  {
    language: CodeLanguage.Golang,
    code: [
      "package secrets\n",
      `import ("fmt", "os", "strings")\n`,
      `function GetSecret(envName string) string {`,
      "    // Secrets are automatically injected into your environment variables",
      `    return os.Getenv(envName)`,
      `}`,
    ],
    command: "go run .",
  },
  {
    language: CodeLanguage.Rust,
    code: [
      "use std::env;\n",
      "pub fn get_secret(name: &str) -> Option<String> {",
      "    // Secrets are automatically injected into your environment variables",
      "    env::var(name)",
      "}",
    ],
    command: "cargo run",
  },
  {
    language: CodeLanguage.CPlusPlus,
    code: [
      "#include <string>",
      "#include <cstdlib>\n",
      "std::string get_secret(const std::string& name) {",
      "    // Secrets are automatically injected into your environment variables",
      '    return std::getenv(name.c_str()) ? std::string(std::getenv(name.c_str())) : std::string("default value");',
      "}",
    ],
    command: "g++ main.cpp -o main && ./main",
  },
  {
    language: CodeLanguage.Java,
    code: [
      "public class Secrets {",
      "    public static String getString(String name)",
      "        // Secrets are automatically injected into your environment variables",
      "        return System.getenv(name);",
      "    }",
      "}",
    ],
    command: "java main.java",
  },
];

const PLAYBACK_SPEEDS = [1, 1.5, 2, 2.5, 3];

export function QuickStartDemo() {
  const [language, setLanguage] = useState<CodeLanguage>(
    CodeLanguage.Typescript,
  );
  const [playback, setPlayback] = useState<{ play: boolean; speed: number }>({
    play: true,
    speed: 2,
  });
  const [run_mode, setRunMode] = useState<"unix" | "windows">("unix");

  const ref = useRef<HTMLVideoElement | null>(null);
  const sample = useMemo(
    () =>
      ACCESS_SAMPLES.find((sample) => sample.language === language) ??
      ACCESS_SAMPLES[0],
    [language],
  );

  const setup = useMemo(
    () =>
      (run_mode === "unix"
        ? UNIX_INSTRUCTIONS
        : WINDOWS_INSTRUCTIONS
      ).replaceAll("{{COMMAND}}", sample.command),
    [sample, run_mode],
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.playbackRate = playback.speed;
  }, [playback.speed]);

  return (
    <Card
      className="dark text-foreground flex flex-col gap-8 w-full"
      variant="default"
    >
      <CardContent>
        <div className="w-full flex justify-between mb-2 items-end flex-wrap">
          <div>
            <Label className="text-lg">Your code stays simple</Label>
            <br />
            <Description className="text-sm italic">
              If it can read environments, it can work with secretpass
            </Description>
          </div>
          <Tabs
            selectedKey={language}
            onSelectionChange={(key) => setLanguage(key as CodeLanguage)}
            className="overflow-x-scroll"
          >
            <Tabs.ListContainer>
              <Tabs.List>
                {ACCESS_SAMPLES.map((sample) => {
                  const LanguageIcon = CodeLanguageIcon[sample.language];
                  return (
                    <Tabs.Tab
                      className="h-auto py-1 gap-2"
                      key={sample.language}
                      id={sample.language}
                    >
                      <LanguageIcon className="size-5" />
                      {sample.language}
                      <Tabs.Indicator />
                    </Tabs.Tab>
                  );
                })}
              </Tabs.List>
            </Tabs.ListContainer>
          </Tabs>
        </div>

        <CodeHighlighter
          code={sample.code.join("\n")}
          language={sample.language}
        />

        <div className="flex flex-col-reverse xl:flex-row gap-8 xl:gap-4 w-full items-start mt-6">
          <div className="w-full xl:w-1/2">
            <div className="w-full flex justify-between mb-2 items-end flex-wrap">
              <div>
                <Label className="text-lg">Install and run</Label>
                <br />
                <Description className="text-sm italic">
                  Let secretpass do the heavy lifting
                </Description>
              </div>

              <Tabs
                selectedKey={run_mode}
                onSelectionChange={(key) =>
                  setRunMode(key as "unix" | "windows")
                }
              >
                <Tabs.ListContainer>
                  <Tabs.List>
                    <Tabs.Tab
                      id="unix"
                      className="whitespace-nowrap h-auto py-0.5"
                    >
                      <IconTerminal className="h-5 w-auto gap-2" />
                      MacOS & Linux
                      <Tabs.Indicator />
                    </Tabs.Tab>

                    <Tabs.Tab id="windows" className="h-auto py-0.5 gap-2">
                      <IconBrandPowershell className="h-5 w-auto" />
                      Windows
                      <Tabs.Indicator />
                    </Tabs.Tab>
                  </Tabs.List>
                </Tabs.ListContainer>
              </Tabs>
            </div>
            <CodeHighlighter
              className="grow"
              code={setup}
              language={
                run_mode === "unix"
                  ? CodeLanguage.Shell
                  : CodeLanguage.Powershell
              }
            />
          </div>

          <div className="xl:w-1/2">
            <div className="w-full flex justify-between mb-2 items-end flex-wrap">
              <div>
                <Label className="text-lg">See it in action</Label>
                <br />
                <Description className="text-sm italic">
                  Local secret management
                </Description>
              </div>
              <Tabs
                selectedKey={playback.speed}
                onSelectionChange={(speed) =>
                  setPlayback((current) => ({
                    ...current,
                    speed: speed as number,
                  }))
                }
                className="overflow-x-scroll"
              >
                <Tabs.ListContainer>
                  <Tabs.List>
                    {PLAYBACK_SPEEDS.map((speed) => {
                      return (
                        <Tabs.Tab
                          className="h-auto py-0.5"
                          key={speed}
                          id={speed}
                        >
                          {speed}x
                          <Tabs.Indicator />
                        </Tabs.Tab>
                      );
                    })}
                  </Tabs.List>
                </Tabs.ListContainer>
              </Tabs>
            </div>
            <video
              ref={ref}
              className="h-auto w-full rounded-2xl border"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="/local-demo.mp4" type="video/mp4" />
              <source src="/local-demo.webm" type="video/webm" />
              <track src="/local-demo.vtt" kind="descriptions" default />
              Your browser does not support the video tag
            </video>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
