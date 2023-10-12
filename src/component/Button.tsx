interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded border-black w-[200px] h-[35px]"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
