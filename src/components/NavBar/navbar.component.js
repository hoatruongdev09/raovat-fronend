import { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import "./style.navbar.css"
class NavbarMenu extends Component {
    render() {
        return (
            <div className="navbar-holder">
                <div className="container">
                    <Navbar expand="lg">
                        <Navbar.Brand href="/">Rao Vặt</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" style={{ flexGrow: 1, flexShrink: 0, flexBasis: 'auto', justifyContent: 'flex-end' }}>
                                <Nav.Link style={{ float: 'right' }} href="/">Trang Chủ</Nav.Link>
                                <Nav.Link style={{ float: 'right' }} href="#link">Tôi Bán</Nav.Link>
                                <Nav.Link style={{ float: 'right' }} href="#link">Chat</Nav.Link>
                                <Nav.Link style={{ float: 'right' }} href="#link">Thông báo</Nav.Link>
                                <NavDropdown style={{ float: 'right' }} title="Thêm" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar >
                </div>
            </div>
        )
    }
}
export default NavbarMenu