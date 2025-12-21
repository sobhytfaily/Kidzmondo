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

export interface HomepageFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_feature_items';
  info: {
    displayName: 'featureItem';
  };
  attributes: {
    body: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageLink extends Struct.ComponentSchema {
  collectionName: 'components_homepage_links';
  info: {
    displayName: 'link';
    icon: 'attachment';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageList extends Struct.ComponentSchema {
  collectionName: 'components_homepage_lists';
  info: {
    displayName: 'list';
    icon: 'apps';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface HomepageSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_sections';
  info: {
    displayName: 'section';
    icon: 'apps';
  };
  attributes: {
    ButtonLinks: Schema.Attribute.Component<'homepage.link', true>;
    description: Schema.Attribute.Text;
    featuredItems: Schema.Attribute.Component<'homepage.feature-item', true>;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    list: Schema.Attribute.Component<'homepage.list', true>;
    miniTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'category.text-block': CategoryTextBlock;
      'homepage.feature-item': HomepageFeatureItem;
      'homepage.link': HomepageLink;
      'homepage.list': HomepageList;
      'homepage.section': HomepageSection;
    }
  }
}
