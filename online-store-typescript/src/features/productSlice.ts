import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Product from "../components/Product";

const api = "https://fakestoreapi.com/products"

export interface Rating{
    rate:number;
    count:number;
}
export interface Product {
    image: string;
    title: string;
    price: number; //you can put in string as well with | separator in incase some might have both
    rating: Rating;
    description:string;
}

const initialState = {
    products: [] as Product[],
    cart: [] as Product[],
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get<Product[]>(api)
    const data = await response.data // or return response.data
    return data;
})

export const productSlice = createSlice({
name: "poducts",
initialState,
reducers:{
    addToCart: (state, action) =>{
        state.cart = [...state.cart, action.payload]
    }
},
extraReducers: (builder) =>{
    //The below types define the return type of the action as a Product[] array
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) =>{
        state.products = action.payload
    })
}
})

export const {addToCart} = productSlice.actions
export default productSlice;