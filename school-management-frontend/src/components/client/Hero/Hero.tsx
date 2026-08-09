import HeroContent from "./HeroContent";
import HeroBanner from "./HeroBanner";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <HeroContent />
        <HeroBanner />
      </div>
    </section>
  );
}