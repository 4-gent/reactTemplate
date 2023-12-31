import '../public/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav } from 'react-bootstrap';

function Navigation(){
    return(
        <div className='navigate'>
            <Navbar collapseOnSelect expand='lg' variant='dark' className='bg'>
                <Container fluid>
                    <Navbar.Brand href='/' className='logo'>Sniff</Navbar.Brand>
                    <Navbar.Toggle className='toggler' aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/' className='navi'>Home</Nav.Link>
                            <span className='dots'>&bull;</span>
                            <Nav.Link href='/registration' className='navi'>Registration</Nav.Link>
                            <span className='dots'>&bull;</span>
                            <Nav.Link href='/about' className='navi'>About Us</Nav.Link>
                            <span className='dots'>&bull;</span>
                            <Nav.Link href='/contact' className='navi'>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;
