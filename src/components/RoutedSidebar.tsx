import {
  GpRoutedSidebar,
  GpRoutedSidepanel,
} from "../gp-react/GpRoutedSidebar";

const RoutedSidebar: React.FC<{}> = () => {
  return (
    <GpRoutedSidebar className="Sidebar">
      <GpRoutedSidepanel name="home" icon="gpi-cockpit" small>
        The Cockpit
      </GpRoutedSidepanel>
      <GpRoutedSidepanel name="about" icon="gpi-filled-squared-car" medium>
        Second panel
      </GpRoutedSidepanel>
      <GpRoutedSidepanel name="contact" icon="gpi-object-selection" xlarge>
        Object Selection
      </GpRoutedSidepanel>
    </GpRoutedSidebar>
  );
};

export default RoutedSidebar;
