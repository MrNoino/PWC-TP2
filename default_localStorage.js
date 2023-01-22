// Local Storage Default

var users = [
    {
        username: "Mr.Noino",
        score: 11
    },
    {

        username: "Alanzoka",
        score: 2
    
    }, 
    {

        username: "Sikera",
        score: 1
    
    },
    {

        username: "Irineu",
        score: 6
    
    }

];

localStorage.setItem("users", JSON.stringify(users));

var questions = [
    {
        id: 1,
        question: "Quem foi o primeiro rei de Portugal?",
        options: [
            {
                id: 4,
                answer: true,
                value: "D. Afonso Henriques"
            },
            {
                id: 2,
                value: "D. João I"
            },
            {
                id: 3,
                value: "D. Fernando"
            },
            {
                id: 1,
                value: "D. Manuel I"
            }
        ],
        level: "1"

    },
    {
    
        id: 2,
        question: "Quantos planetas é constituído o sistema solar?",
        options: [
            {
                id: 2,
                answer: true,
                value: "8"
            },
            {
                id: 1,
                value: "7"
            },
            {
                id: 3,
                value: "5"
            },
            {
                id: 4,
                value: "9"
            }
        ],
        level: "1"

    },
    {
        id: 3,
        question: "Quantos continentes existem no planeta Terra?",
        options: [
            {
                id: 3,
                answer: true,
                value: "6"
            },
            {
                id: 2,
                value: "4"
            },
            {
                id: 1,
                value: "7"
            },
            {
                id: 4,
                value: "5"
            }
        ],
        level: "1"

    },
    {
        id: 4,
        question: "Quantos oceanos existem no planeta Terra?",
        options: [
            {
                id: 2,
                answer: true,
                value: "5"
            },
            {
                id: 1,
                value: "7"
            },
            {
                id: 3,
                value: "8"
            },
            {
                id: 4,
                value: "6"
            }
        ],
        level: "1"

    },
    {
        
        id: 5,
        question: "Qual o nome do vocalista da banda Queen?",
        options: [
            {
                id: 4,
                answer: true,
                value: "Freddie Mercury"
            },
            {
                id: 1,
                value: "Brian May"
            },
            {
                id: 2,
                value: "Roger Waters"
            },
            {
                id: 3,
                value: "Neil Tennant"
            }
        ],
        level: "2"

    },
    {
    
        id: 6,
        question: "Qual o oceano que banha a costa portuguesa?",
        options: [
            {
                id: 1,
                answer: true,
                value: "Oceano Atlântico"
            },
            {
                id: 2,
                value: "Oceano Pacífico"
            },
            {
                id: 3,
                value: "Oceano Índico"
            },
            {
                id: 4,
                value: "Oceano Ártico"
            }
        ],
        level: "2"

    },
    {
    
        id: 7,
        question: "Quais os países que fazem fronteira terrestre com Portugal?",
        options: [
            {
                id: 2,
                answer: true,
                value: "Apenas Espanha"
            },
            {
                id: 1,
                value: "Espanha e França"
            },
            {
                id: 3,
                value: "França e Alemanha"
            },
            {
                id: 4,
                value: "Apenas França"
            }
        ],
        level: "2"

    },
    {
    
        id: 8,
        question: "Qual o sistema do corpo humano que contém o orgão instestino delgado?",
        options: [
            {
                id: 3,
                answer: true,
                value: "Sistema Digestivo"
            },
            {
                id: 1,
                value: "Sistema Respiratório"
            },
            {
                id: 2,
                value: "Sistema Linfático"
            },
            {
                id: 4,
                value: "Sistema Cardiovascular"
            }
        ],
        level: "2"

    },
    {
    
        id: 9,
        question: "Qual a data do falecimento do ex. Presidente dos EUA, John F. Kennedy?",
        options: [
            {
                id: 4,
                answer: true,
                value: "22 de novembro de 1963"
            },
            {
                id: 2,
                value: "22 de novembro de 1962"
            },
            {
                id: 3,
                value: "24 de abril de 1963"
            },
            {
                id: 1,
                value: "13 de junho de 1962"
            }
        ],
        level: "3"

    },
    {
    
        id: 10,
        question: "A quando a estação de inverno em Portugal, qual a estação de inverno no Brasil?",
        options: [
            {
                id: 1,
                answer: true,
                value: "Verão"
            },
            {
                id: 2,
                value: "Outono"
            },
            {
                id: 3,
                value: "Inverno"
            },
            {
                id: 4,
                value: "Primavera"
            }
        ],
        level: "3"

    },
    {
    
        id: 11,
        question: "Qual a data da primeira viagem do Homem à Lua?",
        options: [
            {
                id: 3,
                answer: true,
                value: "20 de julho de 1969"
            },
            {
                id: 1,
                value: "20 de junho de 1970"
            },
            {
                id: 4,
                value: "10 de julho de 1969"
            },
            {
                id: 2,
                value: "4 de julho de 1963"
            }
        ],
        level: "3"

    },
    {
    
        id: 12,
        question: "Quais as datas de início e de fim da guerra colonial de Portugal?",
        options: [
            {
                id: 2,
                answer: true,
                value: "1961 - 1974"
            },
            {
                id: 4,
                value: "1960 - 1974"
            },
            {
                id: 3,
                value: "1961 – 1973"
            },
            {
                id: 1,
                value: "1955 – 1964"
            }
        ],
        level: "4"

    },
    {
    
        id: 13,
        question: "Qual a distancia do centro da Terra ao centro da Lua?",
        options: [
            {
                id: 1,
                answer: true,
                value: "384 400 km"
            },
            {
                id: 2,
                value: "394 400km"
            },
            {
                id: 4,
                value: "484 400km"
            },
            {
                id: 3,
                value: "312 600km"
            }
        ],
        level: "4"

    },
    {
    
        id: 14,
        question: "Quem foi o inventor da Lâmpada?",
        options: [
            {
                id: 2,
                answer: true,
                value: "Thomas Edison"
            },
            {
                id: 1,
                value: "Nikola Tesla"
            },
            {
                id: 3,
                value: "Albert Einstein"
            },
            {
                id: 4,
                value: "Samuel Colt"
            }
        ],
        level: "4"

    },
    {
        id: 15,
        question: "Quantos kilometros quadrados tem a Terra?",
        options: [
            {
                id: 4,
                answer: true,
                value: "510 100 000 km²"
            },
            {
                id: 3,
                value: "490 100 000 km²"
            },
            {
                id: 2,
                value: "399 900 000 km²"
            },
            {
                id: 1,
                value: "600 000 463 km²"
            }
        ],
        level: "5"

    },
    {
        id: 16,
        question: "Em que ano foi criada a espingarda M14?",
        options: [
            {
                id: 2,
                answer: true,
                value: "1954"
            },
            {
                id: 4,
                value: "1955"
            },
            {
                id: 1,
                value: "1950"
            },
            {
                id: 3,
                value: "1957"
            }
        ],
        level: "5"

    },
    {
    
        id: 17,
        question: "Em programação de sistemas de informação, o que significa um ponteiro?",
        options: [
            {
                id: 4,
                answer: true,
                value: "Guarda o endereço de memória de uma variável."
            },
            {
                id: 1,
                value: "É uma variável global."
            },
            {
                id: 3,
                value: "É uma função especifica fornecida pelo Sistema Operativo."
            },
            {
                id: 2,
                value: "Cria um novo tipo de dados."
            }
        ],
        level: "5"

    }
];

localStorage.setItem("questions", JSON.stringify(questions));