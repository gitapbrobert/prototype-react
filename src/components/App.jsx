import React from 'react';
import { Gantt } from "wx-react-gantt";
import { Willow } from "wx-react-gantt";
import "wx-react-gantt/dist/gantt.css";
import MyGanttComponent from './Gantt';



function App() {
  return (
    <>
    <Willow>
      <MyGanttComponent/>
    </Willow>
    </>
    
  );
}

export default App;