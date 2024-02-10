import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
