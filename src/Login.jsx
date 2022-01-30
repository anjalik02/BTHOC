import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';


const Login = (props) => {

    const {
        email, 
        setEmail, 
        password, 
        setPassword,
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError 
    } = props;
    return(
        <section classname="login">
            <Col classname="loginContainer">

                <Row><label>Username</label></Row>
                <Row><input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} style={{width: "100%"}} /></Row>
                <Row><p className="errorMsg">{emailError}</p></Row>

                <Row><label>Password</label></Row>
                <Row><input style={{width: "100%"}} type="password" required value={password} onChange={e => setPassword(e.target.value)}/></Row>
                <Row><p className="errorMsg">{passwordError}</p></Row>
                
                {/* <div className="" style={{marginTop: '15px'}}> */}
                {hasAccount ? (
                    <>
                        <Row ><Button variant="success" onClick={handleLogin} style={{width: "100%"}}>Sign In</Button></Row>
                        <Row style={{marginTop: '10px'}}>
                            Don't have an account?<br/>
                            <span onClick={() => setHasAccount(!hasAccount)}>&nbsp;Sign up</span>
                        </Row>
                    </>
                ) : (
                    <>
                        <Row><Button variant="success"  onClick={handleSignup} style={{width: "100%"}}>Sign Up</Button></Row>
                        <Row style={{marginTop: '10px'}}> 
                            Have an account? <br/>
                            <span onClick={() => setHasAccount(!hasAccount)}>&nbsp;Sign in</span>
                        </Row>
                    </>
                )}

                    
                {/* </div> */}
            </Col>
        </section>
    )
}

export default Login;