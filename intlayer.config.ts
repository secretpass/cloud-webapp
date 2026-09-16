import { type IntlayerConfig, Locales } from "intlayer";

const applicationContext = `This is software as a service web application branded SecretPass Sport Cloud or just Sport.
Do not translate the words "SecretPass", "SecretPass.Cloud" or "SecretPass Sport"
The application helps organizations store secrets securely on cloud or on user's devices.`;

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.CHINESE,
      Locales.HINDI,
      Locales.SPANISH,
      Locales.FRENCH,
      Locales.ARABIC,
      Locales.BENGALI,
      Locales.RUSSIAN,
      Locales.GERMAN,
      Locales.PORTUGUESE,
      Locales.JAPANESE,
    ],
    defaultLocale: Locales.ENGLISH,
    requiredLocales: [Locales.ENGLISH],
  },
  routing: {
    storage: "cookie",
  },
  ai: {
    // For automated translation, use with lm-studio
    provider: "openai",
    model: "hunyuan-mt2-1.8b-mlx",
    temperature: 0.7,
    applicationContext,
    baseURL: "http://localhost:1234/v1",
    apiKey: "local-no-apikey",
  },
  dictionary: {
    fill: "{{fileName}}.{{locale}}.content.json",
  },
};

export default config;
