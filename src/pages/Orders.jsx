import { Willow, WillowDark } from "wx-react-gantt";
import GanttComponent from "../components/Gantt";
import "../assets/GanttStyles.css";
import "wx-react-gantt/dist/gantt.css";
const Orders = () => {
  return (
      <>
          {/* <SalesPlanBar /> */}
          <div className="prueba">
        <Willow>
          <GanttComponent />
        </Willow>
          </div>

      </>
  );
};

export default Orders;