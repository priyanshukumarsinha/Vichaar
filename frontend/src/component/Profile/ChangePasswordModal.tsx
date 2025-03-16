import { useEffect, useState } from "react";
import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import Modal from "./Modal";
import axios from "axios";
import { BACKEND_URL } from "../../constant";
import { useIsAuthStore } from "../../store/isAuthState";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../Popup/Email/ErrorMessage";

const ChangePasswordModal = ({fn}:{fn:Function}) => {
  const [loading, setLoading] = useState(false);
    const setUser = useIsAuthStore((state) => state.setUser);
    const navigate = useNavigate();
    const setIsAuth = useIsAuthStore((state)=> state.setIsAuth)

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");

  const changePassword = async() => {
    setError("");
    setLoading(true);

    const data = {
      oldPassword,
      newPassword
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    // API call to update email
    try {
      const response = await axios.put(
        `${BACKEND_URL}/user/password`,
        data,
        config
      );
  
      if (response.data.status === "success") {
        // Update email in local storage
        console.log("Password Updated Successfully!!");
      }
      fn(false);
    } catch (error: any) {
        console.log("Some Error Occurred", error.response.data.message);
        setError(error.response.data.message);
    }
      
    

    setLoading(false);
  }

  return (
    <Modal title="Change Password" fn={fn} > 
      {error && <ErrorMessage message={error}/>}
      <p className="text-sm mt-2 mb-2 opacity-70 font-medium">Enter Your Old Passowrd: </p>     
      <input
      value={oldPassword}
      onChange={(e)=>{setError("");setOldPassword(e.target.value)}}
      type="text" className="outline-none bg-gray-100 rounded w-full py-2 px-3 font-medium text-sm" />

      <p className="text-sm mt-5 mb-2 opacity-70 font-medium">
        Create New Password:
      </p>
      <input 
      value={newPassword}
      onChange={(e)=>{setError("");setNewPassword(e.target.value)}}
      type="text" className="outline-none bg-gray-100 rounded w-full py-2 px-3 font-medium text-sm" />

      <div className="flex justify-end gap-3 pt-5">
        <BlogNavButton className="border border-red-900 text-green-600" onClick={()=>fn(false)}>Cancel</BlogNavButton>
        <BlogNavButton className="bg-green-800 text-white" disabled = {(oldPassword==="" || newPassword==="")} onClick={changePassword}>
        {loading ? "Changing ..." : "Save"}
        </BlogNavButton>
      </div>
    </Modal>
  );
}


export default ChangePasswordModal
  