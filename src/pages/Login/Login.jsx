import React from 'react'
import styled from 'styled-components';
import {Grid, Container} from '@material-ui/core'
import { Formik, Form } from 'formik';
import {mobile} from '../../responsive'
import {Link} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/apiCalls'

// components
import TextFieldWrapper from '../../components/FormWrapper/TextFieldWrapper'
import ButtonWrapper from '../../components/FormWrapper/ButtonWrapper'

// utils
import {initialValues, validationSchema} from '../../components/FormWrapper/Login'

const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    flex: 1;
    align-self: center;
`
const Title = styled.h1`
    color: rgb(1 111 129);
    margin-bottom: 20px;
    text-align: center;
`
const Button = styled.a`
    display: flex;
    justify-content: ${props => props.name === 'password'? "right": "center"};
    padding: 5px;
    cursor: pointer;
    &: hover{
        color: rgb(1, 111, 129);
    }
`
const ImageContianer = styled.div`
    flex: 1;
    background: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5)
    ),
    url("https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    ${mobile({display: 'none'})}
`
const Login = () => {
    const {error} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleSubmit = values => {
        login(dispatch, values)
    }
    return (
        <LoginContainer>
            <Wrapper>
                <Title>Login</Title>
                <Grid container>
                    <Container maxWidth='md'>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {
                                formik => {
                                    return (
                                        <Form>
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <TextFieldWrapper name='username' label='Username' />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextFieldWrapper name='password' label='Password' type='password' />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button name='password'>Forgot Password?</Button>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <ButtonWrapper type='submit'>Login</ButtonWrapper>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    {error && <h4 style={{color: 'red'}}>Something Went Wrong</h4>}
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button name='account'><Link to='/register'>Create A New Account</Link></Button>
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                    </Container>
                </Grid>
            </Wrapper>
            <ImageContianer />
        </LoginContainer>
    )
}

export default Login
