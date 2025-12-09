import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-ful">
      {label && (
        <label className="text-sm text-white inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue="default value"
            init={{
              branding: false,
              hight: 500,
              menubar: true,
              plugins: [
                "advlist autolink list link  image charmap print preview anchor ",
                "seachplace  visualblocks code fullscreen",
                "insertdatetime media table  paste code help wordcount",
              ],
              toolbar: " undo redo  | formatselect | bold italic backcolor |",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
