import { Baseball, BasketBall, Cricket, FloorBall, Football, MobileApp, Rugby, TableTennis, Tennis, Volleyball,LiveCricket,LiveFootball,LiveCasino,LivePoker,LiveTennis,LiveBasketball,LiveTennis1,LiveTableTennis,LiveRugby,LiveVolleyball,Ind,Aus,Ban,Fra,Pak,Usa, SAL, AUSL,Img1,Img2,Img3,Img4,Img5,Img6} from "./imageImport"
import { BiDesktop,BiFile, BiMobileAlt,BiBell,BiLogIn,BiUserCircle,BiMoney } from 'react-icons/bi';
import { HiLanguage } from 'react-icons/hi2';
import {GiPayMoney } from 'react-icons/gi';
import {TbCurrencyTaka } from 'react-icons/tb';

// upper Navbar
const upperNavbarLinks =[
    {
        id: 1,
        title: 'Mobile App',
        img: <BiMobileAlt/>,
        
    },
    {
        id: 2,
        title: 'Desktop App',
        img: <BiDesktop/>,
        
    },
    {
        id: 3,
        title: 'EN',
        img: <HiLanguage/>,
        
    },
    {
        id: 4,
        title: 'Result',
        img: <BiFile/>,
        
    },
    {
        id: 5,
        title: 'Bonus',
        img: <GiPayMoney/>,
        
    },
    {
        id: 6,
        title: 'Notification Show Here',
        img: <BiBell/>,
        
    },
    {
        id: 7,
        title: 'Login',
        img: <BiLogIn/>,
        
    },
    {
        id: 8,
        title: 'Register',
        img: <BiUserCircle/>,
        
    },
    {
        id: 9,
        title: 'Payments',
        img: <TbCurrencyTaka/>,
        
    },
    {
        id: 10,
        title: 'Deposit Now',
        img: <BiMoney/>,
        
    },
]
// navbar 
const navLinks = [
    {
        id: 1,
        title: 'Live Event'
    },
    {
        id: 2,
        title: 'Live Casino'
    },
    {
        id: 3,
        title: 'Virtual Sports'
    },
    {
        id: 4,
        title: 'Slots'
    },
    {
        id: 5,
        title: 'Instant Game'
    },
    {
        id: 6,
        title: 'Tv Game'
    }
]

// body left side data
const sports = [
    {
        id: 1,
        name: "Cricket",
        img: Cricket
    },
    {
        id: 2,
        name: "Football",
        img: Football
    },
    {
        id: 3,
        name: "Volleyball",
        img: Volleyball
    },
    {
        id: 4,
        name: "Tennis",
        img: Tennis
    },
    {
        id: 5,
        name: "FloorBall",
        img: FloorBall
    },
    {
        id: 6,
        name: "Baseball",
        img: Baseball
    },
    {
        id: 7,
        name: "Rugby",
        img: Rugby
    },
    {
        id: 8,
        name: "Table Tennis",
        img: TableTennis
    },
    {
        id: 9,
        name: "Mobile App",
        img: MobileApp
    },
    {
        id: 10,
        name: "Volleyball",
        img: BasketBall
    },
    {
        id: 11,
        name: "Cricket",
        img: Cricket
    },
    {
        id: 12,
        name: "Football",
        img: Football
    },
    {
        id: 13,
        name: "Volleyball",
        img: Volleyball
    },
    {
        id: 14,
        name: "Tennis",
        img: Tennis
    },
    {
        id: 15,
        name: "FloorBall",
        img: FloorBall
    },
    {
        id: 16,
        name: "Baseball",
        img: Baseball
    },
    {
        id: 17,
        name: "Rugby",
        img: Rugby
    },
    {
        id: 18,
        name: "Table Tennis",
        img: TableTennis
    },
    {
        id: 19,
        name: "Mobile App",
        img: MobileApp
    },
    {
        id: 20,
        name: "Volleyball",
        img: BasketBall
    },
    {
        id: 21,
        name: "Cricket",
        img: Cricket
    },
    {
        id: 22,
        name: "Football",
        img: Football
    },
    {
        id: 23,
        name: "Volleyball",
        img: Volleyball
    },
    {
        id: 24,
        name: "Tennis",
        img: Tennis
    },
    {
        id: 25,
        name: "FloorBall",
        img: FloorBall
    },
    {
        id: 26,
        name: "Baseball",
        img: Baseball
    },
    {
        id: 27,
        name: "Rugby",
        img: Rugby
    },
    {
        id: 28,
        name: "Table Tennis",
        img: TableTennis
    },
    {
        id: 29,
        name: "Mobile App",
        img: MobileApp
    },
    {
        id: 30,
        name: "Volleyball",
        img: BasketBall
    },
    {
        id: 31,
        name: "Cricket",
        img: Cricket
    },
    {
        id: 32,
        name: "Football",
        img: Football
    },
    {
        id: 33,
        name: "Volleyball",
        img: Volleyball
    },
    {
        id: 34,
        name: "Tennis",
        img: Tennis
    },
    {
        id: 35,
        name: "FloorBall",
        img: FloorBall
    },
    {
        id: 36,
        name: "Baseball",
        img: Baseball
    },
    {
        id: 37,
        name: "Rugby",
        img: Rugby
    },
    {
        id: 38,
        name: "Table Tennis",
        img: TableTennis
    },
    {
        id: 39,
        name: "Mobile App",
        img: MobileApp
    },
    {
        id: 40,
        name: "Volleyball",
        img: BasketBall
    },
]

// body right side data
const liveSports = [
    {
        id: 1,
        title: "Live Cricket",
        img: LiveCricket
    },
    {
        id: 2,
        title: "Live Football",
        img: LiveFootball
    },
    {
        id: 3,
        title: "Live Casino",
        img: LiveCasino
    },
    {
        id: 4,
        title: "Live Poker",
        img: LivePoker
    },
    {
        id: 5,
        title: "Live Tennis",
        img: LiveTennis
    },
    {
        id: 6,
        title: "Live BasketBall",
        img: LiveBasketball
    },
    {
        id: 7,
        title: "Live Tennis",
        img: LiveTennis1
    },
    {
        id: 8,
        title: "Live Table tennis",
        img: LiveTableTennis
    },
    {
        id: 9,
        title: "Live Rugby",
        img: LiveRugby
    },
    {
        id: 10,
        title: "Live Volleyball",
        img: LiveVolleyball
    },
]

// top championships
const championships = [
    {
        id: 1,
        title: "Cricket",
        img: Cricket,
        cham: [
            {
               id: 1,
               name: "Indian Premier League (IPL)",
               flag: Ind
            },
            {
               id: 2,
               name: "Big Bash League (BBL)",
               flag: Aus
            },
            {
               id: 3,
               name: "Bangladesh Premier League (BPL)",
               flag: Ban
            },
            {
               id: 4,
               name: "France Premier League (FPL)",
               flag: Fra
            },
            {
               id: 5,
               name: "Pakistan Champion League (PCL)",
               flag: Pak
            },
            {
               id: 6,
               name: "American Premier League (UPL)",
               flag: Usa
            },
        ]
    },
    {
        id: 2,
        title: "Football",
        img: Football,
        cham: [
            {
               id: 1,
               name: "Indian Premier League (IPL)",
               flag: Ind
            },
            {
               id: 2,
               name: "Big Bash League (BBL)",
               flag: Aus
            },
            {
               id: 3,
               name: "Bangladesh Premier League (BPL)",
               flag: Ban
            },
            {
               id: 4,
               name: "France Premier League (FPL)",
               flag: Fra
            },
            {
               id: 5,
               name: "Pakistan Champion League (PCL)",
               flag: Pak
            },
            {
               id: 6,
               name: "American Premier League (UPL)",
               flag: Usa
            },
        ]
    },
    {
        id: 3,
        title: "Tennis",
        img: Tennis,
        cham: [
            {
               id: 1,
               name: "Indian Premier League (IPL)",
               flag: Ind
            },
            {
               id: 2,
               name: "Big Bash League (BBL)",
               flag: Aus
            },
            {
               id: 3,
               name: "Bangladesh Premier League (BPL)",
               flag: Ban
            },
            {
               id: 4,
               name: "France Premier League (FPL)",
               flag: Fra
            },
            {
               id: 5,
               name: "Pakistan Champion League (PCL)",
               flag: Pak
            },
            {
               id: 6,
               name: "American Premier League (UPL)",
               flag: Usa
            },
        ]
    },
    {
        id: 4,
        title: "Table Tennis",
        img: TableTennis,
        cham: [
            {
               id: 1,
               name: "Indian Premier League (IPL)",
               flag: Ind
            },
            {
               id: 2,
               name: "Big Bash League (BBL)",
               flag: Aus
            },
            {
               id: 3,
               name: "Bangladesh Premier League (BPL)",
               flag: Ban
            },
            {
               id: 4,
               name: "France Premier League (FPL)",
               flag: Fra
            },
            {
               id: 5,
               name: "Pakistan Champion League (PCL)",
               flag: Pak
            },
            {
               id: 6,
               name: "American Premier League (UPL)",
               flag: Usa
            },
        ]
    },
]

// live bet sports list
const sportsList =[
    {
        id: 1,
        name: "Cricket",
        img: Cricket
    },
    {
        id: 2,
        name: "Football",
        img: Football
    },
    {
        id: 3,
        name: "Volleyball",
        img: Volleyball
    },
    {
        id: 4,
        name: "Tennis",
        img: Tennis
    },
    {
        id: 5,
        name: "FloorBall",
        img: FloorBall
    },
    {
        id: 6,
        name: "Baseball",
        img: Baseball
    },
    {
        id: 7,
        name: "Rugby",
        img: Rugby
    },
    {
        id: 8,
        name: "Table Tennis",
        img: TableTennis
    },
    {
        id: 9,
        name: "Mobile App",
        img: MobileApp
    },
    {
        id: 10,
        name: "Volleyball",
        img: BasketBall
    },
]

const winLists=[
    {
        id: 1,
        tag: '1'
    },
    {
        id: 2,
        tag: 'x'
    },
    {
        id: 3,
        tag: '2'
    },
    {
        id: 4,
        tag: '1'
    },
    {
        id: 5,
        tag: 'Team Wins'
    },
    {
        id: 6,
        tag: '2'
    },
    {
        id: 7,
        tag: '0'
    },
    {
        id: 8,
        tag: 'total'
    },
    {
        id: 9,
        tag: 'U'
    },
    {
        id: 10,
        tag: '6+'
    },
]


const liveScores = [
    {
        id: 1,
        country1: {
            name:"South Africa",
            img:  SAL,
            run: '112/2',
        },
        country2: {
            name:"Australia",
            img:  AUSL,
            run: '0/0',
        },
        
        list: ['1','1','1','1','-','1','-','1','-','1']
    },
    {
        id: 2,
        country1: {
            name:"South Africa",
            img:  SAL,
            run: '112/2',
        },
        country2: {
            name:"Australia",
            img:  AUSL,
            run: '0/0',
        },
        
        list: ['1','1','1','1','-','1','-','1','-','1']
    },
    {
        id: 3,
        country1: {
            name:"South Africa",
            img:  SAL,
            run: '112/2',
        },
        country2: {
            name:"Australia",
            img:  AUSL,
            run: '0/0',
        },
        
        list: ['1','1','1','1','-','1','-','1','-','1']
    },
    {
        id: 4,
        country1: {
            name:"South Africa",
            img:  SAL,
            run: '112/2',
        },
        country2: {
            name:"Australia",
            img:  AUSL,
            run: '0/0',
        },
        
        list: ['1','1','1','1','-','1','-','1','-','1']
    },
    {
        id: 5,
        country1: {
            name:"South Africa",
            img:  SAL,
            run: '112/2',
        },
        country2: {
            name:"Australia",
            img:  AUSL,
            run: '0/0',
        },
        
        list: ['1','1','1','1','-','1','-','1','-','1']
    },
    {
        id: 6,
        country1: {
            name:"South Africa",
            img:  SAL,
            run: '112/2',
        },
        country2: {
            name:"Australia",
            img:  AUSL,
            run: '0/0',
        },
        
        list: ['1','1','1','1','-','1','-','1','-','1']
    },
    {
        id: 7,
        country1: {
            name:"South Africa",
            img:  SAL,
            run: '112/2',
        },
        country2: {
            name:"Australia",
            img:  AUSL,
            run: '0/0',
        },
        
        list: ['1','1','1','1','-','1','-','1','-','1']
    },
    {
        id: 8,
        country1: {
            name:"South Africa",
            img:  SAL,
            run: '112/2',
        },
        country2: {
            name:"Australia",
            img:  AUSL,
            run: '0/0',
        },
        
        list: ['1','1','1','1','-','1','-','1','-','1']
    },
    {
        id: 1,
        country1: {
            name:"South Africa",
            img:  SAL,
            run: '112/2',
        },
        country2: {
            name:"Australia",
            img:  AUSL,
            run: '0/0',
        },
        
        list: ['1','1','1','1','-','1','-','1','-','1']
    },
]

const carouselData = [
    {
        id:1,
        title: 'Legend of Cleopatra M...',
        img: Img1
    },
    {
        id:2,
        title: 'Sweet Bonanza',
        img: Img2
    },
    {
        id:3,
        title: 'Hot Coins: Hold and Win...',
        img: Img3
    },
    {
        id:4,
        title: 'Book of Gold: Multichan...',
        img: Img4
    },
    {
        id:5,
        title: 'The Dog House Mega...',
        img: Img5
    },
    {
        id:6,
        title: 'Legend of Cleopatra M...',
        img: Img6
    }
]

export {navLinks,sports,liveSports,championships, sportsList,winLists, liveScores,carouselData,upperNavbarLinks}