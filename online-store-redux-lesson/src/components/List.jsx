import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addToCart, fetchProducts } from "../store/productSlice";
import Product from "./Product";
import { Button } from "react-bootstrap";


const List = () =>{
    const products = useAppSelector((state) => state.products.products)
    const dispatch = useAppDispatch();
    console.log("products", products);

    useEffect(()=>{
        dispatch(fetchProducts())
      }, [dispatch]);

      return  (
        <div>
            <h1>Products List</h1>
            {products.map((product) => (
                <>
                <Product product={product}/>
                <Button onClick={()=> dispatch(addToCart(product))}>Add To Cart</Button>
                </>
            ))}
        </div>
      );
};

export default List;
