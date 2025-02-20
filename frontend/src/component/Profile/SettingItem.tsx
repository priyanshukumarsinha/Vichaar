interface settingItemProps {
    label: string,
    value: string,
    onClick?: () => void
}

const SettingItem = ({ label, value, onClick }: settingItemProps) => (
    <div className="flex justify-between text-sm">
      <p className="font-medium">{label}</p>
      <p className="opacity-60 hover:opacity-100 cursor-pointer" onClick={onClick}>
        {value}
      </p>
    </div>
  );

  
export default SettingItem;