export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-5xl font-bold mb-4 text-red-500 text-center">Aurick Chatterjee</h1>
      <p className="text-xl text-gray-300 max-w-xl text-center">
        Software Developer · Consultant · Commerce Student @ UniMelb
      </p>
      <div className="mt-8 flex gap-4">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition">
          View Projects
        </button>
        <button className="bg-transparent border border-red-600 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition">
          Contact Me
        </button>
      </div>
    </section>
  );
}
