import { Button, Divider, FlexboxGrid, IconButton, Input, InputGroup, Modal, Table } from "rsuite";
import { getData } from "../data/spList";
import Column from "rsuite/esm/Table/TableColumn";
import { Cell, HeaderCell } from "rsuite-table";
import { BsPlusLg  } from "react-icons/bs";
import { RiPlayListAddFill } from "react-icons/ri";
import 'rsuite/dist/rsuite.min.css';
import '../assets/SalesPlanListStyle.css'
import MyTable from "./SalesPlanTable";
import { useState } from "react";
import SearchIcon from '@rsuite/icons/Search';
import MenuIcon from '@rsuite/icons/Menu';



const style={
  width: 400,
};

const ListSalesPlans =()=>{

  const data = getData();
  const [formTitle, setFormTitle] = useState("agregar");
  const [setter, setSetter] = useState(0);

  const [open, setOpen] =  useState(false);
  const handleClose = () => {
    setOpen(false)
  };
  const handleOpen = (number) => {
    setFormTitle('Editar Plan de Negocios');
    setOpen(true)
  };

  const handleOpenButton = (number) => {
    setFormTitle('Agregar Plan de Negocios');
    setOpen(true)
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

      <div className="container wisp">
        <div className="core">
          <FlexboxGrid justify="start">

            <FlexboxGrid.Item colspan={3}>
              
          <Button startIcon={<RiPlayListAddFill />} onClick={handleOpenButton} appearance="primary" active>
                Crear Plan
          </Button>
            </FlexboxGrid.Item>
          <InputGroup style={style}>
            <Input placeholder={"search..."}></Input>
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>  
          </InputGroup>
            <IconButton icon={<MenuIcon/>}></IconButton>
          
        


          </FlexboxGrid>
        </div>

        
        <Table data={data} autoHeight={true}>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>Code</HeaderCell>
            <SimuladoCell dataKey="code" onDoubleClick={()=>handleOpen(1)} />
          </Column>

          <Column flexGrow={2}>
            <HeaderCell  className='list-head'>Creation</HeaderCell>
            <SimuladoCell dataKey="creation_date" onDoubleClick={()=>handleOpen(1)}>
              {rowData => rowData.creation_date.toLocaleString()}
            </SimuladoCell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>Goal</HeaderCell>
            <SimuladoCell dataKey="goal" onDoubleClick={()=>handleOpen(1)}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>Year</HeaderCell>
            <SimuladoCell dataKey="year" onDoubleClick={()=>handleOpen(1)}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>Supplier</HeaderCell>
            <SimuladoCell dataKey="supplier" onDoubleClick={()=>handleOpen(1)}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>Type</HeaderCell>
            <SimuladoCell dataKey="type" onDoubleClick={()=>handleOpen(1)}/>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>User</HeaderCell>
            <SimuladoCell dataKey="user" onDoubleClick={()=>handleOpen(1)}/>
          </Column>
        </Table>

      </div>
    </>
  );
}

const SimuladoCell = ({ rowData, dataKey, children, onDoubleClick, ...props }) => {
  const isSimulado = rowData.type === "Simulado";
  
  return (
    <Cell
      {...props}
      style={{ color: isSimulado ? 'red' : 'inherit' }}
      dataKey={dataKey}
      onDoubleClick={onDoubleClick}
    >
      {children ? children(rowData) : rowData[dataKey]}
    </Cell>
  );
};


export default ListSalesPlans;