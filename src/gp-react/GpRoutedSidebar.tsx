import React from "react";
import { createComponent } from "@lit-labs/react";
import {
  GpRoutedSidebarElement,
  GpRoutedSidepanelElement,
} from "@enersis/gp-components/gp-routed-sidebar";

export const GpRoutedSidebar = createComponent(
  React,
  "gp-routed-sidebar",
  GpRoutedSidebarElement
);
export const GpRoutedSidepanel = createComponent(
  React,
  "gp-routed-sidepanel",
  GpRoutedSidepanelElement
);
