import { Skeleton } from "@heroui/react";
import language_cpp from "@shikijs/langs/cpp";
import language_csharp from "@shikijs/langs/csharp";
import language_golang from "@shikijs/langs/go";
import language_java from "@shikijs/langs/java";
import language_php from "@shikijs/langs/php";
import language_python from "@shikijs/langs/python";
import language_ruby from "@shikijs/langs/ruby";
import language_rust from "@shikijs/langs/rust";
import language_shell from "@shikijs/langs/shellscript";
import language_typescript from "@shikijs/langs/typescript";
import theme_dark from "@shikijs/themes/tokyo-night";
import { Suspense, use, useMemo } from "react";
import ShikiHighlighter, {
  createHighlighterCore,
  createJavaScriptRegexEngine,
} from "react-shiki/core";
import { useTheme } from "@/components/shared/theme-provider";
import type { CodeLanguage, UiTheme } from "@/constants";

const highlighterPromise = createHighlighterCore({
  themes: [theme_dark],
  langs: [
    language_python,
    language_typescript,
    language_java,
    language_cpp,
    language_csharp,
    language_golang,
    language_rust,
    language_shell,
    language_php,
    language_ruby,
  ],
  engine: createJavaScriptRegexEngine(),
});

export interface HighlighterProps {
  code: string;
  language: CodeLanguage;
  className?: string;
  theme?: UiTheme;
}

function CodeHighlighterAsync({ code, language, className }: HighlighterProps) {
  const highlighter = use(highlighterPromise);

  return (
    <ShikiHighlighter
      highlighter={highlighter}
      language={language}
      theme={theme_dark}
      className={className}
    >
      {code}
    </ShikiHighlighter>
  );
}

export function CodeHighlighter(props: HighlighterProps) {
  return (
    <Suspense
      fallback={
        <div className={props.className}>
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-1/2" />
        </div>
      }
    >
      <CodeHighlighterAsync {...props} />
    </Suspense>
  );
}
