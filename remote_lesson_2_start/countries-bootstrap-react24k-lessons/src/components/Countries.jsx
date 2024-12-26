import { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { initializeCountries } from "../services/countriesServices";
import { search } from "../store/countriesSlice";
import { addFavourite, removeFavourite } from "../store/favouritesSlice";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PeopleIcon from '@mui/icons-material/People';
import LanguageIcon from '@mui/icons-material/Language';
import PaidIcon from '@mui/icons-material/Paid';

const Countries = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries.countries);
  const isLoading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);
  const favouritesList = useSelector((state) => state.favourites.favourites)

  console.log("Countries: ", countries);
  console.log("isLoading: ", isLoading);

  // const exampleMapTest =() =>{
  //   console.time("exampleMapTest start:");
  //   countries.map((country)=>{
  //     console.log(country.name.commmon)
  //   });
  //   console.timeEnd("exampleMapTest end:")
  // }
  // exampleMapTest();

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);


  // Handle the loading case here first (use Col, and Spinner)
  if (isLoading) {
    return (
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
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <Form>
            <Form.Control
              style={{ width: "18rem" }}
              type="search"
              className="me-2"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => dispatch(search(e.target.value))}
            />
          </Form>
        </Col>
      </Row>
      <Row xs={2} md={3} lg={4} className="g-3">
        {countries
          .filter((country) => {
            return country.name.common
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
          .map((country) => (
            <Col className="mt-5" key={country.name.official}>
              <Card className="h-100">
                <Link
                  to={`/countries/${country.name.common}`}
                  state={{ country: country }}
                >
                  <Card.Img
                    variant="top"
                    src={country.flags.svg}
                    alt={country.name.common}
                    className="rounded h-50"
                    style={{
                      objectFit: "cover",
                      minHeight: "200px",
                      maxHeight: "200px",
                    }}
                  />
                </Link>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{country.name.common}</Card.Title>
                  <Card.Subtitle className="mb-5 text-muted">
                    {country.name.official}
                  </Card.Subtitle>
                  <ListGroup
                    variant="flush"
                    className="flex-grow-1 justify-content-center"
                  >
                    <ListGroup.Item>
                    <PeopleIcon style={{color:"grey", marginRight:"1rem"}}/>
                      <i className="bi bi-people me-2">
                        {country.population.toLocaleString()}
                      </i>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <PaidIcon style={{color:"grey", marginRight:"1rem"}}/>
                      <i className="me-2">
                        {Object.values(country.currencies || {})
                          .map((currency) => currency.name)
                          .join(", ") || "No currency"}
                      </i>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <LanguageIcon style={{color:"grey", marginRight:"1rem"}}/>
                      <i className="me-2">
                        {Object.values(country.languages || {})
                          .map((language) => language)
                          .join(", ") || "No currency"}
                      </i>
                    </ListGroup.Item>
                  </ListGroup>

                  {favouritesList.includes(country.name.common) ? <button style={{border: 'none', background: 'none', color:"red"}}>
                    <FavoriteIcon onClick={() => dispatch(removeFavourite(country.name.common))}/>
                    </button> : <button style={{border: 'none', background: 'none',color:"gainsboro"}}><FavoriteBorderIcon onClick={() => dispatch(addFavourite(country.name.common))}/></button>}
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Countries;
