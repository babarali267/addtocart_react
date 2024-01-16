import { useEffect, useState } from "react"

const Cart = ({cartData})=>{

    const [cart,setCart] = useState(cartData)

      useEffect(()=>{
        setCart(cartData)
      },[cartData])

 const delItem = (key)=>{
     const  updatedCartData = [...cart]
     updatedCartData.splice(key,1)
     localStorage.setItem('cart' , JSON.stringify(updatedCartData))
     setCart(updatedCartData)
 }

const calculatedTotal = ()=>{
    return cart.reduce((total,item)=> total + item.price , 0)
}

    return(<>
         <div className="cart_section">
             <h1>Your List</h1>
             <div>
                {
                    cart.map((item,index)=>(
                        <div key={index} className="cart_item">
                             <span>{item.title}</span>
                             <span>{item.price}</span>
                             <span>
                                 <button onClick={()=>delItem(index)}>remove</button>
                             </span>
                         </div>   
                    ))
                }
             </div>
             <p className="total_price">Total Price : {calculatedTotal()}</p>
         </div>
    </>)
}

export default Cart