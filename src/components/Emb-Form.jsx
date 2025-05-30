    
import React from 'react';
import { Form, ButtonToolbar, Button, Input, InputGroup, InputNumber, Modal, SelectPicker, DatePicker, Slider, Table } from 'rsuite';
import Column from 'rsuite/esm/Table/TableColumn';

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const EmbForm = ({task, setTask, Types, onAction, IsOpen}) => {
  

  const [open, setOpen] = React.useState(true); //its no use
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [temp, settemp] = React.useState(open ? task : []);
  const exit = () => onAction("close-form", task);
  
  const handleSubmit = () => {
    console.log(formValue);
  };

  return (
    <Modal backdrop="static" open={IsOpen} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>Pedido Firme</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        {/* Tabla */}
        <Table autoHeight={true} flexgrow={1} data={data} hover={false}>
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
            <Cell dataKey="model" dataType="number" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Cantidad (PF)</HeaderCell>
            <Cell dataKey="model" dataType="number" />
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

export default EmbForm;
