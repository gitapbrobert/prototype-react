import React, { useRef } from 'react';
import {  Willow, WillowDark, Toolbar } from "wx-react-gantt";
import "wx-react-gantt/dist/gantt.css";
import MyGanttComponent from './Gantt';
import Header from './Header';
import "../assets/App.css";

function App() {

  return (
    <>
    <div>
        <Header/>
        <WillowDark>
          <MyGanttComponent/>
        </WillowDark>
      </div>
    </>
  );
}

export default App;