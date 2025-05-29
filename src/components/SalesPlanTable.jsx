import { Table, Button, IconButton, Input, DateInput, InputNumber, Container, Content, Stack, FlexboxGrid, ButtonToolbar, Form } from 'rsuite';
import { getData } from '../data/table';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'rsuite/dist/rsuite.min.css';
import '../assets/TableStyles.css'
import { BsPlusLg } from "react-icons/bs";

const { Column, HeaderCell, Cell } = Table;
const defaultData = getData;

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

const EditableContext = React.createContext({ editingId: null, editingKey: null });

const MyTable = () => {
  const [data, setData] = React.useState(defaultData);
  const [editingId, setEditingId] = React.useState(null);
  const [editingKey, setEditingKey] = React.useState(null);


  React.useEffect(() => {

    // const months = [
    //   "january", "february", "march", "april", "may", "june",
    //   "july", "august", "september", "october", "november", "december"
    // ];

    const summary = {
      id: 51,
      model: 'Total',
      january: 0,
      february: 0,
      march: 0,
      april: 0,
      may: 0,
      june: 0,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
      total: 0,
    };

    Object.keys(summary).filter(key => key !== "id" && key !== "model")
      .forEach(key => {
        summary[key] = data.reduce((acc, item) => acc + item[key], 0);
      });

    data.push(summary);


    data.forEach(item => {
      item.total = Object.keys(item)
        .filter(key => key !== "id" && key !== "model" && key !== "total")
        .reduce((sum, key) => sum + item[key], 0);
    });


  }, []);



  const handleChange = (id, key, value) => {
    const nextData = data.map(item => {

      //here the total column updates whenever  
      if (item.id === id) {
        const updatedItem = { ...item, [key]: value };

        // Calculate the total
        const months = [
          'january', 'february', 'march', 'april', 'may', 'june',
          'july', 'august', 'september', 'october', 'november', 'december'
        ];

        updatedItem.total = months.reduce((sum, month) => sum + (Number(updatedItem[month]) || 0), 0);

        return updatedItem;
      }

      return item;
    });
    const updateSummary = nextData.map(item => {
      if (item.id === 51) {
        const summary = nextData.filter(item => item.model !== 'Total').reduce((sum, item) => sum + Number(item[key] || 0), 0);
        const update = { ...item, [key]: summary };
        console.log(update);
        const months = [
          'january', 'february', 'march', 'april', 'may', 'june',
          'july', 'august', 'september', 'october', 'november', 'december'
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

  //when adding remove, not yet
  // const handleRemove = id => {
  //   setData(data.filter(item => item.id !== id));
  // };

  return (
    <>

      <div className='container  chip'>
        <div className='test'>
          <form class="d-flex align-items-center gap-3">

            <label for="name" class="form-label">Codigo:</label>
            <input type="text" id="name" readonly class="form-control-plaintext" value="PN-2025" />

            <label for="name" class="form-label">Planta:</label>
            <input type="text" id="name" readonly class="form-control-plaintext" value="Changan" />
            <label for="name" class="form-label">Año:</label>
            <input type="text" id="name" readonly class="form-control-plaintext" value="2025" />
          </form>


        </div>


        <EditableContext.Provider theme="dark" value={{ editingId, editingKey, onEdit, onEditFinished }}>
          <style>{styles}</style>

            

          <Table autoHeight={true} flexgrow={1} data={data} hover={false}>
            <Column flexGrow={3}>
              <HeaderCell>Model</HeaderCell>
              <Cell dataKey="model" dataType="string" onChange={handleChange} />
            </Column>

            <Column flexGrow={1} >
              <HeaderCell className='table-head'>January</HeaderCell>
              <EditableCell dataKey="january" dataType="number" onChange={handleChange} />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell className='table-head' >February</HeaderCell>
              <EditableCell dataKey="february" dataType="number" onChange={handleChange} />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell className='table-head'>March</HeaderCell>
              <EditableCell dataKey="march" dataType="number" onChange={handleChange} >$</EditableCell>

            </Column>
            <Column flexGrow={1}>
              <HeaderCell className='table-head'>April</HeaderCell>
              <EditableCell dataKey="april" dataType="number" onChange={handleChange} />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell className='table-head'>May</HeaderCell>
              <EditableCell dataKey="may" dataType="number" onChange={handleChange} />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell className='table-head'>June</HeaderCell>
              <EditableCell dataKey="june" dataType="number" onChange={handleChange} />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell className='table-head'>July</HeaderCell>
              <EditableCell dataKey="july" dataType="number" onChange={handleChange} />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell className='table-head'>August</HeaderCell>
              <EditableCell dataKey="august" dataType="number" onChange={handleChange} />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell className='table-head'>September</HeaderCell>
              <EditableCell dataKey="september" dataType="number" onChange={handleChange} />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell className='table-head'>October</HeaderCell>
              <EditableCell dataKey="october" dataType="number" onChange={handleChange} />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell className='table-head'>November</HeaderCell>
              <EditableCell dataKey="november" dataType="number" onChange={handleChange} />
            </Column>
            <Column flexGrow={1}>
              <HeaderCell className='table-head'>December</HeaderCell>
              <EditableCell dataKey="december" dataType="number" onChange={handleChange} />
            </Column>
            <Column flexGrow={2}>
              <HeaderCell className='table-total'>Total</HeaderCell>
              <Cell dataKey="total" dataType="number" onChange={handleChange} className='totals' />
            </Column>

          </Table>
        </EditableContext.Provider>
        <div></div>
        <FlexboxGrid justify="start">
              <FlexboxGrid.Item colspan={3}>
                <Button endIcon={<BsPlusLg/>}  appearance="primary" active>
                  Crear Simulacion
                </Button>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={0}>
                <Button endIcon={<BsPlusLg/>}  appearance="default" active>
                  Crear Plan
                </Button>
              </FlexboxGrid.Item>
          </FlexboxGrid>
      </div>






    </>
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
      className={
        (editing && rowData.model !== "Total" ? 'table-cell-editing' : (rowData.model === "Total" ? 'table-cell-total' : 'table-cell')) + ' ' + ''
      }
      onDoubleClick={handleEdit}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          handleEdit();
        }
      }}
    >
      {editing && rowData.model !== "Total" ? (
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

export default MyTable