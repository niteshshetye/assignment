import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import { userRequest } from '../../../utils/axiosConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
    flex-direction: column;
`
const TopHeading = styled.div`
    padding: 10px;
`
const Heading = styled.h1``
const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
`
const Label = styled.label`
    padding-right: 10px;
    padding-bottom: 3px;
    font-weight: 500;
`
const FormDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const InputDiv = styled.div`
    margin: 0px 5px;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 6rem;
    padding: 2px 10px;
`
const InputStyle = {
    width: '80%',
    padding: '5px 10px',
    marginBottom: '3px',
    outline: 'none',
    border: '1px solid black' 
}
const SubmitButton = styled.div``
const Button = styled.button`
    padding: ${props => props.value === 'submit'? '5px 20px':'5px 10px'};
    outline: none;
    background-color: ${props => props.value === 'submit'? 'green': 'gray'};
    letter-spacing: ${props => props.value === 'submit' && '3px'};
    color: white;
    margin-left: 2px;
    border: 1px solid black;
    
`
const ErrorText = styled.p`
    font-size: 0.8rem;
    color: red;
    margin-bottom: 0;
`
const Category = styled.div``


const initialValues = {
    title: '',
    desc: '',
    img: '',
    categories: [''],
    size: [''],
    color: [''],
    price: 0
}

const productSchema = Yup.object().shape({
    title: Yup.string().required("Required*"),
    desc: Yup.string().required("Required*"),
    img: Yup.string().required("Required*"),
    categories: Yup.array().required("Required*"),
    size: Yup.array().required("Required*"),
    color: Yup.array().required("Required*"),
    price: Yup.number().required("Required*")
});


const onSubmit = values => {
    console.log('Values: ', values);
    const addProductData = async (product) => {
        try{
            const {data} = await userRequest.post('/products', product);
            toast.success('Product Add Succfully', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
            });
        }catch(error){
            console.log(error);
        }
    }

    addProductData(values)
}

const AddProduct = () => {
    return (
        <Container>
            <ToastContainer />
            <TopHeading>
                <Heading>
                    Add Product
                </Heading>
            </TopHeading>
            <FormContainer>
                <Formik
                    initialValues={initialValues}
                    validationSchema={productSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <FormDiv>
                            <InputDiv>
                                <Label htmlFor="title">Title</Label>
                                <Field style={InputStyle} id='title' name='title' />
                                <ErrorMessage name='title'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                            </InputDiv>
                            <InputDiv>
                                <Label htmlFor="desc">Description</Label>
                                <Field style={InputStyle} id='desc' name='desc' />
                                <ErrorMessage name='desc'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                            </InputDiv>
                            <InputDiv>
                                <Label htmlFor="img">Img URL</Label>
                                <Field style={InputStyle} id='img' name='img' />
                                <ErrorMessage name='img'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                            </InputDiv>
                            <InputDiv>
                                <Label htmlFor="categories">Categories</Label>
                                <FieldArray id='categories' name='categories'>
                                    {
                                        (fieldArrayProps) => {
                                            const {push, remove, form} = fieldArrayProps;
                                            const {values} = form;
                                            const {categories} = values
                                            return <Category>
                                                {
                                                    categories.map((categorie, index) => (
                                                        <div key={index}>
                                                            <Field style={InputStyle} name={`categories[${index}]`} />
                                                            {
                                                                index !== 0 && <Button type='button' onClick={() =>  remove(index)}> - </Button>
                                                            }
                                                            <Button type='button' onClick={() => push('')}> + </Button>
                                                        </div>
                                                    ))
                                                }
                                            </Category>
                                        }
                                    }
                                </FieldArray>
                                <ErrorMessage name='categories'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                            </InputDiv>
                            <InputDiv>
                                <Label htmlFor="size">Size</Label>
                                <FieldArray id='size' name='size'>
                                    {
                                        (fieldArrayProps) => {
                                            const {push, remove, form} = fieldArrayProps;
                                            const {values} = form;
                                            const {size} = values
                                            return <Category>
                                                {
                                                    size.map((categorie, index) => (
                                                        <div key={index}>
                                                            <Field style={InputStyle} name={`size[${index}]`} />
                                                            {
                                                                index !== 0 && <Button type='button' onClick={() =>  remove(index)}> - </Button>
                                                            }
                                                            <Button type='button' onClick={() => push('')}> + </Button>
                                                        </div>
                                                    ))
                                                }
                                            </Category>
                                        }
                                    }
                                </FieldArray>
                                <ErrorMessage name='size'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                            </InputDiv>
                            <InputDiv>
                                <Label htmlFor="color">Color</Label>
                                <FieldArray id='color' name='color'>
                                    {
                                        (fieldArrayProps) => {
                                            const {push, remove, form} = fieldArrayProps;
                                            const {values} = form;
                                            const {color} = values
                                            return <Category>
                                                {
                                                    color.map((categorie, index) => (
                                                        <div key={index}>
                                                            <Field style={InputStyle} name={`color[${index}]`} />
                                                            {
                                                                index !== 0 && <Button type='button' onClick={() =>  remove(index)}> - </Button>
                                                            }
                                                            <Button type='button' onClick={() => push('')}> + </Button>
                                                        </div>
                                                    ))
                                                }
                                            </Category>
                                        }
                                    }
                                </FieldArray>
                                <ErrorMessage name='color'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                            </InputDiv>
                            <InputDiv>
                                <Label htmlFor="price">Price</Label>
                                <Field style={InputStyle} id='price' type='number' name='price' />
                                <ErrorMessage name='price'>{msg => <ErrorText>{msg}</ErrorText>}</ErrorMessage>
                            </InputDiv>
                            <SubmitButton>
                                <Button value='submit' type='submit'>Add</Button>
                            </SubmitButton>
                        </FormDiv>
                    </Form>
                </Formik>
            </FormContainer>
        </Container>
    )
}

export default AddProduct
