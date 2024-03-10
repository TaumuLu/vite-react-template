import { VitePWA } from 'vite-plugin-pwa'

export default ({ isDev }: { mode?: string; isDev: boolean }) => {
  return VitePWA({
    disable: false,
    registerType: 'prompt',
    strategies: 'generateSW',
    manifest: {
      name: 'pwa-test',
      short_name: 'pwa-test',
      description: 'pwa-test web project',
      theme_color: '#111922',
      background_color: '#111922',
      icons: [
        {
          src: 'favicon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'favicon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'favicon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'favicon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    devOptions: {
      enabled: false, // 开发选项配置，启用插件
    },
    workbox: {
      disableDevLogs: true,
      cacheId: 'pwa-cache',
      globPatterns: ['**/*.{js,png,jpg,jpeg,svg,css,ico,txt,woff2}'],
      navigateFallback: null,
      // 30MB
      maximumFileSizeToCacheInBytes: 30 * 1024 * 1024,
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'pwa-html',
            networkTimeoutSeconds: 3,
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [200],
            },
          },
        },
      ],
    },
    // 取消注册
    // selfDestroying: false,
  })
}
