interface Props {
  message: string;
  onClick: () => void;
}

export const CustomToast: React.FC<Props> = ({ message, onClick }) => {
  return (
    <div className='flex items-center p-4 space-x-4 text-white rounded cursor-pointer bg-primary' onClick={onClick}>
      <div>{message}</div>
    </div>
  );
};
