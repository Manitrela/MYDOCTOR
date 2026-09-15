type creneau = {
    jour:string,
    hd:string,
    hf:string,
    libre:boolean,
}

export type Doctor = {
    id:string,
    nom:string,
    telephone:string,
    specialite:string,
    horaire:creneau[]
}

export const doctors:Doctor[] = [
    {
        id:"1",
        nom:"Solo",
        telephone: "034 53 897 98",
        specialite:"Dermatologue",
        horaire:[
            {
                jour: "Lundi",
                hd: "9",
                hf: "10",
                libre: true,
            },
            {
                jour: "Mardi",
                hd: "14",
                hf: "15",
                libre: true,
            },
        ]
    },
    {
        id:"2",
        nom:"Mark",
        telephone: "033 56 789 90",
        specialite:"Dentiste",
        horaire:[
            {
                jour: "Lundi",
                hd: "9",
                hf: "10",
                libre: true,
            },
            {
                jour: "Mardi",
                hd: "14",
                hf: "15",
                libre: true,
            },
        ]
    },

    {
        id:"3",
        nom:"Koto",
        telephone: "032 56 876 43",
        specialite:"Cardiologue",
        horaire:[
            {
                jour: "Lundi",
                hd: "9",
                hf: "10",
                libre: true,
            },
            {
                jour: "Mardi",
                hd: "14",
                hf: "15",
                libre: true,
            },
        ]
    }
]