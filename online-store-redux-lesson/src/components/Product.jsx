import { Container, Image } from "react-bootstrap"

const Product = ({product}) => {

    return(
        <Container>
            <h1>{product.title}</h1>
           <Image src={product.image} fluid/>
            <p>Price{product.price}</p>
            <p>{product.description}</p>
            <p>Rating:{product.rating.rate}, Times voted:{product.rating.count} </p>
        </Container>
    )
}
export default Product;