import { colors } from "../styles/contractStyles";


const Validate = { Color:(color) => {
    return Object.getOwnPropertyNames(colors).find(name=>name===color)
    ? true
    : false
}};

export default Validate;