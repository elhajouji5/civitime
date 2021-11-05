import Man from './man'
import { ReactComponent as Woman } from './woman.svg'
import colorFCD7B8 from './color-FCD7B8.svg'
import colorE0A39A from './color-E0A39A.svg'
import colorFCCC84 from './color-FCCC84.svg'
import color533724 from './color-533724.svg'
import colorB2C7C7 from './color-B2C7C7.svg'
import color88C10F from './color-88C10F.svg'
import colorFF1414 from './color-FF1414.svg'
import color1C3E8E from './color-striped.svg'
// import Logo from './logo.png'
import Skin from './skin.svg'
import TShirt from './t-shirt.svg'


const Male = (props) => {
    return (
        <Man {...props} />
    )
}

const Female = ({ props }) => {
    return (
        <Woman {...props} />
    )
}


const People = {
    Male, Female
}

const skinColors = {
    Skin,
    colorFCD7B8,
    colorE0A39A,
    colorFCCC84,
    color533724,
}

const dressColors = {
    TShirt,
    colorB2C7C7,
    color88C10F,
    colorFF1414,
    color1C3E8E,
}

export {
    People,
    skinColors,
    dressColors,
}
