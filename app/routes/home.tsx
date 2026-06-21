import { Landing } from '../pages/landing/landing';
import type { Route } from './+types/home';

export function meta(_args: Route.MetaArgs) {
  return [{ title: 'Nicolas Van Damme' }, { name: 'description', content: 'Portfolio of Nicolas Van Damme' }];
}

export default function Home() {
  return <Landing />;
}
