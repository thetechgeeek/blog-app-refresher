import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: 'white', // Set the color to black or any color you prefer
    textDecoration: 'none', // Remove underlines
};

const BlogPage = (props) => {
    return (
        <>
            <nav class='navbar navbar-expand-lg bg-body-tertiary'>
                <div class='container-fluid p-1 mx-3'>
                    <ul class='navbar-nav'>
                        <li class='nav-item'>
                            <a class='btn btn-danger' href='#'>
                                <Link to='/' style={linkStyle}>
                                    Back
                                </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container fluid blog-container'>This is the Blog Page</div>
        </>
    );
};

export default BlogPage;
