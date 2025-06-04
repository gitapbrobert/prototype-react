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
            models: [
                {
                    model: 'Model A',
                    amount_pf: 25,
                    amount_emb: 21
                },
                {
                    model: 'Model B',
                    amount_pf: 30,
                    amount_emb: 28
                }
            ]
        },
        {
            id: 2,
            code: 'CODE002',
            models: [
                {
                    model: 'Model C',
                    amount_pf: 15,
                    amount_emb: 12
                }
            ]
        }
    ];
    return data;
}