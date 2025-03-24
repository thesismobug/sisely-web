import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <Navbar />
      
      <main className="w-full max-w-5xl mx-auto mt-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-normal">Hi, I'm Sisely.</h1>
          <p className="text-2xl font-normal">I'm an artist and a student at Stanford.</p>
          <p className="text-2xl font-normal mt-4">You can contact me at delisi [at] stanford [dot] edu</p>
        </div>
      </main>
    </div>
  );
}
