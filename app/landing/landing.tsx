import { useEffect, useState } from 'react';

import avatarImg from './avatar.jpeg';
import backgroundImg from './bg.jpg';

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
        <div className="relative z-10 max-w-3/4 w-full flex grow flex-col items-center justify-center">
          <div className="max-sm:flex-col max-sm:flex sm:grid sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 max-w-300 sm:max-h-152 h-full min-h-0">
            <div className="max-sm:order-2 max-sm:pt-6 border-b-gray-50/25 border-b-2 md:border-b-4 flex items-end justify-start pr-4 text-white text-2xl md:text-5xl lg:text-7xl font-bold pb-2">
              Nicolas Van Damme
            </div>
            <div className="max-sm:order-1 border-gray-50/25 sm:row-span-2 rounded-full border-4 md:border-8 overflow-hidden min-h-0 aspect-square row-start-1 h-auto">
              <img src={avatarImg} alt="Nicolas Van Damme" className="w-full h-full object-cover block" />
            </div>
            <div className="max-sm:order-3 border-t-gray-50/25 border-t-2 md:border-t-4 flex justify-start pr-4 text-white text-xl md:text-3xl lg:text-5xl pt-2">
              Software Engineer
            </div>
          </div>
        </div>

        <div className="z-10 pb-5 flex flex-col items-center" style={{ opacity: scrollOpacity }}>
          <div className="text-xl text-white">Scroll for more...</div>
          <div className="h-1 w-full animate-rainbow-scroll rounded-full" />
        </div>
      </div>

      {/*
       TODO: Next up is to make above div clickable to navigate downwards
      */}

      <div className="flex flex-col items-center justify-center">
        <div className="z-10 text-white pt-100 pb-200 max-w-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, massa ac venenatis tincidunt, ex
          est congue massa, id blandit metus velit at elit. Morbi nec est sollicitudin, tincidunt ex eget, fermentum mi.
          Nulla volutpat urna at rhoncus fermentum. In volutpat magna metus, nec posuere urna ultrices non. Sed semper
          scelerisque purus, vehicula malesuada elit dapibus a. Integer facilisis commodo sagittis. Donec ultricies leo
          nec ex finibus, at mattis nisi varius. Nullam et fringilla justo. Curabitur blandit elit magna, nec aliquam
          quam porta in. Donec molestie leo nec nisi blandit, at eleifend augue scelerisque. Cras rutrum odio a magna
          rutrum ultricies. Etiam placerat at massa et volutpat. Aliquam at sodales est. Vivamus faucibus nunc quis erat
          laoreet mattis. Morbi tempus et nulla ut aliquet. Pellentesque non urna leo. Sed maximus eleifend sagittis.
          Donec ut urna massa. Aenean ut suscipit eros. Ut felis ligula, ullamcorper sed eleifend at, posuere id leo.
          Sed vitae ante sed erat sollicitudin pharetra. Integer ut nisi sit amet diam egestas iaculis ut quis ipsum.
          Nulla pharetra lacus velit, id iaculis mi accumsan id. Quisque feugiat a erat molestie ultricies. Pellentesque
          nec auctor nisi. Nulla laoreet lacus ut tempor ornare. Nullam sit amet tincidunt felis. Proin vitae pulvinar
          urna. Vestibulum vulputate libero eget magna posuere elementum. Integer consectetur nulla in sem euismod, sed
          porta nisl mattis. Curabitur vitae dolor ac ante commodo viverra. Quisque quis consectetur turpis. Vestibulum
          euismod, orci nec interdum mattis, nisl velit dignissim erat, ut euismod risus sem quis mauris. Fusce gravida
          dui ex, sit amet feugiat mi aliquam in. Ut et aliquam enim. Donec at velit justo. Suspendisse in odio
          volutpat, sollicitudin lacus sit amet, tempor erat. Aliquam sagittis, mi suscipit condimentum mattis, mauris
          orci vulputate ipsum, vel cursus tellus tortor ac orci. Suspendisse congue commodo quam non euismod. Maecenas
          volutpat ac dui et suscipit. Vestibulum at tortor porta, euismod magna sit amet, dignissim ante. Proin
          placerat viverra quam in convallis. Morbi massa ex, mollis vitae efficitur sed, dictum a orci. Ut elit ex,
          ultricies id tempus convallis, facilisis in magna. Integer eros erat, aliquet vel blandit tempor, consequat
          quis justo. Donec facilisis sit amet leo ac pretium. Nulla blandit ut tellus vel sodales. Vivamus cursus
          faucibus lacus, eget molestie est gravida et. Mauris gravida augue sed libero auctor, ac iaculis augue mollis.
          Vestibulum feugiat venenatis venenatis. Cras vel ligula id velit consectetur gravida quis ut nunc. Nunc quis
          velit blandit purus mattis fringilla. Maecenas eu sapien justo. Maecenas felis mi, finibus at euismod sit
          amet, placerat ac leo. In dignissim mollis sollicitudin.
        </div>
      </div>
    </main>
  );
}
