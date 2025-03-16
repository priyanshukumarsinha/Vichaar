
const ErrorMessage = ({message}: {message:string}) => {
  return (
    <p className="text-red-500 font-medium py-5">
      Error :: {message}
    </p>
  );
};

export default ErrorMessage;
