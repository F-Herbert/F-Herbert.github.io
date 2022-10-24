/* eslint-disable react/jsx-max-depth */import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about">About</Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Projects" eventKey="link-2">Projects</Nav.Link>
      </Nav.Item>
    </Nav>

  );
}

export default NavBar;
