'use client';

import Image from 'next/image';

type ClothingItem = {
  id: number;
  src: string;
  alt: string;
};

interface ClothingGridProps {
  items: ClothingItem[];
}

export default function ClothingGrid({ items }: ClothingGridProps) {
  return (
    <div className="w-full">
      {/* Single row layout for all items */}
      <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-6 md:gap-8 justify-center">
        {items.map((item) => (
          <div key={item.id} className="w-full md:w-[46%] xl:w-[22%] mb-8 md:mb-0">
            <div className="relative aspect-[3/4] shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, (max-width: 1536px) 22vw, 20vw"
                style={{ objectFit: 'cover' }}
                priority
                className="hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 