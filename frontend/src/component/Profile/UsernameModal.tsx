import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import Modal from "./Modal";

const UsernameModal = ({fn}:{fn:Function}) => (
    <Modal title="Username" fn={fn} >
      <input
        type="text"
        className="outline-none bg-gray-100 rounded w-full py-2 px-3 font-medium text-sm"
        value="priyashuk"
        readOnly
      />
      <div className="flex justify-between">
        <p className="text-xs opacity-70 font-medium py-2">vichaar.live/@priyanshuk</p>
        <p className="text-xs opacity-70 font-medium py-2">9/30</p>
      </div>
      <div className="flex justify-end gap-3">
        <BlogNavButton className="border border-green-900 text-green-600" onClick={()=>fn(false)} >Cancel</BlogNavButton>
        <BlogNavButton className="bg-green-800/40 text-white" onClick={()=>fn(false)} >Save</BlogNavButton>
      </div>
    </Modal>
  );

export default UsernameModal;
  