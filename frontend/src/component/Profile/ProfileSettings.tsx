import ProfileImage from "../ui/ProfileImage";
import SettingItem from "./SettingItem";

interface profilesettingProps {
    email: string,
    username: string,
    onEmailClick: () => void,
    onUsernameClick: () => void,
    onProfileChangeClick: () => void,
    onDeleteAccountClick: () => void,
}

const ProfileSettings = ({
    email,
    username,
    onEmailClick,
    onUsernameClick,
    onProfileChangeClick,
    onDeleteAccountClick,
  }: profilesettingProps) => {
    return (
      <>
        {/* Email, Username, and Profile Information */}
        <div className="py-10 flex flex-col gap-7 border-b border-gray-200">
          <SettingItem label="Email address" value={email} onClick={onEmailClick} />
          <SettingItem label="Username" value={username} onClick={onUsernameClick} />
          <div className="flex justify-between text-sm">
            <p className="font-medium">Profile Information</p>
            <p
              className="opacity-60 hover:opacity-100 flex gap-2 items-center cursor-pointer"
              onClick={onProfileChangeClick}
            >
              {username}
              <ProfileImage className="w-6 h-6 text-xs" />
            </p>
          </div>
        </div>
  
        {/* Change Password */}
        <div className="py-10 flex flex-col gap-7 border-b border-gray-200">
          <SettingItem label="Change Password" value="***********" />
        </div>
  
        {/* Delete Account */}
        <div className="py-10 flex flex-col gap-7 border-b border-gray-200">
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-medium text-red-500 cursor-pointer" onClick={onDeleteAccountClick}>
              Delete Account
            </p>
            <p className="opacity-60 hover:opacity-100">
              Permanently delete your account and all of your content.
            </p>
          </div>
        </div>
      </>
    );
  };
  

export default ProfileSettings;