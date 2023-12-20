import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<p>home</p>} />
          <Route path="/about" element={<p>about</p>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
