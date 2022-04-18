import React,{ useState,useEffect} from 'react'
import {fetchCartItems} from "../lib/fetch-cartItems"
function NavCart() {
    const [items,setItems] =  useState([]);

    console.log("items",items)
    useEffect(()=>{
        const fetchItems = async()=>{
            const data = await fetchCartItems();
            setItems(data)
        }
        fetchItems()
    },[items.length])
    
  return (
    <div>
        <h2>Minicart product</h2>
     {items.map(item=>{
         return (
             <div>
                 {item.id} + {item.title}
             </div>
         )
     })}
            
    </div>
  )
}

export default NavCart

