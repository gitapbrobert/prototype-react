import { Gantt } from "wx-react-gantt";
import "wx-react-gantt/dist/gantt.css";
import React, { useRef, useEffect } from "react";

const MyGanttComponent = () => {
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

  const zoomConfig = {
  maxCellWidth: 400,
  level: 3,
  levels: [
    {
      minCellWidth: 200,
      scales: [{ unit: "year", step: 1, format: "yyyy" }],
    },
    {
      minCellWidth: 150,
      scales: [
        { unit: "year", step: 1, format: "yyyy" },
        { unit: "quarter", step: 1, format: "QQQQ" },
      ],
    },
    {
      minCellWidth: 250,
      scales: [
        { unit: "quarter", step: 1, format: "QQQQ" },
        { unit: "month", step: 1, format: "MMMM yyy" },
      ],
    },
    {
      minCellWidth: 100,
      scales: [
        { unit: "month", step: 1, format: "MMMM yyy" },
        { unit: "week", step: 1, format: "'week' w" },
      ],
    },
    {
      maxCellWidth: 200,
      scales: [
        { unit: "month", step: 1, format: "MMMM yyy" },
        { unit: "day", step: 1, format: "d", css: dayStyle },
      ],
    },
    {
      minCellWidth: 25,
      scales: [
        { unit: "day", step: 1, format: "MMM d", css: dayStyle },
        { unit: "hour", step: 6, format: hoursTemplate },
      ],
    },
    {
      scales: [
        { unit: "day", step: 1, format: "MMM d", css: dayStyle },
        { unit: "hour", step: 1, format: "HH:mm" },
      ],
    },
  ],
};

  const links = [{ id: 1, source: 20, target: 21, type: "e2e" }];

  const scales = [
    { unit: "month", step: 1, format: "MMMM yyy" },
    { unit: "day", step: 1, format: "d" },
  ];

  return <Gantt zoomConfig tasks={tasks} links={links} scales={scales} />;
};

export default MyGanttComponent;