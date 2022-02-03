import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { GpRoutedSidepanelElement } from "@enersis/gp-components/src/gp-routed-sidebar/gp-routed-sidepanel";

export const GpRoutedSidepanel = createComponent(
  React,
  "gp-routed-sidepanel",
  GpRoutedSidepanelElement
);
