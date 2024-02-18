import { Home } from "./Pages/Home.tsx";
import {StatusBar} from "react-native";

const App = () => {
  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#121014" />
        <Home />
      </>
  );
}

export default App;