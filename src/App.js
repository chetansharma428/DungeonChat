import  Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.scss"
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Register from "./pages/Register";
function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute  = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element = {
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
            }
            />
          <Route path="Login" element = {<Login/>}/>
          <Route path="register" element = {<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
