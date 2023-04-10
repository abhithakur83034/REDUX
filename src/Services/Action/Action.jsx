import  {Add_To_Cart,Remove_To_Cart} from '../Constant'
export const  addToCart=(data)=>{
    // console.log(data)
    return{
        type : 'Add_To_Cart',
        data:data
    }
}
export const  removeToCart=()=>{
    // console.log(data)
    return{
        type : 'Remove_To_Cart',
        
    }
}
 