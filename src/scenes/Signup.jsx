import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import SignupForm from "../components/SignupForm"
import Button from "react-bootstrap/Button"

export default function Signup() {
    return (
    
    <Container className="bg-danger p-5 custom-login-form">
        
        <Row>
            <Col><Header title='Sign Up' /></Col>
        </Row>

        <Row>
            <Col><SignupForm /></Col>
        </Row>

        <Row>
                <Col><Button><Link to="/Login" className="text-light pt-4 d-block">Already a memeber? Login In Boo</Link></Button></Col>
            </Row>

    </Container>
   

    )
}