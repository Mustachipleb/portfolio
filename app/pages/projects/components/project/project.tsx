import type { JSX } from 'react';
import { Button } from '~/common/button/button';

type ProjectProps = {
  title: string;
  description: string | JSX.Element;
  image: string;
  link: string;
  padImage?: number;
};

export function Project({ title, description, image, link, padImage }: ProjectProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
      {image && (
        <img
          src={image}
          alt={title}
          className={`max-sm:p-4 max-md:p-16 w-full md:w-48 md:h-auto rounded-lg object-cover${padImage ? ` p-${padImage}` : ''}`}
        />
      )}
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {typeof description === 'string' ? (
          <p className="text-gray-300 mb-4">{description}</p>
        ) : (
          <div className="text-gray-300 mb-4">{description}</div>
        )}
        <Button type="navLink" to={link} className="!px-6 !text-base">
          View Project
        </Button>
      </div>
    </div>
  );
}
