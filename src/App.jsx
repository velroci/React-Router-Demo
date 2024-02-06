
import "./App.css";
import "./index.css";
import { Link, Routes, Route } from "react-router-dom";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     
     <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
      <a href="./home">HOME</a>
        <a href="./blue">BLUE</a>
        <a href="./red">RED</a>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<h1>Home</h1>}/>
          <Route path="/blue" element={<h1>Blue</h1>}/>
          <Route path="/red" element={<h1>Red</h1>}/>
        </Routes>

      </div>
    </div>
    </>
  )
}

export default App
