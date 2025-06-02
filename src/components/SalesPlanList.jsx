import { Button, Divider, FlexboxGrid, Modal, Table } from "rsuite";
import { getData } from "../data/spList";
import Column from "rsuite/esm/Table/TableColumn";
import { Cell, HeaderCell } from "rsuite-table";
import { BsPlusLg } from "react-icons/bs";
import 'rsuite/dist/rsuite.min.css';
import '../assets/SalesPlanListStyle.css'
import MyTable from "./SalesPlanTable";
import { useState } from "react";



const ListSalesPlans =()=>{

  const data = getData();

  const [open, setOpen] =  useState(false);
  const handleClose = () => setOpen(false);
  

  return (
    <>
  
    <Modal open={open} size={'lg'} onClose={handleClose}>
      <Modal.Header>
          <Modal.Title>Agregar Plan de Negocios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyTable></MyTable>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
    </Modal>
  
      <div className="container wisp">
        <FlexboxGrid justify="start">
          <FlexboxGrid.Item colspan={3}>
            <Button startIcon={<BsPlusLg/>} onClick={setOpen}  appearance="primary" active>
              Crear Plan
            </Button>
          </FlexboxGrid.Item>
          
        </FlexboxGrid>

        
        <Table data={data} autoHeight={true}>

          <Column flexGrow={1}>
            <HeaderCell>Code</HeaderCell>
            <Cell dataKey="code" onDoubleClick={setOpen} />
          </Column>

          <Column flexGrow={2}>
            <HeaderCell>Creation</HeaderCell>
            <Cell dataKey="creation_date" onDoubleClick={setOpen}>
              {rowData => rowData.creation_date.toLocaleString()}
            </Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Goal</HeaderCell>
            <Cell dataKey="goal" onDoubleClick={setOpen}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Year</HeaderCell>
            <Cell dataKey="year" onDoubleClick={setOpen}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Supplier</HeaderCell>
            <Cell dataKey="supplier" onDoubleClick={setOpen}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Type</HeaderCell>
            <Cell dataKey="type" onDoubleClick={setOpen}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>User</HeaderCell>
            <Cell dataKey="user" onDoubleClick={setOpen}/>
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