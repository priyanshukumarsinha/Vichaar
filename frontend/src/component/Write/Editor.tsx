import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import Table from "@editorjs/table";
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Underline from "@editorjs/underline";
// import Strikethrough from "@editorjs/marker"; // Use marker for strikethrough effect
import { useEffect, useRef } from "react";

const Editor = () => {
  const editor = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (editor.current) return;

    editor.current = new EditorJS({
      holder: "editorjs",
      tools: {
        header: {
          class: Header as any,
          inlineToolbar: true, // ✅ Ensure inline toolbar is enabled globally
          config: {
            placeholder: "Title",
            levels: [1, 2, 3, 4],
            defaultLevel: 1,
          },
        },
        paragraph: {
          class: Paragraph as any,
          inlineToolbar: [
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "link",
          ], // ✅ Make sure the toolbar options are correct
        },
        list: List as any,
        table: Table as any,
        image: {
          class: ImageTool,
          inlineToolbar: ["bold", "italic", "link"],
          config: {
            endpoints: {
              byFile: "http://localhost:8008/uploadFile",
              byUrl: "http://localhost:8008/fetchUrl",
            },
          },
        },
        underline: Underline, // ✅ Add Underline tool
      },
      data: {
        blocks: [
          {
            type: "header",
            data: { level: 1, text: "" },
          },
          {
            type: "paragraph",
            data: { text: "Tell your story here ..." }, // Placeholder text
          },
        ],
      },
      onReady: () => {
        setTimeout(() => {
          const firstParagraph = document.querySelector(
            ".ce-paragraph"
          ) as HTMLElement;
          if (firstParagraph && !firstParagraph.dataset.init) {
            firstParagraph.id = "first-paragraph";
            firstParagraph.dataset.init = "true"; // Prevent multiple event bindings

            firstParagraph.addEventListener("click", () => {
              if (firstParagraph.innerText === "Tell your story here ...") {
                firstParagraph.innerText = "";
              }
              firstParagraph.id = "";
            });
          }
        }, 100); // Short delay to ensure rendering
      },
    });

    return () => {
      editor.current?.destroy();
      editor.current = null;
    };
  }, []);

  return <div id="editorjs" className="font-gt-super p-5"></div>;
};

export default Editor;
