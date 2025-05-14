import "wx-react-gantt/dist/gantt.css";
import "../assets/App.css";
import {  Willow, WillowDark, Toolbar } from "wx-react-gantt";
import MyGanttComponent from './Gantt';
import Header from './Header';
import SalesPlanBar from './SalesPlanBar';

function App() {

  return (
    <>
    <div>
        <Header/>
        <SalesPlanBar/>
        
        <WillowDark>
          <MyGanttComponent/>
        </WillowDark>
      </div>
    </>
  );
}

export default App;