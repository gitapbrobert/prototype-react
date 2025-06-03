import { Button, Divider, FlexboxGrid, Modal, Table } from "rsuite";
import { getData } from "../data/spList";
import Column from "rsuite/esm/Table/TableColumn";
import { Cell, HeaderCell } from "rsuite-table";
import { BsPlusLg  } from "react-icons/bs";
import { RiPlayListAddFill } from "react-icons/ri";
import 'rsuite/dist/rsuite.min.css';
import '../assets/SalesPlanListStyle.css'
import MyTable from "./SalesPlanTable";
import { useState } from "react";



const ListSalesPlans =()=>{

  const data = getData();
  const [formTitle, setFormTitle] = useState("agregar");
  const [setter, setSetter] = useState(0);

  const [open, setOpen] =  useState(false);
  const handleClose = () => {
    setOpen(false)
  };
  const handleOpen = (number) => {
    setOpen(true)
    setSetter(number)
  };

  return (
    <>

      <Modal open={open} size={'lg'} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>{formTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* content */}
          <MyTable dataset={setter}></MyTable>

        </Modal.Body>
        <Modal.Footer classPrefix="">
          <Button onClick={handleClose} appearance="primary">
            Generar
          </Button>
          <Button onClick={handleClose} appearance="primary">
            Simular
          </Button>
        </Modal.Footer>
      </Modal>
        <div>Planes de Negocios</div>

      <div className="container wisp">
        <FlexboxGrid justify="start">

          <FlexboxGrid.Item colspan={3}>
            <Button startIcon={<RiPlayListAddFill/>} onClick={handleOpen} appearance="primary" active>
              Crear Plan
            </Button>
          </FlexboxGrid.Item>
          
        </FlexboxGrid>

        
        <Table data={data} autoHeight={true}>

          <Column flexGrow={1}>
            <HeaderCell>Code</HeaderCell>
            <Cell dataKey="code" onDoubleClick={()=>handleOpen(1)} />
          </Column>

          <Column flexGrow={2}>
            <HeaderCell>Creation</HeaderCell>
            <Cell dataKey="creation_date" onDoubleClick={()=>handleOpen(1)}>
              {rowData => rowData.creation_date.toLocaleString()}
            </Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Goal</HeaderCell>
            <Cell dataKey="goal" onDoubleClick={()=>handleOpen(1)}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Year</HeaderCell>
            <Cell dataKey="year" onDoubleClick={()=>handleOpen(1)}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Supplier</HeaderCell>
            <Cell dataKey="supplier" onDoubleClick={()=>handleOpen(1)}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Type</HeaderCell>
            <Cell dataKey="type" onDoubleClick={()=>handleOpen(1)}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>User</HeaderCell>
            <Cell dataKey="user" onDoubleClick={()=>handleOpen(1)}/>
          </Column>
        </Table>

      </div>
    </>
  );
}


export default ListSalesPlans;








// import { Table, Column, HeaderCell, Cell } from 'rsuite';

// const MyCell = React.forwardRef(({ children, rowData, ...rest }, ref) => (
//   <Cell ref={ref} rowData={rowData} onDoubleClick={() => console.log(rowData)} {...rest}>
//     {children}
//   </Cell>
// ));

// const App = () => {
//   return (
//     <Table height={400} data={data}>
//       <Column width={160}>
//         <HeaderCell>First Name</HeaderCell>
//         <MyCell dataKey="firstName" />
//       </Column>
//       <Column width={160}>
//         <HeaderCell>Last Name</HeaderCell>
//         <MyCell dataKey="lastName" />
//       </Column>
//     </Table>
//   );
// };