import { Button } from '~/common/button/button';
import { Page } from '~/common/layout/page';
import { Section } from '~/common/layout/section';

import bgUrl from './bg.jpg';

export function UnderConstruction() {
  return (
    <Page backgroundUrl={bgUrl} darker>
      <Section className="md:flex-col text-center min-h-[80vh]">
        <div className="relative mb-8">
          <div className="text-8xl mb-4 animate-bounce">🚧</div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl -z-10" />
        </div>

        <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Under Construction
        </h1>

        <p className="text-xl text-gray-100 max-w-lg mb-12">
          I'm currently building something awesome. This page is still in the works, but feel free to check out my
          projects in the meantime!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button type="navLink" to="/" className="px-8!">
            Back Home
          </Button>
          <Button
            type="navLink"
            to="/projects"
            className="px-8! border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10"
          >
            View Projects
          </Button>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-8 opacity-20 grayscale">
          <div className="text-4xl">🛠️</div>
          <div className="text-4xl">📐</div>
          <div className="text-4xl">⚙️</div>
        </div>
      </Section>
    </Page>
  );
}
