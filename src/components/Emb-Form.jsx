    
import React from 'react';
import { Form, ButtonToolbar, Button, Input, InputGroup, InputNumber, Modal, SelectPicker, DatePicker, Slider, Table, DateInput } from 'rsuite';
import { BsFloppy2Fill } from "react-icons/bs";
const { Column, HeaderCell, Cell } = Table;
import { getEmb } from '../data/orders_forms';
import "../assets/formStyles.css";

const EditableContext = React.createContext({ editingId: null, editingKey: null });
const defaultData = getEmb();
const styles = `
.table-cell-editing .rs-table-cell-content {
  padding: 4px;
}
.table-cell-editing .rs-input {
  width: 100%;
}
.table-cell:focus {
  outline: none;
  box-shadow: inset 0 0 0 1px #007bff;
}
`;

const EmbForm = ({task, setTask, Types, onAction, IsOpen}) => {
  
  const [open, setOpen] = React.useState(true); //its no use
  const [temp, settemp] = React.useState(open ? task : []);
  
  const handleClose = () => setOpen(false);
  const exit = () => onAction("close-form", task);
  
  const [data, setData] = React.useState(defaultData);
  const [editingId, setEditingId] = React.useState(null);
  const [editingKey, setEditingKey] = React.useState(null);

  const handleChange = (id, key, value) => {
    const nextData = Object.assign([], data);
    nextData.find(item => item.id === id)[key] = value;

    if(nextData.find(item => item.id === id)[key] >= nextData.find(item => item.id === id)['amount_pf']){
      nextData.find(item => item.id === id)[key] = nextData.find(item => item.id === id)['amount_pf'];
      
      console.log('limiting');
    }


    setData(nextData);
  };

  const onEdit = (id, dataKey) => {
    setEditingId(id);
    setEditingKey(dataKey);
  };

  const onEditFinished = () => {
    setEditingId(null);
    setEditingKey(null);
  };

  const handleRemove = id => {
    setData(data.filter(item => item.id !== id));
  };

  const handleSubmit = () => {
    console.log(formValue);
  };
  
  return (
    
    <Modal backdrop="static" size={'md'} open={IsOpen} onClose={handleClose} overflow={true}>
      <Modal.Header>
        <Modal.Title>Embarque</Modal.Title>
      </Modal.Header>
      <Modal.Body>


        {/* Tabla */}
        <EditableContext.Provider value={{ editingId, editingKey, onEdit, onEditFinished }}>
        <style>{styles}</style>

        <Table autoHeight={true} flexgrow={1} data={data} hover={false}>
          
          <Column flexGrow={1}            >
            <HeaderCell>Codigo</HeaderCell>
            <Cell dataKey="code" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Modelo</HeaderCell>
            <Cell dataKey="model" dataType="string" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Cantidad Pendiente</HeaderCell>
            <Cell dataKey="amount_pf"  />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Cantidad Embarcada</HeaderCell>
            <EditableCell dataKey="amount_emb" dataType="number" onChange={handleChange} />
          </Column>
        </Table>
        </EditableContext.Provider>
        {/* tabla */}

      </Modal.Body>
      <Modal.Footer>
        <Button startIcon={<BsFloppy2Fill/>}  appearance="primary" active>
          Generar
        </Button>
        <Button onClick={exit} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>

    

  );
};

function toValueString(value, dataType) {
  return dataType === 'date' ? value?.toLocaleDateString() : value;
}

const fieldMap = {
  string: Input,
  number: InputNumber,
  date: DateInput
};

function focus(ref) {
  setTimeout(() => {
    if (ref.current?.tagName === 'INPUT' || ref.current?.getAttribute('tabindex') === '0') {
      ref.current.focus();
    } else if (ref.current instanceof HTMLElement) {
      ref.current.querySelector('input').focus();
    }
  }, 0);
}

const EditableCell = ({ rowData, dataType, dataKey, onChange, ...props }) => {
  const { editingId, editingKey, onEdit, onEditFinished } = React.useContext(EditableContext);
  const editing = rowData.id === editingId && dataKey === editingKey;
  const Field = fieldMap[dataType];
  const value = rowData[dataKey];
  const text = toValueString(value, dataType);
  const inputRef = React.useRef();
  const cellRef = React.useRef();

  const handleEdit = () => {
    onEdit?.(rowData.id, dataKey);
    focus(inputRef);
  };

  const handleFinished = () => {
    onEditFinished();
    focus(cellRef);
  };

  return (
    <Cell
      {...props}
      ref={cellRef}
      tabIndex={0}
      className={editing ? 'table-cell-editing' : 'table-cell'}
      onDoubleClick={handleEdit}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          handleEdit();
        }
      }}
     
    >
      {editing ? (
        <Field
          ref={inputRef}
          defaultValue={value}
          onBlur={handleFinished}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              handleFinished();
            }
          }}
          onChange={value => {
            onChange?.(rowData.id, dataKey, value);
          }}
        />
      ) : (
        text
      )}
    </Cell>
  );
};

export default EmbForm;