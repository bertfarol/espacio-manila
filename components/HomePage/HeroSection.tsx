import { Icon } from "@iconify/react";
import { Button } from "../common/Button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[560px] lg:min-h-screen bg-center bg-cover bg-[url('/exhibitions/hero_01.jpg')] flex flex-col justify-center md:justify-end relative before:contet-[''] before:bg-black/70 lg:before:bg-black/40 before:h-full before:w-full before:top-0 before:left-0 before:absolute"
    >
      <div className="max-w-6xl 2xl:max-w-[1400px] px-5 mx-auto w-full relative">
        <div className="text-center text-white sm:text-left">
          <h1 className="text-[36px] xl:text-6xl capitalize">
            Everything from scratch
          </h1>
          <div className="flex flex-col gap-2 mt-2 mb-8 text-base xl:mt-8 xl:mb-10 xl:text-lg md:flex-row">
            <p className="leading-none">Isidro &#39;Manong Jon&#39; Santos</p>
            <p className="pl-2 font-light leading-none md:border-l md:border-white">
              January 22, 2023
            </p>
          </div>
          <Button type="default" href="/exhibitions/everything-from-scratch">
            View exhibition
          </Button>
        </div>
      </div>

      <div className="relative mt-[10vw] pb-4">
        <a
          href="#exhibitions"
          className="flex flex-col items-center text-white"
        >
          <p className="hidden pb-2 text-sm lg:inline-block">scroll down</p>
          <Icon
            icon="pepicons-pencil:angle-down"
            className="w-8 h-8 animate-bounce"
          />
        </a>
      </div>
    </section>
  );
}
