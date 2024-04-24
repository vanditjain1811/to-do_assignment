
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem"; // Importing the TodoItem component
import styles from "./TodoItems.module.css"; // Importing CSS module for component-specific styles

// Functional component definition
const TodoItems = () => {
  // Accessing todoItems from the TodoItemsContext
  const { todoItems } = useContext(TodoItemsContext);

  return (
    // Container for todo items with styles applied from CSS module
    <div className={styles.itemsContainer}>
      {/* Mapping through todoItems array and rendering TodoItem component for each item */}
      {todoItems.map((item) => (
        <TodoItem
          key={item.name} // Using item name as the key
          todoName={item.name} // Passing todo name as prop to TodoItem component
        />
      ))}
    </div>
  );
};


export default TodoItems;
