import { Page } from '~/common/layout/page';
import { Section } from '~/common/layout/section';
import cgLogoUrl from '~/logos/cg.svg';
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
              image="https://brand.nixos.org/logos/nixos-logo-rainbow-gradient-white-regular-vertical-recommended.svg"
              link="/projects/1"
            />
          </TimelineItem>
          <TimelineItem date="2022 - Present">
            <Project
              title="SmartWithFood - Colruyt Group"
              description={
                <div>
                  <p>
                    My time at SmartWithFood consisted mainly of participation to several key projects to enhance
                    digital retail at Colruyt Group.
                    <br />
                    This includes:
                  </p>
                  <ul className="list-disc list-inside ml-2">
                    <li>
                      Enrichment of Retail Products with allergens, lifestyles, Green-scores (formerly Eco-Score) and
                      Nutri-Scores.
                    </li>
                    <li>Enrichment of recipes with allergens, lifestyles and Nutri-Scores.</li>
                    <li>
                      A specialised Retail Search Engine for products and recipes, aiming for maximum relevance to the
                      end-user's queries. This being done by utilising tiered levels of relevance through Elasticsearch
                      and a sophisticated configuration for all types of food and non-food products sold by Colruyt
                      Group-owned stores.
                    </li>
                  </ul>
                </div>
              }
              image={cgLogoUrl}
              link="/projects/1"
            />
          </TimelineItem>
          <TimelineItem date="2021 - Present">
            <Project
              title="Dragon Legion Media Server"
              description="Another amazing project with different challenges and solutions."
              image="https://static.dragonlegion.be/logo-v2-light.png"
              link="/projects/2"
              padImage={6}
            />
          </TimelineItem>
        </Timeline>
      </Section>
    </Page>
  );
}
