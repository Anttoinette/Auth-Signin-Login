import Form from "react-bootstrap/Form"

import Button from "react-bootstrap/Button"

import { useState, useContext } from "react"

import { useNavigate } from "react-router-dom"

import { AuthContext } from "../App"


export default function SignupForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        //make a post request to the api with form data
        //https://auth-frontend-ah.web.app/signup
        fetch('127.0.0.1:5002/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            // create a new user in the database
            //then
            .then(res => res.json())
            .then(response => {
                setUser(response.user)
            })
            .catch(err => alert(err.message))
        // 1.do something with the new user
        //we use set user
        // 2. redirect to the content page
        navigate('/secret')
    }
    return (
        <>
        <h2>SignupForm</h2>
        <form onSubmit={handleSubmit}>
            <Form.Group>
                <p className="text-light">Please signup to continue to the Beer Festival. </p>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter Email"
                 value={email}
                 className="p-3 hover-effect"
                 onChange={e => setEmail(e.target.value)} />


            {/* <label htmlFor="email">Email &nbsp;
                <input type="email" name="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
            </label> */}


            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                name="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                className="p-3 hover-effect"
                onChange={e => setPassword(e.target.value)} />

            </Form.Group>

            <Button
            variant="outine-light"
            type="submit"
            sixe="lg"
            className="mt-3 hover-effect">Submit</Button>
            <br />


            {/* <label htmlFor="password">Password &nbsp;
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label><br /> */}


            <input type="submit" value="Signup" />
        </form>
        </>
    );
}