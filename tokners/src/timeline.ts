export interface ListItem {
  numberInList: number;
  content: string;
}

export interface TimelineItem {
  id: string;
  year: number;
  listOfThings: ListItem[];
}

const timelineData: TimelineItem[] = [
  {
    id: "Q1",
    year: 2020,
    listOfThings: [
      {
        numberInList: 1,
        content: "Configuração da equipe",
      },
      {
        numberInList: 2,
        content: "Lançamento do site informacional",
      },
    ],
  },
  {
    id: "Q2",
    year: 2021,
    listOfThings: [
      {
        numberInList: 1,
        content: "Listagens de pré-venda e troca",
      },
      {
        numberInList: 2,
        content: "Desenvolvimento e lançamento de blockchain",
      },
      {
        numberInList: 3,
        content: "Lançamento do nosso MVP",
      },
      {
        numberInList: 4,
        content: "Parcerias com agências de influenciadores",
      },
      {
        numberInList: 5,
        content: "Marketing e promoção",
      },
    ],
  },
  {
    id: "Q3",
    year: 2022,
    listOfThings: [
      {
        numberInList: 1,
        content: "Parcerias com celebridades, criadores e influenciadores",
      },
      {
        numberInList: 2,
        content: "Expansão das comunidades de criadores em nossa plataforma",
      },
      {
        numberInList: 3,
        content: "Mais Marketing e promoção",
      },
    ],
  },
  {
    id: "Q4",
    year: 2023,
    listOfThings: [
      {
        numberInList: 1,
        content: "Parcerias convencionais",
      },
      {
        numberInList: 2,
        content: "500 comunidades de criadores ativas",
      },
      {
        numberInList: 3,
        content: "2 milhões de membros ativos da comunidade",
      },
      {
        numberInList: 4,
        content: "Mais Marketing e promoção",
      },
    ],
  },
];

export default timelineData;
