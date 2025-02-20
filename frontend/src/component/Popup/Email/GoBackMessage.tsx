interface goBackMessageProps {
  goBack: () => void;
  action: string;
}
const goBackMessage = ({ goBack, action }: goBackMessageProps) => {
  return (
    <p
      className="text-sm text-green-700 font-medium cursor-pointer"
      onClick={() => goBack()}
    >
      {`< All ${action.toLowerCase()} options`}
    </p>
  );
};

export default goBackMessage;
