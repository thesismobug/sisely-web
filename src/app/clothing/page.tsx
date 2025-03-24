import Navbar from '@/components/Navbar';
import ClothingGrid from '@/components/ClothingGrid';
import { clothingItems } from '@/data/clothing';

export default function ClothingPage() {
  return (
    <div className="min-h-screen p-4">
      <Navbar />
      
      <main className="w-full max-w-7xl mx-auto mt-12">
        <ClothingGrid items={clothingItems} />
      </main>
    </div>
  );
} 