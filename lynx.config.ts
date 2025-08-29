import { defineConfig } from '@lynx-js/rspeedy'

import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin'
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin'
import { pluginTypeCheck } from '@rsbuild/plugin-type-check'

export default defineConfig({
  server: {
    port: 3000,
    host:"10.249.110.18",
  },
  plugins: [
    pluginQRCode({
      schema(url) {
        // Use your actual Wi-Fi IP address for better connectivity
        return `${url}?fullscreen=true`
      },
    }),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
  dev: {
    hmr: true,
  },
})
