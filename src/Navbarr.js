import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from 'react-router-dom';

function Navbarr() {
    // const nav = useNavigate();

    const welcome = () => {
        alert("WELCOME TO OUR PAGE")
    }
    // const Clear = () => {
    //     nav(`/clear`)
    // }
    return (
        <>
            <Navbar bg="blue" data-bs-theme="blue">
                <Container style={{ backgroundColor: 'grey', height: '70px' }}>
                    <Navbar.Brand onClick={welcome}>TRANSLATOR</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link><b>HOME</b></Nav.Link>   */}
                        <Nav.Link ><b>LANGUAGE-PICKER</b></Nav.Link>
                        {/* <Nav.Link onClick={Clear}><b>CLEAR</b></Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbarr;