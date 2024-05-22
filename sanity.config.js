import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {table} from '@sanity/table'

export default defineConfig({
  name: 'default',
  title: 'Air Wireless',

  projectId: 'h97y61wz',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), table()],

  schema: {
    types: schemaTypes,
  },
})
