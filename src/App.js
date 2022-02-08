import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import RoutedSidebar from "./components/RoutedSidebar";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

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
      <main className="App">
        <Nav navs={this.state.navs}></Nav>
        <RoutedSidebar />
        <div className="Routes">
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
