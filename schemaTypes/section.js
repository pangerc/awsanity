import {defineType} from 'sanity'

export default defineType({
  name: 'section',
  title: 'Section',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'subsections',
      title: 'Subsections',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'subsection'}]}],
    },
  ],
})
