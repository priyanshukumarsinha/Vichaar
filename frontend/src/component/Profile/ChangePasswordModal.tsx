import { useState, useCallback } from "react";
import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import Modal from "./Modal";
import axios from "axios";
import { BACKEND_URL } from "../../constant";
import { useIsAuthStore } from "../../store/isAuthState";
import ErrorMessage from "../Popup/Email/ErrorMessage";

const ChangePasswordModal = ({ fn }: { fn: Function }) => {
  const [loading, setLoading] = useState(false);
  const setUser = useIsAuthStore((state) => state.setUser);
  const setIsAuth = useIsAuthStore((state) => state.setIsAuth);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const changePassword = useCallback(async () => {
    setError("");
    setLoading(true);

    try {
      const response = await axios.put(
        `${BACKEND_URL}/user/password`,
        { oldPassword, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.status === "success") {
        console.log("Password Updated Successfully!");
      }

      fn(false);
    } catch (error: any) {
      console.error("Error:", error?.response?.data?.message || "Unknown error");
      setError(error?.response?.data?.message || "An unexpected error occurred.");
    }

    setLoading(false);
  }, [oldPassword, newPassword, fn]);

  return (
    <Modal title="Change Password" fn={fn}>
      {error && <ErrorMessage message={error} />}

      <InputField
        label="Enter Your Old Password:"
        value={oldPassword}
        onChange={(e) => {
          setError("");
          setOldPassword(e.target.value);
        }}
      />

      <InputField
        label="Create New Password:"
        value={newPassword}
        onChange={(e) => {
          setError("");
          setNewPassword(e.target.value);
        }}
      />

      <div className="flex justify-end gap-3 pt-5">
        <BlogNavButton className="border border-red-900 text-green-600" onClick={() => fn(false)}>
          Cancel
        </BlogNavButton>
        <BlogNavButton
          className="bg-green-800 text-white"
          disabled={!oldPassword || !newPassword}
          onClick={changePassword}
        >
          {loading ? "Changing ..." : "Save"}
        </BlogNavButton>
      </div>
    </Modal>
  );
};

const InputField = ({ label, value, onChange }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <>
    <p className="text-sm mt-2 mb-2 opacity-70 font-medium">{label}</p>
    <input
      type="password"
      value={value}
      onChange={onChange}
      className="outline-none bg-gray-100 rounded w-full py-2 px-3 font-medium text-sm"
    />
  </>
);

export default ChangePasswordModal;
