type Clothing = {
  id: number;
  title: string;
  images: string[];
  description: string[];
};

// Create a function to generate the correct image path
const getImagePath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'development' ? '' : '/sisely-web';
  return `${basePath}/${path}`;
};

export const clothingItems: Clothing[] = [
  {
    id: 1,
    title: 'Crochet Skirt',
    images: [
      getImagePath('images/clothing/skirt1.png'),
      getImagePath('images/clothing/skirt2.png'),
      getImagePath('images/clothing/skirt3.png'),
    ],
    description: [
      'Orange crocheted circle midi skirt.',
      'Wool blend yarn with an elastic waistband.',
    ],
  },
  {
    id: 2,
    title: 'Geometric Ring Top',
    images: [
      getImagePath('images/clothing/shirt1.png'),
      getImagePath('images/clothing/shirt2.png'),
      getImagePath('images/clothing/shirt3.png'),
    ],
    description: [
      'White cotton top with open back.',
      'Geometric ring pattern.',
      'Adjustable ribbon ties.',
    ],
  },
  {
    id: 3,
    title: 'Runway Piece 1',
    images: [
      getImagePath('images/clothing/clothing3.png'),
    ],
    description: [
      'Vibrant patterned outfit showcased on the runway.',
    ],
  },
  {
    id: 4,
    title: 'Formal Attire',
    images: [
      getImagePath('images/clothing/clothing4.png'),
    ],
    description: [
      'Elegant formal attire designed for special occasions.',
    ],
  }
]; 