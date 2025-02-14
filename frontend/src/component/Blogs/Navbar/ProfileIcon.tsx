const ProfileIcon = ({ className }: { className: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="profile"
        className="w-8 h-8 rounded-full"
      />
    </div>
  );
};

export default ProfileIcon;
