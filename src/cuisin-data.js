import {FaPizzaSlice,FaHamburger} from "react-icons/fa"
import {TbSoup} from 'react-icons/tb'
import {GiTacos,GiOpenedFoodCan,GiFoodChain} from 'react-icons/gi'
import SpanishFood from '../src/images/spanish-food.svg'

 const cuisinData = 
    [
        {
            id:1,
            icon:<FaPizzaSlice />,
            cuisin:"Italian"
        },
        {
            id:2,
            icon:<FaHamburger/>,
            cuisin:"American"
        },
        {
            id:3,
            icon:<TbSoup />,
            cuisin:"Chinese"
        },
        {
            id:4,
            icon:<GiFoodChain />,
            cuisin:"Spanish"
        },
        {
            id:5,
            icon: <GiTacos />,
            cuisin:"Mexican"
        },
        {
            id:6,
            icon:<GiOpenedFoodCan />,
            cuisin:"Indian"
        }
    ]


export default cuisinData