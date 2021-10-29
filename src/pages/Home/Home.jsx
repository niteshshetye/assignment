import React from 'react'

// components
import Annoucement from '../../components/Annoucement/Annoucement';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar'
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Products from '../../components/Products/Products';
import Slidder from '../../components/Slidder/Slidder';

const Home = () => {
    return (
        <div className='home-section'>
           <Annoucement /> 
           <NavBar />
           <Slidder />
           <Categories />
           <Products />
           <NewsLetter />
           <Footer />
        </div>
    )
}

export default Home;
