import avatarImg from './avatar.jpeg';

export function Me() {
  return (
    <div className="relative z-10 max-w-3/4 w-full flex grow flex-col items-center justify-center">
      <div className="max-sm:flex-col max-sm:flex sm:grid sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 max-w-300 sm:max-h-152 h-full min-h-0">
        <div className="max-sm:order-2 max-sm:pt-6 border-b-gray-50/25 border-b-2 md:border-b-4 flex items-end justify-start pr-4 text-white text-2xl md:text-5xl lg:text-7xl font-bold pb-2">
          Nicolas Van Damme
        </div>
        <div className="max-sm:order-1 border-gray-50/25 sm:row-span-2 rounded-full border-4 md:border-8 overflow-hidden min-h-0 aspect-square row-start-1 h-auto">
          <img src={avatarImg} alt="Nicolas Van Damme" className="w-full h-full object-cover block" />
        </div>
        <div className="max-sm:order-3 border-t-gray-50/25 border-t-2 md:border-t-4 flex justify-start pr-4 text-white text-xl md:text-3xl lg:text-5xl pt-2">
          Software Engineer
        </div>
      </div>
    </div>
  );
}
