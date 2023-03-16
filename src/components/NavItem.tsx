import { Link } from 'react-router-dom';

interface Props {
  toggleMenu?: () => void;
  label: string;
  path: string;
}

export const NavItem: React.FC<Props> = ({ label, path, toggleMenu = () => {} }: Props) => {
  return (
    <li className='lg:py-0 py-2'>
      <Link to={path} onClick={toggleMenu} className='hover:text-primary'>
        {label}
      </Link>
    </li>
  );
};
