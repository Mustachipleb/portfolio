import { Logos } from '~/logos';

export function Technologies() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-10">
      <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
        <Logos.Angular width={200} height={100} />
      </a>
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <Logos.React width={75} height={100} />
      </a>
      <a href="https://azure.microsoft.com" target="_blank" rel="noopener noreferrer">
        <Logos.Azure width={60} height={100} />
      </a>
      <a href="https://dotnet.microsoft.com" target="_blank" rel="noopener noreferrer">
        <Logos.DotNet width={100} height={100} />
      </a>
      <a href="https://elastic.co" target="_blank" rel="noopener noreferrer">
        <Logos.Elastic width={100} height={100} />
      </a>
      <a href="https://nixos.org" target="_blank" rel="noopener noreferrer">
        <Logos.Nix width={100} height={100} />
      </a>
      <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
        <Logos.NodeJS width={75} height={100} />
      </a>
      <a href="https://rabbitmq.com" target="_blank" rel="noopener noreferrer">
        <Logos.RabbitMQ width={175} height={30} />
      </a>
      <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">
        <Logos.Aws width={100} height={100} />
      </a>
      <a href="https://docker.com" target="_blank" rel="noopener noreferrer">
        <Logos.Docker width={100} height={70} />
      </a>
    </div>
  );
}
