import "../assets/GanttStyles.css";
import "wx-react-gantt/dist/gantt.css";
import { Gantt, defaultEditorShape, defaultMenuOptions } from "wx-react-gantt";
import { Toolbar, Willow } from "wx-react-gantt";
import React, { useRef, useEffect, useState } from "react";
import Template from "./TaskTemplate.jsx";
import { getData, getLinks, getMarkers } from "../data/data.js";
import PFForm from "./PF-Form.jsx";
import { Button, FlexboxGrid } from "rsuite";
import { BsPlusLg } from "react-icons/bs";
import EmbForm from "./Emb-Form.jsx";

const GanttComponent = () => {

  const apiRef = useRef(null);
  const [task, setTask] = useState(null);
  const [store, setStore] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openEmb, setOpenEmb] = React.useState(false);
  ////////
  const [tasks, setTasks] = useState(getData());



  useEffect(() => {
    if (apiRef.current) {
      const api = apiRef.current;
      setStore(api.getState().tasks);
      api.intercept("show-editor", (data) => {

        setTask(store.byId(data.id));

        console.log(store.byId(data.id));
        if((store.byId(data.id)).type === "pet"){

          console.log("no hay pa pedido teorico xd");

        }else if((store.byId(data.id)).type === "pef"){
          
          setOpen(true);

        }else if((store.byId(data.id)).type === "emb"){
          
          setOpenEmb(true);

        }

        console.log("showing editor ");
        return false;
      });

      api.intercept("add-task", (data) => {
        console.log("adding task yipee");
        if ( typeof data.target === 'number'){
          console.log(data.task);
          data.task.type = 'pef';
          
        } else if(data.target.substring(0,2) === 'PF'){
          data.task.type = 'emb';
          console.log(data.task);
        } else{
          return false
        }

       
      });

      api.intercept("update-task", () => {
        console.log("updating task");
        return false;
      });

    }

  }, [apiRef.current, store]);

  const formAction = (action, data) => {
    if (action) {
      switch (action) {
        case "close-form":
          //setTask(null);
          console.log("cerrando form");
          setOpen(false);
          setOpenEmb(false);
          break;

        default:
          apiRef.current.exec(action, data); // "update-task", "delete-task" actions
          break;
      }
    }
  };


  const scales = [
    { unit: "year", step: 1, format: "yyyy" },
    { unit: "month", step: 1, format: "MMMM" },
  ];

  

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

  const links = getLinks();

  const taskTypes = [
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
  ];


  return (
    <>
      <div className="gantt-container">
        <div className='gantt-test'>
          <form class="d-flex align-items-center gap-3">

            <label for="name" class="form-label"><b>Codigo:</b></label>
            <label for="name" class="form-label">PN-2025</label>
            <label for="name" class="form-label"><b>Planta:</b></label>
            <label for="name" class="form-label">Changan</label>
            <label for="name" class="form-label"><b>Año:</b></label>
            <label for="name" class="form-label">2025</label>
          </form>
        </div>

        {/* <div>
          <FlexboxGrid justify="start">
            <FlexboxGrid.Item colspan={3}>
              <Button startIcon={<BsPlusLg />} appearance="primary" active onClick={setOpen}>
                Agregar Firme
              </Button>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={3}>
              <Button startIcon={<BsPlusLg />} appearance="primary" active onClick={setOpenEmb}>
                Agregar Embarque
              </Button>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </div> */}

        <PFForm task={task} setTask={setTask} Types={taskTypes} onAction={formAction} IsOpen={open} />
        <EmbForm task={task} setTask={setTask} Types={taskTypes} onAction={formAction} IsOpen={openEmb}/>
        <Gantt
          api={apiRef}
          scales={scales}
          markers={markers}
          columns={columns}
          taskTemplate={Template}
          // onCustomClick={doClick}
          tasks={tasks}
          links={links}
          start={new Date(2023, 10, 1)}
          end={new Date(2025, 3, 1)}
          taskTypes={taskTypes}
        // editorShape={editor}
        />
      </div>
    </>
  );

};

export default GanttComponent;





// const editor = [
//   {key:"text",type:"text",label:"Name",config:{placeholder:"Add task name",focus:!0}},
//   // { key: "details", type: "textarea", label: "Description", config: { placeholder: "Add description" } },
//   {
//     key:"type",
//     type:"select",
//     label:"Type",
//     options: [
//       {
//         id: "task",
//         label: "Task"
//       },
//       {
//         id: "pet",
//         label: "Pedido Teorico"
//       },
//       {
//         id: "pef",
//         label: "Pedido Firme"
//       },
//       {
//         id: "emb",
//         label: "Embarque"
//       },

//     ]
//   },
  
//   { key: "start", type: "date", label: "Start date" },
//   { key: "end", type: "date", label: "End date" },
//   {key:"progress",type:"slider",label:"Progress"},
//   { 
//     key: "price", 
//     type: "counter", 
//     label: "Monto", 
//     // config: { min: 1, max: 100 } 
//   },
//   // { key: "links", type: "links" }
// ];








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