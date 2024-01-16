import { useEffect, useState } from "react"
import Data from "./data"

import './style.css'
import Cart from "./cart.component"

const  ShopPage = ()=>{

const [myproducts , setMyProdcuts] = useState([])

 useEffect(()=>{
    const existingProducts = JSON.parse(localStorage.getItem('cart')) || []
    setMyProdcuts(existingProducts)
 },[])


 const addProduct = (product)=>{
      const newProducts = {
         ...product,
         count:1
      }
      setMyProdcuts((preProducts)=>[...preProducts,newProducts])
      localStorage.setItem('cart' , JSON.stringify([...myproducts,newProducts]))
  
 }


     return(<>
        <section className="shop">
             <div className="container">
                 <h1>This is MY shop</h1>
                 <div className="shop">
                     {
                        Data.map((item,key)=>(
                            <div className="item" key={key}>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <span>Price :$ {item.price}</span>
                                <button onClick={()=>addProduct(item)}>Add to Cart</button>
                             </div>    
                        ))
                     }
                 </div>
             </div>
        </section>
        {myproducts.length > 0 && <Cart cartData = {myproducts} />}
     </>)
}
export  default ShopPage