import {
  type Icon,
  IconBrandCpp,
  IconBrandCSharp,
  IconBrandGolang,
  IconBrandPhp,
  IconBrandPython,
  IconBrandRust,
  IconBrandSwift,
  IconBrandTypescript,
  IconCoffee,
  IconDiamondFilled,
  IconTerminal,
} from "@tabler/icons-react";

export enum CodeLanguage {
  Python = "python",
  Typescript = "typescript",
  Java = "java",
  CPlusPlus = "cpp",
  CSharp = "c#",
  Golang = "go",
  Rust = "rust",
  Shell = "shellscript",
  Php = "php",
  Ruby = "ruby",
}

export const CodeLanguageLabel: Record<CodeLanguage, string> = {
  [CodeLanguage.Python]: "Python",
  [CodeLanguage.Typescript]: "TypeScript",
  [CodeLanguage.Java]: "Java",
  [CodeLanguage.CPlusPlus]: "C++",
  [CodeLanguage.CSharp]: "C#",
  [CodeLanguage.Golang]: "Go",
  [CodeLanguage.Rust]: "Rust",
  [CodeLanguage.Shell]: "Shell",
  [CodeLanguage.Php]: "PHP",
  [CodeLanguage.Ruby]: "Ruby",
};

export const CodeLanguageIcon: Record<CodeLanguage, Icon> = {
  [CodeLanguage.Python]: IconBrandPython,
  [CodeLanguage.Typescript]: IconBrandTypescript,
  [CodeLanguage.Java]: IconCoffee,
  [CodeLanguage.CPlusPlus]: IconBrandCpp,
  [CodeLanguage.Php]: IconBrandPhp,
  [CodeLanguage.Rust]: IconBrandRust,
  [CodeLanguage.CSharp]: IconBrandCSharp,
  [CodeLanguage.Ruby]: IconDiamondFilled,
  [CodeLanguage.Golang]: IconBrandGolang,
  [CodeLanguage.Shell]: IconTerminal,
};
