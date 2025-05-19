import { Grid } from "wx-react-grid";

const MyComponent = () => {

    const data = [
        {
            id: 1,
            model: 'kiwi',
            January: 20,
            February: 20,
            March: 20,
            April: 20,
            May: 20,
            June: 20,
            July: 20,
            August: 20,
            September: 20,
            October: 20,
            November: 20,
            December: 20
        },
    ];


    const columns = [
    {
        id: "id",
        width: 50
    },
    {
        id: "model",
        header: "model",
        footer: "model",
    },
    {
        id: "January",
        header: "January",
        footer: "January",
    },
    {
        id: "February",
        header: "February",
        footer: "February",
    },
    {
        id: "March",
        header: "March",
        footer: "March",
    },
    {
        id: "April",
        header: "April",
        footer: "April",
    },
    {
        id: "May",
        header: "May",
        footer: "May",
    },
    {
        id: "June",
        header: "June",
        footer: "June",
    },
    {
        id: "July",
        header: "July",
        footer: "July",
    },

    {
        id: "August",
        header: "August",
        footer: "August",
    },

    {
        id: "September",
        header: "September",
        footer: "September",
    },

    {
        id: "October",
        header: "October",
        footer: "October",
    },

    {
        id: "November",
        header: "November",
        footer: "November",
    },

    {
        id: "December",
        header: "December",
        footer: "December",
    },
];



	return (
        <>
        <Grid 
            data={data}
            columns={columns}
        />
        </>
		
	);
};

export default MyComponent;