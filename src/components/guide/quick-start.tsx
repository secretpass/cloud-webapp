"use client";

import {
  Card,
  CardContent,
  CardHeader,
  ToggleButton,
  ToggleButtonGroup,
} from "@heroui/react";
import { IconBrandDocker, IconTerminal } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { CodeHighlighter } from "@/components/shared";
import { CodeLanguage, CodeLanguageIcon } from "@/constants";

interface AccessSample {
  language: CodeLanguage;
  code: string[];
  command: string;
}

const DOCKER_COMMAND =
  "spass run --env staging --docker image -- other docker args";

const ACCESS_SAMPLES: AccessSample[] = [
  {
    language: CodeLanguage.Typescript,
    code: [
      "export function getSecret(name: string, default_value?: string): string | undefined {",
      "    // Secrets are automatically injected into your environment variables",
      "    return process.env[name] ?? default_value",
      "}",
    ],
    command: "spass run --env staging -- npm run start",
  },
  {
    language: CodeLanguage.Python,
    code: [
      "import os\n",
      "def get_secret(env_name: str, default: str) -> str:",
      "    # Secrets are automatically injected into your environment variables",
      "    return os.getenv('SECRET_NAME', 'default value')",
    ],
    command: "spass run --env staging -- python main.py",
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
    command: "spass run --env staging -- go run .",
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
    command: "spass run --env staging -- cargo run",
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
    command: "spass run --env staging -- g++ main.cpp -o main && ./main",
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
    command: "spass run --env staging -- java main.java",
  },
];

export function QuickStartDemo() {
  const [language, setLanguage] = useState<CodeLanguage>(
    CodeLanguage.Typescript,
  );
  const [run_mode, setRunMode] = useState<"terminal" | "docker">("terminal");
  const sample = useMemo(
    () =>
      ACCESS_SAMPLES.find((sample) => sample.language === language) ??
      ACCESS_SAMPLES[0],
    [language],
  );

  return (
    <Card className="flex flex-col gap-8 w-full" variant="default">
      <CardHeader>
        <Card.Title className="my-3 italic text-center font-light text-muted text-lg sm:text-lg md:text-xl lg:text-2xl">
          It just works. Everywhere!
        </Card.Title>
        <div className="w-full flex justify-between mb-2 items-end flex-wrap">
          <div className="font-bold italic text-base">
            One command to decrypt secrets and run your application.
          </div>
          <ToggleButtonGroup
            selectionMode="single"
            size="sm"
            selectedKeys={[run_mode]}
            onSelectionChange={(keys) =>
              setRunMode(keys.values().next().value as "terminal" | "docker")
            }
          >
            <ToggleButton
              variant="ghost"
              className="rounded-full"
              id="terminal"
            >
              <IconTerminal className="h-5 w-auto" />
              OS Command
            </ToggleButton>
            <ToggleButton variant="ghost" className="rounded-full" id="docker">
              <IconBrandDocker className="h-5 w-auto" />
              Docker Image
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <CodeHighlighter
          code={run_mode === "docker" ? DOCKER_COMMAND : sample.command}
          language={CodeLanguage.Shell}
        />
      </CardHeader>
      <CardContent>
        <div className="w-full flex justify-between mb-2 items-end flex-wrap">
          <div className="italic font-bold text-base">
            Simply read secrets from environment variables, no learning curve
            here.
          </div>
          <ToggleButtonGroup
            selectionMode="single"
            size="sm"
            selectedKeys={[language]}
            onSelectionChange={(keys) =>
              setLanguage(keys.values().next().value as CodeLanguage)
            }
            className="overflow-x-scroll"
          >
            {ACCESS_SAMPLES.map((sample) => {
              const LanguageIcon = CodeLanguageIcon[sample.language];
              return (
                <ToggleButton
                  variant="ghost"
                  className="rounded-full"
                  key={sample.language}
                  id={sample.language}
                >
                  <LanguageIcon className="size-5" />
                  {sample.language}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </div>

        <CodeHighlighter
          code={sample.code.join("\n")}
          language={sample.language}
        />
      </CardContent>
    </Card>
  );
}
