import { Grid, Willow } from "wx-react-grid";

const MyComponent = () => {

    const data = [
        {
            id: "1",
            model: 'kiwi',
            january: 20,
            february: 20,
            march: 20,
            april: 20,
            may: 20,
            june: 20,
            july: 20,
            august: 20,
            september: 20,
            october: 20,
            november: 20,
            december: 20,
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
        width: 150
    },
    {
        id: "january",
        header: "January",
        footer: "January",
    },
    {
        id: "february",
        header: "February",
        footer: "February",
    },
    {
        id: "march",
        header: "March",
        footer: "March",
    },
    {
        id: "april",
        header: "April",
        footer: "April",
    },
    {
        id: "may",
        header: "May",
        footer: "May",
    },
    {
        id: "june",
        header: "June",
        footer: "June",
    },
    {
        id: "july",
        header: "July",
        footer: "July",
    },

    {
        id: "august",
        header: "August",
        footer: "August",
    },

    {
        id: "september",
        header: "September",
        footer: "September",
    },

    {
        id: "october",
        header: "October",
        footer: "October",
    },

    {
        id: "november",
        header: "November",
        footer: "November",
    },

    {
        id: "december",
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