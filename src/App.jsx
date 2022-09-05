import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CollectionDescription from "./pages/CollectionDescription";
import Collections from "./pages/Collections";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/CollectionDescription"
            element={<CollectionDescription />}
          />
          <Route path="/Collections" element={<Collections />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
