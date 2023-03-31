import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/tests/test-astro',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
