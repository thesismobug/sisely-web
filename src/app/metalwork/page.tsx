import Navbar from '@/components/Navbar';
import MetalworkGrid from '@/components/MetalworkGrid';
import { metalworkGroups } from '@/data/metalwork';

export default function MetalworkPage() {
  return (
    <div className="min-h-screen p-4">
      <Navbar />
      
      <main className="w-full max-w-6xl mx-auto mt-8 pb-16">
        <MetalworkGrid groups={metalworkGroups} />
      </main>
    </div>
  );
} 