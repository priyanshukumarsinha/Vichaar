import TabItem from "./TabItem";

interface profileTabsProps {
  isShowHome: boolean;
  setIsShowHome: Function;
}

const ProfileTabs = ({ isShowHome, setIsShowHome }: profileTabsProps) => {
  return (
    <ul className="flex gap-10 border-b border-gray-200">
      <TabItem
        label="Home"
        isActive={isShowHome}
        onClick={() => setIsShowHome(true)}
      />
      <TabItem
        label="Settings"
        isActive={!isShowHome}
        onClick={() => setIsShowHome(false)}
      />
    </ul>
  );
};

export default ProfileTabs;
