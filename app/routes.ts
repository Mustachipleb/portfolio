import { index, type RouteConfig, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('projects', 'routes/projects.tsx'),
  route('projects/nixos', 'routes/projects/nixos.tsx'),
  route('*', 'routes/construction.tsx'),
] satisfies RouteConfig;
