import { useContext } from "react";
import { useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import AddIcon from "@mui/icons-material/Add";

function AddTodo() {
  // Accessing the addNewItem function from the TodoItemsContext
  const { addNewItem } = useContext(TodoItemsContext);

  // State to manage the todo name input value
  const [todoName, setTodoName] = useState();

  // Function to handle changes in the input field
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  // Function to handle the click event of the add button
  const handleAddButtonClicked = () => {
    // Call the addNewItem function with the todoName as an argument
    addNewItem(todoName);

    // Clear the todoName input field after adding the new item
    setTodoName("");
  };

  return (
    <div className="container ct text-center">
      <div className="row kg-row">
        {/* Todo name input column */}
        <div className="col-8">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
            className="input"
            style={{ textAlign: "center" }} // Center-align the placeholder text
          />
        </div>

        {/* Add button column */}
        <div className="col-2">
          <button
            type="button"
            className="btn kg-button"
            onClick={handleAddButtonClicked}
            style={{ backgroundColor: "#F4AFAB" }} // Set background color of the button
          >
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
