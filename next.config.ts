import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    swcPlugins: [
      [
        "@intlayer/swc",
        {
          // "static" | "dynamic" | "fetch"
          importMode: "static",
          replaceDictionaryEntry: false,
          filesList: [],
          // per-key overrides, e.g. { "heavy-dict": "dynamic" }
          dictionaryModeMap: {},
        },
      ],
    ],
  },
  output: "standalone",
};

export default withIntlayer(nextConfig);
