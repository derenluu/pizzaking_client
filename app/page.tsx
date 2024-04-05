// import Header from '@/components/layout/Header';
// import Hero from '@/components/layout/Hero';
// import HomeMenu from '@/components/layout/HomeMenu';
// import SectionHeader from '@/components/layout/SectionHeader';

import Hero from "@/components/Hero";
import HomeMenu from "@/components/HomeMenu";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader
          subHeader="Our story"
          mainHeader="About us"
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi eveniet
            necessitatibus reiciendis tempore? Nemo quis voluptas nobis voluptates iusto! Fuga,
            consequuntur vel magnam iste mollitia fugiat laudantium eveniet cupiditate.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader
          subHeader="Don't hesitate"
          mainHeader="Contact us"
        />
        <div className="mt-8">
          <a
            href="tel:+84123456789"
            className="text-4xl underline text-gray-500 "
          >
            +84 123 456 789
          </a>
        </div>
      </section>
    </>
  );
}
