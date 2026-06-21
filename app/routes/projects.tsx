import { Projects } from '~/pages/projects/projects';
import type { Route } from './+types/projects';

export function meta(_args: Route.MetaArgs) {
  return [{ title: 'Nicolas Van Damme - Projects' }, { name: 'description', content: 'My projects' }];
}

export default function ProjectsPage() {
  return <Projects />;
}
