import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {Home} from "../Home";
import {Nominations} from "../Nominations";

export const TabBar = () => {
  return (
        <Tabs  variant="pills" defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <Home />
          </Tab>
          <Tab eventKey="nominations" title="Nominations">
            <Nominations />
          </Tab>
        </Tabs>
  );
}
