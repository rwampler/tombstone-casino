const pjson = require('./package.json');

const isDevelopment = process.env.NODE_ENV === 'development';

const now = new Date();
const year = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles', year: 'numeric'});
const month = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles', month: '2-digit'});
const day = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles', day: '2-digit'});
const nowDate = `${year}-${month}-${day}`;
const clientVersion = `${pjson.version}-${nowDate}`;

export default defineNuxtConfig({
  css: [
    // 'bulma',
    { src: '~/assets/stylesheets/bulma.sass', lang: 'sass' },
    { src: '~/assets/stylesheets/tombstone.sass', lang: 'sass' }
  ],

  app: {
    head: {
      title: "Lee's Golden - Boias Fairest Casino",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "Welcome to Lee's Golden - Boias Fairest Casino" }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },

  loading: { color: '#000' },

  render: {
    resourceHints: false
  },

  generate: {
    fallback: false
  },

  telemetry: false,
  target: 'static',

  runtimeConfig: {
    public: {
      DEVELOPMENT: isDevelopment,
      CLIENT_VERSION: clientVersion,
    }
  },

  build: {
    publicPath: '/assets/',
    standalone: true,
  },

  compatibilityDate: '2024-10-20',
  buildModules: ['@nuxt/typescript-build'],
  sourcemap: { server: false, client: false },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: "modern-compiler",
          quietDeps: true
        },
        scss: {
          api: "modern-compiler",
          quietDeps: true
        }
      }
    }
  }
});