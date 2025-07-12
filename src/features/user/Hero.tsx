import Header from "./Header";

export default function Hero() {
  return (
    <div className="relative flex h-[100vh] w-full items-center bg-white bg-[url('/hero-image.jpg')] bg-cover bg-left-top">
      <Header />
      <div className="absolute z-0 h-full w-full bg-gradient-to-r from-white from-0% via-white/50 via-40% to-transparent to-100%" />
      <div className="relative z-10 mx-mobile w-[500px] sm:mx-tablet md:mx-desktop">
        <h1 className="text-[50px] font-bold text-dark-100 sm:text-[72px]">
          Plan Your Trip With Ease
        </h1>
        <p className="leading-8 text-dark-400">
          Customize your travel itinerary in minutes—pick your destination, set
          your preferences, and explore with confidence.
        </p>
        <button className="mt-5 rounded-lg bg-primary-100 px-14 py-3 tracking-wider text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
