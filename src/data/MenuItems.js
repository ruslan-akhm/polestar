import ps1Conf from '../img/menu/ps1-configurator-menu-1.webp'
import ps1Exp from '../img/menu/ps1-explore-menu-1.webp'
import ps2Conf from '../img/menu/ps2-configurator-menu-1.webp'
import ps2Exp from '../img/menu/ps2-explore-menu-1.webp'
import ps1ConfJPG from '../img/menu/ps1-configurator-menu-jpg-1.jpg'
import ps1ExpJPG from '../img/menu/ps1-explore-menu-jpg-1.jpg'
import ps2ConfJPG from '../img/menu/ps2-configurator-menu-jpg-1.jpg'
import ps2ExpJPG from '../img/menu/ps2-explore-menu-jpg-1.jpg'

export default [
    {
        item:"Home",
        sub:null
    },
    {
        item:"Polestar 1 >",
        sub:[{
                title:"Explore",
                img:[ps1Exp,ps1ExpJPG],
                id:'ps1-1'    
            },
            {
                title:"Configure",
                img:[ps1Conf,ps1ConfJPG],
                id:'ps1-2'
            }
        ]
    },
    {
        item:"Polestar 2 >",
        sub:[{
            title:"Explore",
            img:[ps2Exp,ps2ExpJPG],
            id:'ps2-1'    
        },
        {
            title:"Configure",
            img:[ps2Conf,ps2ConfJPG],
            id:'ps2-2'
        }
    ]
    },
    {
        item:"News",
        sub:null
    },
    {
        item:"My account",
        sub:null
    },
    {
        item:"Spaces",
        sub:null
    }
]