interface PopupInputProps {
  label: string;
  type: string;
  value: string,
  changeValue: Function
}

const PopupInput = ({ label, type, value, changeValue }: PopupInputProps) => {
  return (
    <>
      <div className="font-medium text-sm mt-2">{label}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        className="outline-none bg-gray-100 px-5 text-sm focus:bg-gray-50 focus:border-1 py-2 my-1 rounded"
      />
    </>
  );
};

export default PopupInput;
