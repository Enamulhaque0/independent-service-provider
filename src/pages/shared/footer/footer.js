import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 container '>
            <p><small>Copyright by Mohammad Enamul Haque @ {year} </small></p>
        </footer>
    );
};

export default Footer;