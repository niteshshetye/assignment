import React from 'react';
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { Form, Formik } from 'formik';

// component
import TextFieldWrapper from '../../components/FormWrapper/TextFieldWrapper'
import ButtonWrapper from '../../components/FormWrapper/ButtonWrapper';

// utils
import {initialValues, validationSchema, handleSubmit} from '../../components/FormWrapper/Register'

const FormContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    // flex-direction: column;
`
const Wrapper = styled.div`
    padding: 20px;
    flex: 1;
    align-self: center;
`
const Title = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    color: rgb(79 45 52);
    margin-bottom: 30px;   
    text-align: center;
`
const ImageContianer = styled.div`
    flex: 2;
    background: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
`
const Register = () => {
    return (
        <FormContainer>
            <Wrapper>
                <Title>Create An Account</Title>
                <Grid container> 
                    <Grid item xs={12}>
                        <Container maxWidth='md'>
                            <Formik
                                initialValues={initialValues}
                                validationSchema ={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {
                                    formik => {
                                        return (
                                            <Form>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} >
                                                        <TextFieldWrapper name='first_name' label='First Name' />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextFieldWrapper name='last_name' label='Last Name' />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextFieldWrapper name='email' label='Email' />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextFieldWrapper name='password' type='password' label='Password' />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextFieldWrapper name='confirm_password' type='password' label='Confirm Password' />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <ButtonWrapper>Submit</ButtonWrapper>                                            
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                        </Container>
                    </Grid>
                </Grid>
            </Wrapper>
            <ImageContianer />
        </FormContainer>
    )
}

export default Register