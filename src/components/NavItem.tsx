import { Link } from 'react-router-dom';

interface Props {
  label: string;
  path: string;
  toggleIcon?: () => void;
  resetTest?: () => void;
}

export const NavItem: React.FC<Props> = ({ label, path, toggleIcon, resetTest }) => {
  //

  const handleReset = (path: string) => {
    if (path === '/') {
      resetTest && resetTest();
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
