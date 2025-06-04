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
      <div style={{ padding: '10px' }}>
        <Table
          autoHeight={true}
          data={rowData.models}
          hover={true}
          rowHeight={50}
          style={{ backgroundColor: '#f5f5f5' }}
        >
          <Column flexGrow={1}>
            <HeaderCell style={{ backgroundColor: '#e0e0e0' }}>Model</HeaderCell>
            <Cell dataKey="model" style={{ padding: '10px' }} />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell style={{ backgroundColor: '#e0e0e0' }}>Amount PF</HeaderCell>
            <Cell dataKey="amount_pf" style={{ padding: '10px' }} />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell style={{ backgroundColor: '#e0e0e0' }}>Amount EMB</HeaderCell>
            <Cell dataKey="amount_emb" style={{ padding: '10px' }} />
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
          rowHeight={60}
          expandedRowKeys={expandedRowKeys}
          renderRowExpanded={renderRowExpanded}
        >
          <Column width={70} align="center">
            <HeaderCell>#</HeaderCell>
            <Cell style={{ padding: '10px' }}>
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
            <HeaderCell>Codigo</HeaderCell>
            <Cell dataKey="code" style={{ padding: '10px' }} />
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