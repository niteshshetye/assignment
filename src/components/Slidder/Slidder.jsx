import React, {useState} from 'react'
import styled from 'styled-components';
import {slidder} from '../../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;    

`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(252, 220, 160);
    position: absolute;
    top: 50%;
    right: ${props => props.direction === 'right' && "1%"};
    left: ${props => props.direction === 'left' && "1%"};
    transform: translate(1%, -50%);
    cursor: pointer;
    opacity: 0.6;
    z-index: 100;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex* -100}vw);
`
const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #${props => props.bg};
    align-items: center;
`
const ImageContianer = styled.div`
    height: 100%;
    display:flex;
    padding-top: 30px;
    justify-content: center;
    flex: 1;
`
const Image = styled.img`
    height: 70%;
`
const InfoContianer = styled.div`
    padding: 50px;
    flex: 1;
`
const Title = styled.h1`
    font-size: 2.5rem;
`
const Desc = styled.p`
    margin: 20px 0px;
    letter-spacing: 3px;
    font-size: 1.2rem;
    font-weight: 500;
`
const Button = styled.button`
    padding: 8px;
    font-size: 1.3rem;
    letter-spacing: 3px;
    background-color: teal;
    color: white;
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
`
const Slidder = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1: 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1: 0);
        }
    }
    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <i className="fas fa-arrow-left"></i>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    slidder.map(slide => (
                        <Slide bg={slide.bg} key={slide.id}>
                            <ImageContianer>
                                <Image src={slide.img} />
                            </ImageContianer>
                            <InfoContianer>
                                <Title>{slide.title}</Title>
                                <Desc>{slide.desc}</Desc>
                                <Button>SHOWE ME</Button>
                            </InfoContianer>
                        </Slide>
                    ))
                }
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <i className="fas fa-arrow-right"></i>
            </Arrow>
        </Container>
    )
}

export default Slidder
