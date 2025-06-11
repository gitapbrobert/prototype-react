import React from 'react';
import { Form, ButtonToolbar, Button, Input, InputGroup, InputNumber, Modal, SelectPicker, DatePicker, Slider, Table, DateInput, HStack } from 'rsuite';
import { BsFloppy2Fill } from "react-icons/bs";
const { Column, HeaderCell, Cell } = Table;
import { getEmb, getPicker } from '../data/orders_forms';
import "../assets/formStyles.css";

const EditableContext = React.createContext({ editingId: null, editingKey: null });

// Updated data structure for tree table
const getTreeData = () => {
  return [
    {
      id: 1,
      code: 'PF-01',
      model: 'Pedido Firme 01',
      amount_pf: 25,
      amount_emb: 0,
      containers: 0,
      children: [
        {
          id: 2,
          code: 'PF-01',
          model: '4X4 HUNTER',
          amount_pf: 10,
          amount_emb: 0,
          containers: 0
        },
        {
          id: 4,
          code: 'PF-01',
          model: 'ALSVIN MT',
          amount_pf: 5,
          amount_emb: 0,
          containers: 0
        },
        {
          id: 5,
          code: 'PF-01',
          model: 'CS35 PLUS',
          amount_pf: 10,
          amount_emb: 0,
          containers: 0
        }
      ]
    },
    {
      id: 10,
      code: 'PF-02',
      model: 'Pedido Firme 02',
      amount_pf: 7,
      amount_emb: 0,
      containers: 0,
      children: [
        {
          id: 11,
          code: 'PF-02',
          model: '4X2 HUNTER',
          amount_pf: 5,
          amount_emb: 0,
          containers: 0
        },
        {
          id: 16,
          code: 'PF-02',
          model: 'CS55 PLUS',
          amount_pf: 2,
          amount_emb: 0,
          containers: 0
        }
      ]
    }
  ];
};

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
.rs-table-row-group {
  background-color: #f8f9fa;
  font-weight: bold;
}
.rs-table-row-group .rs-table-cell {
  background-color: #e9ecef;
}
`;

const EmbForm = ({task, setTask, Types, onAction, IsOpen}) => {
  const [open, setOpen] = React.useState(true);
  const [temp, settemp] = React.useState(open ? task : []);
  
  const handleClose = () => setOpen(false);
  const exit = () => onAction("close-form", task);

  const [data, setData] = React.useState(getTreeData());
  const pickerdata = getPicker();

  const [editingId, setEditingId] = React.useState(null);
  const [editingKey, setEditingKey] = React.useState(null);

  // Function to calculate totals recursively
  const calculateTotals = (items) => {
    return items.map(item => {
      if (item.children) {
        // Calculate totals for children first
        const updatedChildren = calculateTotals(item.children);
        
        // Calculate parent totals from children
        const childTotals = updatedChildren.reduce((acc, child) => ({
          amount_pf: acc.amount_pf + child.amount_pf,
          amount_emb: acc.amount_emb + child.amount_emb,
          containers: acc.containers + child.containers
        }), { amount_pf: 0, amount_emb: 0, containers: 0 });

        return {
          ...item,
          children: updatedChildren,
          amount_pf: childTotals.amount_pf,
          amount_emb: childTotals.amount_emb,
          containers: childTotals.containers
        };
      }
      return item;
    });
  };

  const handleChange = (id, key, value) => {
    const updateNode = (nodes) => {
      return nodes.map(node => {
        if (node.id === id) {
          const updatedNode = { ...node, [key]: value };
          
          // Calculate containers based on amount_emb
          if (key === 'amount_emb') {
            updatedNode.containers = Math.trunc(Number(value) / 2);
            
            // Limit amount_emb to amount_pf
            if (updatedNode.amount_emb > updatedNode.amount_pf) {
              updatedNode.amount_emb = updatedNode.amount_pf;
              updatedNode.containers = Math.trunc(Number(updatedNode.amount_pf) / 2);
            }
          }
          
          return updatedNode;
        }
        
        if (node.children) {
          return {
            ...node,
            children: updateNode(node.children)
          };
        }
        
        return node;
      });
    };

    const updatedData = updateNode(data);
    const dataWithTotals = calculateTotals(updatedData);
    setData(dataWithTotals);
  };

  const onEdit = (id, dataKey) => {
    setEditingId(id);
    setEditingKey(dataKey);
  };

  const onEditFinished = () => {
    setEditingId(null);
    setEditingKey(null);
  };

  return (
    <Modal backdrop="static" size={'lg'} open={IsOpen} onClose={handleClose} overflow={true}>
      <Modal.Header>
        <Modal.Title>Embarque EMB-0001-2025-MDV</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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

        {/* Tree Table */}
        <EditableContext.Provider value={{ editingId, editingKey, onEdit, onEditFinished }}>
          <style>{styles}</style>

          <Table 
            autoHeight={true} 
            data={data} 
            hover={false}
            isTree
            defaultExpandAllRows
            rowKey="id"
          >
            <Column flexGrow={1} dataKey="code">
              <HeaderCell className='superheader'>Codigo</HeaderCell>
              <TreeCell />
            </Column>

            
            <Column flexGrow={2} dataKey="model">
              <HeaderCell className='superheader'>Modelo</HeaderCell>
              <TreeCell />
            </Column>
            
            <Column flexGrow={1} dataKey="amount_pf">
              <HeaderCell className='superheader'>Cantidad Pendiente</HeaderCell>
              <TreeCell />
            </Column>
            
            <Column flexGrow={1} dataKey="amount_emb">
              <HeaderCell className='superheader'>Cantidad Embarcada</HeaderCell>
              <EditableTreeCell dataType="number" onChange={handleChange} />
            </Column>
            
            <Column flexGrow={1} dataKey="containers">
              <HeaderCell className='superheader'>Contenedores</HeaderCell>
              <TreeCell />
            </Column>
          </Table>
        </EditableContext.Provider>
      </Modal.Body>
      
      <Modal.Footer>
        <Button startIcon={<BsFloppy2Fill/>} appearance="primary" active>
          Generar
        </Button>
        <Button onClick={exit} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Tree Cell component for non-editable cells
const TreeCell = ({ rowData, dataKey, ...props }) => {
  const hasChildren = rowData.children && rowData.children.length > 0;
  
  return (
    <Cell
      {...props}
      className={hasChildren ? 'rs-table-row-group' : ''}
    >
      {rowData[dataKey]}
    </Cell>
  );
};

// Editable Tree Cell component
const EditableTreeCell = ({ rowData, dataType, dataKey, onChange, ...props }) => {
  const { editingId, editingKey, onEdit, onEditFinished } = React.useContext(EditableContext);
  const editing = rowData.id === editingId && dataKey === editingKey;
  const value = rowData[dataKey];
  const inputRef = React.useRef();
  const cellRef = React.useRef();
  const hasChildren = rowData.children && rowData.children.length > 0;

  const handleEdit = () => {
    if (!hasChildren) { // Only allow editing leaf nodes
      onEdit?.(rowData.id, dataKey);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 0);
    }
  };

  const handleFinished = () => {
    onEditFinished();
    setTimeout(() => {
      if (cellRef.current) {
        cellRef.current.focus();
      }
    }, 0);
  };

  return (
    <Cell
      {...props}
      ref={cellRef}
      tabIndex={0}
      className={
        editing && !hasChildren ? 'table-cell-editing' : 
        hasChildren ? 'rs-table-row-group' : 'table-cell'
      }
      onDoubleClick={handleEdit}
      onKeyDown={e => {
        if (e.key === 'Enter' && !hasChildren) {
          handleEdit();
        }
      }}
    >
      {editing && !hasChildren ? (
        <InputNumber
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
        value
      )}
    </Cell>
  );
};

export default EmbForm;