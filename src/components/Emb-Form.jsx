    
import React from 'react';
import { Form, ButtonToolbar, Button, Input, IconButton , Modal, SelectPicker, DatePicker, Slider, Table } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;
import "../data/orders_forms.js";
import { getEmb } from '../data/orders_forms.js';
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);




const EmbForm = ({task, setTask, Types, onAction, IsOpen}) => {
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);

  const handleExpanded = (rowData, dataKey) => {
    let open = false;
    const nextExpandedRowKeys = [];

    expandedRowKeys.forEach(key => {
      if (key === rowData[rowKey]) {
        open = true;
      } else {
        nextExpandedRowKeys.push(key);
      }
    });

    if (!open) {
      nextExpandedRowKeys.push(rowData[rowKey]);
    }

    setExpandedRowKeys(nextExpandedRowKeys);
  };
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [temp, settemp] = React.useState(open ? task : []);
  const exit = () => onAction("close-form", task);
  
  const handleSubmit = () => {
    console.log(formValue);
  };

  // DATA //
  const data = getEmb();

  return (
    <Modal backdrop="static" size={'lg'} open={IsOpen} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>Embarque</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        {/* Tabla */}
        <Table autoHeight={true} flexgrow={1} data={data} hover={false} shouldUpdateScroll={false}
          expandedRowKeys={expandedRowKeys}
          onRowClick={data => {console.log(data);}}
          renderRowExpanded={renderRowExpanded}
        >
          <Column width={70} align="center">
            <HeaderCell>#</HeaderCell>
            <ExpandCell dataKey="id" expandedRowKeys={expandedRowKeys} onChange={handleExpanded} />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Codigo</HeaderCell>
            <Cell dataKey="code" dataType="string" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Modelo</HeaderCell>
            <Cell dataKey="model" dataType="string" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Cantidad (PT)</HeaderCell>
            <Cell dataKey="amount_pf" dataType="number" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Cantidad (PF)</HeaderCell>
            <Cell dataKey="amount_emb" dataType="number" />
          </Column>
        </Table>
        {/* tabla */}

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={exit} appearance="primary">
          Submit
        </Button>
        <Button onClick={exit} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>

  );
};


const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
  <Cell {...props} style={{ padding: 5 }}>
    <IconButton
      appearance="subtle"
      onClick={() => {
        onChange(rowData);
      }}
      icon={
        expandedRowKeys.some(key => key === rowData[rowKey]) ? (
          <MdOutlineExpandLess />
        ) : (
          <MdOutlineExpandMore/>
        )
      }
    />
  </Cell>
);

const renderRowExpanded = rowData => {
  return (
    <div>
      <p class="form-text text-muted">Help Text</p>
      
    </div>
  );
};

export default EmbForm;
