import { Social } from '../interfaces';

export const FooterIcon = ({ href, Icon }: Social) => (
  <a
    href={href}
    className='cursor-pointer hover:text-primary'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='social-media-icon'
  >
    <Icon />
  </a>
);
