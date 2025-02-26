import { useEffect, useState } from "react";
import { useIsAuthStore } from "../../store/isAuthState";
import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import Modal from "./Modal";
import axios from "axios";
import { BACKEND_URL } from "../../constant";

const EmailModal = ({fn}:{fn:Function}) => {
  const user = useIsAuthStore((state) => state.user);
  const setUser = useIsAuthStore((state) => state.setUser);
  const [userEmail, setUserEmail] = useState(user?.email);


  const [loading, setLoading] = useState(false);
  const changeEmail = async () => {
    setLoading(true);

    const data = {
      email: userEmail,
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
    <Modal title="Email Address" fn={fn} >
      <input
        type="text"
        className="outline-none bg-gray-100 rounded w-full py-2 px-3 font-medium text-sm"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <p className="text-xs mb-5 opacity-70 font-medium py-2">
        You can sign into Medium with this email address.
      </p>
      <div className="flex justify-end gap-3">
        <BlogNavButton className="border border-green-900 text-green-600" onClick={()=>fn(false)} >Cancel</BlogNavButton>
        <BlogNavButton className="bg-green-800 text-white" onClick={()=>changeEmail()} disabled = {user?.email === userEmail} >
          {loading ? "Saving..." : "Save"}
        </BlogNavButton>
      </div>
    </Modal>
  )
};

export default EmailModal;
  