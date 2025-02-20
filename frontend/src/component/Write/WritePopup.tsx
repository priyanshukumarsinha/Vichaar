import { useState } from "react";
import BlogNavButton from "../Blogs/Navbar/BlogNavButton";
import PopupClose from "../Popup/components/PopupClose";
import WritePopupContainer from "./WritePopupContainer";
import { RxCross1 } from "react-icons/rx";

const WritePopup = ({ setShowPreview }: { setShowPreview: Function }) => {
  const [tags, setTags] = useState<string[]>([]);
  return (
    <WritePopupContainer>
      <PopupClose
        fn={() => {
          setShowPreview();
        }}
      />
      <div className="block lg:flex w-full justify-between items-center">
        <div className="w-full px-5 sm:px-15 mt-20 md:p-0 lg:w-[45%] mb-16 lg:mb-0 lg:h-full ">
          <div>
            <h2 className="font-bold opacity-80">Story Preview</h2>
            <img src="" alt="" />
            <div className="w-full px-16 py-20 my-2 bg-gray-50 text-xs leading-5 text-center font-medium">
              <p className="opacity-50">
                Include a high-quality image in your story to make it more
                inviting to readers.
              </p>
            </div>
          </div>
          <div className="my-4">
            <input
              type="text"
              placeholder="Write a Preview Title ..."
              className="border-b-1 border-gray-300 py-1 my-2 w-full font-bold outline-none"
            />
            <input
              type="text"
              placeholder="Write a preview subtitle ..."
              className="border-b-1 border-gray-300 py-1 my-2 w-full text-xs outline-none opacity-60 font-medium"
            />
            <p className="opacity-50 text-xs leading-5 font-medium my-3">
              <strong>Note:</strong> Changes here will affect how your story
              appears in public places like Medium’s homepage and in
              subscribers’ inboxes — not the contents of the story itself.
            </p>
          </div>
        </div>
        <div className="w-full px-5 sm:px-15 mt-20 md:p-0 lg:w-[45%] mb-10 lg:mb-0 lg:h-full">
          <p>
            Publishing to : <span className="font-semibold">Priyanshuk</span>
          </p>
          <p className="text-sm py-5">
            Add or change topics (up to 5) so readers know what your story is
            about
          </p>
          <div className="bg-gray-50 py-2 px-5 border border-gray-200 mb-5 flex gap-3 flex-wrap">
            {tags.length > 0 &&
              tags.map((tag, index) => {
                return (
                  <button
                    key={index}
                    className="text-xs bg-white p-2 border border-gray-200 font-medium flex justify-between items-center"
                  >
                    {tag}
                    <span className="pl-3 opacity-60 cursor-pointer">
                      <RxCross1
                        className="text-[10px]"
                        onClick={() => {
                          setTags(tags.filter((t) => t !== tag));
                        }}
                      />
                    </span>
                  </button>
                );
              })}
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setTags([...tags, (e.target as HTMLInputElement).value]);
                  (e.target as HTMLInputElement).value = "";
                }
              }}
              type="text"
              placeholder="Add a topic ..."
              className=" py-2 text-xs outline-none"
            />
          </div>
          <BlogNavButton
            className="bg-green-600 text-white text-xs opacity-80"
            onClick={() => {}}
          >
            Publish Now
          </BlogNavButton>
        </div>
      </div>
    </WritePopupContainer>
  );
};

export default WritePopup;
