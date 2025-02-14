const ContainerPara = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={` my-5 font-medium font-gt-super text-lg ${className} `}>
      {children}
    </p>
  );
};

export default ContainerPara;
