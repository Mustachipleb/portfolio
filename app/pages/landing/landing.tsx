import { useEffect, useState } from 'react';
import { Button } from '~/common/button/button';
import { Technologies } from '~/pages/landing/components/technologies/technologies';
import backgroundImg from './bg.jpg';
import { Me } from './components/me/me';

export function Landing() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 800);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-black">
      <div className="flex flex-col items-center justify-center relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, black), url(${backgroundImg})`,
          }}
        />

        <Me />

        <div className="z-10 pb-5 flex flex-col items-center" style={{ opacity: scrollOpacity }}>
          <div className="text-xl text-white">Scroll for more...</div>
          <div className="h-1 w-full animate-rainbow-scroll rounded-full" />
        </div>
      </div>

      {/*
       TODO: Next up is to make above div clickable to navigate downwards
      */}

      <div className="flex md:flex-row flex-col items-center justify-center py-24 w-full mx-auto px-8 max-w-300 mt-80">
        <div className="flex-1 flex justify-center px-4">
          <Technologies />
        </div>

        <div className="h-100 w-0.75 bg-gray-50/25 mx-4 max-md:hidden" />

        <div className="flex-1 flex flex-col gap-6 justify-center text-white px-4 pt-10 md:pt-0">
          <p className="text-center md:text-left text-3xl leading-10">
            A passionate software engineer with a strong background in software development and a keen interest in
            building scalable and efficient systems.
          </p>
          <Button type="button" className="w-full md:w-fit">
            Projects
          </Button>
        </div>
      </div>

      <div className="pt-100"></div>
    </main>
  );
}
