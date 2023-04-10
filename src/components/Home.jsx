import React from "react";
export default function Home(props){
  // console.log("home",props.data)
  console.log("home",props)
    return(
       <>
       
         <div className="container text-center p-5 ">
          <h1>Home component</h1>
          <div className="cart-wraper mt-5 border" style={{width:"500px",}}>
            <div className="img-wraper item">
                    <img height="100px" src="data:image/jpeg;base64,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" />
                   <span className="ms-5 "> Price : 1,50,000</span>

            <div className="btn btn-outline-danger ms-5" 
                  onClick={()=>props.addToCartHandler({price:150000,name:'IPhone-11'})}>Add To Cart</div>

            <div className="btn btn-outline-primary "  
                  onClick={()=>props.removeToCartHandler()}>Remove To Cart</div>
          </div>    
          </div>
        </div>
       </>
    )
}