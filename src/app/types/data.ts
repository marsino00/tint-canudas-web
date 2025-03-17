export type HeroData = {
  fields: {
    heroImage: ContentfulImage;
    title: string;
    subtitle: string;
  };
  sys: {
    id: string;
  };
};
export interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}

interface ContactFields {
  address: string;
  desc: string;
  email: string;
  phone: string;
  schedule: string;
  title: string;
  intro: string;
}

export interface ContactEntry {
  fields: ContactFields;
  sys: {
    id: string;
  };
}

interface AboutSectionFields {
  aboutImage: ContentfulImage;
  aboutText: string;
  aboutText2: string;
}

export interface AboutSectionEntry {
  fields: AboutSectionFields;
  sys: {
    id: string;
  };
}
export interface EnergiesSectionEntry {
  fields: {
    descElemento: string;
    energiesImage: ContentfulImage;
    tituloElemento: string;
  };
  sys: {
    id: string;
  };
}
interface ServicesSectionFields {
  descElemento: string;
  servicesImage: ContentfulImage;
  tituloElemento: string;
}

export interface ServicesSectionEntry {
  fields: ServicesSectionFields;
  sys: {
    id: string;
  };
}
