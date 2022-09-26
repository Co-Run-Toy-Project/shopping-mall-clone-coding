
function getProduct(){
    const product = [
        {
          "id": 1,
          "product_name": "Farrell, Skiles and Lubowitz",
          "product_price": "$6.63",
          "product_color": "#79e885",
          "product_stock": "9086960804"
        },
        {
          "id": 2,
          "product_name": "Kuhn, Rosenbaum and Wintheiser",
          "product_price": "$1.09",
          "product_color": "#3cc13d",
          "product_stock": "9382833536"
        },
        {
          "id": 3,
          "product_name": "Kerluke-Abernathy",
          "product_price": "$5.13",
          "product_color": "#717714",
          "product_stock": "4216588913"
        },
        {
          "id": 4,
          "product_name": "Borer-Turcotte",
          "product_price": "$9.03",
          "product_color": "#8d1ecb",
          "product_stock": "4638756875"
        },
        {
          "id": 5,
          "product_name": "Wunsch-Hackett",
          "product_price": "$8.00",
          "product_color": "#bf46d5",
          "product_stock": "3457654492"
        },
        {
          "id": 6,
          "product_name": "Wiza, Klocko and Howe",
          "product_price": "$8.49",
          "product_color": "#514325",
          "product_stock": "3496182164"
        },
        {
          "id": 7,
          "product_name": "Cremin, Kerluke and Little",
          "product_price": "$9.34",
          "product_color": "#5f0620",
          "product_stock": "1833623738"
        },
        {
          "id": 8,
          "product_name": "Feeney, Schuster and Pollich",
          "product_price": "$4.47",
          "product_color": "#1ee615",
          "product_stock": "8532768288"
        },
        {
          "id": 9,
          "product_name": "Schiller-Bernhard",
          "product_price": "$9.05",
          "product_color": "#9164e7",
          "product_stock": "8791103460"
        },
        {
          "id": 10,
          "product_name": "Murazik-Marks",
          "product_price": "$0.08",
          "product_color": "#cc6f84",
          "product_stock": "0802007600"
        },
        {
          "id": 11,
          "product_name": "Emmerich, Beatty and Blick",
          "product_price": "$1.64",
          "product_color": "#23c0ce",
          "product_stock": "6968098334"
        },
        {
          "id": 12,
          "product_name": "Thompson-Cruickshank",
          "product_price": "$0.09",
          "product_color": "#e73c60",
          "product_stock": "3057935826"
        },
        {
          "id": 13,
          "product_name": "Hand-Farrell",
          "product_price": "$7.11",
          "product_color": "#e74879",
          "product_stock": "4441952562"
        },
        {
          "id": 14,
          "product_name": "Turner-Hoppe",
          "product_price": "$7.57",
          "product_color": "#7437b4",
          "product_stock": "8418571675"
        },
        {
          "id": 15,
          "product_name": "Ziemann-Williamson",
          "product_price": "$9.83",
          "product_color": "#00d18b",
          "product_stock": "1567679331"
        },
        {
          "id": 16,
          "product_name": "Conn, Mayert and O'Kon",
          "product_price": "$4.71",
          "product_color": "#4cf560",
          "product_stock": "4212466813"
        },
        {
          "id": 17,
          "product_name": "Paucek, Botsford and Barrows",
          "product_price": "$4.43",
          "product_color": "#bdc100",
          "product_stock": "3120726990"
        },
        {
          "id": 18,
          "product_name": "Donnelly and Sons",
          "product_price": "$5.52",
          "product_color": "#e76cd8",
          "product_stock": "6954675148"
        },
        {
          "id": 19,
          "product_name": "Pollich and Sons",
          "product_price": "$4.26",
          "product_color": "#9f6082",
          "product_stock": "1408080001"
        },
        {
          "id": 20,
          "product_name": "Moore and Sons",
          "product_price": "$8.53",
          "product_color": "#d0de22",
          "product_stock": "1493707213"
        },
        {
          "id": 21,
          "product_name": "Runolfsson, Bechtelar and Lebsack",
          "product_price": "$6.33",
          "product_color": "#651a8e",
          "product_stock": "5240643504"
        },
        {
          "id": 22,
          "product_name": "Hettinger, Daugherty and Aufderhar",
          "product_price": "$7.25",
          "product_color": "#b8d535",
          "product_stock": "7862363272"
        },
        {
          "id": 23,
          "product_name": "Weissnat Group",
          "product_price": "$0.63",
          "product_color": "#21ebb0",
          "product_stock": "9417965638"
        },
        {
          "id": 24,
          "product_name": "Stracke-Kertzmann",
          "product_price": "$4.52",
          "product_color": "#dc5a3a",
          "product_stock": "4911610840"
        },
        {
          "id": 25,
          "product_name": "Hane Inc",
          "product_price": "$0.53",
          "product_color": "#a20067",
          "product_stock": "5394996555"
        },
        {
          "id": 26,
          "product_name": "Bernier Inc",
          "product_price": "$0.63",
          "product_color": "#a6a0d2",
          "product_stock": "2662454407"
        },
        {
          "id": 27,
          "product_name": "Stehr-Pacocha",
          "product_price": "$2.39",
          "product_color": "#10d433",
          "product_stock": "9386364883"
        },
        {
          "id": 28,
          "product_name": "Oberbrunner-Osinski",
          "product_price": "$4.59",
          "product_color": "#6d6a72",
          "product_stock": "9154256194"
        },
        {
          "id": 29,
          "product_name": "Rau, Mitchell and Schneider",
          "product_price": "$6.05",
          "product_color": "#d84a29",
          "product_stock": "4819059157"
        },
        {
          "id": 30,
          "product_name": "Dach-Bashirian",
          "product_price": "$4.46",
          "product_color": "#2c4d75",
          "product_stock": "6145579145"
        },
        {
          "id": 31,
          "product_name": "Konopelski Group",
          "product_price": "$7.26",
          "product_color": "#84ee85",
          "product_stock": "8478961143"
        },
        {
          "id": 32,
          "product_name": "Harris-Kihn",
          "product_price": "$9.91",
          "product_color": "#f76b43",
          "product_stock": "3155440686"
        },
        {
          "id": 33,
          "product_name": "McKenzie Inc",
          "product_price": "$7.65",
          "product_color": "#528c59",
          "product_stock": "2329388543"
        },
        {
          "id": 34,
          "product_name": "Klocko Group",
          "product_price": "$4.18",
          "product_color": "#7e6fbc",
          "product_stock": "7353110619"
        },
        {
          "id": 35,
          "product_name": "Zulauf-Shields",
          "product_price": "$1.83",
          "product_color": "#e9091f",
          "product_stock": "5456784882"
        },
        {
          "id": 36,
          "product_name": "Cummings-Zboncak",
          "product_price": "$6.53",
          "product_color": "#4706cc",
          "product_stock": "0345746597"
        },
        {
          "id": 37,
          "product_name": "Wiegand, Nitzsche and Leuschke",
          "product_price": "$2.29",
          "product_color": "#a09339",
          "product_stock": "2913359604"
        },
        {
          "id": 38,
          "product_name": "Crona and Sons",
          "product_price": "$5.81",
          "product_color": "#99c8ef",
          "product_stock": "5701187225"
        },
        {
          "id": 39,
          "product_name": "Reynolds-Hettinger",
          "product_price": "$5.92",
          "product_color": "#dc8376",
          "product_stock": "6955625616"
        },
        {
          "id": 40,
          "product_name": "Auer, Buckridge and Maggio",
          "product_price": "$5.81",
          "product_color": "#f93d89",
          "product_stock": "4364813516"
        },
        {
          "id": 41,
          "product_name": "McGlynn, Feest and Orn",
          "product_price": "$9.31",
          "product_color": "#f7ed6b",
          "product_stock": "6676084996"
        },
        {
          "id": 42,
          "product_name": "O'Keefe Group",
          "product_price": "$2.81",
          "product_color": "#b33cb6",
          "product_stock": "6872517514"
        },
        {
          "id": 43,
          "product_name": "Okuneva and Sons",
          "product_price": "$2.17",
          "product_color": "#65ebcb",
          "product_stock": "3894202491"
        },
        {
          "id": 44,
          "product_name": "Lindgren and Sons",
          "product_price": "$3.96",
          "product_color": "#5606e3",
          "product_stock": "7973843167"
        },
        {
          "id": 45,
          "product_name": "Watsica and Sons",
          "product_price": "$1.82",
          "product_color": "#83a552",
          "product_stock": "7099523414"
        },
        {
          "id": 46,
          "product_name": "Fisher and Sons",
          "product_price": "$7.02",
          "product_color": "#2d6898",
          "product_stock": "6554912932"
        },
        {
          "id": 47,
          "product_name": "Tremblay, Will and Marks",
          "product_price": "$4.84",
          "product_color": "#9ca2fc",
          "product_stock": "8303347926"
        },
        {
          "id": 48,
          "product_name": "Bernhard, Boyer and Kunze",
          "product_price": "$8.59",
          "product_color": "#0eaa5e",
          "product_stock": "0345738349"
        },
        {
          "id": 49,
          "product_name": "Rippin-Barrows",
          "product_price": "$5.03",
          "product_color": "#4f3b57",
          "product_stock": "0979249589"
        },
        {
          "id": 50,
          "product_name": "Reynolds-Hartmann",
          "product_price": "$9.00",
          "product_color": "#f28ff1",
          "product_stock": "6337490339"
        },
        {
          "id": 51,
          "product_name": "Zemlak Inc",
          "product_price": "$8.27",
          "product_color": "#e6b59a",
          "product_stock": "8769635609"
        },
        {
          "id": 52,
          "product_name": "Strosin, McCullough and Thompson",
          "product_price": "$8.90",
          "product_color": "#ce372c",
          "product_stock": "3925266984"
        },
        {
          "id": 53,
          "product_name": "McCullough-Effertz",
          "product_price": "$1.58",
          "product_color": "#146234",
          "product_stock": "8222919822"
        },
        {
          "id": 54,
          "product_name": "Cassin-DuBuque",
          "product_price": "$4.04",
          "product_color": "#929e04",
          "product_stock": "2667282086"
        },
        {
          "id": 55,
          "product_name": "Krajcik-Monahan",
          "product_price": "$8.14",
          "product_color": "#0a00e7",
          "product_stock": "9190903218"
        },
        {
          "id": 56,
          "product_name": "Boehm Group",
          "product_price": "$2.68",
          "product_color": "#1c41da",
          "product_stock": "0036820318"
        },
        {
          "id": 57,
          "product_name": "Brekke, Ziemann and Hoeger",
          "product_price": "$3.52",
          "product_color": "#6dce83",
          "product_stock": "4425038606"
        },
        {
          "id": 58,
          "product_name": "Vandervort and Sons",
          "product_price": "$4.00",
          "product_color": "#d7e897",
          "product_stock": "8865568755"
        },
        {
          "id": 59,
          "product_name": "Kilback-Altenwerth",
          "product_price": "$1.33",
          "product_color": "#cfb158",
          "product_stock": "5016088489"
        },
        {
          "id": 60,
          "product_name": "Predovic-Leffler",
          "product_price": "$7.32",
          "product_color": "#dac5e0",
          "product_stock": "9918537809"
        },
        {
          "id": 61,
          "product_name": "Brekke and Sons",
          "product_price": "$5.70",
          "product_color": "#0fb7a6",
          "product_stock": "3819600450"
        },
        {
          "id": 62,
          "product_name": "Hamill Inc",
          "product_price": "$0.03",
          "product_color": "#17be59",
          "product_stock": "0802894399"
        },
        {
          "id": 63,
          "product_name": "Stanton, Weissnat and Baumbach",
          "product_price": "$1.26",
          "product_color": "#137168",
          "product_stock": "5816767402"
        },
        {
          "id": 64,
          "product_name": "Stark Inc",
          "product_price": "$7.62",
          "product_color": "#950d2e",
          "product_stock": "0164964460"
        },
        {
          "id": 65,
          "product_name": "Turcotte-Frami",
          "product_price": "$0.77",
          "product_color": "#f94d91",
          "product_stock": "2076233075"
        },
        {
          "id": 66,
          "product_name": "Quigley Group",
          "product_price": "$9.43",
          "product_color": "#6f1680",
          "product_stock": "8481126160"
        },
        {
          "id": 67,
          "product_name": "Watsica Inc",
          "product_price": "$5.30",
          "product_color": "#cd588b",
          "product_stock": "0248669575"
        },
        {
          "id": 68,
          "product_name": "Turcotte LLC",
          "product_price": "$4.19",
          "product_color": "#ae0756",
          "product_stock": "9155877834"
        },
        {
          "id": 69,
          "product_name": "Stokes-Mohr",
          "product_price": "$0.77",
          "product_color": "#1d8ca4",
          "product_stock": "8996548081"
        },
        {
          "id": 70,
          "product_name": "Quitzon, Olson and Hauck",
          "product_price": "$4.29",
          "product_color": "#0f3d22",
          "product_stock": "4429375577"
        },
        {
          "id": 71,
          "product_name": "Heaney Group",
          "product_price": "$3.11",
          "product_color": "#dca764",
          "product_stock": "7942402401"
        },
        {
          "id": 72,
          "product_name": "Schaefer, Ratke and Lakin",
          "product_price": "$6.35",
          "product_color": "#b964bc",
          "product_stock": "9206982990"
        },
        {
          "id": 73,
          "product_name": "Lubowitz Inc",
          "product_price": "$4.10",
          "product_color": "#502cff",
          "product_stock": "8347674302"
        },
        {
          "id": 74,
          "product_name": "Halvorson-Baumbach",
          "product_price": "$6.39",
          "product_color": "#6373c0",
          "product_stock": "4527513877"
        },
        {
          "id": 75,
          "product_name": "Bartell and Sons",
          "product_price": "$5.29",
          "product_color": "#96e980",
          "product_stock": "7233373361"
        },
        {
          "id": 76,
          "product_name": "Murphy, McDermott and Hickle",
          "product_price": "$6.80",
          "product_color": "#8ca0db",
          "product_stock": "8108196051"
        },
        {
          "id": 77,
          "product_name": "Prohaska, Kerluke and Abernathy",
          "product_price": "$6.99",
          "product_color": "#391857",
          "product_stock": "2062385080"
        },
        {
          "id": 78,
          "product_name": "Krajcik, Kunde and Carter",
          "product_price": "$9.25",
          "product_color": "#b0f5a4",
          "product_stock": "0571534724"
        },
        {
          "id": 79,
          "product_name": "Champlin, Dach and Konopelski",
          "product_price": "$0.74",
          "product_color": "#5f58b8",
          "product_stock": "3716283495"
        },
        {
          "id": 80,
          "product_name": "Cummings and Sons",
          "product_price": "$2.54",
          "product_color": "#e874ed",
          "product_stock": "2099089833"
        },
        {
          "id": 81,
          "product_name": "Vandervort Group",
          "product_price": "$2.69",
          "product_color": "#40677e",
          "product_stock": "4142270028"
        },
        {
          "id": 82,
          "product_name": "Cormier LLC",
          "product_price": "$9.70",
          "product_color": "#67911d",
          "product_stock": "8607125605"
        },
        {
          "id": 83,
          "product_name": "Schultz, Boyer and Brekke",
          "product_price": "$3.62",
          "product_color": "#76dfe2",
          "product_stock": "7578618431"
        },
        {
          "id": 84,
          "product_name": "Becker-Mueller",
          "product_price": "$7.27",
          "product_color": "#cae33f",
          "product_stock": "3279818362"
        },
        {
          "id": 85,
          "product_name": "Bailey-Osinski",
          "product_price": "$1.69",
          "product_color": "#de4437",
          "product_stock": "1339234629"
        },
        {
          "id": 86,
          "product_name": "Spencer-Yost",
          "product_price": "$0.58",
          "product_color": "#9b6416",
          "product_stock": "8829075019"
        },
        {
          "id": 87,
          "product_name": "O'Kon-Barton",
          "product_price": "$2.66",
          "product_color": "#1f42f4",
          "product_stock": "8170229138"
        },
        {
          "id": 88,
          "product_name": "Bartell, Shanahan and Crooks",
          "product_price": "$0.13",
          "product_color": "#9d99f9",
          "product_stock": "3974662723"
        },
        {
          "id": 89,
          "product_name": "Rosenbaum-Nader",
          "product_price": "$4.25",
          "product_color": "#f9bf2e",
          "product_stock": "2000206972"
        },
        {
          "id": 90,
          "product_name": "Streich, Bayer and Okuneva",
          "product_price": "$9.10",
          "product_color": "#e1c711",
          "product_stock": "3079797310"
        },
        {
          "id": 91,
          "product_name": "Hudson-Kassulke",
          "product_price": "$1.52",
          "product_color": "#30b0e2",
          "product_stock": "0247127361"
        },
        {
          "id": 92,
          "product_name": "Daugherty, Feest and Streich",
          "product_price": "$4.53",
          "product_color": "#af908d",
          "product_stock": "7444849072"
        },
        {
          "id": 93,
          "product_name": "Stokes, Macejkovic and Becker",
          "product_price": "$7.92",
          "product_color": "#1bf738",
          "product_stock": "7330167746"
        },
        {
          "id": 94,
          "product_name": "Runte-Fadel",
          "product_price": "$6.13",
          "product_color": "#86f9d3",
          "product_stock": "8814606137"
        },
        {
          "id": 95,
          "product_name": "Ledner-Stanton",
          "product_price": "$6.72",
          "product_color": "#f56295",
          "product_stock": "1716677963"
        },
        {
          "id": 96,
          "product_name": "Rempel and Sons",
          "product_price": "$2.49",
          "product_color": "#61518d",
          "product_stock": "6704106766"
        },
        {
          "id": 97,
          "product_name": "Collier, Leannon and Botsford",
          "product_price": "$8.40",
          "product_color": "#837265",
          "product_stock": "2747778002"
        },
        {
          "id": 98,
          "product_name": "Rutherford-Armstrong",
          "product_price": "$8.96",
          "product_color": "#0841a3",
          "product_stock": "6420777313"
        },
        {
          "id": 99,
          "product_name": "Kassulke, Walter and Howe",
          "product_price": "$3.66",
          "product_color": "#73cf42",
          "product_stock": "6110031445"
        },
        {
          "id": 100,
          "product_name": "McLaughlin, Goldner and Rolfson",
          "product_price": "$9.90",
          "product_color": "#3d34da",
          "product_stock": "2291523384"
        }
      ];
    
      //상품 이름 출력하기
      document.getElementById("product_name").innerHTML =product.product_name;
      document.getElementById("product_price").innerHTML =product.product_price;
      document.getElementById("product_color").innerHTML =product.product_color;
      document.getElementById("product_stock").innerHTML =product.product_stock;

}

// console.log(dummyData);