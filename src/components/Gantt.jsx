import { Gantt } from "wx-react-gantt";
import { Toolbar , Willow } from "wx-react-gantt";
import "wx-react-gantt/dist/gantt.css";
import React, { useRef, useEffect } from "react";
import "../assets/GanttStyles.css";

const GanttComponent = () => {



  const tasks = [
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

  const markers = [
    {
      start: new Date(2024, 2, 4),
      text: "Start Project",
      css: "myMiddleClass",
    },
    {
      start: new Date(2024, 2, 4),
      text: "Start Project",
      css: "myMiddleClass",
    },
    //other markers
  ];
  const columns = [
    { id: "text", header: "Task name", flexGrow: 2 },
    {
      id: "start",
      header: "Start date",
      flexGrow: 1,
      align: "center",
    },
    {
      id: "end",
      header: "End date",
      flexGrow: 1,
      align: "center",
    },

    {
      id: "action",
      header: "",
      width: 50,
      align: "center",
    },
  ];
  const zoomConfig = {
    maxCellWidth: 400,
    level: 1,
    levels: [
      {
        minCellWidth: 50,
        scales: [
          { unit: "year", step: 1, format: "yyyy" },
          { unit: "month", step: 1, format: "MMMM" },
        ],
      },
    ],
  };


  const links = [{ id: 1, source: 20, target: 21, type: "e2e" }];

  // const scales = [
  //   { unit: "month", step: 1, format: "MMMM yyy" },
  //   { unit: "day", step: 1, format: "d" },
  // ];

  return (
    <Gantt
      zoom={zoomConfig}
      columns={columns}
      markers={markers}
      tasks={tasks}
      links={links}
      start={new Date(2024, 0, 1)}
      end={new Date(2025, 3, 1)}
    />);
};

export default GanttComponent;