// my-blog/frontend/astro.config.mjs

import { defineConfig } from 'astro/config';
import { sanityIntegration } from "@sanity/astro";

export default defineConfig({
  integrations: [sanityIntegration({
    projectId: '90jrxj4o',
    dataset: 'production',
    useCdn: false,
  })]
});