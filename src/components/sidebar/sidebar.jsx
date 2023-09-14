import { SideBarOptions } from '../../utils/utils';
import { WithToolTip } from './widthToolTip';

const sideBarClasses = 'bg-[#1b222c] h-full w-20 rounded-lg flex justify-between flex-col p-4 z-10';
const sectionsClasses =
  'flex flex-col justify-evenly gap-2 [&>span]:flex [&>span]:items-center [&>span]:justify-center [&>span]:rounded-full [&>span]:h-10 [&>span]:w-10 [&>span]:cursor-pointer [&>span]:transition';

export const SideBar = () => {
  return (
    <nav className={sideBarClasses}>
      {/* First Section */}
      <section className={`${sectionsClasses} [&>span]:bg-grisAzuladoIcons`}>
        {SideBarOptions.slice(0, 3).map((option) => (
          <WithToolTip key={option.id} content={option.content} id={option.id} icon={option.icon} />
        ))}
      </section>

      <section className={sectionsClasses}>
        {SideBarOptions.slice(3, 6).map((option) => (
          <WithToolTip key={option.id} content={option.content} id={option.id} icon={option.icon} />
        ))}
      </section>
    </nav>
  );
};
