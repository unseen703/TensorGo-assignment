import { BrowserRouter, Routes, Route , redirect} from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./pages/Users";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" exact component = {()=> <redirect to="/"/>} /> */}

          <Route path="/" element={<Users />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
