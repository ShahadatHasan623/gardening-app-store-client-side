import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <section>
                <Header></Header>
            </section>
            <section className='max-w-6xl mx-auto min-h-[calc(100vh-117px)] py-8'>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Root;