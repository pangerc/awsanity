export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'articleCover',
      title: 'Article Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
    },
    {
      name: 'version',
      title: 'Version',
      type: 'string',
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'author'}]}],
    },
    {
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'chapter'}]}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
}
