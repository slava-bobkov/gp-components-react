import React from "react";
import { createComponent } from "@lit-labs/react";
import {
  GpSidebarElement,
  GpSidepanelElement,
} from "@enersis/gp-components/gp-sidebar";

export const GpSidebar = createComponent(React, "gp-sidebar", GpSidebarElement);
export const GpSidepanel = createComponent(
  React,
  "gp-sidepanel",
  GpSidepanelElement
);
