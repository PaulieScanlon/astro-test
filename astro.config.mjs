import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

export default defineConfig({
  site: 'https://www.cockroachlabs.com/tests/test-astro/',
  base: '/tests/test-astro',
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
