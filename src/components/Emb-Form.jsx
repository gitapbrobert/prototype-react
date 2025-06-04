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
      <div className="expanded-row-container" style={{ 
        padding: '20px',
        margin: '10px 0',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <Table
          autoHeight
          data={rowData.models}
          hover={false}
          rowHeight={60}
          style={{
            border: '1px solid #e9ecef',
            borderRadius: '4px'
          }}
        >
          <Column flexGrow={1}>
            <HeaderCell style={{
              padding: '15px',
              backgroundColor: '#f1f3f5',
              fontWeight: '600'
            }}>
              Model
            </HeaderCell>
            <Cell style={{ padding: '15px' }} dataKey="model" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell style={{
              padding: '15px',
              backgroundColor: '#f1f3f5',
              fontWeight: '600'
            }}>
              Amount PF
            </HeaderCell>
            <Cell style={{ padding: '15px' }} dataKey="amount_pf" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell style={{
              padding: '15px',
              backgroundColor: '#f1f3f5',
              fontWeight: '600'
            }}>
              Amount EMB
            </HeaderCell>
            <Cell style={{ padding: '15px' }} dataKey="amount_emb" />
          </Column>
        </Table>
      </div>
    );
  };

  return (
    <Modal backdrop="static" size="lg" open={IsOpen} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>Embarque</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ minHeight: '400px', padding: '20px' }}>
        <Table
          autoHeight
          data={data}
          rowKey={rowKey}
          rowHeight={70}
          hover={false}
          expandedRowKeys={expandedRowKeys}
          renderRowExpanded={renderRowExpanded}
          style={{
            border: '1px solid #e9ecef',
            borderRadius: '4px'
          }}
        >
          <Column width={70} align="center">
            <HeaderCell style={{
              padding: '15px',
              backgroundColor: '#f1f3f5',
              fontWeight: '600'
            }}>
              #
            </HeaderCell>
            <Cell style={{ padding: '15px' }}>
              {(rowData) => (
                <IconButton
                  size="sm"
                  appearance="subtle"
                  onClick={() => handleExpanded(rowData)}
                  icon={
                    expandedRowKeys.includes(rowData[rowKey]) ? 
                      <MdOutlineExpandLess style={{ fontSize: '20px' }} /> : 
                      <MdOutlineExpandMore style={{ fontSize: '20px' }} />
                  }
                />
              )}
            </Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell style={{
              padding: '15px',
              backgroundColor: '#f1f3f5',
              fontWeight: '600'
            }}>
              Codigo
            </HeaderCell>
            <Cell style={{ padding: '15px' }} dataKey="code" />
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