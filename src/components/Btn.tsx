interface Props {
  label: string;
}

export const Btn: React.FC<Props> = ({ label }) => {
  return (
    <button className='px-8 py-2 mt-8 text-white rounded-md font-body bg-primary hover:bg-secondary focus:outline-none'>
      {label}
    </button>
  );
};
