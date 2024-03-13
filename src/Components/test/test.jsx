import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import img from '../../assets/images/KEMET.png';
import img from '../../assets/images/logo.png' 

function NavBar() {
    const [navbar, setNavbar] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 30) {
                setNavbar(false);
            } else {
                setNavbar(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isHomePage = location.pathname === '/';

    return (
        <Navbar
            expand="lg"
            className={
                navbar && isHomePage ? 'fixed-top navbar-dark nav-transparent' : 'fixed-top navbar-dark nav'
            }
        >
            <Container>
                <div className="imge ms-5">
                    <img src={img} className="img-fluid" alt="" width="50px" height="50px" /> 
                    <span style={{color:"white"}}>KEMET</span>
                </div>

                <Navbar.Brand className="links ps-5" as={Link} to={'/'}>
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="links" as={Link} to={'/about'}>
                            About
                        </Nav.Link>
                        <Nav.Link className="links" as={Link} to={'/suggestions'}>
                            Suggestions
                        </Nav.Link>
                        <NavDropdown
                            className="NavDropdown text-light dropdown"
                            title={<span className="text-light my-auto">Categories</span>}
                            id="basic-nav-dropdown text-light"
                        >
                            <NavDropdown.Item className="items" as={Link} to={'pharonic'}>
                                Pharonic
                            </NavDropdown.Item>
                            <NavDropdown.Item className="items" as={Link} to={'/religious'}>
                                Religious
                            </NavDropdown.Item>
                            <NavDropdown.Item className="items" as={Link} to={'/medical'}>
                                Medical
                            </NavDropdown.Item>
                            <NavDropdown.Item className="items" as={Link} to={'/recreational'}>
                                Recreational
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Nav.Link as={Link} to={'/register'}>
                            <Button className='Explore-button-video' variant="outline-light">Sign Up</Button>
                        </Nav.Link>
                        <i className="bi bi-person-fill"></i>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
