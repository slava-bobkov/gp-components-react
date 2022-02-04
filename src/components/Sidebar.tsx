import { GpSidebar, GpSidepanel } from "../gp-react/GpSidebar";

const Sidebar: React.FC<{}> = () => {
  return (
    <GpSidebar className="Sidebar">
      <GpSidepanel name="cockpit" icon="gpi-cockpit" small>
        The Cockpit
      </GpSidepanel>
      <GpSidepanel name="second-panel" icon="gpi-filled-squared-car" medium>
        Second panel
      </GpSidepanel>
      <GpSidepanel name="object-selection" icon="gpi-object-selection" xlarge>
        Object Selection
      </GpSidepanel>
    </GpSidebar>
  );
};

export default Sidebar;
