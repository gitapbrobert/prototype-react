import React from 'react';
import { Form, ButtonToolbar, Button, Input, InputGroup, InputNumber, Modal, SelectPicker, DatePicker, Slider, Table, DateInput, HStack } from 'rsuite';
import { BsFloppy2Fill } from "react-icons/bs";
const { Column, HeaderCell, Cell } = Table;
import { getEmb, getPicker } from '../data/orders_forms';
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
  const pickerdata = getPicker();

  const [editingId, setEditingId] = React.useState(null);
  const [editingKey, setEditingKey] = React.useState(null);

  React.useEffect(() => {

    // const months = [
    //   "january", "february", "march", "april", "may", "june",
    //   "july", "august", "september", "october", "november", "december"
    // ];

    const summary = {
      id: 51,
      code: 'Total',
      model: '',
      amount_pf: 0,
      amount_emb: 0,
      containers: 0
    };

      Object.keys(summary).filter(key => key !== "id" && key !== "code" && key !== "model")
        .forEach(key => {
          summary[key] = data.reduce((acc, item) => acc + item[key], 0);
        });
  
      data.push(summary);
  
  
      data.forEach(item => {
        item.total = Object.keys(item)
          .filter(key => key !== "id" && key !== "model" && key !== "code")
          .reduce((sum, key) => sum + item[key], 0);
      });
  
  
    }, []);
  



  const handleChange = (id, key, value) => {
    const nextData = Object.assign([], data);
    nextData.find(item => item.id === id)[key] = value;

    if(nextData.find(item => item.id === id)[key] >= nextData.find(item => item.id === id)['amount_pf']){
      nextData.find(item => item.id === id)[key] = nextData.find(item => item.id === id)['amount_pf']; 
      console.log('limiting');
    }
    nextData.find(item => item.id === id)['containers'] = Math.trunc(Number(nextData.find(item => item.id === id)['amount_emb'])/2);


    //here the total column updates whenever  
    const updateSummary = nextData.map(item => {
      if (item.id === 51) {
        const summary = nextData.filter(item => item.code !== 'Total' ).reduce((sum, item) => sum + Number(item[key] || 0), 0);
        const update = { ...item, [key]: summary };
        console.log(update);
        const months = [
          'amount_pf',
          'amount_emb',
          'containers'
        ];
        update.total = months.reduce((sum, month) => sum + (Number(update[month]) || 0), 0);
        return update;
      }
      return item;
    });

    setData(updateSummary);
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
        <Modal.Title>Embarque EMB-0001-2025-MDV</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <div>
          <form class="d-flex align-items-center gap-3">

            <label for="name" class="form-label"><b>Codigo:</b></label>
            <label for="name" class="form-label">PN-2025</label>
            <label for="name" class="form-label"><b>Planta:</b></label>
            <label for="name" class="form-label">Changan</label>
            <label for="name" class="form-label"><b>Año:</b></label>
            <label for="name" class="form-label">2025</label>
          </form>
        </div> */}
        <div className='con'>

          <div className='stack_cont'>
            <HStack>
              <div>Origen: </div>
              <SelectPicker
                data={pickerdata.origin}
                searchable={false}
                style={{ width: 150 }}
                defaultValue={"china"}
                readOnly
                labelKey="label"
                valueKey="name"
              />
              <div>Puerto: </div>
              <SelectPicker
                data={pickerdata.Port}
                searchable={false}
                style={{ width: 150 }}
                placeholder="Seleccione"
                labelKey="label"
                valueKey="name"
              />

            </HStack>
          </div>

          <div className='stack_cont'>
            <HStack>

              <div>Naviera: </div>
              <SelectPicker
                data={pickerdata.Nav}
                searchable={false}
                style={{ width: 150 }}
                placeholder="Seleccione"
                labelKey="label"
                valueKey="name"
              />
              <div>Agente Aduanal: </div>
              <SelectPicker
                data={pickerdata.aduana}
                searchable={false}
                style={{ width: 150 }}
                placeholder="Seleccione"
                labelKey="label"
                valueKey="name"
                defaultValue={'ayudenme'}
              />
            </HStack>
          </div>

        </div>
        {/* Tabla */}
        <EditableContext.Provider value={{ editingId, editingKey, onEdit, onEditFinished }}>
        <style>{styles}</style>

        <Table autoHeight={true} flexgrow={1} data={data} hover={false}>
          
          <Column flexGrow={1}            >
            <HeaderCell className='superheader'>Codigo</HeaderCell>
            <TotalRowCell dataKey="code" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell className='superheader'>Modelo</HeaderCell>
            <TotalRowCell dataKey="model" dataType="string" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell className='superheader'>Cantidad Pendiente</HeaderCell>
            <TotalRowCell dataKey="amount_pf"  />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell className='superheader'>Cantidad Embarcada</HeaderCell>
            <EditableCell dataKey="amount_emb" dataType="number" onChange={handleChange} />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell className='superheader'>Contenedores</HeaderCell>
            <TotalRowCell dataKey="containers"/>
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

// New component to handle total row styling
const TotalRowCell = ({ rowData, dataKey, ...props }) => {
  const isTotalRow = rowData.code === 'Total';
  
  return (
    <Cell
      {...props}
      className={isTotalRow ? 'table-cell-total' : ''}
      dataKey={dataKey}
    >
      {rowData[dataKey]}
    </Cell>
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
  const isTotalRow = rowData.code === 'Total';

  const handleEdit = () => {
    if (!isTotalRow) { // Prevent editing total row
      onEdit?.(rowData.id, dataKey);
      focus(inputRef);
    }
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
      className={
        editing && !isTotalRow ? 'table-cell-editing' : 
        isTotalRow ? 'table-cell-total' : 'table-cell'
      }
      onDoubleClick={handleEdit}
      onKeyDown={e => {
        if (e.key === 'Enter' && !isTotalRow) {
          handleEdit();
        }
      }}
     
    >
      {editing && !isTotalRow ? (
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