import "../assets/GanttStyles.css";
import "wx-react-gantt/dist/gantt.css";
import { Gantt } from "wx-react-gantt";
import { Toolbar , Willow } from "wx-react-gantt";
import React, { useRef, useEffect } from "react";
import Template from "./TaskTemplate.jsx";

import { getData } from "../data/data.js";"../data/data.js"

const GanttComponent = () => {

  const apiRef = useRef();

  function doClick(ev) {
    const data = ev;
    apiRef.current.exec("update-task", {
      id: data.id,
      task: {
        clicked: data.clicked,
      },
    });
  }

  

  
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

  // useEffect(() => {
  //   if (apiRef.current) {
  //     apiRef.current.intercept("drag-task", ev => {
  //       if (typeof ev.top !== "undefined")
  //         console.log("FUNCIONA EL HOOK WOOOOOOOOOOOOOOOOHHHHHH")
  //       return false;
  //     });
  //   }
  // }, [apiRef]);


  // useEffect(() => {
  //   if (apiRef.current) {
  //     apiRef.current.intercept("resize-column", ev => {
  //       if (ev.width || ev.left) return false;
  //     });
  //   }
  // }, [apiRef]);

  const tasks = [{
    id: 1,
    sysname:"PEDIDO TEORICO ENERO",
    text: "PT01",
    start: new Date(2024, 0, 1),
    end: new Date(2024, 6, 12),
    duration: 1,
    progress: 2,
    type: "pet",
    lazy: false,
  },
  {
    id: 2,
    sysname:"PEDIDO TEORICO FEBRERO",
    text: "PT02",
    start: new Date(2024, 1, 0),
    end: new Date(2024, 8, 12),
    duration: 1,
    progress: 2,
    type: "pet",
    lazy: false,

  },
  {
    id: 3,
    sysname:"PEDIDO FIRME ENERO",
    text: "PF01",
    start: new Date(2024, 0, 5),
    end: new Date(2024, 2, 12),
    duration: 8,
    progress: 0,
    parent: 1,
    type: "pef",
  },
  {
    id: 4,
    sysname:"PEDIDO FIRME FEBRERO",
    text: "PF02",
    start: new Date(2024, 7, 11),
    end: new Date(2024, 8, 12),
    duration: 8,
    progress: 0,
    parent: 2,
    type: "pef",
  },

  {
    id: 5,
    sysname:"EMBARQUE ENERO 01",
    text: "EMB01",
    start: new Date(2024, 4, 11),
    end: new Date(2024, 6, 12),
    duration: 1,
    progress: 2,
    parent: 1,
    type: "emb",
  },
  {
    id: 6,
    sysname:"EMBARQUE FEBRERO 01",
    text: "EMB02",
    start: new Date(2024, 5, 11),
    end: new Date(2024, 6, 12),
    duration: 1,
    progress: 2,
    parent: 2,
    type: "emb",
    precio:40,
  },
  ];


  const markers = [
    {
      // start: new Date(2024, 2, 4),
      // text: "Start Project",
      // css: "myMiddleClass",
    },
  ];

const columns = [
  {
     id: "text", 
    header: "ID", 
    flexgrow: 1,
    align: "left", 
    resizable: false
  },
  {
    id: "action",
    header: "",
    width: 50,
    align: "left",
    resizable: false,
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
    { id:1, source: 1, target: 3, type: "s2s" },
    { id:2, source: 3, target: 5, type: "e2s" },
    { id:3, source: 2, target: 4, type: "s2s" },
    { id:4, source: 4, target: 6, type: "e2s" },
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
      <Gantt
        
        api={apiRef}
        // scales={complexScales}
        zoom={zoomConfig}
        columns={columns}
        taskTemplate={Template}
        onCustomClick={doClick}
        tasks={tasks}
        links={links}
        start={new Date(2023, 11, 1)}
        end={new Date(2025, 3, 1)}
        taskTypes={taskTypes}
        // editorShape={editorShape}
      />
    </>
  );
    
};

export default GanttComponent;