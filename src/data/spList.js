export function getData(dataset) {
    const empty = [];
    const data = [
        {
            
            id:1,
            code:"PN01",
            creation_date: new Date(2025,0,1),
            goal:2500,
            year:"2025",
            supplier: "Changan",
            type:"Real", //plan real o simulacion
            user:"John Doe",

        },
        {
            id:2,
            code:"PN02",
            creation_date: new Date(2025,0,1),
            goal:2614,
            year:"2025",
            supplier: "Changan",
            type:"Real", //plan real o simulacion
            user:"John Doe",
        },
        
        {
            id:3,
            code:"PS01",
            creation_date: new Date(2025,0,1),
            goal:2532,
            year:"2025",
            supplier: "Changan",
            type:"Simulado",//plan real o simulacion
            user:"John Doe",
            
        },
        {
            id:1,
            code:"PS02",
            creation_date: new Date(2025,0,1),
            goal:2632,
            year:"2025",
            supplier: "Changan",
            type:"Simulado", //plan real o simulacion
            user:"John Doe",
            
        },
        {
            id:5,
            code:"PS03",
            creation_date: new Date(2025,0,1),
            goal:2617,
            year:"2025",
            supplier: "Changan",
            type:"Simulado", //plan real o simulacion
            user:"John Doe",

        },

    ];
    return data;
}