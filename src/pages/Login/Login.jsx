import React from 'react'
import styled from 'styled-components';
import {Grid, Container} from '@material-ui/core'
import { Formik, Form } from 'formik';
import {mobile} from '../../responsive'

// components
import TextFieldWrapper from '../../components/FormWrapper/TextFieldWrapper'
import ButtonWrapper from '../../components/FormWrapper/ButtonWrapper'

// utils
import {initialValues, validationSchema, handleSubmit} from '../../components/FormWrapper/Login'

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
const Link = styled.a`
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
                                                    <Link name='password'>Forgot Password?</Link>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <ButtonWrapper type='submit'>Login</ButtonWrapper>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Link name='account'>Create A New Account</Link>
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
