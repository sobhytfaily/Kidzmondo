import type { Schema, Struct } from '@strapi/strapi';

export interface CategoryTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_category_text_blocks';
  info: {
    displayName: 'Text Block';
  };
  attributes: {
    text_content: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'category.text-block': CategoryTextBlock;
    }
  }
}
