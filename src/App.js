import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import './App.css';
import Login from "./components/login/Login";
import Sucessful from "./components/login/Sucessful";

import { useAuthContext } from "./hooks/useAuthContext";

function App() {

  const {authIsReady,user}=useAuthContext()

  return (
    <div className="App">
      {/* <h2>hii</h2> */}
      {authIsReady &&
      <BrowserRouter>
      <Routes>
      <Route path="/" element={!user?<Login/>:<Navigate replace to={"/success"}/>} />
      <Route path="/success" element={user?<Sucessful/>:<Navigate replace to={"/"}/>}/>
      </Routes>
      </BrowserRouter>}
    </div>
  );
}

export default App;
