import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = (props) => {
    return (
        <>
            <nav class='navbar navbar-expand-lg bg-body-tertiary'>
                <div class='container-fluid p-1 mx-3'>
                    <ul class='navbar-nav'>
                        <li class='nav-item'>
                            <Link
                                to='/'
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                class='btn btn-danger'
                            >
                                Back
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class='container-fluid justify-content-end p-1 mx-3'>
                    <ul class='navbar-nav '>
                        <li class='nav-item mx-2'>
                            <Link
                                to='/blog/:id/edit'
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                class='btn btn-primary'
                            >
                                Edit
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link
                                to='/blog/:id/delete'
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                class='btn btn-danger'
                            >
                                Delete
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container fluid blog-container'>This is the Blog Page</div>
        </>
    );
};

export default BlogPage;
