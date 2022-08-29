const clothes = [
    {
        id : 01,
        type : 'Tops',
        name : 'Perry KUWAMURA check shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '135,000',
        color : ['#365D8C']
    },
    {
        id : 02,
        type : 'Outer',
        name : 'Brest wool over coat (charcoal brown)',
        season : '9월중 출시예정',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
                cost : 'none',
        color : ['#4F473B']
    },
    {
        id : 03,
        type : 'Bottoms',
        name : 'Finn boy 80s blue denim by CALIK (from Turkey)',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '95,000',
        color : ['#365D8C']
    },
    {
        id : 04,
        type : 'Bottoms',
        name : 'Finn boy black denim by ORTA (from Turkey)',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '89,000',
        costSales : '62,000 (27,000 할인)',
        color : ['#000000']
    },
    {
        id : 05,
        type : 'Outers',
        name : 'Kelly semi-wide washed denim',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '95,000',
        color : ['#90ACC2']
    },
    {
        id : 06,
        type : 'Tops',
        name : 'Brest wool over coat (herringbone gray)',
        season : '9월중 출시 예정',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : 'none',
        color : ['#4F4F4F']
    },
    {
        id : 07,
        type : 'Tops',
        name : 'Ronettes KUWAMURA stripe shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '125,000',
        color : ['#7F95E3']
    },
    {
        id : 08,
        type : 'Tops',
        name : 'Veronica KUWAMURA stripe shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '135,000',
        color : ['#7F95E3']
    },
    {
        id : 09,
        type : 'Tops',
        name : 'Essential Supima U neck t-shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '135,000',
        color : ['#FFFFFF','#000000','#FAF2D0','#423737','#9BC0D4']
    },
    {
        id : 10,
        type : 'Tops',
        name : 'Jacklyn silket t-shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '37,000',
        color : ['#FFFFFF','#000000','#FAF2D0','#423737','#9BC0D4']
    },
    {
        id : 11,
        type : 'Tops',
        name : 'Jacklyn Finn boy washed denim by CALIK (from Turkey) t-shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '95,000',
        color : ["#9FB0C2"]
    },
    {
        id : 12,
        type : 'Bottoms',
        name : 'Nouvelle denim by KURABO (fabric from Japan)',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '87,000',
        color : ["#21314D"]
    },
    {
        id : 13,
        type : 'Tops',
        name : 'Perry KUWAMURA check shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '135,000',
        color : ['#365D8C']
    },
    {
        id : 14,
        type : 'Outer',
        name : 'Brest wool over coat (charcoal brown)',
        season : '9월중 출시예정',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
                cost : 'none',
        color : ['#4F473B']
    },
    {
        id : 15,
        type : 'Bottoms',
        name : 'Finn boy 80s blue denim by CALIK (from Turkey)',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '95,000',
        color : ['#365D8C']
    },
    {
        id : 16,
        type : 'Bottoms',
        name : 'Finn boy black denim by ORTA (from Turkey)',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '89,000',
        costSales : '62,000 (27,000 할인)',
        color : ['#000000']
    },
    {
        id : 17,
        type : 'Outers',
        name : 'Kelly semi-wide washed denim',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '95,000',
        color : ['#90ACC2']
    },
    {
        id : 18,
        type : 'Tops',
        name : 'Brest wool over coat (herringbone gray)',
        season : '9월중 출시 예정',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : 'none',
        color : ['#4F4F4F']
    },
    {
        id : 19,
        type : 'Tops',
        name : 'Ronettes KUWAMURA stripe shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '125,000',
        color : ['#7F95E3']
    },
    {
        id : 20,
        type : 'Tops',
        name : 'Veronica KUWAMURA stripe shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '135,000',
        color : ['#7F95E3']
    },
    {
        id : 21,
        type : 'Tops',
        name : 'Essential Supima U neck t-shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '135,000',
        color : ['#FFFFFF','#000000','#FAF2D0','#423737','#9BC0D4']
    },
    {
        id : 22,
        type : 'Tops',
        name : 'Jacklyn silket t-shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '37,000',
        color : ['#FFFFFF','#000000','#FAF2D0','#423737','#9BC0D4']
    },
    {
        id : 23,
        type : 'Tops',
        name : 'Jacklyn Finn boy washed denim by CALIK (from Turkey) t-shirt',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '95,000',
        color : ["#9FB0C2"]
    },
    {
        id : 24,
        type : 'Bottoms',
        name : 'Nouvelle denim by KURABO (fabric from Japan)',
        season : '',
        link : '',
        img : 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_960_720.jpg',
        cost : '87,000',
        color : ["#21314D"]
    }
    
]


