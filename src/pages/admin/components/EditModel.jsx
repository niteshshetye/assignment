import React from 'react'
import styled from 'styled-components'
import { Form, Formik } from 'formik';
import { Grid } from '@material-ui/core';
import * as Yup from 'yup';


// component
import TextFieldWrapper from '../../../components/FormWrapper/TextFieldWrapper'
import ButtonWrapper from '../../../components/FormWrapper/ButtonWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from '../../../redux/apiCalls';

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(200, 200, 200);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`
const Modal = styled.div`
    width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`
const Title = styled.div`
    margin: 15px 0px;
    text-align: center; 
`
const Heading = styled.h3``
const Body = styled.div``
const Footer = styled.div``
const Button = styled.button`
    letter-spacing: 2px;
    background-color: rgb(1,111,129);
    border: none;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    outline: none;
    padding: 6px 16px;
    font-size: 0.875rem;
    color: white;
    width: 100%;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
`

const initialValues = {
    username: '',
    email: ''
}
export const validationSchema = Yup.object({
    username: Yup.string().min(3, 'Username Atleast of 3 Charecters').required('Required'),
    email: Yup.string().email("Enter Valid Email").required("Required"),
})

const EditModel = ({setShowModel, id}) => {
    const {allUsers} = useSelector(state => state.admin.users)
    const dispatch = useDispatch()
    const editedUser = allUsers.filter(user => user._id === id)[0];
    let usersValues = {username: editedUser.username, email: editedUser.email}
    const handleCancel = () => {
        setShowModel(false);
        usersValues = null;
    }
    const handleSubmit = (values) => {
        editUser(dispatch, id, values)
        setShowModel(false)
    }
    return (
        <Container>
            <Modal>
                <Title>
                    <Heading>Edit User</Heading>
                </Title>
                <Body>
                    <Formik
                        initialValues={usersValues || initialValues}
                        validationSchema ={validationSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                            {
                                formik => {
                                    return (
                                        <Form>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <TextFieldWrapper name='username' label='Username' />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextFieldWrapper name='email' label='Email' />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Button type='button' onClick={handleCancel}>CANCEL</Button>                                            
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <ButtonWrapper>Submit</ButtonWrapper>                                            
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                </Body>
                <Footer></Footer>
            </Modal>
        </Container>
    )
}

export default EditModel

