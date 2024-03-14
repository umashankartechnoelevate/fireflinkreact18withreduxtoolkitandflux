import logo from "./logo.svg";
import "./App.css";
import { MainRoute } from "./Routes/MainRoute";
import { MainContextProvider } from "./Context/MainContext";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    //wrapping app component within Provider so that we can able to get store data in each component as like context provider
    <Provider store={store}>
      <MainContextProvider>
        <MainRoute />
      </MainContextProvider>
    </Provider>
  );
}

export default App;
