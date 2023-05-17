import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='container mx-auto'>
            <h4 className='error-page-style'>404</h4>
            <h2 className='text-3xl font-bold text-red-600 text-center'>Something Went wrong. Page not found !!</h2>
            <br />
            <Link className='btn btn-outline ' to='/home'> Back To Home</Link>
        </div>
    );
};

export default Error404;
