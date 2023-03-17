import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { TestContext } from '../context';

interface Props {
  label: string;
  path: string;
  toggleIcon?: () => void;
}

export const NavItem: React.FC<Props> = ({ label, path, toggleIcon }) => {
  //
  const { resetTest } = useContext(TestContext);

  const handleReset = (path: string) => {
    if (path === '/') {
      resetTest();
    }
    toggleIcon && toggleIcon();
  };

  return (
    <li className='py-2 lg:py-0'>
      <Link
        to={path === '/test' ? (path = '/content') : path}
        onClick={() => handleReset(path)}
        className='hover:text-primary'
      >
        {label}
      </Link>
    </li>
  );
};
