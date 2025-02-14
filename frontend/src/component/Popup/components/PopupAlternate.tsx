type PopupAlternateProps = {
  message: string;
  linkText: string;
  fn: Function;
};

const PopupAlternate = ({ message, linkText, fn }: PopupAlternateProps) => {
  return (
    <div className="flex gap-2 text-md font-medium  my-10">
      <p>{message}</p>
      <p className="text-green-700 font-bold" onClick={() => fn(false)}>
        {linkText}
      </p>
    </div>
  );
};

export default PopupAlternate;
