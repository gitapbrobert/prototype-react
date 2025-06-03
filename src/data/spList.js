export function getData(dataset) {
    const empty = [];
    const data = [
        {
            
            id:1,
            code:"PN01",
            creation_date: new Date(2025,0,1),
            goal:2500,
            year:"2025",
            supplier: "changan",
            type:"Real", //plan real o simulacion
            user:"Cosme Fulanito",

        },
        {
            id:2,
            code:"PN02",
            creation_date: new Date(2025,0,1),
            goal:2614,
            year:"2025",
            supplier: "changan",
            type:"Real", //plan real o simulacion
            user:"Cosme Fulanito",
        },
        
        {
            id:3,
            code:"PS01",
            creation_date: new Date(2025,0,1),
            goal:2532,
            year:"2025",
            supplier: "changan",
            type:"Simulado",//plan real o simulacion
            user:"Cosme Fulanito",
            
        },
        {
            id:1,
            code:"PS02",
            creation_date: new Date(2025,0,1),
            goal:2632,
            year:"2025",
            supplier: "changan",
            type:"Simulado", //plan real o simulacion
            user:"Cosme Fulanito",
            
        },
        {
            id:5,
            code:"PS03",
            creation_date: new Date(2025,0,1),
            goal:2617,
            year:"2025",
            supplier: "changan",
            type:"Simulado", //plan real o simulacion
            user:"Cosme Fulanito",
            
        },
    ];
    if (dataset === 0){
        return empty;
    }
    else{
        return data;
    }

}