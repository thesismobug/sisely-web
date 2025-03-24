type Painting = {
  id: number;
  src: string;
  alt: string;
  dimensions: string;
  medium: string;
};

// Create a function to generate the correct image path
const getImagePath = (path: string): string => `/sisely-web/${path}`;

export const paintings: Painting[] = [
  {
    id: 1,
    src: getImagePath('images/paintings/painting1.png'),
    alt: 'Portrait painting of a man with sharp facial features',
    dimensions: '16 × 20 in.',
    medium: 'oil on canvas',
  },
  {
    id: 2,
    src: getImagePath('images/paintings/painting2.png'),
    alt: 'Portrait with blue background showing a person with dark hair',
    dimensions: '16 × 20 in.',
    medium: 'oil on canvas',
  },
  {
    id: 3,
    src: getImagePath('images/paintings/painting3.png'),
    alt: 'Portrait of a person with light hair covering face with hands',
    dimensions: '16 × 20 in.',
    medium: 'oil on canvas',
  },
  {
    id: 4,
    src: getImagePath('images/paintings/painting4.png'),
    alt: 'Small painting of a reclining figure',
    dimensions: '8 × 10 in.',
    medium: 'oil on canvas',
  },
  {
    id: 5,
    src: getImagePath('images/paintings/painting5.png'),
    alt: 'Large self-portrait with red background and blue circle',
    dimensions: '40 × 60 in.',
    medium: 'oil on canvas',
  }
]; 