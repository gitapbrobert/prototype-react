import React, { useRef } from 'react';
import {  Willow, WillowDark, Toolbar } from "wx-react-gantt";
import "wx-react-gantt/dist/gantt.css";
import MyGanttComponent from './Gantt';
import Header from './Header';
import "../assets/App.css";

function App() {
  const apiRef = useRef();

  const items = [
    {
      id: "add-task",
      comp: "button",
      icon: "wxi-bi-calendar2-plus",
      text: "Add task",
      type: "primary",
    },
    {
      id: "edit-task",
      comp: "button",
      icon: "wxi-edit",
      text: "edit",
      type: "link",
    },
  ];
  return (
    <>
    <div>
        <Header/>
        <WillowDark>
          <Toolbar api={apiRef.current} items={items}/>
          <MyGanttComponent apiRef={apiRef}/>
        </WillowDark>
      </div>
    </>
  );
}

export default App;