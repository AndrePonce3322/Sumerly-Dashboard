import { Tooltip } from 'react-tooltip';
import { SideBarOptions } from '../../utils/utils';

export const WithToolTip = ({ id, content, icon }) => {
  return (
    <span data-tooltip-id={id} data-tooltip-content={content} data-tooltip-place="right-start">
      {SideBarOptions.map((option) => (
        <Tooltip key={option.id} id={option.id} />
      ))}
      {icon}
    </span>
  );
};
