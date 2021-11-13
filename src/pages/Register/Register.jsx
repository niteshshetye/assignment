import React from 'react';
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { Form, Formik } from 'formik';
import {mobile} from '../../responsive'

// redux 
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';

// component
import TextFieldWrapper from '../../components/FormWrapper/TextFieldWrapper'
import ButtonWrapper from '../../components/FormWrapper/ButtonWrapper';

// utils
import {initialValues, validationSchema} from '../../components/FormWrapper/Register'
import { publicRequest } from '../../utils/axiosConfig';

const FormContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    flex: 2;
    align-self: center;
`
const Title = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    color: rgb(1 111 129);
    margin-bottom: 30px;   
    text-align: center;
    ${mobile({fontSize: '2rem', marginBottom: '20px'})};
`
const ImageContianer = styled.div`
    flex: 1;
    background: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5)
    ),
    url("https://images.pexels.com/photos/7310199/pexels-photo-7310199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    ${mobile({display: 'none'})};
`
const Register = () => {
    const dispatch = useDispatch()
    const handleSubmit = values => {
        const {first_name, last_name, confirm_password, ...dataToSend} = values
        const registerUser = async () => {
            try{
                await publicRequest.post('/auth/register', dataToSend)
                // const {data} = await publicRequest.post('/auth/register', dataToSend)
                login(dispatch, dataToSend)
            }catch(error){
                console.log(error);
            }
        }
        registerUser();
    }
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
                                                    <Grid item xs={window.innerWidth <= "380"? 12: 6} >
                                                        <TextFieldWrapper name='first_name' label='First Name' />
                                                    </Grid>
                                                    <Grid item xs={window.innerWidth <= "380"? 12: 6}>
                                                        <TextFieldWrapper name='last_name' label='Last Name' />
                                                    </Grid>
                                                    <Grid item xs={window.innerWidth <= "380"? 12: 6}>
                                                        <TextFieldWrapper name='username' label='Username' />
                                                    </Grid>
                                                    <Grid item xs={window.innerWidth <= "380"? 12: 6}>
                                                        <TextFieldWrapper name='email' label='Email' />
                                                    </Grid>
                                                    <Grid item xs={window.innerWidth <= "380"? 12: 6}>
                                                        <TextFieldWrapper name='password' type='password' label='Password' />
                                                    </Grid>
                                                    <Grid item xs={window.innerWidth <= "380"? 12: 6}>
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