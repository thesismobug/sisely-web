import Navbar from '@/components/Navbar';
import PaintingGrid from '@/components/PaintingGrid';
import { paintings } from '@/data/paintings';

export default function PaintingPage() {
  return (
    <div className="min-h-screen p-4">
      <Navbar />
      
      <main className="w-full max-w-5xl mx-auto mt-8">
        <PaintingGrid paintings={paintings} />
      </main>
    </div>
  );
} 