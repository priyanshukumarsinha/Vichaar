import { useState } from "react";
import { useIsAuthStore } from "../../store/isAuthState";
import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import ProfileImage from "../ui/ProfileImage";
import Modal from "./Modal";
import axios from "axios";
import { BACKEND_URL } from "../../constant";

const ProfileModal = ({ fn }: { fn: Function }) => {
    const user = useIsAuthStore((state) => state.user);
  const setUser = useIsAuthStore((state) => state.setUser);

  const [name, setName] = useState(user?.name);
  const [pronouns, setPronouns] = useState(user?.pronouns);
  const [bio, setBio] = useState(user?.bio)
  const [loading, setLoading] = useState(false);

  const updateUser = async() => {
    // fn(false)
    setLoading(true);

    const data = {
      name,
      pronouns,
      bio
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }

    // API call to update details
    const response = await axios.put(`${BACKEND_URL}/user/update`, data, config);

    console.log(response)

    if(response.data.status === "success") {
      // Update details in local storage
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
    }

    setUser(response.data.data.user);

    setLoading(false);
    fn(false);

  }

  return (
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="text-xs font-medium">Pronouns</label>
        <input
          type="text"
          className="outline-none bg-gray-100 rounded w-full py-2 px-3"
          value={pronouns}
          onChange={(e) => setPronouns(e.target.value)}
        />
      </div>
      <div>
        <label className="text-xs font-medium">Short bio</label>
        <textarea className="outline-none bg-gray-100 rounded w-full py-2 h-20 px-3"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        ></textarea>
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
        onClick={updateUser}
      >
        {loading ? "Saving..." : "Save"}
      </BlogNavButton>
    </div>
  </Modal>
  )
};

export default ProfileModal;
