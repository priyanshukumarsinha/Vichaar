import { useState } from "react";
import { useIsAuthStore } from "../../store/isAuthState";
import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import Modal from "./Modal";
import axios from "axios";
import { BACKEND_URL } from "../../constant";

const UsernameModal = ({ fn }: { fn: Function }) => {
  const user = useIsAuthStore((state) => state.user);
  const setUser = useIsAuthStore((state) => state.setUser);
  const [username, setUsername] = useState(user?.username || "");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const changeUsername = async () => {
    try {
      setLoading(true);
      setError(""); // Reset previous errors

      const token = localStorage.getItem("token");
      if (!token) throw new Error("User not authenticated");

      const { data } = await axios.put(
        `${BACKEND_URL}/user/update`,
        { username },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.status !== "success")
        throw new Error(data.message || "Username update failed");

      const updatedUser = data.data.user;
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (error: any) {
      console.error("Error updating username:", error);
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
      fn(false);
    }
  };

  return (
    <Modal title="Username" fn={fn}>
      {error && (
        <p className="text-red-600 text-sm font-medium py-2">{error}</p>
      )}
      <input
        type="text"
        className="outline-none bg-gray-100 rounded w-full py-2 px-3 font-medium text-sm"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="flex justify-between">
        <p className="text-xs opacity-70 font-medium py-2">
          vichaar.live/@{username}
        </p>
        <p className="text-xs opacity-70 font-medium py-2">9/30</p>
      </div>
      <div className="flex justify-end gap-3">
        <BlogNavButton
          className="border border-green-900 text-green-600"
          onClick={() => fn(false)}
        >
          Cancel
        </BlogNavButton>
        <BlogNavButton
          className="bg-green-800 text-white"
          onClick={() => {
            changeUsername();
          }}
          disabled={user?.name === username}
        >
          {loading ? "Saving..." : "Save"}
        </BlogNavButton>
      </div>
    </Modal>
  );
};

export default UsernameModal;
