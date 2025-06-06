export function getPF(){
    const data =[
        // {
        //     id: 1,
        //     code:'PT-01',
        //     coderowspan:7,
        //     model:'4X2 HUNTER',
        //     amount_pt:0,
        //     amount_pf:0,
        // },
        // {
        //     id: 2,
        //     code:'PT-01',
        //     model:'4X4 HUNTER',
        //     amount_pt:0,
        //     amount_pf:0,
        // },
        {
            id: 3,
            code:'PT-01',
            model:'4X4 HUNTER G',
            amount_pt:12,
            amount_pf:0,
        },
        {
            id: 4,
            code:'PT-01',
            model:'ALSVIN MT',
            amount_pt:100,
            amount_pf:0,
        },
        {
            id: 5,
            code:'PT-01',
            model:'CS35 PLUS',
            amount_pt:12,
            amount_pf:0,
        },
        {
            id: 6,
            code:'PT-01',
            model:'CS55 PLUS',
            amount_pt:50,
            amount_pf:0,
        },
        // {
        //     id: 7,
        //     code:'PT-01',
        //     model:'CS95 PLUS',
        //     amount_pt:0,
        //     amount_pf:0,
        // },
    ];
    return data;
}

export function getEmb(){
    const data =[
        // {
        //     id: 1,
        //     code:'PF-01',
        //     coderowspan:7,
        //     model:'4X2 HUNTER',
        //     amount_pf:0,
        //     amount_emb:0,
        // },
        {
            id: 2,
            code:'PF-01',
            model:'4X4 HUNTER',
            amount_pf:10,
            amount_emb:0,
            containers:0
        },
        // {
        //     id: 3,
        //     code:'PF-01',
        //     model:'4X4 HUNTER G',
        //     amount_pf:0,
        //     amount_emb:0,
        // },
        {
            id: 4,
            code:'PF-01',
            model:'ALSVIN MT',
            amount_pf:5,
            amount_emb:0,
            containers:0
        },
        {
            id: 5,
            code:'PF-01',
            model:'CS35 PLUS',
            amount_pf:10,
            amount_emb:0,
            containers:0
        },
        // {
        //     id: 6,
        //     code:'PF-01',
        //     model:'CS55 PLUS',
        //     amount_pf:0,
        //     amount_emb:0,
        // },
        
        // {
        //     id: 7,
        //     code:'PF-01',
        //     model:'CS95 PLUS',
        //     amount_pf:0,
        //     amount_emb:0,
        // },
        {
            id: 11,
            code:'PF-02',
            model:'4X2 HUNTER',
            amount_pf:5,
            amount_emb:0,
            containers:0
        },
        // {
        //     id: 12,
        //     code:'PF-02',
        //     model:'4X4 HUNTER',
        //     amount_pf:0,
        //     amount_emb:0,
        // },
        // {
        //     id: 13,
        //     code:'PF-02',
        //     model:'4X4 HUNTER G',
        //     amount_pf:0,
        //     amount_emb:0,
        // },
        // {
        //     id: 14,
        //     code:'PF-02',
        //     model:'ALSVIN MT',
        //     amount_pf:0,
        //     amount_emb:0,
        // },
        // {
        //     id: 15,
        //     code:'PF-02',
        //     model:'CS35 PLUS',
        //     amount_pf:0,
        //     amount_emb:0,
        // },
        {
            id: 16,
            code:'PF-02',
            model:'CS55 PLUS',
            amount_pf:2,
            amount_emb:0,
            containers:0
        },
        // {
        //     id: 17,
        //     code:'PF-02',
        //     model:'CS95 PLUS',
        //     amount_pf:0,
        //     amount_emb:0,
        // },
        
        


    ];

    return data;
}

export function getPicker() {
    const data = {
        origin:[ {label:"China", name:"china"}],
        Port: [
            {label:"Tiajin", name:"tiajin"},
            {label:"Qingdao", name:"Qingdao"},

        ],
        Nav: [
            {label:"Maersk", name:"maersk"},
            {label:"MSC", name:"msc"},
            {label:"CMA", name:"cma"},
        ],
                
        aduana: [{label:"Aduana y Transporte L&M", name:"ayudenme"}],
    }
    return data;
}