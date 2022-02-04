import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import RoutedSidebar from "./components/RoutedSidebar";
import Sidebar from "./components/Sidebar";

type AppProps = any;

interface AppState {
  navs: Array<{
    id: string;
    label: string;
  }>;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
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
        {/* <RoutedSidebar /> */}
        <Sidebar />
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
