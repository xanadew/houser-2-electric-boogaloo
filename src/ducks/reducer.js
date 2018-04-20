const initialState = {
    user: {},
    name: '',
    housedesc: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    loan: 0,
    mort: 0,
    desiredrent: 0,
    houses: []
}
const UPDATE_USER = "UPDATE_USER",
      LOGOUT = "LOGOUT",
      RESET = "RESET",
      UPDATE_NAME = "UPDATE_NAME",
      UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION",
      UPDATE_ADDRESS = "UPDATE_ADDRESS",
      UPDATE_CITY = "UPDATE_CITY",
      UPDATE_STATE = "UPDATE_STATE",
      UPDATE_ZIP = "UPDATE_ZIP",
      UPDATE_IMAGE = "UPDATE_IMAGE",
      UPDATE_LOAN = "UPDATE_LOAN",
      UPDATE_MORT = "UPDATE_MORT",
      UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT",
      UPDATE_HOUSES = "UPDATE_HOUSES";

export default function (state=initialState, action){
    let {payload} = action;
    switch (action.type){
        case UPDATE_USER:
            return Object.assign({}, state, {user:Object.assign({},payload)});
        case LOGOUT:
            return Object.assign({}, state, {user:{}});
        case RESET:
            return Object.assign({}, state, {    
                name: '',
                housedesc: '',
                address: '',
                city: '',
                state: '',
                zip: 0,
                img: '',
                loan: 0,
                mort: 0,
                desiredrent: 0,
                houses: []});
        case UPDATE_NAME:
            return Object.assign({}, state, {name:payload});
        case UPDATE_DESCRIPTION:
            return Object.assign({}, state, {housedesc:payload});
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address:payload});
        case UPDATE_CITY:
            return Object.assign({}, state, {city:payload});
        case UPDATE_STATE:
            return Object.assign({}, state, {state:payload});
        case UPDATE_ZIP:
            return Object.assign({}, state, {zip:payload});
        case UPDATE_IMAGE:
            return Object.assign({}, state, {img:payload});
        case UPDATE_LOAN:
            return Object.assign({}, state, {loan:payload});
        case UPDATE_MORT:
            return Object.assign({}, state, {mort:payload});
        case UPDATE_DESIRED_RENT:
            return Object.assign({}, state, {desiredrent:payload});
        case UPDATE_HOUSES:
            return Object.assign({}, state, {houses:payload});
        default: return state;
    }
}
export function updateUser(user){
    return {
        type:UPDATE_USER,
        payload:user
    }
}
export function logout(){
    return {
        type:LOGOUT,
        payload:{}
    }
}
export function reset(){
    return {
        type:RESET,
        payload:initialState
    }
}
export function updateName(name){
    return {
        type:UPDATE_NAME,
        payload:name
    }
}
export function updateDescription(housedesc){
    return {
        type:UPDATE_DESCRIPTION,
        payload:housedesc
    }
}
export function updateCity(city){
    return {
        type:UPDATE_CITY,
        payload:city
    }
}
export function updateState(state){
    return {
        type:UPDATE_STATE,
        payload:state
    }
}
export function updateZip(zip){
    return {
        type:UPDATE_ZIP,
        payload:zip
    }
}
export function updateAddress(address){
    return {
        type:UPDATE_ADDRESS,
        payload:address
    }
}
export function updateImage(img){
    return {
        type:UPDATE_IMAGE,
        payload:img
    }
}
export function updateLoan(loan){
    return {
        type:UPDATE_LOAN,
        payload:loan
    }
}
export function updateMort(mort){
    return {
        type:UPDATE_MORT,
        payload:mort
    }
}
export function updateRent(desiredrent){
    return {
        type:UPDATE_DESIRED_RENT,
        payload:desiredrent
    }
}
export function updateHouses(houses){
    return {
        type:UPDATE_HOUSES,
        payload:houses
    }
}