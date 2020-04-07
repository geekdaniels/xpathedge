import React from "react";

import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="wrapper">
        <Sidebar />

        {/* Page Content  */}
        <div id="content">
          <h2>Welcome to my test page</h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
