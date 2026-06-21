import { Button } from '~/common/button/button';

type ProjectProps = { title: string; description: string; image: string; link: string };

export function Project({ title, description, image, link }: ProjectProps) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
      <Button type="navLink" to={link}>
        View Project
      </Button>
    </div>
  );
}
