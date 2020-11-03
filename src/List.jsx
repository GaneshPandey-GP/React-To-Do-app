import React,{useState} from "react";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';
const List = (probs) => {
  const [line, setNewline] = useState(false);
  const strikes = () => {
      setNewline(true)
  };
  return (
    <>
      <div className="todo_style">
        
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {probs.value}
        </li>
        <CheckCircleOutlineTwoToneIcon className="icon" onClick={strikes} />
        <DeleteTwoToneIcon
          className="icon"
          onClick={() => {
            probs.onclicks(probs.id);
          }}
        />
      </div>
    </>
  );
};
export default List;
