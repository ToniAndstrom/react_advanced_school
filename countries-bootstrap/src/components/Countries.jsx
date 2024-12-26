import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCountries } from "../services/countriesServices";
import { isLoading } from "../store/countriesSlice";
import { Col } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

const Countries = () => {
const dispatch = useDispatch();
const countries = useSelector((state)=> state.countries.countries);
const countries = useSelector((state)=> state.countries.isLoading);

console.log("countries:", countries);
console.log("isLoading:", isLoading);

useEffect(() => {
        dispatch(initializeCountries())
    }, [dispatch]);

if (isLoading){
    return (<Spinner/>
    )
}
      
    
    

    //Handle the loading case here first (use Col, Spinner)
  return (
<>
    <div>Countries will be here</div>

   // <Col className="text-center m-5"></Col>

   //Handle the received data case here
   <Container>
   <h1>{countries.name.common}</h1>
   <p>{countries.flag}</p>
   <p>{countries.maps.googleMaps}</p>
</Container>
</>
  )
}

export default Countries;