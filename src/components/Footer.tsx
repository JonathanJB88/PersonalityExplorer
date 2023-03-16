import { social } from '../data';
import { FooterIcon } from './FooterIcon';

export const Footer: React.FC = () => {
  return (
    <footer className='py-4 bg-background bg-opacity-40 text-text'>
      <div className='container flex flex-col px-4 mx-auto'>
        <div className='flex justify-center'>
          <h2 className='mb-1 mr-2 text-xl font-semibold font-header'>Follow Us | </h2>
          <div className='flex mt-2 space-x-2'>
            {social.map(({ href, Icon, id }) => (
              <FooterIcon href={href} Icon={Icon} key={id} />
            ))}
          </div>
        </div>

        <div className='flex justify-center mt-2'>
          <p className='text-sm font-body'>
            &copy; {new Date().getFullYear()} Personality Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
