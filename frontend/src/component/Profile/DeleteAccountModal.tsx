import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import Modal from "./Modal";

const DeleteAccountModal = ({fn}:{fn:Function}) => (
    <Modal title="Delete Account" fn={fn} >
      <p className="text-sm mb-5 opacity-70 font-medium">
        We’re sorry to see you go. Once your account is deleted, all of your content will be permanently gone.
      </p>
      <p className="text-sm opacity-70 font-medium">To confirm deletion, type “delete” below:</p>
      <input type="text" className="outline-none bg-gray-100 rounded w-full py-2 px-3 font-medium text-sm" />
      <div className="flex justify-end gap-3 pt-5">
        <BlogNavButton className="border border-red-900 text-red-600" onClick={()=>fn(false)}>Cancel</BlogNavButton>
        <BlogNavButton className="bg-red-800/40 text-white" onClick={()=>fn(false)}>Delete</BlogNavButton>
      </div>
    </Modal>
  );


export default DeleteAccountModal
  