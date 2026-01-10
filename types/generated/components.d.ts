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

export interface GeneralFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_feature_items';
  info: {
    displayName: 'featureItem';
  };
  attributes: {
    Body: Schema.Attribute.RichText;
    ButtonLink: Schema.Attribute.Component<'general.link', true>;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    link: Schema.Attribute.String;
    list: Schema.Attribute.Component<'general.list', true>;
    title: Schema.Attribute.String;
  };
}

export interface GeneralHero extends Struct.ComponentSchema {
  collectionName: 'components_general_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface GeneralLink extends Struct.ComponentSchema {
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

export interface GeneralList extends Struct.ComponentSchema {
  collectionName: 'components_homepage_lists';
  info: {
    displayName: 'list';
    icon: 'apps';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface GeneralSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_sections';
  info: {
    displayName: 'section';
    icon: 'apps';
  };
  attributes: {
    ButtonLinks: Schema.Attribute.Component<'general.link', true>;
    description: Schema.Attribute.Text;
    featuredItems: Schema.Attribute.Component<'general.feature-item', true>;
    imageScroll: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.Component<'general.list', true>;
    miniTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'category.text-block': CategoryTextBlock;
      'general.feature-item': GeneralFeatureItem;
      'general.hero': GeneralHero;
      'general.link': GeneralLink;
      'general.list': GeneralList;
      'general.section': GeneralSection;
    }
  }
}
