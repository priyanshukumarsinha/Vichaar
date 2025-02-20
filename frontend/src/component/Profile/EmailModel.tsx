import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import Modal from "./Modal";

const EmailModal = ({fn}:{fn:Function}) => (
    <Modal title="Email Address" fn={fn} >
      <input
        type="text"
        className="outline-none bg-gray-100 rounded w-full py-2 px-3 font-medium text-sm"
        value="priyashuk9066@gmail.com"
        readOnly
      />
      <p className="text-xs mb-5 opacity-70 font-medium py-2">
        You can sign into Medium with this email address.
      </p>
      <div className="flex justify-end gap-3">
        <BlogNavButton className="border border-green-900 text-green-600" onClick={()=>fn(false)} >Cancel</BlogNavButton>
        <BlogNavButton className="bg-green-800/40 text-white" onClick={()=>fn(false)} >Save</BlogNavButton>
      </div>
    </Modal>
  );

export default EmailModal;
  