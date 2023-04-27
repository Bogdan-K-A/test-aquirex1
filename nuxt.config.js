export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "test-aquirex",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [],
  plugins: [
    "@/plugins/carbon.js",
    "@/plugins/vuelidate.js",
    "@/plugins/carbon-icons.js",
    { src: "~/plugins/notifications-ssr", ssr: true },
    { src: "~/plugins/notifications-client", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    "~/components",
    "~/components/shared/",
    { path: "~/components/VRadioGroup/", prefix: "VRadioGroup" },
    { path: "~/components/VButton/", prefix: "VButton" },
    { path: "~/components/VProgress/", prefix: "VProgress" },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  auth: {
    cookie: {
      prefix: "auth.",
      options: {
        path: "/",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
