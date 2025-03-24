'use client';

import Image from 'next/image';

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

interface MetalworkGridProps {
  groups: MetalworkGroup[];
}

export default function MetalworkGrid({ groups }: MetalworkGridProps) {
  return (
    <div className="flex flex-col space-y-16">
      {groups.map((group) => (
        <div key={group.id} className="flex flex-col space-y-2">
          {/* Image grid */}
          <div className={`grid grid-cols-1 ${
            group.images.length === 1 ? 'sm:grid-cols-1 max-w-xs mx-auto' : 
            group.images.length === 2 ? 'sm:grid-cols-2 max-w-2xl mx-auto' : 
            group.images.length === 3 ? 'sm:grid-cols-3 max-w-4xl mx-auto' : 
            'sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto'
          } gap-4 md:gap-6`}>
            {group.images.map((image) => (
              <div key={image.id} className="flex flex-col">
                <div className="relative aspect-square bg-black p-2 rounded shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-contain w-full h-full hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Caption */}
          <p className="text-sm font-normal text-center mt-1">{group.caption}</p>
        </div>
      ))}
    </div>
  );
} 