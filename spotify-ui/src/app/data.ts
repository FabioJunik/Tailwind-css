export interface MusicProps {
    id: number;
    title: string;
    autor: string;
    image: string;
}
interface DataProps {
    libary: string[];
    music: MusicProps[],
    recentlyPlayed: number[]
}

export const data: DataProps = {
    libary: [
        "Minhas Músicas",
        "louvores",
        "NerdHit",
        "Em inglês 1",
        "Para relaxar",
        "Só mais uma"
    ],
    music: [
        {
            id: 1,
            title: "Me atraiu",
            autor: "Gabriela Rocha",
            image: "/gabriela.jpg"
        },
        {
            id: 2,
            title: "Tudo Coopera Para o Meu Bem",
            autor: "Ministério Zoe",
            image: "/zoecopera.jpg"
        },
        {
            id: 3,
            title: "Esperança",
            autor: "Julia Vitoria e Gabriel Guedes",
            image: "/juliagabrielesperanca.jpg"
        },
        {
            id: 4,
            title: "Os Sonhos de Deus",
            autor: "Preto no Branco",
            image: "/pretobranco.jpeg"
        },
        {
            id: 5,
            title: "O Verbo",
            autor: "Clovis",
            image: "/clovisverbo.jpeg"
        },
        {
            id: 6,
            title: "Deserto",
            autor: "Maria Marçal",
            image: "/mariadeserto.jpeg"
        }
    ],
    recentlyPlayed: [3,5,1,2,4,6]
}