import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import GpRoutedSidebar from "./components/gp-react/GpRoutedSidebar";
import GpRoutedSidepanel from "./components/gp-react/GpRoutedSidepanel";

function App() {
  return (
    <div className="App">
      <GpRoutedSidebar>
        <GpRoutedSidepanel
          tooltipName="Cockpit"
          name="cockpit"
          icon="gpi-cockpit"
          small
        >
          The Cockpit
        </GpRoutedSidepanel>
        <GpRoutedSidepanel
          tooltipName="My Panel"
          name="second-panel"
          icon="gpi-filled-squared-car"
          medium
        >
          Second panel
        </GpRoutedSidepanel>
        <GpRoutedSidepanel
          tooltipName="My Panel"
          name="object-selection"
          icon="gpi-object-selection"
          xlarge
        >
          Object Selection
        </GpRoutedSidepanel>
      </GpRoutedSidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
