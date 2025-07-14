import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <header className="hero-banner">
                <h1>Welcome to the AI-Powered Car Parts Marketplace</h1>
                <p>Your one-stop shop for all automobile parts!</p>
                <Link to="/products" className="btn">Shop Now</Link>
            </header>
            <section className="brand-tiles">
                <h2>Featured Brands</h2>
                <div className="brands">
                    <div className="brand-tile">Brand 1</div>
                    <div className="brand-tile">Brand 2</div>
                    <div className="brand-tile">Brand 3</div>
                    <div className="brand-tile">Brand 4</div>
                </div>
            </section>
        </div>
    );
};

export default Home;