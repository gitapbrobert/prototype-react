export function getData(){
    const data = [
        {
            id: 1,
            text: "PT01",
            start: new Date(2024, 5, 11),
            end: new Date(2024, 6, 12),
            duration: 1,
            progress: 2,
            type: "pet",
            lazy: false,
        },
        {
            id: 2,
            text: "PT02",
            start: new Date(2024, 5, 11),
            end: new Date(2024, 6, 12),
            duration: 1,
            progress: 2,
            type: "pet",
            lazy: false,
        },
        {
            id: 3,
            text: "PF01",
            start: new Date(2024, 7, 11),
            end: new Date(2024, 8, 12),
            duration: 8,
            progress: 0,
            parent: 1,
            type: "pef",
        },
        {
            id: 4,
            text: "New Task 2",
            start: new Date(2024, 7, 10),
            end: new Date(2024, 8, 12),
            duration: 3,
            progress: 0,
            type: "task",
            lazy: false,
        },
        {
            id: 5,
            text: "EMB01",
            start: new Date(2024, 5, 11),
            end: new Date(2024, 6, 12),
            duration: 1,
            progress: 2,
            parent: 3,
            type: "emb",
            precio: 40,
        },
    ];
    console.log("xdxd");


    return data;

}