import { Link } from 'react-router-dom';

interface Props {
  handleClick?: (path: string) => void;
  label: string;
  path: string;
}

export const NavItem: React.FC<Props> = ({ label, path, handleClick = () => {} }) => {
  return (
    <li className='py-2 lg:py-0'>
      <Link to={path} onClick={() => handleClick(path)} className='hover:text-primary'>
        {label}
      </Link>
    </li>
  );
};
