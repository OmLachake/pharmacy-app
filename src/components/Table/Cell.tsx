import { useState } from "react";
import ContentEditable from "react-contenteditable";

const EditableCell = ({ value, rowIndex, columnId, updateMyData }:any) => {
    const [editableValue, setEditableValue] = useState(value);
  
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