type MetalworkImage = {
  id: number;
  src: string;
  alt: string;
};

type MetalworkGroup = {
  id: number;
  caption: string;
  images: MetalworkImage[];
};

// First, let's rename the images to use simpler names
const getImagePath = (num: number): string => `/images/metalwork/metal${num}.png`;

export const metalworkGroups: MetalworkGroup[] = [
  {
    id: 1,
    caption: "sterling silver",
    images: [
      {
        id: 101,
        src: "/images/metalwork/metal1-1.png",
        alt: "Sterling silver ring with circular design"
      },
      {
        id: 102,
        src: "/images/metalwork/metal1-2.png",
        alt: "Sterling silver cylindrical pendant"
      },
      {
        id: 103,
        src: "/images/metalwork/metal1-3.png",
        alt: "Sterling silver circular and sun-shaped designs"
      }
    ]
  },
  {
    id: 2,
    caption: "hammered brass",
    images: [
      {
        id: 201,
        src: "/images/metalwork/metal2-1.png",
        alt: "Hammered brass spine-like design on dark fabric"
      },
      {
        id: 202,
        src: "/images/metalwork/metal2-2.png",
        alt: "Hammered brass spine-like piece on light colored fabric"
      },
      {
        id: 203,
        src: "/images/metalwork/metal2-3.png",
        alt: "Hammered brass circular pendant"
      },
      {
        id: 204,
        src: "/images/metalwork/metal2-4.png",
        alt: "Hammered brass design on dark fabric with decorative elements"
      }
    ]
  },
  {
    id: 3,
    caption: "sterling silver",
    images: [
      {
        id: 301,
        src: "/images/metalwork/metal3-1.png",
        alt: "Sterling silver ear cuff on dark background"
      },
      {
        id: 302,
        src: "/images/metalwork/metal3-2.png",
        alt: "Sterling silver ear cuff with linear design"
      }
    ]
  },
  {
    id: 4,
    caption: "sterling silver",
    images: [
      {
        id: 401,
        src: "/images/metalwork/metal4-1.png",
        alt: "Pair of sterling silver earrings with textured design"
      },
      {
        id: 402,
        src: "/images/metalwork/metal4-2.png",
        alt: "Pair of sterling silver stud earrings"
      }
    ]
  },
  {
    id: 5,
    caption: "sterling silver",
    images: [
      {
        id: 501,
        src: "/images/metalwork/metal5-1.png",
        alt: "Sterling silver spiral ring"
      },
      {
        id: 502,
        src: "/images/metalwork/metal5-2.png",
        alt: "Sterling silver spiral pendant"
      },
      {
        id: 503,
        src: "/images/metalwork/metal5-3.png",
        alt: "Sterling silver band ring"
      }
    ]
  },
  {
    id: 6,
    caption: "sterling silver",
    images: [
      {
        id: 601,
        src: "/images/metalwork/metal6-1.png",
        alt: "Sterling silver star-shaped ring"
      },
      {
        id: 602,
        src: "/images/metalwork/metal6-2.png",
        alt: "Sterling silver star-shaped pendant"
      },
      {
        id: 603,
        src: "/images/metalwork/metal6-3.png",
        alt: "Sterling silver spiral ring design"
      }
    ]
  },
  {
    id: 7,
    caption: "leather",
    images: [
      {
        id: 701,
        src: "/images/metalwork/metal7-1.png",
        alt: "Red leather star-shaped earrings"
      }
    ]
  }
]; 