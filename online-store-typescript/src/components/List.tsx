import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchProducts } from "../features/productSlice";
import Product from "./Product";
import { calculateTotalOfProducts } from "../utils/utils";

const List = () => {
    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchProducts())
    }, [dispatch]);

    //const totalOfProducts = calculateTotalOfProducts(products) you can also call this in curly braces in <h2>Total of all products: {}</h2>
  return (
    <div>
        <h1>List will be here</h1>
        <h2>Total of all products: {calculateTotalOfProducts(products)}</h2>
        {products.map((product)=>(
            <Product {...product}/>
        ))}
        </div>
  )
};

export default List;