// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      title: "One account. All of Kaana.",
      meta: [
        {
          name: "description",
          content: "Sign in. Use your Kaana Account.",
        },
      ],
      script: [
        //{ src: '' },
      ],
      link: [
        //{ rel: 'stylesheet', href: '' },
      ],
    },
  },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/supabase",
    "@sidebase/nuxt-auth",
    "@nuxtjs/i18n",
    "nuxt-icon",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
  ],
  imports: {
    dirs: ["stores"],
  },
  i18n: {
    defaultLocale: "en-US",
    lazy: true,
    langDir: "locales/",
    locales: [
      {
        name: "English",
        code: "en-US",
        file: "en-US.json",
      },
      {
        name: "Español",
        code: "es-ES",
        file: "es-ES.json",
      },
      {
        name: "Français",
        code: "fr-FR",
        file: "fr-FR.json",
      },
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/main.scss", "@/assets/css/fonts.css"],
  piniaPersistedstate: {
    storage: "localStorage",
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  auth: {
    // Module is enabled
    isEnabled: true,
    session: {
      // Sessions expire after 600 seconds = 10 minutes
      expiryInSeconds: 60 * 10,
      // Session ids are 64 characters long
      idLength: 64,
      // All session data is stored in a "sub-storage" that uses the `sessions` prefix
      storePrefix: "sessions",
      // The session cookie same site policy is `lax`
      cookieSameSite: "lax",
      // `Secure` attribute of session cookie is set to `true`
      cookieSecure: true,
      // `HttpOnly` attribute of session cookie is set to `true`
      cookieHttpOnly: true,
      // The request-domain is strictly used for the cookie, no sub-domains allowed
      domain: false,
      // Sessions aren't pinned to the user's IP address
      ipPinning: false,
      // Expiration of the sessions are not reset to the original expiryInSeconds on every request
      rolling: false,
    },
    api: {
      // The API is enabled
      isEnabled: true,
      // `PATCH, GET, POST, DELETE /api/session` HTTP requests are possible
      methods: ["patch", "get", "post", "delete"],
      // The sessions endpoints are mounted at `/api/session`
      basePath: "/api/session",
    },
  },
});
