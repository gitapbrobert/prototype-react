import { Willow, WillowDark } from "wx-react-gantt";
import GanttComponent from "../components/Gantt";
import Header from "../components/Header";
import SalesPlanBar from "../components/SalesPlanBar";

const Orders = () => {
  return (
      <>
          <SalesPlanBar />
          <Willow>
            <GanttComponent />
          </Willow>

      </>

  );
};

export default Orders;