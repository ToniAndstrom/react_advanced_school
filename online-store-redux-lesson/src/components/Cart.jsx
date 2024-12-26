import { useAppSelector } from "../hooks/hooks";
import Product from "./Product";


const Cart = () =>{
    const cartItems = useAppSelector((state) => state.products.cart)
   
    console.log("cartItems", cartItems);
    
    return(
       
   <div>Cart
    {cartItems.map((item, index)=>{
      return <Product key={`${item.id}_${index}`} {...item} />
    })}
   </div>

   
   
    )
};

export default Cart;