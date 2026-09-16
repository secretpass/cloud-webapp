import "intlayer";

declare module 'intlayer' {
  interface __DictionaryRegistry {

  }

  interface __DeclaredLocalesRegistry {
    "en": 1;
    "zh": 1;
    "hi": 1;
    "es": 1;
    "fr": 1;
    "ar": 1;
    "bn": 1;
    "ru": 1;
    "de": 1;
    "pt": 1;
    "ja": 1;
  }

  interface __RequiredLocalesRegistry {
    "en": 1;
  }

  interface __SchemaRegistry {

  }

  interface __StrictModeRegistry { mode: 'inclusive' }

  interface __EditorRegistry { enabled : false }

  interface __RoutingRegistry { mode: 'prefix-no-default'; defaultLocale: 'en' }
}
