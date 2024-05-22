import {defineType} from 'sanity'

export default defineType({
  name: 'subsection',
  title: 'Subsection',
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
      name: 'section',
      title: 'Section',
      type: 'reference',
      to: [{type: 'section'}],
    },
    {
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}]}],
    },
  ],
})
