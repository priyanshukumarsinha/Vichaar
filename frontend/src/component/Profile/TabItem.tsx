interface tabItemProps {
    label: string,
    isActive: boolean,
    onClick?: () => void
}

const TabItem = ({ label, isActive, onClick }:tabItemProps) => (
    <li
      className={`${isActive ? 'border-b-1 border-black' : 'border-0'} cursor-pointer pb-3`}
      onClick={onClick}
    >
      {label}
    </li>
  );

export default TabItem;
  