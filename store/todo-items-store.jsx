
import { createContext, useState } from "react";

// Creating a new context
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// Functional component definition
const TodoItemsContextProvider = ({ children }) => {
  // State to manage the list of todo items
  const [todoItems, setTodoItems] = useState([]);

  // Function to add a new item to the todo list
  const addNewItem = (itemName) => {
    setTodoItems([...todoItems, { name: itemName }]);
  };

  // Function to delete an item from the todo list
  const deleteItem = (itemName) => {
    setTodoItems(todoItems.filter((item) => item.name !== itemName));
  };

  // Providing the todo items array and the add/delete functions to the context
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
