import { useContext, useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function TodoItem({ todoName }) {
  // Accessing the deleteItem function from the TodoItemsContext
  const { deleteItem } = useContext(TodoItemsContext);

  // State to manage the checked state of the checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container items">
      <div className="row kg-row">
        {/* Checkbox column */}
        <div className="col-4">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>

        {/* Todo name column */}
        <div className="col-4">
          <span
            style={{
              textDecoration: isChecked ? "line-through" : "none",
              color: isChecked ? "gray" : "black",
              fontSize: "22px"
            }}
          >
            {todoName}
          </span>
        </div>
      
        {/* Delete button column */}
        <div className="col-2">
          <button
            type="button"
            className="btn smaller-button"
            onClick={() => deleteItem(todoName)}
          >
            <DeleteOutlineIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
