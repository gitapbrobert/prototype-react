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
import EditIcon from '@rsuite/icons/Edit';
import SortUpIcon from '@rsuite/icons/SortUp';
import FileUploadIcon from '@rsuite/icons/FileUpload';


const style={
  width: 400,
};

const ListSalesPlans =()=>{

  const data = getData();
  const [formTitle, setFormTitle] = useState("agregar");
  const [formButtontitle, setFormButtonTitle] = useState("Simular");
  const [setter, setSetter] = useState(0);

  const [open, setOpen] =  useState(false);
  const handleClose = () => {
    setOpen(false)
  };
  const handleOpen = (number, tipo) => {
    setFormTitle('Editar Plan de Negocios');
    console.log(tipo+" que mierda es esto");
    if (tipo === "Real"){
      setFormButtonTitle("Simular Plan");
    }else{
      setFormButtonTitle("Generar Plan");
    }
    setOpen(true)
  };

  const handleOpenButton = (number) => {
    setFormTitle('Agregar Plan de Negocios');
    setFormButtonTitle("Generar Plan");
    
    setOpen(true)
  };


  const temp = "";


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
        <Modal.Footer >
          <FlexboxGrid justify="start">
            {/* <FlexboxGrid.Item colspan={2}>
              <Button onClick={handleClose} appearance="primary">
                Generar
              </Button>
            </FlexboxGrid.Item> */}
            <FlexboxGrid.Item colspan={2}>
              <Button onClick={handleClose} endIcon={<FileUploadIcon/>} appearance="primary">
                {formButtontitle}
              </Button>
            </FlexboxGrid.Item>
          </FlexboxGrid>
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
            <Input placeholder={"Buscar Planes..."}></Input>
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>  
          </InputGroup>
            <IconButton icon={<MenuIcon/>}></IconButton>
          </FlexboxGrid>
        </div>

        
        <Table data={data} autoHeight={true}>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>Codigo</HeaderCell>
            <SimuladoCell dataKey="code"  />
          </Column>

          <Column flexGrow={2}>
            <HeaderCell  className='list-head'>Fecha de Creación</HeaderCell>
            <SimuladoCell dataKey="creation_date" >
              {rowData => rowData.creation_date.toLocaleString()}
            </SimuladoCell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>Meta</HeaderCell>
            <SimuladoCell dataKey="goal" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>Año</HeaderCell>
            <SimuladoCell dataKey="year" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>Planta</HeaderCell>
            <SimuladoCell dataKey="supplier" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>Tipo</HeaderCell>
            <SimuladoCell dataKey="type" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell className='list-head'>Creado Por</HeaderCell>
            <SimuladoCell dataKey="user" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell className='list-head'></HeaderCell>
            <Cell>
              {
                rowData => 
                <IconButton 
                  icon={<EditIcon />} 
                  onClick={() => handleOpen(1, rowData.type)}
                />
              }
            </Cell>
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
      style={{ color: isSimulado ? '#0568a1' : 'inherit' }}
      dataKey={(dataKey ? dataKey : "")}
      onDoubleClick={onDoubleClick}
    >
      {children ? children(rowData) : rowData[dataKey]}
    </Cell>
  );
};

export default ListSalesPlans;