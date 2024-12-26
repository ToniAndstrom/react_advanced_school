import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const StoreNavBar = () => {
    return(
<>
<Navbar bg="primary" variant="dark">
    <Container>
<Navbar.Brand>Online Store</Navbar.Brand>
<Nav className="me-auto">
<Link to="/"style={{color:"white", padding:"1rem"}}>Home</Link>
<Link to="/cart" style={{color:"white", padding:"1rem"}}>Cart</Link>
</Nav>
    </Container>
</Navbar>

</>
    );
};

export default StoreNavBar