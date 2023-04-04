import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import TodoProvider from "./Contex/TodoProvider";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import RequireAuth from "./Auth/RequireAuth";

function App() {
  return (
    <div>
      <TodoProvider>
        <Routes>
          <Route
            path='/'
            element={
              <RequireAuth>
                <Navbar>
                  <Home></Home>
                </Navbar>
              </RequireAuth>
            }
          ></Route>
          <Route
            path='/sing-up'
            element={
              <Navbar>
                <SignUp />
              </Navbar>
            }
          ></Route>
          <Route
            path='/log-in'
            element={
              <Navbar>
                <LogIn />
              </Navbar>
            }
          ></Route>
          <Route path='*' component={() => "404 NOT FOUND"} />
        </Routes>
      </TodoProvider>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
}

export default App;
