import { Page } from '~/common/layout/page';
import { Section } from '~/common/layout/section';
import { Project } from '~/pages/projects/components/project/project';
import { Timeline, TimelineItem } from '~/pages/projects/components/timeline/timeline';

export function Projects() {
  return (
    <Page>
      <Section className="block">
        <h1 className="text-4xl font-bold mb-12 mr-12">My Projects</h1>
        <Timeline>
          <TimelineItem date="2026 - Present">
            <Project
              title="NixOS as Daily Driver"
              description="A brief description of project 1 and its impact."
              image="https://via.placeholder.com/300"
              link="/projects/1"
            />
          </TimelineItem>
          <TimelineItem date="2022 - Present">
            <Project
              title="SmartWithFood"
              description="A brief description of project 1 and its impact."
              image="https://via.placeholder.com/300"
              link="/projects/1"
            />
          </TimelineItem>
          <TimelineItem date="2021 - Present">
            <Project
              title="Dragon Legion Media Server"
              description="Another amazing project with different challenges and solutions."
              image="https://via.placeholder.com/300"
              link="/projects/2"
            />
          </TimelineItem>
        </Timeline>
      </Section>
    </Page>
  );
}
