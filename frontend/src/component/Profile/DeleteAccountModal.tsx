import { useState } from "react";
import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import Modal from "./Modal";
import axios from "axios";
import { BACKEND_URL } from "../../constant";
import { useIsAuthStore } from "../../store/isAuthState";
import { useNavigate } from "react-router-dom";

const DeleteAccountModal = ({fn}:{fn:Function}) => {
  const [loading, setLoading] = useState(false);
    const setUser = useIsAuthStore((state) => state.setUser);
    const navigate = useNavigate();
    const setIsAuth = useIsAuthStore((state)=> state.setIsAuth)

    const [confirmation, setConfirmation] = useState("");

  const deleteAccount = async() => {
    setLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    // API call to update email
    const response = await axios.delete(
      `${BACKEND_URL}/user/delete`,
      config
    );

    if (response.data.status === "success") {
      // Update email in local storage
      localStorage.clear();
    }

    setIsAuth(false);

    setUser({});

    setLoading(false);
    fn(false);
    navigate("/");
  }
  return (
    <Modal title="Delete Account" fn={fn} >
      <p className="text-sm mb-5 opacity-70 font-medium">
        We’re sorry to see you go. Once your account is deleted, all of your content will be permanently gone.
      </p>
      <p className="text-sm opacity-70 font-medium">To confirm deletion, type “delete” below:</p>
      <input 
      value={confirmation}
      onChange={(e)=>setConfirmation(e.target.value)}
      type="text" className="outline-none bg-gray-100 rounded w-full py-2 px-3 font-medium text-sm" />
      <div className="flex justify-end gap-3 pt-5">
        <BlogNavButton className="border border-red-900 text-red-600" onClick={()=>fn(false)}>Cancel</BlogNavButton>
        <BlogNavButton className="bg-red-800 text-white" disabled= {confirmation!=="delete"} onClick={deleteAccount}>
        {loading ? "Deleting ..." : "Delete"}
        </BlogNavButton>
      </div>
    </Modal>
  );
}


export default DeleteAccountModal
  