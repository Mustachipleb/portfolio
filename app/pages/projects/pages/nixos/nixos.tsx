import { Page } from '~/common/layout/page';
import { Section } from '~/common/layout/section';
import backgroundImg from './background.png';

export function NixOS() {
  return (
    <Page backgroundUrl={backgroundImg}>
      <Section className="pb-0">
        <div className="relative z-10 max-w-3/4 w-full flex grow flex-col items-center justify-center">
          <div className="text-white text-3xl md:text-6xl text-center font-bold border-b-3 border-gray-50/25 pb-4">
            NixOS as a Daily Driver
          </div>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="flex md:flex-row flex-col items-center justify-center md:pb-24 w-full mx-auto px-8 max-w-300">
          <div className="flex-1 justify-center px-4 pt-2 pb-10 md:py-0">
            <ul className="list-inside md:text-2xl md:text-right text-center md:leading-10 font-bold text-monokai-yellow-300">
              <li>Linux</li>
              <li>Nix Language</li>
              <li>Deployment Management</li>
              <li>Infrastructure Management</li>
            </ul>
          </div>

          <div className="h-100 w-0.75 bg-gray-50/25 mx-4 max-md:hidden" />

          <div className="flex-1 flex flex-col gap-6 justify-center text-white px-4 pt-6 md:pt-0 text-center md:text-left">
            <p className="font-semibold text-xl md:text-2xl w-80">Reproducible, resilient and declarative builds</p>
            <p className="md:text-xl w-80">
              <span className="text-monokai-red-400">Free experimentation</span>, knowing I can roll back to a working
              state in seconds.
            </p>
            <p className="md:text-xl w-80">
              <span className="text-monokai-red-400">Reproducibility</span>, even across machines
            </p>
            <p className="md:text-xl w-80">
              Keeps everything <span className="text-monokai-red-400">in sync</span>. No more "Works on my machine"
            </p>
          </div>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="flex flex-col text-center items-center justify-center pb-24 w-full mx-auto px-8 max-w-300 md:text-xl font-semibold">
          <p>
            Learn more about NixOS at{' '}
            <a
              href="https://nixos.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-monokai-blue-300 hover:text-monokai-blue-200"
            >
              nixos.org
            </a>
            .
          </p>
          <br />
          <p className="pt-2">
            Curious about my configuration? Check it out on{' '}
            <a
              href="https://github.com/Mustachipleb/nixos-config"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-monokai-blue-300 hover:text-monokai-blue-200"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </Section>
    </Page>
  );
}
