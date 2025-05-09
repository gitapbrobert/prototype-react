import React from 'react';
import { Gantt, WillowDark } from "wx-react-gantt";
import { Willow } from "wx-react-gantt";
import "wx-react-gantt/dist/gantt.css";
import MyGanttComponent from './Gantt';
import SideBar from './SideBar';
import Header from './Header';


function App() {
  return (
    <>
    <div>
        <Header></Header>
      </div>
    <div className="d-flex">
      
      
      
      
      
      <div className="flex-grow-1 p-3">
        <WillowDark>
          <MyGanttComponent/>
        </WillowDark>
      </div>
    </div>

    
    </>
    
  );
}

export default App;