import {config, collection, fields, LocalConfig, GitHubConfig} from '@keystatic/core';

// Storage strategy
const storage: LocalConfig['storage'] | GitHubConfig['storage'] =
    process.env.NODE_ENV === 'development'
        ? { kind: 'local' }
        : {
          kind: 'github',
          repo: {
            owner: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER!,
            name: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG!,
          },
        }

export default config({
  storage,
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
