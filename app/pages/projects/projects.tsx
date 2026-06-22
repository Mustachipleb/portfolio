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
              description="NixOS is a Linux distribution based around reproducible, declarative builds and an immutable design. Learning Nix has been a journey of discovery, and has shown me how powerful a declarative approach can be in managing systems."
              image="https://brand.nixos.org/logos/nixos-logo-rainbow-gradient-white-regular-vertical-recommended.svg"
              link="/projects/nixos"
            />
          </TimelineItem>
          <TimelineItem date="2022 - Present">
            <Project
              title="Colruyt Group - Retail Search Engine"
              description={
                <p>
                  A specialised Retail Search Engine for products and recipes, aiming for maximum relevance to the
                  end-user's queries; utilising tiered levels of relevance through Elasticsearch and a sophisticated
                  configuration for all types of food and non-food products sold by Colruyt Group-owned stores.
                </p>
              }
              image={cgLogoUrl}
              link="/projects/cg-retail-search-engine"
            />
          </TimelineItem>
          <TimelineItem date="2022 - Present">
            <Project
              title="Colruyt Group - Integrated Food Platform v3"
              description={
                <p>
                  The IFPv3 platform is a collection of services and tools designed to enrich product and recipe
                  information. It enhances the PIM lifecycle by providing producers with additional information about
                  their products; and also assists consumers in making informed decisions by providing nutritional
                  labels such as Nutri- and Green-score.
                </p>
              }
              image={cgLogoUrl}
              link="/projects/cg-ifp-v3"
            />
          </TimelineItem>
          <TimelineItem date="2021 - Present">
            <Project
              title="Dragon Legion Media Server"
              description="Fully home-hosted media solution for friends and family. Built with Docker compose, Traefik, Cloudflare, and many FOSS projects maintained by beautiful people."
              image="https://static.dragonlegion.be/logo-v2-light.png"
              link="/projects/dragonlegion"
              padImage={6}
            />
          </TimelineItem>
        </Timeline>
      </Section>
    </Page>
  );
}
