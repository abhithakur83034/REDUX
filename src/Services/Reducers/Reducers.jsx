import { Add_To_Cart,Remove_To_Cart } from "../Constant";

const initialState={
    cardData : []
}
export default function cardItem( state=[],action){
    switch(action.type){
            case Add_To_Cart:
                // console.log(action)
                return[
                    ...state,
                  {cardData: action.data} 
           ]
            case Remove_To_Cart:
                // console.log(action)
                state.pop();
                return[
                    ...state 
           ]
                break;
                
                default:
                    return state
    }

 }