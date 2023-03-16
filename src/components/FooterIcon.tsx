import { Social } from '../interfaces';

export const FooterIcon = ({ href, Icon }: Social) => {
  return (
    <a href={href} className='cursor-pointer hover:text-primary' target='_blank' rel='noopener noreferrer'>
      <Icon />
    </a>
  );
};
