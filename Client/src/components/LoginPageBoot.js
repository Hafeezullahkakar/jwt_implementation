import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import axios from 'axios'


function LoginPageBoot() {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    const [userToken, setUserToken] = React.useState('')
    const [user, setUser] = React.useState()

    const [wrongCred, setWrongCreds] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        let user = {
            email: email,
            password: password
        };

        axios.post(`http://localhost:4000/user/login`, user)
            .then(res => {
                console.log(res);
                setUserToken(res?.data.token)
                setUser(res.data.user)
            }).catch(e => {
                setWrongCreds("Wrong Credentials! Please try with correct credentials!")
            })
    }

    return (
        <MDBContainer style={{ height: "100vh" }} fluid className='p-4 background-radial-gradient overflow-hidden h-full'>
            {
                !userToken ? (
                    <>

                        <MDBRow>

                            <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                                <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                                    Please Login! <br />
                                    <span style={{ color: 'hsl(218, 81%, 75%)' }}>To Generate JWT Token</span>
                                </h1>

                                <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                                    This application is developed to understand and implement Json Web Token in Express.
                                </p>

                            </MDBCol>

                            <MDBCol md='6' className='position-relative'>

                                <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                                <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                                <MDBCard className='my-5 bg-glass'>
                                    <MDBCardBody className='p-5'>


                                        <MDBInput wrapperClass='mb-4' onChange={(e) => setEmail(e.target.value)} label='Email' id='form3' type='email' />
                                        <MDBInput wrapperClass='mb-4' onChange={(e) => setPassword(e.target.value)} label='Password' id='form4' type='password' />



                                        <MDBBtn onClick={handleSubmit} className='w-100 mb-4' size='md'>Login</MDBBtn>
                                        {wrongCred ? (<p className='px-3' style={{ color: 'red' }}>
                                            {wrongCred}
                                        </p>) : ''}
                                        <div className="text-center">

                                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                                <MDBIcon fab icon='facebook-f' size="sm" />
                                            </MDBBtn>

                                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                                <MDBIcon fab icon='twitter' size="sm" />
                                            </MDBBtn>

                                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                                <MDBIcon fab icon='google' size="sm" />
                                            </MDBBtn>

                                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                                <MDBIcon fab icon='github' size="sm" />
                                            </MDBBtn>

                                        </div>

                                    </MDBCardBody>
                                </MDBCard>

                            </MDBCol>

                        </MDBRow>




                    </>
                ) : (
                    <>

                        <MDBRow>

                            <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                                <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                                    Welcom! <br />
                                    <span style={{ color: 'hsl(218, 81%, 75%)' }}>Logged in successfully!</span>
                                </h1>

                                <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                                    Your token is : {userToken}
                                </p>
                                <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                                    Your email is : {user?.email}
                                </p>
                                <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                                    Your Password is : {user?.password}
                                </p>

                            </MDBCol>



                        </MDBRow>


                    </>
                )
            }



        </MDBContainer>
    );
}

export default LoginPageBoot;