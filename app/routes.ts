import { index, type RouteConfig, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('projects', 'routes/projects.tsx'),
  route('*', 'routes/construction.tsx'),
] satisfies RouteConfig;
