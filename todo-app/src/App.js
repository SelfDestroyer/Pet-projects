import TodoList from "./Components/TodoList/TodoList";
import { Provider } from "react-redux";
import { store } from "./App/store";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
