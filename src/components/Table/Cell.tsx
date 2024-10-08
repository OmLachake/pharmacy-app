import { useState } from "react";
import ContentEditable from "react-contenteditable";

/* eslint-disable @typescript-eslint/no-explicit-any */
const EditableCell = ({ value, rowIndex, columnId, updateMyData }:any) => {
    const [editableValue, setEditableValue] = useState(value);
  /* eslint-disable @typescript-eslint/no-explicit-any */
    const handleChange = (e:any) => {
      setEditableValue(e.target.value);
    };
  
    const handleBlur = () => {
      updateMyData(rowIndex, columnId, editableValue);
    };
  
    return (
      <ContentEditable
        html={editableValue}
        onChange={handleChange}
        onBlur={handleBlur}
        className="overflow-hidden w-full p-2"
      />
    );
  };

export default EditableCell