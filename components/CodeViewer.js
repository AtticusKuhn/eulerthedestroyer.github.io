import { useEffect, useRef } from "react";

export function AceCodeViewer({
  children = "print(1)",
  language = "javascript"
} = {}) {
  children=children.trim()
  // console.log({children, language})
  const viewer = useRef(null);
  // const language =
  //   className && className.indexOf("-") > -1
  //     ? className.split("-")[className.split("-").length - 1]
  //     : "python";
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("children", children);
      console.log("className", language);
      const editor = ace.edit(viewer.current, {
        mode: `ace/mode/${language}`,
        theme: "ace/theme/textmate",
        fontSize: 15,
        cursorStyle: "smooth",
        readOnly: true,
        maxLines: 30,
        minLines: 2
      });
      editor.setValue(children, -1);
      return () => {
        editor.destroy();
      };
    }
  }, [children, language]);
  return (
    <>
      <div className="row">
        <div className="editor-content">
          <div ref={viewer} className={`editor ${language}`}>
            {children}
          </div>
          <div className="editor-control" />
        </div>
      </div>
      <style jsx>{`
        .editor-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          white-space: pre;
        }
        .editor {
          width: 100%;
          height: 250%;
          white-space: pre;
          -webkit-user-select: auto;
          user-select: auto;
          -webkit-user-drag: none;
          padding: 2px 0;
        }
        .display_code_editor * {
          white-space: pre;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          margin-top: 36px;
          transition-duration: 300ms;
        }
        .editor .ace_marker-layer .ace_bracket * {
          margin-top: 1px !important;
          margin-left: 0.5px !important;
        }
        .editor-control * {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          margin-top: 16px;
        }
        .row {
          display: flex;
          flex-direction: row;
          margin: 20px 0;
        }
        .ace_editor {
          margin: auto;
          width: 80%;
        }
        .scrollmargin {
          text-align: center;
        }
      `}</style>
    </>
  );
}