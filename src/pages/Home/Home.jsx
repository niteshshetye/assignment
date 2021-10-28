import React from 'react'

// components
import Annoucement from '../../components/Annoucement/Annoucement';
import Categories from '../../components/Categories/Categories';
import NavBar from '../../components/NavBar/NavBar'
import Slidder from '../../components/Slidder/Slidder';

const Home = () => {
    return (
        <div className='home-section'>
           <Annoucement /> 
           <NavBar />
           <Slidder />
           <Categories />
        </div>
    )
}

export default Home;
