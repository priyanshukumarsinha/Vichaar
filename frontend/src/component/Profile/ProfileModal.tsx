import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import ProfileImage from "../ui/ProfileImage";
import Modal from "./Modal";

const ProfileModal = ({ fn }: { fn: Function }) => (
  <Modal title="Profile Information" fn={fn}>
    <div className="flex flex-col gap-7">
      <div>
        <label className="text-xs font-medium">Profile Picture</label>
        <div className="py-4  flex gap-5">
          <ProfileImage className="min-w-20 min-h-20" />
          <div className="">
            <div className="flex gap-3">
              <span className="text-sm cursor-pointer text-green-700">
                Update
              </span>
              <span className="text-sm cursor-pointer text-red-700">
                Remove
              </span>
            </div>
            <p className="text-sm opacity-70">
              Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
              side.
            </p>
          </div>
        </div>
      </div>
      <div>
        <label className="text-xs font-medium">Name*</label>
        <input
          type="text"
          className="outline-none bg-gray-100 rounded w-full py-2 px-3"
          value="priyashuk"
        />
      </div>
      <div>
        <label className="text-xs font-medium">Pronouns</label>
        <input
          type="text"
          className="outline-none bg-gray-100 rounded w-full py-2 px-3"
        />
      </div>
      <div>
        <label className="text-xs font-medium">Short bio</label>
        <textarea className="outline-none bg-gray-100 rounded w-full py-2 h-20 px-3"></textarea>
      </div>
    </div>
    <div className="flex justify-end gap-3">
      <BlogNavButton
        className="border border-green-900 text-green-600"
        onClick={() => fn(false)}
      >
        Cancel
      </BlogNavButton>
      <BlogNavButton
        className="bg-green-800/40 text-white"
        onClick={() => fn(false)}
      >
        Save
      </BlogNavButton>
    </div>
  </Modal>
);

export default ProfileModal;
