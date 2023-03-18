export interface BtnProps {
  label: string;
  onClick: () => void;
}

export const Btn: React.FC<BtnProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className='px-8 py-2 mt-8 text-white rounded-md font-body bg-primary hover:bg-secondary focus:outline-none'
  >
    {label}
  </button>
);
