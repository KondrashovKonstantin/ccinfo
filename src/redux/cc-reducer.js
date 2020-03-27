import { API } from "../api";

const SET_CC = 'cc-list/SET-CC'
const CHANGE_START_ITEM = 'cc-list/CHANGE-START-ITEM'
const IS_FETCHING_TOGGLE = 'cc-list/IS-FETCHING-TOGGLE'
const CLEAR_CC = 'cc-list/CLEAR-CC'

let initialState = {
    items: [],
    startItem: 1,
    isFetching: true

}

const ccReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
        case SET_CC:{
            return{...state, items: [...state.items, ...action.items]}
        }
        case CHANGE_START_ITEM:{
            return{...state, startItem: action.startItem}
        }
        case IS_FETCHING_TOGGLE:{
            return{...state, isFetching: action.flag}
        }
        case CLEAR_CC:{
            return {...state, items:[]}
        }
    }
    
}
//ACTION CREATORS
export const setCCItems = (items) => {return{type: SET_CC, items}}
export const changeStartItem = (startItem) => {return{type: CHANGE_START_ITEM, startItem}}
export const isFetchingToggle = (flag) => {return{type: IS_FETCHING_TOGGLE, flag}}
export const clearCC = () => {return{type: CLEAR_CC}}


//THUNK CREATORS
export const getCCItems = (startItem, min_price, max_price,sort_dir,sort) => (dispatch) => {
    dispatch(isFetchingToggle(true))
    API.getCClist(startItem, min_price, max_price,sort_dir,sort).then(data => {
        dispatch(setCCItems(data.data))
        dispatch(changeStartItem(startItem+30))
        dispatch(isFetchingToggle(false))
    })
}

export default ccReducer;