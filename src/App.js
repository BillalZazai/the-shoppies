import React from "react";
import {TabBar} from "./components/TabBar";
import {NominationsProvider} from "./context/NominationsContext"

function App() {
  return (
    <React.Fragment>
        <h1 style={{ textAlign: "center" }}>The Shoppies</h1>
        <h1 style={{ textAlign: "center" }}>🍿 🎬 🎭 🎥</h1>
        <NominationsProvider>
          <TabBar/>
        </NominationsProvider>
        
    </React.Fragment>
  );
}

export default App;