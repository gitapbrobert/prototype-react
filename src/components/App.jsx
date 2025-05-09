import React from 'react';
import { Gantt } from "wx-react-gantt";
import { Willow } from "wx-react-gantt";
import "wx-react-gantt/dist/gantt.css";


const zoomConfig = {
  maxCellWidth: 400,
  level: 1,
  levels: [
    {
      minCellWidth: 200,
      scales: [
        { unit: "year", step: 1, format: "yyyy" },
        { unit: "month", step: 1, format: "MMMM yyy" },
      ],
    },
  ],
};

const data = [
    {
      id: 20,
      text: "New Task",
      start: new Date(2024, 5, 11),
      end: new Date(2024, 6, 12),
      duration: 1,
      progress: 2,
      type: "task",
      lazy: false,
    },
    {
      id: 47,
      text: "[1] Master project",
      start: new Date(2024, 5, 12),
      end: new Date(2024, 7, 12),
      duration: 8,
      progress: 0,
      parent: 0,
      type: "summary",
    },
    {
      id: 22,
      text: "Task",
      start: new Date(2024, 7, 11),
      end: new Date(2024, 8, 12),
      duration: 8,
      progress: 0,
      parent: 47,
      type: "task",
    },
    {
      id: 21,
      text: "New Task 2",
      start: new Date(2024, 7, 10),
      end: new Date(2024, 8, 12),
      duration: 3,
      progress: 0,
      type: "task",
      lazy: false,
    },
  ];


function App() {
  return (
    <>
    <Willow>
      <Gantt zoom={zoomConfig} tasks={data} />
    </Willow>
    </>
    
  );
}

export default App;