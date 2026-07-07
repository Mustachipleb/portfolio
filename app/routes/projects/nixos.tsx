import { NixOS } from '~/pages/projects/pages/nixos/nixos';

export function meta() {
  return [{ title: 'Nicolas Van Damme - Projects' }, { name: 'description', content: 'My projects' }];
}

export default function NixOsPage() {
  return <NixOS />;
}
