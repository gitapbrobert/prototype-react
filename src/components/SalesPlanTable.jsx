import { Table, Button, IconButton, Input, DateInput, InputNumber, Container, Content, Stack } from 'rsuite';
import { getData } from '../data/table';
import React from 'react';
import 'rsuite/dist/rsuite.min.css';

// import { mockUsers } from './mock';

const WIDTH = 80;


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
    const updateSummary = nextData.map(item=>{
      if(item.id === 51){
        const summary =  nextData.filter(item => item.model !== 'Total').reduce((sum, item) => sum + Number(item[key] || 0), 0);
        const update = {...item, [key]: summary };
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
    <Container theme="dark">
      <Content>
         <Stack alignItems="center" justifyContent="center" style={{ height: '100%' }}>

        

          <EditableContext.Provider theme="dark" value={{ editingId, editingKey, onEdit, onEditFinished }}>
            <style>{styles}</style>

            <Table height={420} flexgrow={1} data={data} >
              <Column width={100}>
                <HeaderCell>Model</HeaderCell>
                <Cell dataKey="model" dataType="string" onChange={handleChange} />
              </Column>

              <Column width={WIDTH} >
                <HeaderCell>January</HeaderCell>
                <EditableCell dataKey="january" dataType="number" onChange={handleChange} />
              </Column>
              <Column width={WIDTH}>
                <HeaderCell>February</HeaderCell>
                <EditableCell dataKey="february" dataType="number" onChange={handleChange} />
              </Column>
              <Column width={WIDTH}>
                <HeaderCell>March</HeaderCell>
                <EditableCell dataKey="march" dataType="number" onChange={handleChange} >$</EditableCell>

              </Column>
              <Column width={WIDTH}>
                <HeaderCell>April</HeaderCell>
                <EditableCell dataKey="april" dataType="number" onChange={handleChange} />
              </Column>
              <Column width={WIDTH}>
                <HeaderCell>May</HeaderCell>
                <EditableCell dataKey="may" dataType="number" onChange={handleChange} />
              </Column>
              <Column width={WIDTH}>
                <HeaderCell>June</HeaderCell>
                <EditableCell dataKey="june" dataType="number" onChange={handleChange} />
              </Column>
              <Column width={WIDTH}>
                <HeaderCell>July</HeaderCell>
                <EditableCell dataKey="july" dataType="number" onChange={handleChange} />
              </Column>
              <Column width={WIDTH}>
                <HeaderCell>August</HeaderCell>
                <EditableCell dataKey="august" dataType="number" onChange={handleChange} />
              </Column>
              <Column width={WIDTH}>
                <HeaderCell>September</HeaderCell>
                <EditableCell dataKey="september" dataType="number" onChange={handleChange} />
              </Column>
              <Column width={WIDTH}>
                <HeaderCell>October</HeaderCell>
                <EditableCell dataKey="october" dataType="number" onChange={handleChange} />
              </Column>
              <Column width={WIDTH}>
                <HeaderCell>November</HeaderCell>
                <EditableCell dataKey="november" dataType="number" onChange={handleChange} />
              </Column>
              <Column width={WIDTH}>
                <HeaderCell>December</HeaderCell>
                <EditableCell dataKey="december" dataType="number" onChange={handleChange} />
              </Column>
              <Column width={WIDTH}>
                <HeaderCell>Total</HeaderCell>
                <Cell dataKey="total" dataType="number" onChange={handleChange} />
              </Column>

            </Table>
          </EditableContext.Provider>

         </Stack>
      </Content>
    </Container>
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
      className={(editing && rowData.model!=="Total" ? 'table-cell-editing' : 'table-cell')+' '+''}
      onDoubleClick={handleEdit}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          handleEdit();
        }
      }}
    >
      {editing&&rowData.model!=="Total" ? (
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