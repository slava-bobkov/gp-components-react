import React from "react";
import { GpRoutedSidebarElement } from "@enersis/gp-components/react/gp-routed-sidebar";
import { GpRoutedSidepanelElement } from "@enersis/gp-components/react/gp-routed-sidepanel";

const RoutedSidebar = () => {
  return (
    <GpRoutedSidebarElement className="Sidebar">
      <GpRoutedSidepanelElement name="home" icon="gpi-cockpit" small>
        The Cockpit
      </GpRoutedSidepanelElement>
      <GpRoutedSidepanelElement
        name="about"
        icon="gpi-filled-squared-car"
        medium
      >
        Second panel
      </GpRoutedSidepanelElement>
      <GpRoutedSidepanelElement
        name="contact"
        icon="gpi-object-selection"
        xlarge
      >
        Object Selection
      </GpRoutedSidepanelElement>
    </GpRoutedSidebarElement>
  );
};

export default RoutedSidebar;
