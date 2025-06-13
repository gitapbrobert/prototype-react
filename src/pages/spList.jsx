import ListSalesPlans from "../components/SalesPlanList";
import { getData } from "../data/spList";


const ListSP = () => {
  const data = getData();

  return (
    <>
      <ListSalesPlans />
    </>
  );
};

export default ListSP;