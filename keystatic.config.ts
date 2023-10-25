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
    designSystem: collection({
      label: 'Design System',
      path: 'content/design-system/components/**',
      slugField: 'name',
      schema: {
        name: fields.slug({
          name: {
            label: 'Name',
            validation: {
              length: {
                min: 1,
              },
            },
          },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        pageOfContent: fields.array(
            fields.object({
              title: fields.text({ label: 'Name' }),
            }),
            {
              label: 'Page of Content',
              itemLabel: props => props.fields.title.value,
              slugField: 'title',
            },
        ),
        design: fields.array(
            fields.object({
              title: fields.text({ label: 'Name' }),
              content: fields.document({
                formatting: true,
                dividers: true,
                links: true,
                label: 'Design',
              }),
            }),
            {
              label: 'Design sections',
              itemLabel: props => props.fields.title.value,
              slugField: 'title',
            },
        ),
        accessibility: fields.array(
            fields.object({
              title: fields.text({ label: 'Name' }),
              content: fields.document({
                formatting: true,
                dividers: true,
                links: true,
                label: 'Design',
              }),
            }),
            {
              label: 'Accessibility sections',
              itemLabel: props => props.fields.title.value,
              slugField: 'title',
            },
        ),
        accessibilityDemo: fields.document({
          formatting: true,
          dividers: true,
          links: true,
          label: 'Accessibility Demo',
        }),
        relatedInformation: fields.array(
            fields.relationship({
              label: 'Related components',
              description: 'A list of related components',
              collection: 'designSystem',
            }),
            {
              label: 'Related Components',
              itemLabel: props => props.value || '',
            },
        ),
        code: fields.document({
          formatting: true,
          dividers: true,
          links: true,
          label: 'Code',
        }),
      },
    }),
    authors: collection({
      label: 'Authors',
      path: 'content/authors/*',
      slugField: 'name',
      schema: {
        name: fields.slug({
          name: {
            label: 'Name',
            validation: {
              length: {
                min: 1,
              },
            },
          },
        }),
      },
    }),
    articles: collection({
      label: 'Articles',
      path: 'content/articles/*',
      slugField: 'name',
      schema: {
        name: fields.slug({
          name: {
            label: 'Name',
            validation: {
              length: {
                min: 1,
              },
            },
          },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        thumbnail: fields.image({
          label: 'Thumbnail image',
          description: 'Thumbnail image',
          directory: 'public/images/articles',
          publicPath: '/images/articles',
        }),
        image: fields.image({
          label: 'Main Image',
          description: 'Main image',
          directory: 'public/images/articles',
          publicPath: '/images/articles',
        }),
        author: fields.relationship({
          label: 'Author',
          description: 'Author of this article',
          collection: 'authors',
        }),
        publishedAt: fields.datetime({
          label: 'Published at',
          defaultValue: {
            kind: 'now',
          },
        }),
        content: fields.document({
          formatting: true,
          dividers: true,
          links: true,
          label: 'Design',
          images: {
            directory: 'public/images/articles/content',
            publicPath: '/images/articles/content',
          },
        }),
      },
    }),
  },
});
