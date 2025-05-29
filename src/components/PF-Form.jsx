    
import React from 'react';
import { Form, ButtonToolbar, Button, Input, InputGroup, InputNumber, Modal, SelectPicker, DatePicker, Slider } from 'rsuite';

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const MyForm = ({task, setTask, Types, onAction, IsOpen}) => {
  

  const [open, setOpen] = React.useState(true); //its no use
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [temp, settemp] = React.useState(open ? task : []);

  const exit = () => onAction("close-form", task);
  
  const handleSubmit = () => {
    console.log(formValue);
  };
  
  // console.log(temp);
  return (
    <Modal backdrop="static" open={IsOpen} onClose={  handleClose}>
      <Modal.Header>
        <Modal.Title>Pedido</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        

        {/* form */}
        <Form fluid onChange={settemp} formValue={temp} onSubmit={handleSubmit}>
          <Form.Group controlId="text-1">
            <Form.ControlLabel>Codigo</Form.ControlLabel>
            <Form.Control name="text" />
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="startPicker">
          <Form.ControlLabel>Inicio:</Form.ControlLabel>
          <Form.Control name="start" accepter={DatePicker} />
        </Form.Group>
        <Form.Group controlId="endPicker">
          <Form.ControlLabel>Final:</Form.ControlLabel>
          <Form.Control name="end" accepter={DatePicker} />
        </Form.Group>
          {/* <Form.Group controlId="password-1">
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control name="password" type="password" autoComplete="off" />
          </Form.Group> */}
          <Form.Group controlId="textarea-1">
            <Form.ControlLabel>Textarea</Form.ControlLabel>
            <Form.Control rows={5} name="textarea" accepter={Textarea} />
          </Form.Group>
          <Form.Group controlId="input-group">
            <Form.ControlLabel>Input Group</Form.ControlLabel>
            <InputGroup>
              <Form.Control name="input-group" />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Progress</Form.ControlLabel>
            <Form.Group controlId="progress">
              <Form.ControlLabel>Slider:</Form.ControlLabel>
              <Form.Control
                accepter={Slider}
                name="progress"
                label="Level"
                style={{ width: 200, margin: '10px 0' }}
              />
            </Form.Group>

          </Form.Group>
          <Form.Group >
             <Form.ControlLabel>SelectPicker:</Form.ControlLabel> {/* recuerda acomodar Type */}
            <Form.Control name="type" accepter={SelectPicker} data={Types} searchable={false} style={{ width: 224 }} placeholder="Select without search"/>
          </Form.Group>
        </Form>
        {/* form */}

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

export default MyForm;
