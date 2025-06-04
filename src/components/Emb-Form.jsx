import React from 'react';
import { Form, ButtonToolbar, Button, Input, IconButton, Modal, SelectPicker, DatePicker, Slider, Table } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;
import "../data/orders_forms.js";
import { getEmb } from '../data/orders_forms.js';
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const rowKey = 'id';

const EmbForm = ({task, setTask, Types, onAction, IsOpen}) => {
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);

  const handleExpanded = (rowData) => {
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

  const handleClose = () => setOpen(false);
  const [temp, settemp] = React.useState(open ? task : []);
  const exit = () => onAction("close-form", task);

  const data = getEmb();

  const renderRowExpanded = rowData => {
    return (
      <div style={{ padding: '20px', minHeight: '150px' }}>
        <Table
          autoHeight={true}
          data={rowData.models}
          hover={true}
          rowHeight={60}
          style={{ 
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '4px'
          }}
        >
          <Column flexGrow={1}>
            <HeaderCell style={{ padding: '12px', backgroundColor: '#e9ecef' }}>Model</HeaderCell>
            <Cell dataKey="model" style={{ padding: '12px' }} />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell style={{ padding: '12px', backgroundColor: '#e9ecef' }}>Amount PF</HeaderCell>
            <Cell dataKey="amount_pf" style={{ padding: '12px' }} />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell style={{ padding: '12px', backgroundColor: '#e9ecef' }}>Amount EMB</HeaderCell>
            <Cell dataKey="amount_emb" style={{ padding: '12px' }} />
          </Column>
        </Table>
      </div>
    );
  };

  return (
    <Modal backdrop="static" size={'lg'} open={IsOpen} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>Embarque</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table
          autoHeight={true}
          data={data}
          rowKey={rowKey}
          rowHeight={70}
          expandedRowKeys={expandedRowKeys}
          renderRowExpanded={renderRowExpanded}
          style={{ minHeight: '300px' }}
        >
          <Column width={70} align="center">
            <HeaderCell style={{ padding: '12px' }}>#</HeaderCell>
            <Cell style={{ padding: '12px' }}>
              {(rowData) => (
                <IconButton
                  size="sm"
                  appearance="subtle"
                  onClick={() => handleExpanded(rowData)}
                  icon={
                    expandedRowKeys.includes(rowData[rowKey]) ? 
                      <MdOutlineExpandLess /> : 
                      <MdOutlineExpandMore />
                  }
                />
              )}
            </Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell style={{ padding: '12px' }}>Codigo</HeaderCell>
            <Cell dataKey="code" style={{ padding: '12px' }} />
          </Column>
        </Table>
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