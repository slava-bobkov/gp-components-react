import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { GpSidebarElement } from "@enersis/gp-components/src/gp-sidebar/gp-sidebar";

const GpSidebar = createComponent(React, "gp-sidebar", GpSidebarElement);

export default GpSidebar;
