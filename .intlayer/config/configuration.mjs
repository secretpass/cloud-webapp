const internationalization = {
  "locales": [
    "en",
    "zh",
    "hi",
    "es",
    "fr",
    "ar",
    "bn",
    "ru",
    "de",
    "pt",
    "ja"
  ],
  "requiredLocales": [
    "en"
  ],
  "strictMode": "inclusive",
  "defaultLocale": "en"
};
const dictionary = {
  "fill": "{{fileName}}.{{locale}}.content.json",
  "contentAutoTransformation": false,
  "location": "local",
  "importMode": "static"
};
const routing = {
  "mode": "prefix-no-default",
  "storage": {
    "cookies": [
      {
        "name": "INTLAYER_LOCALE",
        "attributes": {
          "path": "/"
        }
      }
    ]
  },
  "basePath": ""
};
const content = {
  "fileExtensions": [
    ".content.ts",
    ".content.js",
    ".content.cjs",
    ".content.mjs",
    ".content.json",
    ".content.json5",
    ".content.jsonc",
    ".content.tsx",
    ".content.jsx",
    ".content.md",
    ".content.mdx",
    ".content.yaml",
    ".content.yml"
  ],
  "contentDir": [
    "/Users/admin/Projects/secretsport/cloud"
  ],
  "codeDir": [
    "/Users/admin/Projects/secretsport/cloud"
  ],
  "excludedPath": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/.intlayer/**",
    "**/.next/**",
    "**/.nuxt/**",
    "**/.expo/**",
    "**/.vercel/**",
    "**/.turbo/**",
    "**/.tanstack/**",
    "**/.output/**",
    "**/.svelte-kit/**"
  ],
  "watch": true
};
const system = {
  "baseDir": "/Users/admin/Projects/secretsport/cloud",
  "moduleAugmentationDir": "/Users/admin/Projects/secretsport/cloud/.intlayer/types",
  "unmergedDictionariesDir": "/Users/admin/Projects/secretsport/cloud/.intlayer/unmerged_dictionary",
  "remoteDictionariesDir": "/Users/admin/Projects/secretsport/cloud/.intlayer/remote_dictionary",
  "dictionariesDir": "/Users/admin/Projects/secretsport/cloud/.intlayer/dictionary",
  "dynamicDictionariesDir": "/Users/admin/Projects/secretsport/cloud/.intlayer/dynamic_dictionary",
  "fetchDictionariesDir": "/Users/admin/Projects/secretsport/cloud/.intlayer/fetch_dictionary",
  "typesDir": "/Users/admin/Projects/secretsport/cloud/.intlayer/types",
  "mainDir": "/Users/admin/Projects/secretsport/cloud/.intlayer/main",
  "configDir": "/Users/admin/Projects/secretsport/cloud/.intlayer/config",
  "cacheDir": "/Users/admin/Projects/secretsport/cloud/.intlayer/cache",
  "tempDir": "/Users/admin/Projects/secretsport/cloud/.intlayer/tmp"
};
const editor = {
  "editorURL": "http://localhost:8000",
  "cmsURL": "https://app.intlayer.org",
  "backendURL": "https://back.intlayer.org",
  "port": 8000,
  "enabled": false,
  "dictionaryPriorityStrategy": "local_first",
  "liveSync": false,
  "liveSyncPort": 4000,
  "liveSyncURL": "http://localhost:4000"
};
const analytics = {
  "enabled": true,
  "flushInterval": 20000,
  "sampleRate": 1
};
const log = {
  "mode": "default",
  "prefix": "\u001b[38;5;239m[intlayer] \u001b[0m"
};
const ai = {
  "provider": "openai",
  "apiKey": "local-no-apikey",
  "model": "hunyuan-mt2-1.8b-mlx",
  "temperature": 0.7,
  "applicationContext": "This is software as a service web application branded SecretPass Sport Cloud or just Sport.\nDo not translate the words \"SecretPass\", \"SecretPass.Cloud\" or \"SecretPass Sport\"\nThe application helps organizations store secrets securely on cloud or on user's devices.",
  "baseURL": "http://localhost:1234/v1"
};
const build = {
  "mode": "auto",
  "minify": false,
  "purge": false,
  "chunkGrouping": true,
  "dictionariesPreload": true,
  "traversePattern": [
    "**/*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/build/**",
    "!**/.intlayer/**",
    "!**/.next/**",
    "!**/.nuxt/**",
    "!**/.expo/**",
    "!**/.vercel/**",
    "!**/.turbo/**",
    "!**/.tanstack/**",
    "!**/.output/**",
    "!**/.svelte-kit/**",
    "!**/*.config.*",
    "!**/*.test.*",
    "!**/*.spec.*",
    "!**/*.stories.*",
    "!**/*.d.ts",
    "!**/*.d.ts.map",
    "!**/*.map"
  ],
  "outputFormat": [
    "esm",
    "cjs"
  ],
  "cache": true,
  "checkTypes": false
};
const compiler = {
  "enabled": false,
  "dictionaryKeyPrefix": "",
  "noMetadata": false,
  "saveComponents": false
};
const schemas = undefined;
const plugins = undefined;

export { internationalization, dictionary, routing, content, system, editor, analytics, log, ai, build, compiler, schemas, plugins };
