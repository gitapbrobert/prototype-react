import "../assets/GanttStyles.css";
import "wx-react-gantt/dist/gantt.css";
import { Gantt, defaultEditorShape, defaultMenuOptions } from "wx-react-gantt";
import { Toolbar , Willow } from "wx-react-gantt";
import React, { useRef, useEffect } from "react";
import Template from "./TaskTemplate.jsx";

import { getData, getMarkers } from "../data/data.js";"../data/data.js"

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
  
  // const dayStyle = (a) => {
  //   const day = a.getDay() === 5 || a.getDay() === 6;
  //   console.log("best log")
  //   return day ? "sday" : "";
  // };

  const scales = [
    { unit: "year", step: 1, format: "yyyy" },
    { unit: "month", step: 1, format: "MMMM" },
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

  const tasks = getData()

  const markers = getMarkers();

  const columns = [
    {
      id: "text",
      header: "ID",
      flexgrow: 1,
      align: "left",
      resizable: false
    },
    {
      id: "progress",
      header: "P%",
      // flexgrow: 1,
      width: 50,
      align: "center",
      resizable: false
    },
    {
      id: "start",
      header: "Initial Date",
      width: 100,
      align: "center",
      resizable: false,
    },
    {
      id: "end",
      header: "Initial Date",
      width: 100,
      align: "center",
      resizable: false,
    },
    {
      id: "action",
      header: "",
      width: 40,
      align: "center",
      resizable: false,
    },
  ];

  const links = [
    { id:1, source: 1, target: 3, type: "s2s" },
    { id:2, source: 3, target: 5, type: "e2s" },
    { id:3, source: 2, target: 4, type: "s2s" },
    { id:4, source: 4, target: 6, type: "e2s" },
  ];



  const taskTypes = [
    {
      id: "task",
      label: "Task"
    },
    {
      id: "milestone",
      label: "Milestone"
    },
    {
      id: "summary",
      label: "Project"
    },
    { 
      id: "pet", 
      label: "Pedido Teorico" 
    },
    { 
      id: "pef", 
      label: "Pedido Firme" 
    },
    { 
      id: "emb", 
      label: "Embarque" 
    },
  ];


  const editor = [
    {key:"text",type:"text",label:"Name",config:{placeholder:"Add task name",focus:!0}},
    // { key: "details", type: "textarea", label: "Description", config: { placeholder: "Add description" } },
    {
      key:"type",
      type:"select",
      label:"Type",
      options: [
        {
          id: "task",
          label: "Task"
        },
        {
          id: "pet",
          label: "Pedido Teorico"
        },
        {
          id: "pef",
          label: "Pedido Firme"
        },
        {
          id: "emb",
          label: "Embarque"
        },

      ]
    },
    
    { key: "start", type: "date", label: "Start date" },
    { key: "end", type: "date", label: "End date" },
    {key:"progress",type:"slider",label:"Progress"},
    { 
      key: "price", 
      type: "counter", 
      label: "Monto", 
      // config: { min: 1, max: 100 } 
    },
    // { key: "links", type: "links" }
  ];

  // el return
  return (
    <>
      <Gantt
        api={apiRef}
        scales={scales}
        markers={markers}
        columns={columns}
        taskTemplate={Template}
        onCustomClick={doClick}
        tasks={tasks}
        links={links}
        start={new Date(2023, 11, 1)}
        end={new Date(2025, 3, 1)}
        taskTypes={taskTypes}
        editorShape={editor}
      />
    </>
  );
    
};

export default GanttComponent;