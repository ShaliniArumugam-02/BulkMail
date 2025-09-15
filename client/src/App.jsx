import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from './pages/Main'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/main" element={<Home/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
