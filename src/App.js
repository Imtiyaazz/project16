import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./component/Landing";
import { Provider } from "react-redux";
import { configStore } from "./state/configStore";

function App() {
  const store = configStore();
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
