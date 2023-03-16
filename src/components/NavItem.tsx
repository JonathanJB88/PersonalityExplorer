import { Link } from 'react-router-dom';

interface Props {
  toggleMenu?: () => void;
  label: string;
  path: string;
}

export const NavItem: React.FC<Props> = ({ label, path, toggleMenu = () => {} }) => {
  return (
    <li className='py-2 lg:py-0'>
      <Link to={path} onClick={toggleMenu} className='hover:text-primary'>
        {label}
      </Link>
    </li>
  );
};
