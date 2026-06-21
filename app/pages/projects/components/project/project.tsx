import { Button } from '~/common/button/button';

type ProjectProps = { title: string; description: string; image: string; link: string };

export function Project({ title, description, image, link }: ProjectProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
      {image && <img src={image} alt={title} className="w-full md:w-48 h-auto rounded-lg object-cover" />}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <Button type="navLink" to={link} className="!px-6 !text-base">
          View Project
        </Button>
      </div>
    </div>
  );
}
