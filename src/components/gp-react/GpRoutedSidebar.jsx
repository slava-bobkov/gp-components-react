import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { GpRoutedSidebarElement } from "@enersis/gp-components/src/gp-routed-sidebar/gp-routed-sidebar";

export const GpRoutedSidebar = createComponent(
  React,
  "gp-routed-sidebar",
  GpRoutedSidebarElement
);
