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
          expandedRowKeys={expandedRowKeys}
          renderRowExpanded={rowData => {
            return (
              <div className="p-3">
                <h6>Additional Details</h6>
                <div className="row">
                  <div className="col-md-6">
                    <p><strong>Status:</strong> Active</p>
                    <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
                  </div>
                  <div className="col-md-6">
                    <p><strong>Notes:</strong> Sample additional information for {rowData.code}</p>
                    <p><strong>Reference:</strong> REF-{rowData.id}</p>
                  </div>
                </div>
              </div>
            );
          }}
        >
          <Column width={70} align="center">
            <HeaderCell>#</HeaderCell>
            <Cell>
              {(rowData) => {
                return (
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
                );
              }}
            </Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Codigo</HeaderCell>
            <Cell dataKey="code" />
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