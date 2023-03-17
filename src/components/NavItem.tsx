import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TestContext } from '../context/TestContext';

interface Props {
  label: string;
  path: string;
}

export const NavItem: React.FC<Props> = ({ label, path }) => {
  //
  const { resetTest } = useContext(TestContext);

  const handleReset = (path: string) => {
    if (path === '/') {
      resetTest();
    }
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
