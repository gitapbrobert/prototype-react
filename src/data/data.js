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
      duration: 186,
      progress: 75,
      type: "pet",
      lazy: false,
      price: 1496202.00
    },
    {
      id: 2,
      text: "PT02",
      start: new Date(2024, 1, 1),
      duration: 186,
      progress: 53.5,
      type: "pet",
      lazy: false,
      price: 2206950.00

    },
    {
      id: 3,
      text: "PT03",
      start: new Date(2024, 2, 1),
      duration: 186,
      progress: 65,
      type: "pet",
      lazy: false,
      price: 2582481.00

    },
    {
      id: 4,
      text: "PT04",
      start: new Date(2024, 3, 1),
      duration: 186,
      progress: 20,
      type: "pet",
      lazy: false,
      price: 0
    },
    {
      id: 5,
      text: "PT05",
      start: new Date(2024, 4, 1),
      duration: 186,
      progress: 20,
      type: "pet",
      lazy: false,
      price: 0
    },
    {
      id: 6,
      text: "PT06",
      start: new Date(2024, 5, 1),
      duration: 186,
      progress: 20,
      type: "pet",
      lazy: false,
      price: 0
    },
    {
      id: 7,
      text: "PT07",
      start: new Date(2024, 6, 1),
      duration: 186,
      progress: 20,
      type: "pet",
      lazy: false,
      price: 0
    },
    {
      id: 8,
      text: "PT08",
      start: new Date(2024, 7, 1),
      duration: 186,
      progress: 20,
      type: "pet",
      lazy: false,
      price: 0
    },
    {
      id: 9,
      text: "PT09",
      start: new Date(2024, 8, 1),
      duration: 186,
      progress: 20,
      type: "pet",
      lazy: false,
      price: 0
    },
    {
      id: 10,
      text: "PT10",
      start: new Date(2024, 9, 1),
      duration: 186,
      progress: 20,
      type: "pet",
      lazy: false,
      price: 0
    },
    {
      id: 11,
      text: "PT11",
      start: new Date(2024, 10, 1),
      duration: 186,
      progress: 20,
      type: "pet",
      lazy: false,
      price: 0
    },
    {
      id: 12,
      text: "PT12",
      start: new Date(2024, 11, 1),
      duration: 186,
      progress: 20,
      type: "pet",
      lazy: false,
      price: 0
    },

  ];
  const PF=[
    {
      id: "PF1-1",
      text: "PF1-01",
      start: new Date(2024, 0, 1),
      duration: 96,
      progress: 75,
      parent: 1,
      type: "pef",
      lazy: false,
      price: 598480.8,
    },
    {
      id: "PF1-2",
      text: "PF1-02",
      start: new Date(2024, 1, 1),
      duration: 96,
      progress: 67,
      parent: 2,
      type: "pef",
      lazy: false,
      price: 2206950.00

    },
    {
      id: "PF1-3",
      text: "PF1-03",
      start: new Date(2024, 2, 1),
      duration: 96,
      progress: 90,
      parent: 3,
      type: "pef",
      lazy: false,
      price: 200000
    },
    {
      id: "PF2-3",
      text: "PF2-02",
      start: new Date(2024, 3, 15),
      duration: 96,
      progress: 40,
      parent: 3,
      type: "pef",
      lazy: false,
      price: 432000
    },
    {
      id: "PF2-2",
      text: "PF2-02",
      start: new Date(2024, 3, 15),
      duration: 96,
      progress: 40,
      parent: 2,
      type: "pef",
      lazy: false,
      price: 432000,
    },

  ]
  const Emb=[
    {
      id: "EMB1-1",
      text: "EMB-1",
      start: new Date(2024, 3, 6),
      end: new Date(2024, 6, 5),
      progress: 71,
      parent: "PF1-1",
      type: "emb",
      lazy: false,
      price: 897721.2
    },
    {
      id: "EMB1-2",
      text: "EMB-2",
      start: new Date(2024, 4, 7),
      end: new Date(2024, 7, 5),
      progress: 32,
      parent: "PF1-2",
      type: "emb",
      lazy: false,
      price: 20333
    },
    {
      id: "EMB1-3",
      text: "EMB-3",
      start: new Date(2024, 5, 5),
      end: new Date(2024, 8, 3),
      progress: 75,
      parent: "PF1-3",
      type: "emb",
      lazy: false,
      price: 20333
    },
    {
      id: "EMB2-3",
      text: "EMB-4",
      start: new Date(2024, 6, 20),
      duration: 90,
      progress: 27,
      parent: "PF2-3",
      type: "emb",
      lazy: false,
      price: 20333
    },
    {
      id: "EMB2-2",
      text: "EMB-4",
      start: new Date(2024, 6, 20),
      duration: 90,
      progress: 27,
      parent: "PF2-2",
      type: "emb",
      lazy: false,
      price: 20333
    },
    
    
  ];
  const resul = [...data, ...PF, ...Emb];
  return resul;

}

export function getMarkers() {
  const markers = [
    {
      start: new Date(2024, 0, 1),
      text: "$ 00",
      css: "marker",
    },
    {
      start: new Date(2024, 1, 28),
      text: "$ 1,496,202.00",
      css: "marker",
    },
    {
      start: new Date(2024, 2, 30),
      text: "$ 2,206,950.00",
      css: "marker",
    },
    {
      start: new Date(2024, 3, 30),
      text: "$ 2,582,481.00",
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
      start: new Date(2025, 2, 1),
      text: "$ 0.00",
      css: "marker",
    },

  ];

  return markers;
}

export function getLinks(){
  
  const links = [
    { id:1, source: 1, target: "PF1-1", type: "s2s" },
    { id:2, source: 2, target: "PF1-2", type: "s2s" },
    { id:3, source: 2, target: "PF2-2", type: "s2s" },
    { id:4, source: 3, target: "PF1-3", type: "s2s" },
    { id:5, source: 3, target: "PF2-3", type: "s2s" },
  ];

  const Emb_links =[
    { id:6, source: "PF1-1", target: "EMB1-1", type: "s2s" },
    { id:8, source: "PF1-2", target: "EMB1-2", type: "s2s" },
    { id:7, source: "PF1-3", target: "EMB1-3", type: "s2s" },
    { id:9, source: "PF2-3", target: "EMB2-3", type: "s2s" },
    { id:10, source: "PF2-2", target: "EMB2-2", type: "s2s" },
  ];
  const resul = [...links, ...Emb_links];


  return resul;
}