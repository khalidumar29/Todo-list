import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import TodoProvider from "./Contex/TodoProvider";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <TodoProvider>
        <Navbar>
          <Home></Home>
        </Navbar>
      </TodoProvider>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
}

export default App;
