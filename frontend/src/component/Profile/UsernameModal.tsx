import { useState } from "react";
import { useIsAuthStore } from "../../store/isAuthState";
import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import Modal from "./Modal";
import axios from "axios";
import { BACKEND_URL } from "../../constant";

const UsernameModal = ({fn}:{fn:Function}) => {
  const user = useIsAuthStore((state) => state.user);
  const setUser = useIsAuthStore((state) => state.setUser);
  const [username, setUsername] = useState(user?.name || "");
  const [loading, setLoading] = useState(false);
  const changeUsername = async () => {
    setLoading(true);

    const data = {
      name: username,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }

    // API call to update email
    const response = await axios.post(`${BACKEND_URL}/user/update`, data, config);

    if(response.data.status === "success") {
      // Update email in local storage
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
    }

    setUser(response.data.data.user);

      setLoading(false);
      fn(false);
  }
  
  return (
    <Modal title="Username" fn={fn} >
      <input
        type="text"
        className="outline-none bg-gray-100 rounded w-full py-2 px-3 font-medium text-sm"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="flex justify-between">
        <p className="text-xs opacity-70 font-medium py-2">vichaar.live/@{username}</p>
        <p className="text-xs opacity-70 font-medium py-2">9/30</p>
      </div>
      <div className="flex justify-end gap-3">
        <BlogNavButton className="border border-green-900 text-green-600" onClick={()=>fn(false)} >Cancel</BlogNavButton>
        <BlogNavButton className="bg-green-800 text-white" onClick={()=>{changeUsername()}} disabled= {user?.name === username} >
          {loading ? "Saving..." : "Save"}
        </BlogNavButton>
      </div>
    </Modal>
  )
};

export default UsernameModal;
  