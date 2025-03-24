'use client';

import Image from 'next/image';

type Painting = {
  id: number;
  src: string;
  alt: string;
  dimensions: string;
  medium: string;
};

interface PaintingGridProps {
  paintings: Painting[];
}

export default function PaintingGrid({ paintings }: PaintingGridProps) {
  // Separate the large painting (last one) from the others
  const regularPaintings = paintings.slice(0, 4);
  const largePainting = paintings[4];

  return (
    <div className="flex flex-col gap-16">
      {/* Grid for the four paintings at the top */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {regularPaintings.map((painting) => (
          <div key={painting.id} className="flex flex-col">
            <div className="relative aspect-[4/5] w-[80%] mx-auto">
              <Image
                src={painting.src}
                alt={painting.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22.5vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className="mt-2 text-sm text-center">{painting.dimensions} - {painting.medium}</p>
          </div>
        ))}
      </div>

      {/* Large painting displayed separately */}
      <div className="flex flex-col max-w-5xl mx-auto w-full">
        <div className="relative aspect-[3/2] w-[80%] h-[80%] mx-auto">
          <Image
            src={largePainting.src}
            alt={largePainting.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 75vw"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <p className="-mt-10 text-sm text-center">{largePainting.dimensions} - {largePainting.medium}</p>
      </div>
    </div>
  );
} 