interface Picture {
  // Path inside /public, e.g. "/images/master/oleg.jpg"
  src: string;
  width: number;
  height: number;
}

export interface MasterDocument {
  id: string;
  title: string;
  // Leave null until the scan is in /public/images/master/; hide the series and number before adding it
  image: Picture | null;
}

// Fields left null are hidden on the site or replaced by a neutral fallback text
export interface StudioInfo {
  entrance: string | null;
  parking: string | null;
  masterPhoto: Picture | null;
  // One string per paragraph
  masterAbout: string[];
  masterDocuments: MasterDocument[];
  legalName: string | null;
  inn: string | null;
  ogrn: string | null;
  email: string | null;
}

export const studioInfo: StudioInfo = {
  // TODO(content): entrance, floor and intercom from the owner
  entrance: null,
  parking: null,

  // TODO(content): Oleg's portrait, e.g. { src: "/images/master/oleg.jpg", width: 1200, height: 1600 }
  masterPhoto: null,
  // TODO(content): experience, education and courses in Oleg's words
  masterAbout: [
    "Олег принимает сам, без ассистентов и подмен: вы каждый раз приходите к одному специалисту, который помнит, с чем вы были в прошлый раз.",
    "Перед сеансом он расспрашивает о самочувствии и задаче и подбирает технику под неё, а не работает по одной схеме для всех.",
  ],
  // TODO(content): real scans once the owner sends them
  masterDocuments: [
    { id: "diploma", title: "Диплом о высшем образовании", image: null },
    {
      id: "recognition",
      title: "Сертификат о признании диплома в России",
      image: null,
    },
    { id: "course", title: "Сертификат курса массажа", image: null },
  ],

  // TODO(content): legal entity details for the footer, contacts and privacy policy
  legalName: null,
  inn: null,
  ogrn: null,
  email: null,
};
