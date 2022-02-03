import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import GpSidebar from "./components/gp-react/GpSidebar";
import GpSidepanel from "./components/gp-react/GpSidepanel";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navs: [
        {
          id: "/",
          label: "Home page",
        },
        {
          id: "about",
          label: "About page",
        },
        {
          id: "contact",
          label: "Contact page",
        },
      ],
    };
  }

  render() {
    return (
      <main className="App-container">
        <Nav navs={this.state.navs}></Nav>
        <GpSidebar className="Sidebar-container">
          <GpSidepanel
            tooltipName="Cockpit"
            name="cockpit"
            icon="gpi-cockpit"
            small
          >
            The Cockpit
          </GpSidepanel>
          <GpSidepanel
            tooltipName="My Panel"
            name="second-panel"
            icon="gpi-filled-squared-car"
            medium
          >
            Second panel
          </GpSidepanel>
          <GpSidepanel
            tooltipName="My Panel"
            name="object-selection"
            icon="gpi-object-selection"
            xlarge
          >
            Object Selection
          </GpSidepanel>
        </GpSidebar>
        <div className="Routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    );
  }
}

export default App;
