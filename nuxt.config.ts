import {
  axios,
  build,
  buildModules,
  css,
  head,
  i18n,
  loading,
  modules,
  plugins,
  privateRuntimeConfig,
  proxy,
  publicRuntimeConfig,
  router,
  server,
  toast,
  vuetify
} from './configs'

import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  ssr: false,
  head,
  loading,
  css,
  plugins,
  publicRuntimeConfig,
  privateRuntimeConfig,
  buildModules,
  modules,
  i18n,
  axios,
  proxy,
  router,
  server,
  toast,
  vuetify,
  build
}

export default config