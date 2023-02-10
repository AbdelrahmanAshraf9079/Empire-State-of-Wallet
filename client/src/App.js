import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home.js"
function App() {
  //React Router contains a single route for the home page
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
