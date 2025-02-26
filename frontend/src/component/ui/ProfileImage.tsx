import { useIsAuthStore } from "../../store/isAuthState";

const ProfileImage = ({src, className}: {src?: string, className?: string}) => {
    const user = useIsAuthStore(state => state.user);
    return (
        <>
        {
        src ? (
          <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="profile"
        className={`${className ? className : 'w-8 h-8'} rounded-full`}
      />
        ): (
          <div 
            className={`${className ? className : 'w-8 h-8'} cursor-pointer bg-purple-500 font-semibold hover:opacity-80 text-white rounded-full flex justify-center items-center`}>
            {user?.name?.[0]?.toUpperCase() || ''}
          </div>
        )
      }
        </>
    )
}

export default ProfileImage;