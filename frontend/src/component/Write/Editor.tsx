import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Table from "@editorjs/table";
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Underline from "@editorjs/underline";
import { useEffect, useRef } from "react";

const Editor = () => {
  const editor = useRef<EditorJS | null>(null);
  const autosaverRef = useRef<number | null>(null);

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
          config: {
            placeholder: "",
          },
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

        startAutoSave(); 

      },
    });


    return () => {
      stopAutoSave();
      editor.current?.destroy();
      editor.current = null;
    };
  }, []);

  const startAutoSave = () => {
    if (autosaverRef.current) return; // Prevent duplicate intervals

    autosaverRef.current = window.setInterval(async () => {
      if (editor.current) {
        try {
          const data = await editor.current.save();
          localStorage.setItem("blog", JSON.stringify(data));
        } catch (error) {
          console.error("Auto-save failed:", error);
        }
      }
    }, 5000); // Save every 5 seconds (1 second may be too frequent)
  };

  // ✅ Function to stop auto-saving
  const stopAutoSave = () => {
    if (autosaverRef.current) {
      clearInterval(autosaverRef.current);
      autosaverRef.current = null;
    }
  };

  return <div id="editorjs" className="font-gt-super p-5"></div>;
};

export default Editor;
