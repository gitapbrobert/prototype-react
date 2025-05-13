import { Gantt } from "wx-react-gantt";
import { Toolbar , Willow } from "wx-react-gantt";
import "wx-react-gantt/dist/gantt.css";
import React, { useRef, useEffect } from "react";
import "../assets/GanttStyles.css";

const GanttComponent = () => {

  const apiRef = useRef();
  
  const dayStyle = (a) => {
    const day = a.getDay() === 5 || a.getDay() === 6;
    console.log("teto best log")
    return day ? "sday" : "";
  };

  const complexScales = [
    { unit: "year", step: 1, format: "yyyy" },
    { unit: "month", step: 2, format: "MMMM yyy" },
    { unit: "week", step: 1, format: "w" },
    { unit: "day", step: 1, format: "d", css: dayStyle },
  ];

  useEffect(() => {
    if (apiRef.current) {
      apiRef.current.intercept("drag-task", ev => {
        if (typeof ev.top !== "undefined")
          console.log("FUNCIONA EL HOOK WOOOOOOOOOOOOOOOOHHHHHH")
        return false;
      });
    }
  }, [apiRef]);
  

  

  const tasks = [
    {
      id: 20,
      text: "New Task",
      start: new Date(2024, 5, 11),
      end: new Date(2024, 6, 12),
      duration: 1,
      progress: 2,
      type: "pet",
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
    {
      id: 1,
      text: "New teorico prueba",
      start: new Date(2024, 5, 11),
      end: new Date(2024, 6, 12),
      duration: 1,
      progress: 2,
      type: "pet",
      precio: 40,
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
    { 
      id: "text", 
      header: "Task name", 
      width:120,
      align: "center"

    },
    {
      id: "start",
      header: "Start date",
      width:100,
      align: "center"
    },
    {
      id: "end",
      header: "End date",
      width:100,
      align: "center"
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

  const links = [
    { id: 1, source: 20, target: 21, type: "e2e" }
  ];
  const editorShape = [
    {
      key:  "text",
      type: "text",
      label: "Name",
      config: {
        placeholder: "Add task name",
        focus: true,
      },
    },
    //other settings
  ];

  const taskTypes = [
    { id: "task", label: "Task" },
    { id: "milestone", label: "Milestone" },
    { id: "summary", label: "Project" },
    { id: "pet", label: "Pedido Teorico" },
    { id: "pef", label: "Pedido Firme" },
    { id: "emb", label: "Pedido Teorico" },
  ];


  // el return
  return (
    <>
      <Toolbar/>
      <Gantt
        
        api={apiRef}
        scales={complexScales}
        // zoom={zoomConfig}
        columns={columns}
        markers={markers}
        tasks={tasks}
        links={links}
        start={new Date(2024, 0, 1)}
        end={new Date(2025, 3, 1)}
        taskTypes={taskTypes}
        // editorShape={editorShape}
      />
    </>
  );
    
};

export default GanttComponent;