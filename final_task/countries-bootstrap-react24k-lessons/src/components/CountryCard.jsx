import { Button, Card, Col, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite, removeFavourite } from "../store/favouritesSlice";
import PeopleIcon from '@mui/icons-material/People';
import LanguageIcon from '@mui/icons-material/Language';
import PaidIcon from '@mui/icons-material/Paid';


const CountryCard = ({country}) => {
    const dispatch = useDispatch();
    return (
        <div>  <Col className="mt-5" key={country.name.official}>
    <Card className="mh-100" style={{height:"36rem"}}>
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
                .join(", ") || "No language"}
            </i>
          </ListGroup.Item>
        </ListGroup>
       
        <Button
          variant="warning"
          onClick={() =>
            dispatch(removeFavourite(country.name.common))
          }
        >
          Remove Favourite
        </Button>
      </Card.Body>
    </Card>
  </Col></div>
  )
}

export default CountryCard;