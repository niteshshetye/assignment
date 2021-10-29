import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fcf5f5;
`
const Title = styled.h1`
    margin: 30px 0px; 
    font-size: 3rem;
    letter-spacing: 2px;
`
const Desc = styled.div`
    font-size: 1.3rem;
    margin-bottom: 10px;
`
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 50%;
    height: 10%;
`
const Input = styled.input`
    width: 70%;
    font-size: 1rem;
    padding: 8px 5px;
    height: 100%;
    outline: none;
`
const Button = styled.button`
    padding: 8px;
    height: 100%;
    outline: none;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;
    background-color: teal;
    color: white;
    border: 1px solid black; 
`
const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc>Get timely updates! from your favourite products.</Desc>
            <InputContainer>
                <Input placeholder='Enter Your Email ID'/>
                <Button>Submit</Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
