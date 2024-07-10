import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Books from "./Components/Books";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import AddStudent from "./Components/AddStudent";
import {useState} from "react"
import Logout from "./Components/Logout";
import AddBook from "./Components/AddBook";
import EditBook from "./Components/EditBook";
import  DeleteBook from "./Components/DeleteBook";



function App() {

  const [role, setRole] = useState('')
  return (
    <BrowserRouter>
      <Navbar role = {role} />
      <Routes>
        <Route path="/" element={<Home  setRole = {setRole}/>}></Route>
        <Route path="/books" element={<Books role = {role}/>}></Route>
        <Route path="/login" element={<Login setRoleVar = {setRole}/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/addstudent" element={<AddStudent/>}></Route>
        <Route path="/logout" element={<Logout setRole = {setRole}/>}></Route>
        <Route path="/addbook" element={<AddBook/>}></Route>
        <Route path="/book/:id" element={<EditBook/>}></Route>
        <Route path="/delete/:id" element={<DeleteBook/>}></Route>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
