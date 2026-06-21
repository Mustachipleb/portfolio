import { Page } from '~/common/layout/page';
import { Section } from '~/common/layout/section';
import { Project } from '~/pages/projects/components/project/project';

export function Projects() {
  return (
    <Page>
      <Section>
        <Project title="Project 1"></Project>
      </Section>
    </Page>
  );
}
