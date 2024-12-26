import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { initializeCountries } from "../services/countriesServices";
import { Button, Col, Container, Form, FormControl, Row, Spinner } from "react-bootstrap";
import { clearFavourites, getFavouritesFromSource } from "../store/favouritesSlice";
import CountryCard from "./CountryCard";

// Favourites to be written
const Favourites =()=>{
const dispatch = useDispatch();
let countriesList = useSelector((state) => state.countries.countries);
const [search, setSearch] = useState("");
const countriesIsLoading = useSelector ((state)=>state.countries.isLoading)
const favouriteslist = useSelector((state) => state.favourites.favourites);
const favouritesIsLoading = useSelector ((state) => state.favourites.isLoading)

if (Array.isArray(favouriteslist) && favouriteslist.length > 0){
    countriesList = countriesList.filter((country) => favouriteslist.includes(country.name.common))
}else{
    countriesList =[];
}

useEffect(()=>{
dispatch(initializeCountries())
dispatch(getFavouritesFromSource())
}, [dispatch]);

console.log("favourites:", countriesList);

if (countriesIsLoading || favouritesIsLoading){
    return(
    <Col className="text-center m-5">
    <Spinner
      animation="border"
      role="status"
      className="center"
      variant="info"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </Col>
)
}

return(
  <Container fluid>



        <Row>
            <Col className="mt-5 d-flex justify-content-center">
            <Form>
                <FormControl
                style={{width:"18rem"}}
                type="search"
                className="me-2"
                placeholder="Search"
                onChange={(e)=> setSearch(e.target.value)}
                />
            </Form>
            </Col>
        </Row>
          <Button 
    variant="danger"
    onClick={() =>
                dispatch(clearFavourites())
              }>Clear All Favourites</Button>
        <Row xs={2} md={3} lg={4} className="g-3">
        {countriesList.filter((country) =>{
          return country.name.official
          .toLowerCase()
          .includes(search.toLowerCase());
        }).map((country) =>(
          
          <CountryCard key={country.name.common} country={country}/>
          ))
          
        }
        
      </Row>
    </Container>
)

}


export default Favourites