import ProfileImage from "../../ui/ProfileImage";

const ProfileIcon = ({
  className,
  fn,
  show,
}: {
  className?: string;
  fn?: Function;
  show?: Boolean;
}) => {
  const email = "priyanshuk9066@gmail.com";

  const hiddenEmail = email
    .split("")
    .map((char, index) => {
      if (index < 3 || index > email.indexOf("@") - 1) {
        return char;
      }
      return "*";
    })
    .join("");

    const src = ""

  return (
    <div
      className={`flex items-center gap-2 sm:pl-5 p-0  ${className}`}
      onClick={() => {
        fn ? fn(!show) : null;
      }}
    >
      <ProfileImage src = {src} />
      {show && (
        <div className="w-[250px] opacity-100 z-20 bg-white absolute top-14 right-3 rounded shadow-[0px_0px_5px_1px_#e2e8f0] p-3 px-5">
          <ul>
            <li className="cursor-pointer p-4 hover:opacity-100 opacity-70  text-sm font-medium">
              Profile
            </li>
            <li className="cursor-pointer p-4 hover:opacity-100 opacity-70 text-sm font-medium">
              Settings
            </li>
            <li className=" cursor-pointer p-4 text-sm font-medium hover:bg-gray-100 bg-gray-50 border hover:border-0 border-gray-100">
              <p>Logout</p>
              <p className="opacity-50 text-xs py-2">{hiddenEmail}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
