'use client';

import React from 'react';
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
            group.images.length === 1 ? 'sm:grid-cols-1 max-w-6xl mx-auto' : 
            group.images.length === 2 ? 'sm:grid-cols-2 max-w-7xl mx-auto' : 
            group.images.length === 3 ? 'sm:grid-cols-3 max-w-7xl mx-auto' : 
            'sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto'
          } gap-8 md:gap-12`}>
            {group.images.map((image) => (
              <div key={image.id} className="flex flex-col">
                <div className="relative h-[200px] w-[200px] bg-black p-4 rounded shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: 'contain' }}
                    priority
                    className="hover:scale-[1.02] transition-transform duration-300"
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