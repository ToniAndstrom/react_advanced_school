import { Button } from "react-bootstrap";
import { useAppDispatch } from "../hooks/hooks";
import { addToCart } from "../features/productSlice";

interface Rating {
    rate:number;
    count:number;
}

interface IProps {
    image: string;
    title: string;
    price: number | string; //you can put both in incase some might have both
    rating: Rating;
    description:string;

}

export default function Product(props: IProps) {

    const product = props;
    const dispatch = useAppDispatch();
    const handleAddProduct = () =>{
        dispatch(addToCart(product))
    }

    const {image, title, price, rating, description} = props;
  return (
    <div>
        <section className="Detail">
            <article className="Detail_thumbnail">
                <img style={{maxWidth: "10%"}}src={image} />
            </article>
            <article className="Detail_content">
                <h2>{title}</h2>
            </article>
            <article className="Detail_info">
                <span className="Detail_price">Price: {price}$</span>    
            </article>
            <article className="Detail_info">
                <span className="Detail_rating">Rating: {rating.rate}</span>
            </article>
            <article className="Detail_description">
                <p>{description}</p>
            </article>

            <Button onClick={handleAddProduct}>Add Product to Cart</Button>
        </section>
    </div>
  );
}