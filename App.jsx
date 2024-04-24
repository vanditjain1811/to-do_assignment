
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";


function App() {
  return (
    // Wrapping the components with TodoItemsContextProvider to provide access to the todo items context
    <TodoItemsContextProvider>
      {/* Centering the content */}
      <center className="todo-container">
        {/* Container for the title */}
        <div className="title">
          {/* Rendering the AppName component */}
          <AppName />
        </div>
        {/* Container for adding todos and displaying todo items */}
        <div className="add">
          {/* Container for the AddTodo component */}
          <div className="addtodo">
            <AddTodo />
          </div>
          {/* Container for the WelcomeMessage and TodoItems components */}
          <div className="items">
            {/* Rendering the WelcomeMessage component */}
            <WelcomeMessage></WelcomeMessage>
            {/* Rendering the TodoItems component */}
            <TodoItems></TodoItems>
          </div>
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}


export default App;
