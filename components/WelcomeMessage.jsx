
import { useContext } from "react";
import styles from "./WelcomeMessage.module.css"; // Importing CSS module for component-specific styles
import { TodoItemsContext } from "../store/todo-items-store";

// Functional component definition
const WelcomeMessage = () => {
  // Accessing todoItems from the TodoItemsContext
  const { todoItems } = useContext(TodoItemsContext);

  // Rendering a welcome message when there are no todo items
  return (
    // Rendering the message only when todoItems array length is 0
    todoItems.length === 0 && <p className={styles.welcome}>No Task</p>
  );
};


export default WelcomeMessage;
