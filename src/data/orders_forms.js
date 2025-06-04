export function getPF(){
    const data =[
        {
            id: 1,
            code:'',
            model:'',
            amount_pt:0,
            amount_pf:0,
        },
    ];
    return data;
}

export function getEmb(){
    const data = [
        {
            id: 1,
            code: 'CODE001',
            model: 'Model A',
            amount_pf: 25,
            amount_emb: 21
        },
        {
            id: 2,
            code: 'CODE001',
            model: 'Model B',
            amount_pf: 30,
            amount_emb: 28
        },
        {
            id: 3,
            code: 'CODE002',
            model: 'Model C',
            amount_pf: 15,
            amount_emb: 12
        }
    ];
    return data;
}