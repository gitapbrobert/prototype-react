export function getData() {
    const data = [
        {

            text: "",
            start: new Date(2026, 0, 1),
            end: new Date(2026, 6, 12),

            type: "task",
            lazy: false,
            price: 20
        },
        {
            id: 1,
            text: "PT01",
            start: new Date(2024, 0, 1),
            end: new Date(2024, 6, 12),
            duration: 1,
            progress: 20,
            type: "pet",
            lazy: false,
            price: 20
        },
        
        {
            id: 3,
            text: "PF01",
            start: new Date(2024, 0, 5),
            end: new Date(2024, 2, 12),
            duration: 8,
            progress: 0,
            parent: 1,
            type: "pef",
            price: 20
        },
        {
            id: 5,
            text: "EMB01",
            start: new Date(2024, 4, 11),
            end: new Date(2024, 6, 12),
            duration: 1,
            progress: 2,
            parent: 1,
            type: "emb",
            price: 20
        },
        {
            id: 2,
            text: "PT02",
            start: new Date(2024, 1, 0),
            end: new Date(2024, 8, 12),
            duration: 1,
            progress: 2,
            type: "pet",
            lazy: false,
            price: 20
        },
        {
            id: 4,
            text: "PF02",
            start: new Date(2024, 7, 11),
            end: new Date(2024, 8, 12),
            duration: 8,
            progress: 0,
            parent: 2,
            type: "pef",
            price: 20
        },
        {
            id: 6,
            text: "EMB02",
            start: new Date(2024, 5, 11),
            end: new Date(2024, 6, 12),
            duration: 1,
            progress: 2,
            parent: 2,
            type: "emb",
            price: 20,

        },
        {
            id: 9,
            text: "PT03",
            start: new Date(2024, 3, 0),
            end: new Date(2024, 10, 12),
            duration: 1,
            progress: 2,
            type: "pet",
            lazy: false,
            price: 20
            
        },
        {
            text: "PF03",
            start: new Date(2024, 7, 11),
            end: new Date(2024, 8, 12),
            duration: 8,
            progress: 0,
            parent: 9,
            type: "pef",
            price: 20
        },
        {
            text: "PF03",
            start: new Date(2024, 7, 11),
            end: new Date(2024, 8, 12),
            duration: 8,
            progress: 0,
            parent: 2,
            type: "pef",
            price: 20
        },
    ];
    // console.log("xdxd");

    return data;

}

export function getMarkers(){
    const markers =[
    {
      start: new Date(2024, 0, 1),
      text: "$ 0.00",
      css: 'marker  data-bs-toggle="tooltip" data-bs-title="Default tooltip"',

    },
    {
      start: new Date(2024, 1, 28),
      text: "$ 200.00",
      css: "marker",
    },
    {
      start: new Date(2024, 2, 30),
      text: "$ 150.00",
      css: "marker",
    },
    {
      start: new Date(2024, 3, 30),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2024, 4, 30),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2024, 5, 30),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2024, 6, 30),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2024, 7, 30),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2024, 8, 30),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2024, 9, 30),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2024, 10, 30),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2024, 11, 30),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2024, 12, 30),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2025, 0, 1),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2025, 1, 1),
      text: "$ 0.00",
      css: "marker",
    },
    {
      start: new Date(2025, 2   , 1),
      text: "$ 0.00",
      css: "marker",
    },
    
  ];

  return markers;
}