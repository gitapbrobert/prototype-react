import React from 'react';
import { Form, ButtonToolbar, Button, Input, IconButton, Modal, SelectPicker, DatePicker, Slider, Table } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;
import "../data/orders_forms.js";
import { getEmb } from '../data/orders_forms.js';
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

const EmbForm = ({task, setTask, Types, onAction, IsOpen}) => {
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);

  const handleExpanded = (rowData) => {
    let open = false;
    const nextExpandedRowKeys = [];

    expandedRowKeys.forEach(key => {
      if (key === rowData.id) {
        open = true;
      } else {
        nextExpandedRowKeys.push(key);
      }
    });

    if (!open) {
      nextExpandedRowKeys.push(rowData.id);
    }

    setExpandedRowKeys(nextExpandedRowKeys);
  };

  const handleClose = () => setOpen(false);
  const exit = () => onAction("close-form", task);

  const data = getEmb();

  const renderRowExpanded = rowData => {
    return (
      <div style={{ 
        width: '100%',
        backgroundColor: '#1a1d24',
        padding: '0 20px'
      }}>
        <Table
          autoHeight
          data={rowData.models}
          hover={false}
          style={{
            backgroundColor: 'transparent'
          }}
        >
          <Column flexGrow={1}>
            <HeaderCell style={{
              color: '#8e8e8e',
              backgroundColor: 'transparent',
              borderBottom: '1px solid #2f3542',
              fontSize: '14px'
            }}>
              Model
            </HeaderCell>
            <Cell style={{ 
              color: '#fff',
              borderBottom: '1px solid #2f3542',
              padding: '12px 8px'
            }} dataKey="model" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell style={{
              color: '#8e8e8e',
              backgroundColor: 'transparent',
              borderBottom: '1px solid #2f3542',
              fontSize: '14px'
            }}>
              Amount PF
            </HeaderCell>
            <Cell style={{ 
              color: '#fff',
              borderBottom: '1px solid #2f3542',
              padding: '12px 8px'
            }} dataKey="amount_pf" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell style={{
              color: '#8e8e8e',
              backgroundColor: 'transparent',
              borderBottom: '1px solid #2f3542',
              fontSize: '14px'
            }}>
              Amount EMB
            </HeaderCell>
            <Cell style={{ 
              color: '#fff',
              borderBottom: '1px solid #2f3542',
              padding: '12px 8px'
            }} dataKey="amount_emb" />
          </Column>
        </Table>
      </div>
    );
  };

  return (
    <Modal 
      backdrop="static" 
      size="lg" 
      open={IsOpen} 
      onClose={handleClose}
      style={{
        backgroundColor: '#13151a'
      }}
    >
      <Modal.Header style={{
        backgroundColor: '#13151a',
        color: '#fff',
        borderBottom: '1px solid #2f3542'
      }}>
        <Modal.Title>Embarque</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ 
        backgroundColor: '#13151a',
        padding: '20px'
      }}>
        <Table
          autoHeight
          data={data}
          rowKey="id"
          expandedRowKeys={expandedRowKeys}
          renderRowExpanded={renderRowExpanded}
          hover={false}
          style={{
            backgroundColor: '#1a1d24'
          }}
        >
          <Column width={50} align="center">
            <HeaderCell style={{
              color: '#8e8e8e',
              backgroundColor: 'transparent',
              borderBottom: '1px solid #2f3542',
              fontSize: '14px'
            }}>
              #
            </HeaderCell>
            <Cell style={{
              padding: '12px 8px',
              color: '#fff',
              borderBottom: '1px solid #2f3542'
            }}>
              {(rowData) => (
                <IconButton
                  size="sm"
                  appearance="subtle"
                  style={{
                    color: '#fff'
                  }}
                  onClick={() => handleExpanded(rowData)}
                  icon={
                    expandedRowKeys.includes(rowData.id) ? 
                      <MdOutlineExpandLess style={{ fontSize: '20px' }} /> : 
                      <MdOutlineExpandMore style={{ fontSize: '20px' }} />
                  }
                />
              )}
            </Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell style={{
              color: '#8e8e8e',
              backgroundColor: 'transparent',
              borderBottom: '1px solid #2f3542',
              fontSize: '14px'
            }}>
              Codigo
            </HeaderCell>
            <Cell style={{
              color: '#fff',
              borderBottom: '1px solid #2f3542',
              padding: '12px 8px'
            }} dataKey="code" />
          </Column>
        </Table>
      </Modal.Body>
      <Modal.Footer style={{
        backgroundColor: '#13151a',
        borderTop: '1px solid #2f3542'
      }}>
        <Button onClick={exit} appearance="primary">
          Submit
        </Button>
        <Button onClick={exit} appearance="subtle" style={{ color: '#fff' }}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmbForm;