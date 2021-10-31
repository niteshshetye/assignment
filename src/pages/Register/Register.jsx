import React from 'react';
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

// component
import TextFieldWrapper from '../../components/FormWrapper/TextFieldWrapper'
import ButtonWrapper from '../../components/FormWrapper/ButtonWrapper';

const FormContainer = styled.div``
const Title = styled.h1``

const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
}
function equalTo(ref, msg) {
    return Yup.mixed().test({
      name: 'equalTo',
      exclusive: false,
      // eslint-disable-next-line no-template-curly-in-string
      message: msg || '${path} must be the same as ${reference}',
      params: {
        reference: ref.path,
      },
      test: function(value) {
        return value === this.resolve(ref);
      },
    });
  }
Yup.addMethod(Yup.string, 'equalTo', equalTo);
const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string().email("Enter Valid Email").required("Required"),
    password: Yup.string().min(4, 'Password must be greater than 4 charecters').required("Required"),
    confirm_password: Yup.string().equalTo(Yup.ref('password'), 'Passwords must match').required('Password confirm is required')
})
const handleSubmit = values => {
    console.log(values)
}

const Register = () => {
    return (
        <FormContainer>
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
                                                <Grid item xs={12}>
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
        </FormContainer>
    )
}

export default Register