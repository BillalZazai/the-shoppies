import React from "react";
import { TabBar } from "./components/TabBar";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { NominationsProvider } from "./context/NominationsContext";

function App() {
  return (
    <React.Fragment>
      <Row className="justify-content-md-center">
        <Card className="text-white header-card">
          <Card.Img src="./oscar.png" alt="Card image" />
          <Card.ImgOverlay> 
            <h1 className="header" style={{ textAlign: "center" }}>Shoppies</h1>
          </Card.ImgOverlay>
        </Card>

        
      </Row>

      <NominationsProvider>
        <TabBar />
      </NominationsProvider>
    </React.Fragment>
  );
}

export default App;
