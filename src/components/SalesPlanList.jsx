import { Button, Divider, FlexboxGrid, Table } from "rsuite";
import { getData } from "../data/spList";
import Column from "rsuite/esm/Table/TableColumn";
import { Cell, HeaderCell } from "rsuite-table";
import { BsPlusLg } from "react-icons/bs";



const ListSalesPlans =()=>{

  const data = getData();
   

  return (
    <>
  
      <div className="container">
        <FlexboxGrid justify="start">
          <FlexboxGrid.Item colspan={3}>
            <Button endIcon={<BsPlusLg/>}  appearance="primary" active>
              Crear Plan
            </Button>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={0}>
            <Button endIcon={<BsPlusLg/>}  appearance="default" active>
              Crear Plan
            </Button>
          </FlexboxGrid.Item>

        </FlexboxGrid>
        <Table data={data}>
          <Column flexGrow={2}>
            <HeaderCell>Code</HeaderCell>
            <Cell dataKey="code" />
          </Column>

          <Column width={400}>
            <HeaderCell>Creation</HeaderCell>
            <Cell dataKey="creation_date" >
              {rowData => rowData.creation_date.toLocaleString()}
            </Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Goal</HeaderCell>
            <Cell dataKey="goal" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Year</HeaderCell>
            <Cell dataKey="year" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Supplier</HeaderCell>
            <Cell dataKey="supplier" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Type</HeaderCell>
            <Cell dataKey="type" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>User</HeaderCell>
            <Cell dataKey="user" />
          </Column>

          
        </Table>

      </div>
    </>
  );
}


export default ListSalesPlans;