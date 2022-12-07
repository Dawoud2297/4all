import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const Home = ({ providers }) => {
    return (
        <div className='home'>
            <Header />
            <Content providers={providers} />
            <Footer />
        </div>
    )
}

export default Home
