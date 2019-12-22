import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <div>
        <br />
        <Note title="this is the title" content="this is the content" />
        <Note title="Hello Keeper" content="farst Note" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
