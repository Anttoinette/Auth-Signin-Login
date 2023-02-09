import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Header from "../components/Header"
import LoginForm from "../components/LoginForm"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <Container className="p-5 custom-login-form-2">
            <Row>
                <Col><Header title="Login" /></Col>
            </Row>

            <Row>
                <Col><LoginForm /></Col>
            </Row>

            <Row>
                <Col><Link to="/signup" className="text-light pt-4 d-block">Sign Up To Become a Memeber?</Link></Col>
            </Row>
        </Container>
    )
}