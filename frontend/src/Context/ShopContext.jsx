import React,{createContext, useState} from "react";
import all_product from '../Components/Assests/all_product'
export const ShopContext = createContext(null);


const getDefaultCart = ()=>{
    let cart = {};
    for(let index =0; index< all_product.length+1; index++){
        cart[index] =0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItem,setCartItem] = useState(getDefaultCart());
    
    
    const addToCart = (ItemId)=>{
        setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]+1}));
        console.log(cartItem);
    }
    const removeFromCart = (ItemId)=>{
        setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for (const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = all_product.find((product)=>product.id=== Number(item));
                totalAmount += itemInfo.new_price * cartItem[item];
            }
            return totalAmount;
        }
    }
    const contextValue = {getTotalCartAmount, all_product , cartItem,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;